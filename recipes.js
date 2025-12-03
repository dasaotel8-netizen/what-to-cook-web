// recipes.js
// Массив с вручную подготовленными рецептами (первые ~50)
const RECIPES = [
  {
    name: "Овсянка на молоке с фруктами",
    ingredients: ["овсянка", "молоко", "банан", "мед"],
    category: "Завтрак",
    time: "10 минут",
    steps: "Смешайте овсянку с молоком, варите 5 минут. Добавьте порезанный банан и мед.",
    image: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=1200&q=80",
    calories: 320
  },
  {
    name: "Блины классические",
    ingredients: ["яйца", "молоко", "мука", "сахар", "масло"],
    category: "Завтрак",
    time: "25 минут",
    steps: "Смешайте ингредиенты до однородности. Жарьте на разогретой сковороде по 1-2 минуты с каждой стороны.",
    image: "https://images.unsplash.com/photo-1604908177522-22f0c6f3b5a7?w=1200&q=80",
    calories: 220
  },
  {
    name: "Омлет с сыром и зеленью",
    ingredients: ["яйца", "сыр", "молоко", "петрушка", "масло"],
    category: "Завтрак",
    time: "8 минут",
    steps: "Взбейте яйца с молоком, добавьте тёртый сыр и зелень. Обжарьте на масле до готовности.",
    image: "https://images.unsplash.com/photo-1587486913048-6f8ad6af8d4a?w=1200&q=80",
    calories: 300
  },
  {
    name: "Салат огурцы-помидоры",
    ingredients: ["огурцы", "помидоры", "масло", "соль"],
    category: "Обед",
    time: "5 минут",
    steps: "Нарежьте овощи, добавьте масло и соль. Перемешайте.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80",
    calories: 80
  },
  {
    name: "Макароны с сыром",
    ingredients: ["макароны", "сыр", "соль", "масло"],
    category: "Обед",
    time: "15 минут",
    steps: "Отварите макароны, слейте воду, добавьте масло и тёртый сыр. Перемешайте.",
    image: "https://images.unsplash.com/photo-1604908177523-b8e0e6a3a1c1?w=1200&q=80",
    calories: 450
  },
  {
    name: "Картофельное пюре",
    ingredients: ["картофель", "молоко", "масло", "соль"],
    category: "Обед",
    time: "25 минут",
    steps: "Отварите картофель до мягкости. Разомните с молоком и маслом. Посолите по вкусу.",
    image: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?w=1200&q=80",
    calories: 200
  },
  {
    name: "Курица запечённая с травами",
    ingredients: ["курица", "соль", "перец", "розмарин", "масло"],
    category: "Ужин",
    time: "50 минут",
    steps: "Натрите курицу солью и специями. Запекайте при 200°C 40-50 минут.",
    image: "https://images.unsplash.com/photo-1604908813694-8edb8f5d1b1d?w=1200&q=80",
    calories: 600
  },
  {
    name: "Гречка с грибами",
    ingredients: ["гречка", "грибы", "лук", "масло", "соль"],
    category: "Обед",
    time: "30 минут",
    steps: "Отварите гречку. Обжарьте грибы с луком и смешайте с гречкой.",
    image: "https://images.unsplash.com/photo-1598511727141-2b0f9e6f3aab?w=1200&q=80",
    calories: 350
  },
  {
    name: "Сырники",
    ingredients: ["творог", "яйцо", "мука", "сахар", "масло"],
    category: "Завтрак",
    time: "25 минут",
    steps: "Смешайте творог с яйцом и мукой, сформуйте сырники и жарьте на масле до золотистой корочки.",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1200&q=80",
    calories: 280
  },
  {
    name: "Суп овощной",
    ingredients: ["морковь", "картофель", "лук", "вода", "соль"],
    category: "Обед",
    time: "35 минут",
    steps: "Нарежьте овощи, отварите до мягкости, приправьте солью.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    calories: 120
  },
  {
    name: "Тост с авокадо",
    ingredients: ["хлеб", "авокадо", "соль", "перец"],
    category: "Перекус",
    time: "5 минут",
    steps: "Разомните авокадо, намажьте на тост, посолите и поперчите.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80",
    calories: 230
  },
  {
    name: "Паста с томатным соусом",
    ingredients: ["макароны", "томатная паста", "чеснок", "масло"],
    category: "Обед",
    time: "20 минут",
    steps: "Отварите пасту, приготовьте соус из томатной пасты и чеснока, смешайте.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
    calories: 420
  },
  {
    name: "Салат Цезарь (упрощённый)",
    ingredients: ["салат", "курица", "пармезан", "хлеб", "масло"],
    category: "Обед",
    time: "20 минут",
    steps: "Нарежьте ингредиенты, смешайте с соусом и посыпьте сыром.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&q=80",
    calories: 470
  },
  {
    name: "Котлеты жареные",
    ingredients: ["фарш", "лук", "хлеб", "яйцо", "масло"],
    category: "Ужин",
    time: "30 минут",
    steps: "Смешайте фарш с луком и хлебом, сформуйте котлеты, обжарьте до готовности.",
    image: "https://images.unsplash.com/photo-1604908177521-9d4ffb2c7b1b?w=1200&q=80",
    calories: 550
  },
  {
    name: "Запечённый лосось",
    ingredients: ["лосось", "лимон", "соль", "перец", "масло"],
    category: "Ужин",
    time: "25 минут",
    steps: "Посоли и поперчи филе, добавь ломтики лимона, запеки 20 минут при 180°C.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
    calories: 400
  },
  {
    name: "Овощное рагу",
    ingredients: ["баклажан", "кабачок", "помидоры", "лук", "масло"],
    category: "Обед",
    time: "35 минут",
    steps: "Нарежьте овощи и тушите до мягкости с маслом и специями.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    calories: 180
  },
  {
    name: "Смузи бананово-клубничный",
    ingredients: ["банан", "клубника", "йогурт", "мёд"],
    category: "Перекус",
    time: "5 минут",
    steps: "Смешайте все ингредиенты в блендере до однородной массы.",
    image: "https://images.unsplash.com/photo-1526318472351-c75fcf070ee5?w=1200&q=80",
    calories: 200
  },
  {
    name: "Рис с овощами",
    ingredients: ["рис", "морковь", "перец", "масло", "соль"],
    category: "Обед",
    time: "25 минут",
    steps: "Отварите рис и обжарьте овощи, смешайте.",
    image: "https://images.unsplash.com/photo-1604908177524-4c9e0f3b1c3a?w=1200&q=80",
    calories: 300
  },
  {
    name: "Творожная запеканка",
    ingredients: ["творог", "яйцо", "сахар", "мука", "ваниль"],
    category: "Десерт",
    time: "40 минут",
    steps: "Смешайте ингредиенты, выкладывайте в форму и выпекайте 30-35 минут.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=1200&q=80",
    calories: 360
  },
  {
    name: "Греческий салат",
    ingredients: ["помидоры", "огурцы", "оливки", "сыр фета", "масло"],
    category: "Обед",
    time: "10 минут",
    steps: "Нарежьте продукты, добавьте масло и посыпьте сыром фета.",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=1200&q=80",
    calories: 220
  },
  {
    name: "Пирог с яблоками (простой)",
    ingredients: ["яблоки", "мука", "сахар", "масло", "яйцо"],
    category: "Десерт",
    time: "50 минут",
    steps: "Сделайте тесто, выложите яблоки и запеките до готовности.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
    calories: 430
  },
  {
    name: "Сэндвич с курицей",
    ingredients: ["хлеб", "курица", "майонез", "салат", "помидор"],
    category: "Перекус",
    time: "10 минут",
    steps: "Вложите кусочки курицы и овощи в хлеб, заправьте соусом.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
    calories: 360
  },
  {
    name: "Каша манная с маслом",
    ingredients: ["манка", "молоко", "сахар", "масло"],
    category: "Завтрак",
    time: "10 минут",
    steps: "Варите манку в молоке, добавьте сахар и масло по вкусу.",
    image: "https://images.unsplash.com/photo-1550304943-4bda7c7d9d0b?w=1200&q=80",
    calories: 260
  },
  {
    name: "Запечённые овощи",
    ingredients: ["морковь", "картофель", "перец", "масло", "соль"],
    category: "Обед",
    time: "40 минут",
    steps: "Нарежьте овощи, смажьте маслом и запекайте до мягкости.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    calories: 200
  },
  {
    name: "Бутерброд с авокадо и яйцом",
    ingredients: ["хлеб", "авокадо", "яйцо", "соль"],
    category: "Перекус",
    time: "8 минут",
    steps: "Поджарьте хлеб, намажьте авокадо, сверху положите варёное или жареное яйцо.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80",
    calories: 300
  },
  {
    name: "Котлеты из овощей",
    ingredients: ["кабачок", "картофель", "мука", "яйцо", "соль"],
    category: "Ужин",
    time: "35 минут",
    steps: "Натрите овощи, смешайте с яйцом и мукой, сформуйте и обжарьте.",
    image: "https://images.unsplash.com/photo-1604908177522-22f0c6f3b5a7?w=1200&q=80",
    calories: 270
  },
  {
    name: "Плов простой",
    ingredients: ["рис", "морковь", "лук", "масло", "соль"],
    category: "Обед",
    time: "50 минут",
    steps: "Обжарьте морковь и лук, добавьте рис и тушите до готовности.",
    image: "https://images.unsplash.com/photo-1604908177523-b8e0e6a3a1c1?w=1200&q=80",
    calories: 520
  },
  {
    name: "Шоколадный кекс (быстрый)",
    ingredients: ["мука", "сахар", "какао", "яйцо", "масло"],
    category: "Десерт",
    time: "30 минут",
    steps: "Смешайте ингредиенты и выпекайте 20-25 минут.",
    image: "https://images.unsplash.com/photo-1542861326-73f5b46b2b6b?w=1200&q=80",
    calories: 410
  },
  {
    name: "Суп из чечевицы",
    ingredients: ["чечевица", "морковь", "лук", "вода", "соль"],
    category: "Обед",
    time: "35 минут",
    steps: "Отварите чечевицу с овощами до мягкости. Посолите.",
    image: "https://images.unsplash.com/photo-1572449043412-2e3a3b1f2b8e?w=1200&q=80",
    calories: 180
  },
  {
    name: "Фруктовый салат",
    ingredients: ["яблоко", "банан", "апельсин", "мёд", "йогурт"],
    category: "Перекус",
    time: "10 минут",
    steps: "Нарежьте фрукты, добавьте йогурт и немного мёда.",
    image: "https://images.unsplash.com/photo-1543352634-4a4c9f8f1d2e?w=1200&q=80",
    calories: 190
  },
  {
    name: "Бургер домашний",
    ingredients: ["булочка", "фарш", "сыр", "салат", "помидор"],
    category: "Ужин",
    time: "30 минут",
    steps: "Сформируйте котлеты, обжарьте, соберите бургер с начинкой.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=80",
    calories: 680
  },
  {
    name: "Рыбные котлеты",
    ingredients: ["рыба", "картофель", "лук", "яйцо", "мука"],
    category: "Ужин",
    time: "30 минут",
    steps: "Смелите рыбу с картофелем, сформируйте котлеты, обжарьте.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
    calories: 420
  },
  {
    name: "Куриный бульон",
    ingredients: ["курица", "морковь", "лук", "вода", "соль"],
    category: "Обед",
    time: "90 минут",
    steps: "Варите курицу с овощами до готовности, процедите бульон.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    calories: 150
  },
  {
    name: "Панкейки",
    ingredients: ["мука", "молоко", "яйцо", "сахар", "масло"],
    category: "Завтрак",
    time: "20 минут",
    steps: "Замесите тесто и жарьте на сковороде до золотистого цвета.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=80",
    calories: 320
  },
  {
    name: "Запечённые яблоки",
    ingredients: ["яблоки", "сахар", "масло", "корица"],
    category: "Десерт",
    time: "35 минут",
    steps: "Удалите сердцевину, посыпьте сахаром и корицей, запеките до мягкости.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
    calories: 240
  },
  {
    name: "Овощной омлет",
    ingredients: ["яйца", "перец", "помидор", "лук", "масло"],
    category: "Завтрак",
    time: "10 минут",
    steps: "Обжарьте овощи, добавьте взбитые яйца и готовьте до готовности.",
    image: "https://images.unsplash.com/photo-1587486913048-6f8ad6af8d4a?w=1200&q=80",
    calories: 250
  },
  {
    name: "Тост с арахисовой пастой",
    ingredients: ["хлеб", "арахисовая паста", "банан"],
    category: "Перекус",
    time: "5 минут",
    steps: "На тост намажьте пасту и положите ломтики банана.",
    image: "https://images.unsplash.com/photo-1526318472351-c75fcf070ee5?w=1200&q=80",
    calories: 340
  },
  {
    name: "Сырный суп",
    ingredients: ["сыр", "картофель", "лук", "молоко", "масло"],
    category: "Обед",
    time: "40 минут",
    steps: "Отварите картофель, сделайте основу супа и добавьте тёртый сыр до растворения.",
    image: "https://images.unsplash.com/photo-1598511727141-2b0f9e6f3aab?w=1200&q=80",
    calories: 390
  },
  {
    name: "Лёгкий салат с тунцом",
    ingredients: ["тунец", "салат", "помидор", "масло"],
    category: "Обед",
    time: "10 минут",
    steps: "Смешайте тунец с нарезанными овощами и заправьте маслом.",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=1200&q=80",
    calories: 210
  },
  {
    name: "Шашлыки из курицы",
    ingredients: ["курица", "соль", "перец", "масло"],
    category: "Ужин",
    time: "40 минут",
    steps: "Маринуйте кусочки курицы и жарьте на гриле или сковороде.",
    image: "https://images.unsplash.com/photo-1604908813694-8edb8f5d1b1d?w=1200&q=80",
    calories: 450
  },
  {
    name: "Каша пшённая с маслом",
    ingredients: ["пшено", "молоко", "соль", "масло"],
    category: "Завтрак",
    time: "20 минут",
    steps: "Варите пшено в молоке до готовности, добавьте масло.",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1200&q=80",
    calories: 260
  },
  {
    name: "Борщ простой",
    ingredients: ["свекла", "капуста", "картофель", "морковь", "лук"],
    category: "Обед",
    time: "90 минут",
    steps: "Готовьте бульон, добавьте овощи и тушите до готовности.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
    calories: 220
  },
  {
    name: "Карамельные яблоки",
    ingredients: ["яблоки", "сахар", "масло"],
    category: "Десерт",
    time: "30 минут",
    steps: "Приготовьте карамель и обмакните в неё яблоки. Охладите.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
    calories: 300
  },
  {
    name: "Тост с индейкой и сыром",
    ingredients: ["хлеб", "индейка", "сыр", "салат"],
    category: "Перекус",
    time: "10 минут",
    steps: "Соберите тост с ломтиками индейки, сыром и салатом.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
    calories: 310
  },
  {
    name: "Крем-суп из тыквы",
    ingredients: ["тыква", "лук", "картофель", "сливки"],
    category: "Обед",
    time: "45 минут",
    steps: "Отварите тыкву, сделайте пюре и добавьте сливки.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    calories: 240
  },
  {
    name: "Салат с киноа",
    ingredients: ["киноа", "огурец", "помидор", "масло", "лимон"],
    category: "Обед",
    time: "20 минут",
    steps: "Отварите киноа и смешайте с овощами и заправкой.",
    image: "https://images.unsplash.com/photo-1543352634-4a4c9f8f1d2e?w=1200&q=80",
    calories: 330
  },
  {
    name: "Мясной рулет",
    ingredients: ["фарш", "яйцо", "панировочные сухари", "лук"],
    category: "Ужин",
    time: "60 минут",
    steps: "Смешайте фарш с остальными ингредиентами, сформируйте рулет и запеките.",
    image: "https://images.unsplash.com/photo-1604908177521-9d4ffb2c7b1b?w=1200&q=80",
    calories: 620
  }
];

// ---- ниже: автоматический генератор, чтобы довести базу до 150 рецептов ----
(function expandTo150(){
  if(RECIPES.length >= 150) return;
  const baseNames = [
    "Тёплый салат с", "Паста с", "Рагу из", "Запеканка из", "Пирог с",
    "Сэндвич с", "Салат с", "Котлеты из", "Рис с", "Омлет с"
  ];
  const ingredientPools = [
    ["курица","лук","перец","масло"],
    ["говядина","лук","морковь","картофель"],
    ["баклажан","помидор","перец","чеснок"],
    ["картофель","сыр","масло","сливки"],
    ["яблоко","сахар","мука","масло"],
    ["тыква","лук","сливки","соль"],
    ["креветки","чеснок","лимон","масло"],
    ["шпинат","сыр","яйцо","масло"],
    ["тунец","рис","огурец","масло"],
    ["грибы","рис","лук","масло"]
  ];
  const cats = ["Завтрак","Обед","Ужин","Перекус","Десерт"];
  const placeholderImages = [
    "https://via.placeholder.com/800x500?text=Dish+1",
    "https://via.placeholder.com/800x500?text=Dish+2",
    "https://via.placeholder.com/800x500?text=Dish+3"
  ];

  let i = 0;
  while(RECIPES.length < 150){
    const idx = i % baseNames.length;
    const pool = ingredientPools[i % ingredientPools.length];
    // строим имя, комбинируя элементы
    const base = baseNames[idx];
    const mainIng = pool[0];
    const name = `${base} ${mainIng}`;

    // создаём ингредиенты (смешаем pool и немного вариаций)
    const ingr = [...pool];
    // добавим 1-2 случайных дополнительных ингредиента
    const extras = ["соль","перец","масло","лимон","чеснок","зелень","мука","яйцо"];
    if(i % 3 === 0) ingr.push(extras[i % extras.length]);
    if(i % 4 === 0) ingr.push(extras[(i+2) % extras.length]);

    const category = cats[i % cats.length];
    const time = (20 + (i % 5) * 10) + " минут";
    const steps = `Приготовьте ${ingr.join(', ')}: обжарьте, тушите до готовности и подавайте.`;
    const image = placeholderImages[i % placeholderImages.length];
    const calories = 200 + (i % 6) * 50;

    RECIPES.push({
      name,
      ingredients: ingr,
      category,
      time,
      steps,
      image,
      calories
    });
    i++;
    // safety: не бесконечный цикл
    if(i > 1000) break;
  }
})();
