// recipes.js — расширённая база рецептов
// Каждое поле steps — массив строк (пошаговая инструкция).
// В массиве сначала ручные рецепты, затем автоматический генератор доводит базу до +100 уникальных.

const RECIPES = [
  // (1) — уже улучшённые, из предыдущего шага (10)
 <!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Что приготовить? — Большая база</title>
  <link rel="stylesheet" href="style.css" />
  <style>
    /* Резервная картинка — можно заменить на свою */
    .fallback-img {
      background: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: #666;
    }
  </style>
</head>

<body>
  <header>
    <div class="container">
      <h1>🍳 Что приготовить?</h1>
      <p class="subtitle">Вводи продукты — приложение подберёт рецепт из базы (150 блюд).</p>
    </div>
  </header>

  <main class="container">
    <section class="controls">
      <input id="inputProducts" placeholder="Введите продукты через запятую (например: яйцо, молоко, мука)" />
      <div class="controls-row">
        <select id="categoryFilter">
          <option value="all">Все категории</option>
          <option value="Завтрак">Завтрак</option>
          <option value="Обед">Обед</option>
          <option value="Ужин">Ужин</option>
          <option value="Десерт">Десерт</option>
          <option value="Перекус">Перекус</option>
        </select>

        <select id="matchMode">
          <option value="any">Совпадает хоть по одному</option>
          <option value="all">Все продукты должны присутствовать</option>
        </select>

        <button id="findBtn" class="btn">🔍 Найти</button>
        <button id="luckyBtn" class="btn alt">🎲 Мне повезёт!</button>
      </div>
    </section>

    <section id="results" class="results"></section>
  </main>

  <footer>
    <div class="container">
      <small>База рецептов: 150 блюд · Работает офлайн · Сделано для тебя</small>
    </div>
  </footer>

  <template id="recipe-template">
    <article class="card">
      <img class="card-img" src="" alt="Изображение блюда" />
      <div class="card-body">
        <h3 class="card-title"></h3>
        <p class="meta"></p>
        <p class="ingredients"></p>
        <p class="steps"></p>
      </div>
    </article>
  </template>

  <script src="recipes.js"></script>

  <script>
    /** ---------------------------------------------
     *  Исправление всех Unsplash-ссылок → прямой image URL
     * ----------------------------------------------*/
    function fixImageUrl(url) {
      if (!url) return null;

      // Если уже jpg/png/webp — возвращаем
      if (url.match(/\.(jpg|jpeg|png|webp|avif)(\?|$)/i)) {
        return url;
      }

      // Если это страница Unsplash — конвертируем
      if (url.includes("unsplash.com/photos/")) {
        const id = url.split("/").pop().replace(/\?.*/, "");
        return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;
      }

      return url;
    }

    const FALLBACK = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=60";

    /** ---------------------------------------------
     *  UI: элементы
     * ----------------------------------------------*/
    const input = document.getElementById('inputProducts');
    const findBtn = document.getElementById('findBtn');
    const luckyBtn = document.getElementById('luckyBtn');
    const results = document.getElementById('results');
    const categoryFilter = document.getElementById('categoryFilter');
    const matchMode = document.getElementById('matchMode');
    const template = document.getElementById('recipe-template');

    function normalize(s){ return s.trim().toLowerCase(); }


    /** ---------------------------------------------
     *  Показываем карточку рецепта
     * ----------------------------------------------*/
    function showRecipe(r){
      const node = template.content.cloneNode(true);
      const img = node.querySelector('.card-img');

      const safeUrl = fixImageUrl(r.image) || FALLBACK;
      img.src = safeUrl;

      img.onerror = () => {
        img.onerror = null;
        img.src = FALLBACK;
      };

      node.querySelector('.card-title').textContent = r.name;
      node.querySelector('.meta').innerHTML =
        `<strong>Категория:</strong> ${r.category} · <strong>Время:</strong> ${r.time} ${r.calories ? '· ' + r.calories + ' ккал' : ''}`;

      node.querySelector('.ingredients').innerHTML =
        `<strong>Ингредиенты:</strong> ${r.ingredients.join(', ')}`;

      node.querySelector('.steps').innerHTML =
        `<strong>Рецепт:</strong> ${r.steps}`;

      results.appendChild(node);
    }


    /** ---------------------------------------------
     *  Поиск рецептов
     * ----------------------------------------------*/
    function searchRecipes(){
      results.innerHTML = '';
      const raw = input.value;
      const cat = categoryFilter.value;
      const mode = matchMode.value;
      const userProducts = raw.split(',').map(normalize).filter(x => x);

      if(userProducts.length === 0){
        results.innerHTML = '<p class="info">Введите продукты (например: яйцо, молоко) или нажмите "Мне повезёт!"</p>';
        return;
      }

      const matches = RECIPES.map(r => {
        const ingLower = r.ingredients.map(i => i.toLowerCase());
        const score = userProducts.reduce((acc, p) => {
          const found = ingLower.some(i => i.includes(p));
          return acc + (found ? 1 : 0);
        }, 0);
        return { r, score };
      }).filter(x => x.score > 0);

      let filtered = matches.filter(x => cat === 'all' ? true : x.r.category === cat);

      if(mode === 'all'){
        filtered = filtered.filter(x => x.score >= userProducts.length);
      }

      filtered.sort((a,b) => b.score - a.score);

      if(filtered.length === 0){
        results.innerHTML = '<p class="warning">Ничего не найдено. Попробуй ввести меньше продуктов или другие слова.</p>';
        return;
      }

      filtered.slice(0, 30).forEach(x => showRecipe(x.r));
    }


    findBtn.addEventListener('click', searchRecipes);

    luckyBtn.addEventListener('click', () => {
      results.innerHTML = '';
      const cat = categoryFilter.value;
      let pool = RECIPES;
      if(cat !== 'all') pool = RECIPES.filter(r => r.category === cat);

      const r = pool[Math.floor(Math.random()*pool.length)];
      showRecipe(r);

      window.scrollTo({top:0, behavior:'smooth'});
    });

    results.innerHTML = '<p class="info">Добро пожаловать! Введите продукты и нажмите «Найти», или нажмите «Мне повезёт!»</p>';
  </script>

</body>
</html>
