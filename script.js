const games = [
  {
    title: "Brookhaven RP",
    placeId: 4924922222,
    image: "Imagenes/descarga (1).jpg",
    category: "Roleplay",
    short: "Simulador social para crear historias, vivir en ciudad y jugar con amigos.",
    longDescription: "Brookhaven RP es un juego de rol libre donde puedes elegir casa, vehiculos y profesiones para crear historias con otros jugadores.",
    creator: "Wolfpaq",
    year: 2020,
    easterEggs: [
      "En algunas casas hay botones ocultos para abrir habitaciones secretas.",
      "Explorar de noche puede revelar zonas menos visitadas por otros jugadores."
    ],
    items: [
      { name: "Casa premium", icon: "🏠", howTo: "Se desbloquea desde el menu de casas si tienes gamepass o version premium." },
      { name: "Vehiculo deportivo", icon: "🚗", howTo: "Se obtiene en el menu de vehiculos, algunos requieren gamepass." }
    ],
    badges: ["Top del dia", "Top del mes"]
  },
  {
    title: "Adopt Me!",
    placeId: 920587237,
    image: "Imagenes/noFilter.webp",
    category: "Simulacion",
    short: "Juego de crianza y coleccion de mascotas con sistema de intercambio.",
    longDescription: "Adopt Me! se centra en criar mascotas, completar tareas y comerciar con otros jugadores para mejorar tu coleccion.",
    creator: "Uplift Games",
    year: 2017,
    easterEggs: [
      "En eventos de temporada aparecen NPC especiales por tiempo limitado.",
      "Algunas zonas decorativas cambian segun el evento activo del servidor."
    ],
    items: [
      { name: "Huevo legendario", icon: "🥚", howTo: "Compra huevos en Nursery usando Bucks y eclosionalos completando tareas." },
      { name: "Pocion de vuelo", icon: "🧪", howTo: "Se consigue en eventos o mediante intercambio con otros jugadores." },
      { name: "Mascota neon", icon: "✨", howTo: "Une 4 mascotas iguales completamente crecidas en la cueva neon." }
    ],
    badges: ["Top del dia", "Top del mes"]
  },
  {
    title: "Blox Fruits",
    placeId: 2753915549,
    image: "Imagenes/descarga.jpg",
    category: "Aventura",
    short: "Aventura de exploracion y combate donde mejoras habilidades y equipo.",
    longDescription: "En Blox Fruits subes de nivel, visitas islas y consigues frutas para obtener habilidades especiales de combate.",
    creator: "Gamer Robot Inc",
    year: 2019,
    easterEggs: [
      "Algunos NPC ocultos solo aparecen en zonas concretas de cada mar.",
      "Ciertas cuevas esconden cofres con recompensas temporales."
    ],
    items: [
      { name: "Fruta random", icon: "🍏", howTo: "Comprala al Blox Fruit Dealer Cousin o busca frutas que aparecen en el mapa." },
      { name: "Espada rara", icon: "🗡️", howTo: "Derrota bosses especificos o comprala a NPC de espada cuando este disponible." }
    ],
    badges: ["Top del dia", "Top del mes"]
  },
  {
    title: "Tower of Hell",
    placeId: 1962086868,
    image: "Imagenes/th.jpg",
    category: "Obby",
    short: "Desafio de parkour por niveles sin puntos de control.",
    longDescription: "Tower of Hell es un obby competitivo donde debes llegar a la cima sin checkpoints antes de que termine el tiempo.",
    creator: "YXCeptional Studios",
    year: 2018,
    easterEggs: [
      "Algunos segmentos tienen atajos poco visibles si exploras bien los bordes.",
      "Existen mutadores de ronda que cambian por completo la dificultad."
    ],
    items: [
      { name: "Gravedad reducida", icon: "🌀", howTo: "Se activa con compras temporales dentro de la ronda." },
      { name: "Velocidad", icon: "⚡", howTo: "Disponible en la tienda del juego durante la partida." }
    ]
  },
  {
    title: "Arsenal",
    placeId: 286090429,
    image: "Imagenes/Arsenal.jpg",
    category: "Shooter",
    short: "Shooter competitivo de rondas cortas con armas variadas.",
    longDescription: "Arsenal es un shooter rapido donde cambias de arma al eliminar enemigos y ganas quien complete primero la rotacion.",
    creator: "ROLVe Community",
    year: 2015,
    easterEggs: [
      "Algunos mapas incluyen espacios secretos para moverte entre zonas.",
      "Las kill effects especiales suelen aparecer en eventos de temporada."
    ],
    items: [
      { name: "Skin de arma", icon: "🔫", howTo: "Se consigue en cajas, tienda y recompensas de eventos." },
      { name: "Anunciador", icon: "🎙️", howTo: "Se desbloquea en tienda o mediante codigos promocionales." }
    ]
  },
  {
    title: "Murder Mystery 2",
    placeId: 142823291,
    image: "Imagenes/MM2.jpg",
    category: "Suspenso",
    short: "Juego de roles ocultos donde debes descubrir al asesino.",
    longDescription: "MM2 asigna roles secretos cada ronda. Como inocente debes sobrevivir, como sheriff eliminar al asesino y como asesino eliminar a todos.",
    creator: "Nikilis",
    year: 2014,
    easterEggs: [
      "Algunos mapas contienen decoraciones interactivas escondidas.",
      "Durante eventos, ciertas cajas unicas solo salen por tiempo limitado."
    ],
    items: [
      { name: "Caja de cuchillos", icon: "🔪", howTo: "Compra cajas con monedas que obtienes jugando rondas." },
      { name: "Mascota", icon: "🐉", howTo: "Se consigue en tienda o intercambiando con otros jugadores." }
    ],
    badges: ["Top del dia"]
  },
  {
    title: "Pet Simulator X",
    placeId: 6284583030,
    image: "Imagenes/psX.jpg",
    category: "Simulacion",
    short: "Colecciona mascotas para desbloquear zonas y mejorar progreso.",
    longDescription: "Pet Simulator X trata de obtener mascotas cada vez mas fuertes para romper objetos, ganar monedas y avanzar por nuevos mundos.",
    creator: "BIG Games",
    year: 2021,
    easterEggs: [
      "Hay paredes con apariencia normal que esconden entradas secretas.",
      "Algunos cofres especiales reaparecen en zonas concretas del mapa."
    ],
    items: [
      { name: "Huevo exclusivo", icon: "🥚", howTo: "Disponible en eventos especiales o en la tienda exclusiva." },
      { name: "Hoverboard", icon: "🛹", howTo: "Completa objetivos del hoverboard para desbloquearlo." }
    ]
  },
  {
    title: "Doors",
    placeId: 6516141723,
    image: "Imagenes/Doors.jpg",
    category: "Terror",
    short: "Experiencia de terror cooperativa con exploracion y supervivencia.",
    longDescription: "Doors es un juego de terror donde avanzas por habitaciones aleatorias y debes reaccionar rapido a entidades peligrosas.",
    creator: "LSPLASH",
    year: 2022,
    easterEggs: [
      "Hay habitaciones raras con eventos visuales que no aparecen siempre.",
      "Ciertos sonidos anticipan la llegada de entidades especificas."
    ],
    items: [
      { name: "Ganzua", icon: "🗝️", howTo: "Comprala al inicio de la partida o encontrala en cajones." },
      { name: "Vitamina", icon: "💊", howTo: "Aparece en tienda del lobby o en algunas habitaciones." }
    ]
  },
  {
    title: "RIVALS",
    placeId: 17625359962,
    image: "",
    category: "Shooter",
    short: "Shooter competitivo de duelos rapidos con armas, movilidad y partidas intensas.",
    longDescription: "RIVALS destaca por su ritmo alto, rondas cortas y enfoque en punteria y desplazamiento. Tiene una base competitiva enorme y se mantiene entre los juegos mas jugados del momento.",
    creator: "Nosniy Games",
    year: 2024,
    easterEggs: [
      "Algunas arenas tienen rutas laterales que sirven para rotaciones sorpresivas.",
      "Los cambios de armas y perks suelen marcar bastante el meta despues de cada update."
    ],
    items: [
      { name: "Loadout", icon: "🎯", howTo: "Se mejora progresando y desbloqueando armas o ventajas del juego." },
      { name: "Skin", icon: "🔫", howTo: "Se obtiene por tienda, eventos o progreso competitivo." }
    ],
    badges: ["Top del dia", "Top del mes"]
  },
  {
    title: "Jujutsu Shenanigans",
    placeId: 9391468976,
    image: "",
    category: "Aventura",
    short: "Combate anime caotico con habilidades vistosas y partidas llenas de energia.",
    longDescription: "Jujutsu Shenanigans mezcla arena fighter, habilidades exageradas y un flujo muy rapido de combate. Suele reaccionar fuerte a updates y eventos del genero anime.",
    creator: "Awesome Ninja Games",
    year: 2024,
    easterEggs: [
      "Los mapas esconden zonas utiles para reposicionarte o esquivar ataques de area.",
      "Algunas animaciones y efectos cambian en eventos o reworks de personajes."
    ],
    items: [
      { name: "Personaje", icon: "🥋", howTo: "Se desbloquea con progreso, eventos o contenido agregado por temporada." },
      { name: "Emote", icon: "✨", howTo: "Se consigue con recompensas cosmeticas o tienda del juego." }
    ],
    badges: ["Top del dia", "Top del mes"]
  },
  {
    title: "99 Nights in the Forest",
    placeId: 79546208627805,
    image: "",
    category: "Supervivencia",
    short: "Supervivencia cooperativa donde gestionas recursos y resistes noches peligrosas.",
    longDescription: "99 Nights in the Forest exploto por su mezcla de supervivencia, crafting ligero y sesiones intensas en equipo. Mantiene una concurrencia altisima y un crecimiento fuerte en la ultima semana.",
    creator: "Grandma's Favourite Games",
    year: 2025,
    easterEggs: [
      "Algunas rutas del bosque esconden cofres o recursos mejores que los del camino principal.",
      "Las noches con eventos especiales cambian el ritmo de la partida y la prioridad del equipo."
    ],
    items: [
      { name: "Linterna", icon: "🔦", howTo: "Se obtiene al explorar o usando recursos basicos en runs tempranas." },
      { name: "Kit de supervivencia", icon: "🎒", howTo: "Se prepara reuniendo materiales y mejorando tu base antes de noches duras." }
    ],
    badges: ["Top del dia", "Top del mes"]
  },
  {
    title: "Fish It!",
    placeId: 121864768012064,
    image: "",
    category: "Simulacion",
    short: "Pesca relajada con progresion rapida, coleccion y una comunidad en fuerte crecimiento.",
    longDescription: "Fish It! es uno de los juegos que mas esta acelerando en Roblox. Su loop simple de pesca, mejoras y coleccion lo puso entre los grandes ganadores de crecimiento reciente.",
    creator: "Fish It Devs",
    year: 2026,
    easterEggs: [
      "Algunas zonas de pesca cambian su valor dependiendo de eventos y clima del servidor.",
      "Hay peces raros que aparecen mejor en momentos concretos del ciclo del mapa."
    ],
    items: [
      { name: "Cana mejorada", icon: "🎣", howTo: "Se compra o desbloquea conforme avanzas en ganancias y zonas." },
      { name: "Cebo raro", icon: "🪱", howTo: "Se consigue en eventos o cajas de recompensa especiales." }
    ]
  },
  {
    title: "Dress to Impress",
    placeId: 15101393044,
    image: "",
    category: "Moda",
    short: "Competencia de moda y creatividad con rondas sociales muy rapidas.",
    longDescription: "Dress to Impress gano muchisimo peso en Roblox por su formato accesible y visual. Es una referencia clara en juegos sociales competitivos dentro de la plataforma.",
    creator: "Dress to Impress Group",
    year: 2023,
    easterEggs: [
      "Algunos temas de desfile favorecen accesorios escondidos que pasan desapercibidos.",
      "Las updates suelen introducir sets secretos que la comunidad descubre rapido."
    ],
    items: [
      { name: "Set premium", icon: "👗", howTo: "Se desbloquea con tienda del juego o pases cosmeticos." },
      { name: "Accesorio raro", icon: "💎", howTo: "Aparece en eventos y recompensas de temporada." }
    ]
  },
  {
    title: "The Strongest Battlegrounds",
    placeId: 10449761463,
    image: "",
    category: "Aventura",
    short: "Arena de combate con personajes poderosos y duelos de alto impacto.",
    longDescription: "The Strongest Battlegrounds mantiene una comunidad fiel por su pelea arcade, destruccion del entorno y personajes inspirados en anime de accion.",
    creator: "Yielding Arts",
    year: 2022,
    easterEggs: [
      "La posicion en el mapa cambia mucho el valor de tus combos y escapes.",
      "Algunos efectos visuales ocultan ventanas utiles para contraatacar."
    ],
    items: [
      { name: "Personaje", icon: "💥", howTo: "Se desbloquea con progreso, rotaciones o contenido de update." },
      { name: "Emote de victoria", icon: "🏆", howTo: "Se obtiene por logros o tienda cosmetica." }
    ]
  },
  {
    title: "Berry Avenue",
    placeId: 7981339063,
    image: "",
    category: "Roleplay",
    short: "Roleplay urbano con casas, personalizacion y enfoque social muy fuerte.",
    longDescription: "Berry Avenue sigue fuerte en el segmento roleplay. Tiene mucha personalizacion, vida en ciudad y una comunidad muy activa entre jugadores casuales.",
    creator: "Amberry Games",
    year: 2022,
    easterEggs: [
      "Algunas casas esconden espacios utiles para historias o roleplay privado.",
      "La decoracion urbana cambia con eventos y actualizaciones de temporada."
    ],
    items: [
      { name: "Outfit", icon: "🧥", howTo: "Se arma con codigos, tienda del avatar y opciones internas del juego." },
      { name: "Casa", icon: "🏡", howTo: "Se selecciona dentro del sistema de propiedades del mapa." }
    ]
  },
  {
    title: "Attack on Titan Revolution",
    placeId: 13379208636,
    image: "",
    category: "Aventura",
    short: "Accion anime con maniobras aereas, jefes y combates cooperativos.",
    longDescription: "Attack on Titan Revolution entra bien en el bloque de revelaciones porque combina una base todavia menor que los gigantes del top con una concurrencia ya muy alta y señales de subida reciente.",
    creator: "Evolution Power",
    year: 2024,
    easterEggs: [
      "Las rutas elevadas permiten encadenar mejor movimiento y eliminaciones rapidas.",
      "Algunas misiones se sienten muy distintas segun el equipo y perks que lleves."
    ],
    items: [
      { name: "Equipo ODM", icon: "🪂", howTo: "Se mejora completando misiones, farmeando recursos y avanzando en la historia." },
      { name: "Perk de combate", icon: "⚔️", howTo: "Se desbloquea con progreso y sistemas internos de build." }
    ],
    badges: ["Revelacion semanal"]
  },
  {
    title: "Hypershot",
    placeId: 7436755782,
    image: "",
    category: "Shooter",
    short: "Shooter de ritmo alto con enfoque en reflejos, precision y rounds cortos.",
    longDescription: "Hypershot es una opcion fuerte para la seccion revelacion: no esta al nivel de fama de los gigantes historicos, pero ya mueve decenas de miles de jugadores activos con buena traccion.",
    creator: "Hypershot Team",
    year: 2024,
    easterEggs: [
      "Los mapas suelen esconder lineas de tiro poco obvias para sorprender en duelos.",
      "Pequenos cambios de balance pueden mover rapido el meta de armas."
    ],
    items: [
      { name: "Arma destacada", icon: "🔫", howTo: "Se desbloquea con progreso, tienda o rotacion interna del juego." },
      { name: "Mira especial", icon: "🎯", howTo: "Se obtiene por cosmeticos o recompensas de eventos." }
    ],
    badges: ["Revelacion semanal"]
  },
  {
    title: "Anime Vanguards",
    placeId: 16146832113,
    image: "",
    category: "Tower Defense",
    short: "Tower defense anime con unidades coleccionables y updates que disparan el trafico.",
    longDescription: "Anime Vanguards encaja como revelacion por su crecimiento porcentual alto y una base todavia bastante menor que la de los titanes mas conocidos. Cuando actualiza, sube muy rapido.",
    creator: "Kitawari",
    year: 2024,
    easterEggs: [
      "La sinergia entre unidades raras cambia bastante con cada parche grande.",
      "Los modos especiales suelen esconder recompensas mejores de lo que aparentan."
    ],
    items: [
      { name: "Unidad rara", icon: "🛡️", howTo: "Se invoca en banners o se consigue en eventos del juego." },
      { name: "Material de upgrade", icon: "🧩", howTo: "Se farmea en modos y retos especiales para evolucionar unidades." }
    ],
    badges: ["Revelacion semanal"]
  },
  {
    title: "Anime Story",
    placeId: 12722718889,
    image: "",
    category: "Aventura",
    short: "RPG anime aun pequeno en visitas totales, pero ya con traccion visible en jugadores activos.",
    longDescription: "Anime Story sigue siendo mucho menos conocido que los gigantes de Roblox por visitas historicas, pero ya aparece en rankings de juegos activos. Por eso sirve como apuesta temprana para descubrir antes que explote.",
    creator: "Anime Story Team",
    year: 2026,
    easterEggs: [
      "Las zonas iniciales esconden rutas de farmeo mejores que las obvias.",
      "Los eventos de drop pueden acelerar mucho el progreso si los aprovechas bien."
    ],
    items: [
      { name: "Clase", icon: "📖", howTo: "Se desbloquea avanzando en misiones y sistemas de progreso del juego." },
      { name: "Fragmento", icon: "🔮", howTo: "Se consigue derrotando enemigos o completando actividades especiales." }
    ],
    badges: ["Revelacion semanal"]
  }
];

const trendSectionsData = [
  {
    id: "top-mes",
    kicker: "Ultimos 30 a 77 dias",
    title: "Top del mes",
    note: "Promedio diario",
    description: "Aproximado por promedio diario de jugadores concurrentes en el historial reciente. Mide consistencia, no solo un pico puntual.",
    items: [
      { title: "Brookhaven RP", icon: "🏠", metric: "452K promedio/dia", meta: "+31.7% semanal", context: "Promedio en 77 dias segun BloxQuiz" },
      { title: "Adopt Me!", icon: "🐾", metric: "409K promedio/dia", meta: "+3.2% semanal", context: "Muy estable en el ultimo tramo" },
      { title: "Blox Fruits", icon: "🍏", metric: "289K promedio/dia", meta: "Base mensual alta", context: "Sigue entre los RPG mas solidos" },
      { title: "RIVALS", icon: "🎯", metric: "272K promedio/dia", meta: "Shooter fuerte", context: "Se mantiene arriba por volumen sostenido" },
      { title: "99 Nights in the Forest", icon: "🌲", metric: "240K promedio/dia", meta: "+55.1% semanal", context: "Subida fuerte con muy buen promedio" },
      { title: "Jujutsu Shenanigans", icon: "🥋", metric: "202K promedio/dia", meta: "+18.3% semanal", context: "Anime con empuje constante" }
    ]
  },
  {
    id: "revelacion-semana",
    kicker: "Descubrimientos",
    title: "Joyitas ocultas",
    note: "Heuristica",
    description: "Seleccion estimada de juegos con buen empuje reciente pero menor reconocimiento historico que los gigantes del top. Prioriza crecimiento y menor huella de visitas totales.",
    items: [
      { title: "Attack on Titan Revolution", icon: "⚡", metric: "58K jugando ahora", meta: "900.9M visitas", context: "Top 20 actual y todavia debajo de 1B visitas" },
      { title: "Hypershot", icon: "🔫", metric: "26K jugando ahora", meta: "984M visitas", context: "Shooter en ascenso con perfil mas niche" },
      { title: "Anime Vanguards", icon: "🛡️", metric: "16K jugando ahora", meta: "+36.7% tendencia", context: "Tower defense anime con subida porcentual fuerte" },
      { title: "Anime Story", icon: "📖", metric: "24K jugando ahora", meta: "29.4M visitas", context: "Muy poca huella historica para el trafico actual" }
    ]
  }
];

const categoryFilters = document.getElementById("categoryFilters");
const gamesGrid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const emptyState = document.getElementById("emptyState");
const cardTemplate = document.getElementById("cardTemplate");
const themeToggle = document.getElementById("themeToggle");
const trendSections = document.getElementById("trendSections");
const trendSectionTemplate = document.getElementById("trendSectionTemplate");
const viewTabs = document.querySelectorAll(".view-tab");
const wikiView = document.getElementById("wikiView");
const radarView = document.getElementById("radarView");

let selectedCategory = "Todas";
let searchText = "";
let activeView = "wiki";
const openGames = new Set();

function categoriesFromData(data) {
  return ["Todas", ...new Set(data.map((g) => g.category))];
}

function buildFilters() {
  categoryFilters.innerHTML = "";
  const categories = categoriesFromData(games);

  categories.forEach((cat) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-btn ${cat === selectedCategory ? "active" : ""}`;
    button.textContent = cat;

    button.addEventListener("click", () => {
      selectedCategory = cat;
      document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.textContent === cat);
      });
      renderGames();
    });

    categoryFilters.appendChild(button);
  });
}

function filteredGames() {
  return games.filter((game) => {
    const matchCategory = selectedCategory === "Todas" || game.category === selectedCategory;
    const badges = (game.badges || []).join(" ");
    const text = `${game.title} ${game.category} ${game.short} ${badges}`.toLowerCase();
    const matchSearch = text.includes(searchText.toLowerCase());
    return matchCategory && matchSearch;
  });
}

function initialsFromTitle(title) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function gameByTitle(title) {
  return games.find((game) => game.title === title);
}

function toggleGameCard(card, game) {
  if (openGames.has(game.title)) {
    openGames.delete(game.title);
    card.classList.remove("is-open");
    return;
  }

  openGames.add(game.title);
  card.classList.add("is-open");
}

function renderGames() {
  gamesGrid.innerHTML = "";

  const visibleGames = filteredGames();

  if (visibleGames.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  visibleGames.forEach((game) => {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    const image = card.querySelector(".game-image");
    const fallback = card.querySelector(".game-image-fallback");
    const fallbackInitials = card.querySelector(".fallback-initials");
    const badgesWrap = card.querySelector(".game-badges");

    fallbackInitials.textContent = initialsFromTitle(game.title);
    image.src = game.image || "";
    image.alt = `${game.title} - portada del juego`;

    image.addEventListener("error", () => fallback.classList.add("is-visible"), { once: true });
    image.addEventListener("load", () => fallback.classList.remove("is-visible"), { once: true });

    if (!game.image) {
      fallback.classList.add("is-visible");
    }

    card.querySelector(".game-title").textContent = game.title;
    card.querySelector(".game-category").textContent = game.category;
    card.querySelector(".game-short").textContent = game.short;

    badgesWrap.innerHTML = "";
    (game.badges || []).forEach((badge) => {
      const badgeEl = document.createElement("span");
      badgeEl.className = "game-badge";
      badgeEl.textContent = badge;
      badgesWrap.appendChild(badgeEl);
    });

    const panelMeta = card.querySelector(".panel-meta");
    const panelLong = card.querySelector(".panel-long");
    const panelEggs = card.querySelector(".panel-eggs");
    const panelItems = card.querySelector(".panel-items");
    const itemHowTo = card.querySelector(".item-howto");

    panelMeta.textContent = `Categoria: ${game.category} | Creador: ${game.creator} | Ano: ${game.year}`;
    panelLong.textContent = game.longDescription;

    panelEggs.innerHTML = "";
    game.easterEggs.forEach((egg) => {
      const li = document.createElement("li");
      li.textContent = egg;
      panelEggs.appendChild(li);
    });

    panelItems.innerHTML = "";
    game.items.forEach((item) => {
      const itemBtn = document.createElement("button");
      itemBtn.type = "button";
      itemBtn.className = "item-chip";
      itemBtn.innerHTML = `<span class="item-icon">${item.icon}</span><span>${item.name}</span>`;
      itemBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        panelItems.querySelectorAll(".item-chip").forEach((chip) => chip.classList.remove("active"));
        itemBtn.classList.add("active");
        itemHowTo.textContent = `${item.name}: ${item.howTo}`;
      });
      panelItems.appendChild(itemBtn);
    });

    if (openGames.has(game.title)) {
      card.classList.add("is-open");
    }

    card.addEventListener("click", () => toggleGameCard(card, game));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleGameCard(card, game);
      }
    });

    gamesGrid.appendChild(card);
  });
}

function scrollToGame(title) {
  const game = gameByTitle(title);
  if (!game) {
    return;
  }

  searchText = "";
  searchInput.value = "";
  selectedCategory = "Todas";
  buildFilters();
  openGames.add(title);
  renderGames();

  requestAnimationFrame(() => {
    const targetCard = [...gamesGrid.querySelectorAll(".game-card")].find((card) => {
      return card.querySelector(".game-title")?.textContent === title;
    });
    targetCard?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function renderTrendSections() {
  trendSections.innerHTML = "";

  trendSectionsData
    .filter((section) => section.id === activeView)
    .forEach((section) => {
    const card = trendSectionTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector(".trend-kicker").textContent = section.kicker;
    card.querySelector(".trend-title").textContent = section.title;
    card.querySelector(".trend-note").textContent = section.note;
    card.querySelector(".trend-description").textContent = section.description;

    const list = card.querySelector(".trend-list");
    section.items.forEach((item, index) => {
      const linkedGame = gameByTitle(item.title);
      const thumbSrc = linkedGame?.image || "";
      const thumbInitials = initialsFromTitle(item.title);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "trend-item";
      button.innerHTML = `
        <div class="trend-rank-row">
          <div class="trend-game">
            <span class="trend-rank">${index + 1}</span>
            <img class="trend-thumb" src="${thumbSrc}" alt="${item.title} portada" loading="lazy">
            <span class="trend-thumb-fallback">${thumbInitials}</span>
            <div>
              <strong>${item.title}</strong>
              <span>${item.metric}</span>
            </div>
          </div>
          <span class="trend-meta">${item.meta}</span>
        </div>
        <div class="trend-context">${item.context}</div>
      `;
      const thumb = button.querySelector(".trend-thumb");
      const thumbFallback = button.querySelector(".trend-thumb-fallback");

      thumb.addEventListener("error", () => thumbFallback.classList.add("is-visible"), { once: true });
      thumb.addEventListener("load", () => thumbFallback.classList.remove("is-visible"), { once: true });

      if (!thumbSrc) {
        thumbFallback.classList.add("is-visible");
      }

      button.addEventListener("click", () => scrollToGame(item.title));
      list.appendChild(button);
    });

    trendSections.appendChild(card);
  });
}

function setActiveView(viewName) {
  activeView = viewName;
  const isWiki = viewName === "wiki";

  wikiView.classList.toggle("is-active", isWiki);
  radarView.classList.toggle("is-active", !isWiki);
  searchInput.disabled = !isWiki;
  clearBtn.disabled = !isWiki;
  categoryFilters.style.display = isWiki ? "flex" : "none";

  viewTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === viewName);
  });

  if (!isWiki) {
    renderTrendSections();
  }
}

function setTheme(theme) {
  document.body.classList.remove("theme-fade");
  void document.body.offsetWidth;
  document.body.classList.add("theme-fade");
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("robloxWikiTheme", theme);
  themeToggle.textContent = theme === "dark" ? "Modo claro" : "Modo oscuro";
}

function initTheme() {
  const stored = localStorage.getItem("robloxWikiTheme");
  if (stored === "dark" || stored === "light") {
    setTheme(stored);
    return;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
  const current = document.body.getAttribute("data-theme") || "light";
  setTheme(current === "dark" ? "light" : "dark");
});

searchInput.addEventListener("input", (event) => {
  searchText = event.target.value.trim();
  renderGames();
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  searchText = "";
  selectedCategory = "Todas";
  buildFilters();
  renderGames();
});

viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveView(tab.dataset.view);
  });
});

function init() {
  initTheme();
  buildFilters();
  renderGames();
  setActiveView("wiki");
}

init();
