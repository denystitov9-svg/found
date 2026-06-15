const giftsData = {
  "1-12-months": [
    {
      title: "Развивающий коврик с дугами",
      desc: "Яркий коврик с шуршащими элементами для развития моторики.",
      price: "1 500 - 4 000 руб.",
      where: "Детские магазины, маркетплейсы (Ozon, WB)",
    },
    {
      title: "Мягкие кубики-погремушки",
      desc: "Безопасные тканевые кубики, которые можно бросать и сжимать.",
      price: "500 - 1 200 руб.",
      where: "Любые маркетплейсы",
    },
  ],
  "1-5-years": [
    {
      title: "Бизиборд (развивающая доска)",
      desc: "Доска с замочками, кнопками и шестеренками для развития логики.",
      price: "2 000 - 5 000 руб.",
      where: "Магазины развивающих игрушек",
    },
  ],
  "14-16-years": [
    {
      title: "Беспроводные наушники",
      desc: "Стильный гаджет для прослушивания музыки без проводов.",
      price: "2 500 - 10 000 руб.",
      where: "Магазины электроники (М.Видео, DNS)",
    },
  ],
  "40-45-years": [
    {
      title: "Массажер для шеи и плеч",
      desc: "Электрический массажер с подогревом снимет усталость после работы.",
      price: "3 000 - 6 000 руб.",
      where: "Маркетплейсы",
    },
  ],
  retro: [
    {
      type: "retro",
      title: "Винтажный виниловый проигрыватель",
      desc: "Ретро-проигрыватель в виде чемодана. Создает невероятную атмосферу старой Англии.",
      price: "5 000 - 12 000 руб.",
      where: "Специализированные магазины винила, Авито, Аукцион 'Мешок'",
    },
    {
      type: "retro",
      title: "Старинная монета или банкнота",
      desc: "Редкая монета прошлых веков. Идеальный подарок для ценителей нумизматики.",
      price: "Зависит от редкости",
      where: "Антикварные лавки, специализированные сайты",
    },
  ],
  "retro-cars": [
    {
      type: "retro",
      title: "Масштабная модель авто (1:18)",
      desc: "Металлическая копия легендарного классического автомобиля (например, Ford Mustang 1967).",
      price: "3 000 - 15 000 руб.",
      where: "Магазины для моделистов",
    },
    {
      type: "retro",
      title: "Винтажная жестяная табличка",
      desc: "Декоративная металлическая вывеска в американском ретро-стиле для гаража или комнаты.",
      price: "500 - 1 500 руб.",
      where: "AliExpress, Ozon, Wildberries",
    },
  ],
  gaming: [
    {
      type: "modern",
      title: "Ретро-консоль (Денди / Сега)",
      desc: "Игровая приставка из 90-х в современном исполнении для ностальгических вечеров.",
      price: "1 500 - 3 500 /руб.",
      where: "Маркетплейсы, магазины электроники",
    },
    {
      type: "modern",
      title: "Светильник-ночник в стиле игры",
      desc: "3D-лампа в виде значков PlayStation, привидения из Pac-Man или меча из Minecraft.",
      price: "1 000 - 3 000 руб.",
      where: "Гик-магазины, Wildberries",
    },
  ],
  fishing: [
    {
      type: "modern",
      title: "Набор премиум-воблеров или блесен",
      desc: "Комплект качественных приманок в удобном кейсе для ловли хищной рыбы.",
      price: "1 500 - 4 500 руб.",
      where: "Рыболовные магазины",
    },
    {
      type: "modern",
      title: "Портативный эхолот",
      desc: "Умный гаджет, который показывает наличие рыбы и рельеф дна на экране смартфона.",
      price: "7 000 - 20 000 руб.",
      where: "Магазины для туризма, Яндекс Маркет",
    },
  ],
  "modern-collecting": [
    {
      type: "modern",
      title: "Коллекционная фигурка Funko POP!",
      desc: "Виниловая фигурка любимого персонажа из фильма, сериала, игры или аниме.",
      price: "1 500 - 5 000+ руб.",
      where: "Гик-шопы, магазины комиксов, Ozon",
    },
  ],
};

// Переключение вкладок "Возраст" и "Интересы" на главном экране
function switchTab(tabName) {
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  document.getElementById("age-section").classList.remove("active");
  document.getElementById("interests-section").classList.remove("active");

  document.getElementById(`${tabName}-section`).classList.add("active");
}

// Главная магия: открываем категорию, прячем ВСЁ остальное
function filterGifts(categoryKey, categoryName) {
  const mainInterface = document.getElementById("main-interface");
  const viewInterface = document.getElementById("view-interface");
  const container = document.getElementById("gifts-container");
  const title = document.getElementById("current-category-title");

  // Очищаем контейнер карточек
  container.innerHTML = "";

  // Записываем имя выбранной категории в заголовок
  title.innerText = categoryName;

  const gifts = giftsData[categoryKey];

  if (!gifts || gifts.length === 0) {
    container.innerHTML =
      '<p style="grid-column: 1/-1; text-align:center; color:#999;">Для этой категории идеи скоро добавятся!</p>';
  } else {
    // Рендерим карточки
    gifts.forEach((gift) => {
      const card = document.createElement("div");
      let cardClass = "gift-card";
      if (gift.type === "retro") cardClass += " retro-card";
      if (gift.type === "modern") cardClass += " modern-card";

      card.className = cardClass;
      card.innerHTML = `
                <div>
                    <h4>${gift.title}</h4>
                    <p class="desc">${gift.desc}</p>
                </div>
                <div class="gift-info">
                    <p><strong>💰 Примерная цена:</strong> ${gift.price}</p>
                    <p><strong>📍 Где искать:</strong> ${gift.where}</p>
                </div>
            `;
      container.appendChild(card);
    });
  }

  // Скрываем главное меню и шапку, показываем только подарки
  mainInterface.style.display = "none";
  viewInterface.style.display = "block";

  // Прокручиваем страницу наверх, чтобы просмотр начинался с начала
  window.scrollTo(0, 0);
}

// Функция для кнопки "Назад" — возвращает всё обратно
function goBack() {
  const mainInterface = document.getElementById("main-interface");
  const viewInterface = document.getElementById("view-interface");

  // Показываем главное меню и шапку, скрываем экран просмотра
  mainInterface.style.display = "block";
  viewInterface.style.display = "none";
}
