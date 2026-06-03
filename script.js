function makeGame(title, category, short, options = {}) {
  return {
    title,
    placeId: options.placeId,
    image: options.image || "",
    category,
    short,
    longDescription: options.longDescription || `${title} es una experiencia popular de Roblox dentro de la categoria ${category}. Destaca por su comunidad activa, progresion clara y partidas faciles de volver a jugar.`,
    creator: options.creator || "Roblox Community",
    year: options.year || "N/D",
    easterEggs: options.easterEggs || [
      "Explorar rutas secundarias suele revelar detalles utiles para jugar mejor.",
      "Los eventos y actualizaciones pueden cambiar recompensas, zonas o estrategias."
    ],
    items: options.items || [
      { name: "Recompensa", icon: "R", howTo: "Se consigue jugando partidas, completando objetivos o participando en eventos." },
      { name: "Mejora", icon: "M", howTo: "Se desbloquea con progreso, monedas internas, retos o comercio entre jugadores." }
    ],
    badges: options.badges || []
  };
}

const games = [
  makeGame("Brookhaven RP", "Roleplay", "Simulador social para crear historias, vivir en ciudad y jugar con amigos.", { placeId: 4924922222, image: "Imagenes/roblox-brookhaven-rp.png", creator: "Wolfpaq", year: 2020, badges: ["Top del dia", "Top del mes"] }),
  makeGame("Adopt Me!", "Simulacion", "Juego de crianza y coleccion de mascotas con sistema de intercambio.", { placeId: 920587237, image: "Imagenes/roblox-adopt-me.png", creator: "Uplift Games", year: 2017, badges: ["Top del dia", "Top del mes"] }),
  makeGame("Blox Fruits", "Aventura", "Aventura de exploracion y combate donde mejoras habilidades y equipo.", { placeId: 2753915549, image: "Imagenes/roblox-blox-fruits.png", creator: "Gamer Robot Inc", year: 2019, badges: ["Top del dia", "Top del mes"] }),
  makeGame("Tower of Hell", "Obby", "Desafio de parkour por niveles sin puntos de control.", { placeId: 1962086868, image: "Imagenes/roblox-tower-of-hell.png", creator: "YXCeptional Studios", year: 2018 }),
  makeGame("Tower Defense Simulator", "Tower Defense", "Tower defense cooperativo donde colocas torres para frenar oleadas de enemigos.", { placeId: 3260590327, image: "Imagenes/roblox-tower-defense-simulator.png", creator: "Paradoxum Games", year: 2019, badges: ["Top del mes"] }),
  makeGame("Arsenal", "Shooter", "Shooter competitivo de rondas cortas con armas variadas.", { placeId: 286090429, image: "Imagenes/roblox-arsenal.png", creator: "ROLVe Community", year: 2015 }),
  makeGame("Murder Mystery 2", "Suspenso", "Juego de roles ocultos donde debes descubrir al asesino.", { placeId: 142823291, image: "Imagenes/roblox-murder-mystery-2.png", creator: "Nikilis", year: 2014, badges: ["Top del dia", "Top del mes"] }),
  makeGame("Pet Simulator X", "Simulacion", "Colecciona mascotas para desbloquear zonas y mejorar progreso.", { placeId: 6284583030, image: "Imagenes/roblox-pet-simulator-x.png", creator: "BIG Games", year: 2021 }),
  makeGame("Doors", "Terror", "Experiencia de terror cooperativa con exploracion y supervivencia.", { placeId: 6516141723, image: "Imagenes/roblox-doors.png", creator: "LSPLASH", year: 2022 }),
  makeGame("RIVALS", "Shooter", "Shooter competitivo de duelos rapidos con armas, movilidad y partidas intensas.", { placeId: 17625359962, image: "Imagenes/roblox-rivals.png", creator: "Nosniy Games", year: 2024, badges: ["Top del dia", "Top del mes"] }),
  makeGame("Jujutsu Shenanigans", "Aventura", "Combate anime caotico con habilidades vistosas y partidas llenas de energia.", { placeId: 9391468976, image: "Imagenes/roblox-jujutsu-shenanigans.png", creator: "Awesome Ninja Games", year: 2024, badges: ["Top del dia", "Top del mes"] }),
  makeGame("99 Nights in the Forest", "Supervivencia", "Supervivencia cooperativa donde gestionas recursos y resistes noches peligrosas.", { placeId: 79546208627805, image: "Imagenes/roblox-99-nights-in-the-forest.png", creator: "Grandma's Favourite Games", year: 2025, badges: ["Top del dia", "Top del mes"] }),
  makeGame("Fish It!", "Simulacion", "Pesca relajada con progresion rapida, coleccion y una comunidad en fuerte crecimiento.", { placeId: 121864768012064, image: "Imagenes/roblox-fish-it.png", creator: "Fish It Devs", year: 2026, badges: ["Top del mes"] }),
  makeGame("Dress to Impress", "Moda", "Competencia de moda y creatividad con rondas sociales muy rapidas.", { placeId: 15101393044, creator: "Dress to Impress Group", year: 2023 }),
  makeGame("The Strongest Battlegrounds", "Aventura", "Arena de combate con personajes poderosos y duelos de alto impacto.", { placeId: 10449761463, creator: "Yielding Arts", year: 2022 }),
  makeGame("Berry Avenue", "Roleplay", "Roleplay urbano con casas, personalizacion y enfoque social muy fuerte.", { placeId: 8481844229, creator: "Amberry Games", year: 2022 }),
  makeGame("Attack on Titan Revolution", "Aventura", "Accion anime con maniobras aereas, jefes y combates cooperativos.", { placeId: 13379208636, creator: "Evolution Power", year: 2024, badges: ["Revelacion semanal"] }),
  makeGame("Hypershot", "Shooter", "Shooter de ritmo alto con enfoque en reflejos, precision y rounds cortos.", { placeId: 17516596118, creator: "Hypershot Team", year: 2024, badges: ["Revelacion semanal"] }),
  makeGame("Anime Vanguards", "Tower Defense", "Tower defense anime con unidades coleccionables y updates que disparan el trafico.", { placeId: 16146832113, creator: "Kitawari", year: 2024, badges: ["Revelacion semanal"] }),
  makeGame("Anime Story", "Aventura", "RPG anime aun pequeno en visitas totales, pero ya con traccion visible en jugadores activos.", { placeId: 9417197334, creator: "Anime Story Team", year: 2026, badges: ["Revelacion semanal"] }),
  makeGame("MeepCity", "Roleplay", "Mundo social clasico con casas, fiestas, minijuegos y personalizacion.", { placeId: 370731277, creator: "alexnewtron", year: 2016, badges: ["Clasico"] }),
  makeGame("Jailbreak", "Accion", "Policias y criminales compiten en robos, persecuciones y escapes.", { placeId: 606849621, creator: "Badimo", year: 2017, badges: ["Clasico"] }),
  makeGame("Piggy", "Terror", "Terror por capitulos con llaves, puzzles y persecucion constante.", { placeId: 4623386862, creator: "MiniToon", year: 2020 }),
  makeGame("Natural Disaster Survival", "Supervivencia", "Sobrevive desastres aleatorios en mapas pequenos y caoticos.", { placeId: 189707, creator: "Stickmasterluke", year: 2008, badges: ["Clasico"] }),
  makeGame("Work at a Pizza Place", "Simulacion", "Trabaja en una pizzeria, gana dinero y mejora tu casa.", { placeId: 192800, creator: "Dued1", year: 2008, badges: ["Clasico"] }),
  makeGame("Royale High", "Roleplay", "Roleplay fantastico escolar con moda, clases, eventos y coleccion.", { placeId: 735030788, creator: "callmehbob", year: 2017 }),
  makeGame("Welcome to Bloxburg", "Roleplay", "Construccion, trabajo y vida familiar en una ciudad residencial.", { placeId: 185655149, creator: "Bloxburg Development", year: 2014 }),
  makeGame("Bee Swarm Simulator", "Simulacion", "Recolecta polen, crea miel y mejora tu enjambre de abejas.", { placeId: 1537690962, creator: "Onett", year: 2018 }),
  makeGame("Build A Boat For Treasure", "Construccion", "Construye barcos creativos para cruzar obstaculos y ganar tesoros.", { placeId: 537413528, creator: "Chillz Studios", year: 2016 }),
  makeGame("Theme Park Tycoon 2", "Tycoon", "Disena parques de atracciones con montanas rusas, tiendas y decoracion.", { placeId: 69184822, creator: "Den_S", year: 2012 }),
  makeGame("Evade", "Supervivencia", "Corre, revive companeros y escapa de entidades en rondas rapidas.", { placeId: 9872472334, creator: "Hexagon Development Community", year: 2022 }),
  makeGame("Rainbow Friends", "Terror", "Terror por capitulos con monstruos de colores, misiones y sigilo.", { placeId: 7991339063, creator: "Roy & Charcle", year: 2021 }),
  makeGame("BedWars", "Estrategia", "Defiende tu cama, compra mejoras y elimina equipos rivales.", { placeId: 6872265039, creator: "Easy.gg", year: 2021 }),
  makeGame("Blade Ball", "Accion", "Reflejos, habilidades y duelos donde una bola elimina al objetivo.", { placeId: 13772394625, creator: "Wiggity", year: 2023 }),
  makeGame("Creatures of Sonaria", "Supervivencia", "Sobrevive como criatura fantastica, crece, explora y domina ecosistemas.", { placeId: 5233782396, creator: "Sonar Studios", year: 2020 }),
  makeGame("The Mimic", "Terror", "Terror narrativo inspirado en leyendas con capitulos y exploracion.", { placeId: 6243699076, creator: "MUCDICH", year: 2021 }),
  makeGame("Apeirophobia", "Terror", "Exploracion de backrooms con puzzles, niveles y entidades peligrosas.", { placeId: 10277607801, creator: "Polaroid Studios", year: 2022 }),
  makeGame("Restaurant Tycoon 2", "Tycoon", "Construye y administra un restaurante con cocina, clientes y decoracion.", { placeId: 3398014311, creator: "Ultraw", year: 2019 }),
  makeGame("Sonic Speed Simulator", "Carreras", "Corre por mundos coloridos, sube velocidad y desbloquea personajes.", { placeId: 9049840490, creator: "Gamefam Studios", year: 2022 }),
  makeGame("Slap Battles", "Accion", "Arena caotica de guantes con habilidades raras y mucho humor.", { placeId: 6403373529, creator: "Tencelll", year: 2021 }),
  makeGame("Michaels Zombies", "Shooter", "Supervivencia por rondas contra zombies con armas, perks y equipo.", { placeId: 8054462345, creator: "MZ Community", year: 2021 }),
  makeGame("Steal a Brainrot", "Simulacion", "Juego viral de coleccion y robo de brainrots con progresion rapida.", { placeId: 109983668079237, image: "Imagenes/roblox-steal-a-brainrot.png", creator: "Brainrot Games", badges: ["Top global", "Top del mes"] }),
  makeGame("Grow a Garden", "Simulacion", "Cultiva, mejora semillas y vende cosechas en uno de los mayores hits recientes.", { creator: "The Garden Game", year: 2025, badges: ["Top global"] }),
  makeGame("All Star Tower Defense", "Tower Defense", "Tower defense anime con unidades coleccionables y mapas por oleadas.", { creator: "Top Down Games", year: 2020 }),
  makeGame("Dandy's World", "Terror", "Supervivencia cooperativa con personajes, maquinas y amenazas por piso.", { creator: "BlushCrunch Studio", year: 2024, badges: ["Top global"] }),
  makeGame("Toilet Tower Defense", "Tower Defense", "Defensa por oleadas basada en unidades y upgrades de estilo meme.", { creator: "Telanthric Development", year: 2023 }),
  makeGame("Flee the Facility", "Terror", "Escape asimetrico donde hackeas computadoras y huyes del cazador.", { creator: "A.W. Apps", year: 2017 }),
  makeGame("Livetopia", "Roleplay", "Roleplay de ciudad con casas, vehiculos y espacios sociales.", { creator: "Century Makers", year: 2021 }),
  makeGame("PLS DONATE", "Social", "Plazas sociales donde los jugadores crean stands y reciben donaciones.", { creator: "Quataun", year: 2022 }),
  makeGame("Forsaken", "Terror", "Horror multijugador con supervivientes, cazadores y objetivos por ronda.", { placeId: 18687417158, image: "Imagenes/roblox-forsaken.png", creator: "Forsaken Dev Team", badges: ["Top del mes"] }),
  makeGame("Blue Lock: Rivals", "Deportes", "Futbol anime competitivo con estilos, habilidades y partidos rapidos."),
  makeGame("Fisch", "Simulacion", "Pesca, exploracion y coleccion con zonas y especies raras.", { creator: "Fisching", year: 2024 }),
  makeGame("BARRY'S PRISON RUN", "Obby", "Obby de escape de prision con obstaculos, persecuciones y humor.", { creator: "PlatinumFalls" }),
  makeGame("King Legacy", "Aventura", "RPG de islas, frutas, espadas y jefes inspirado en anime pirata.", { creator: "Sea King Games", year: 2019 }),
  makeGame("Anime Defenders", "Tower Defense", "Tower defense anime con invocaciones, evoluciones y raids.", { year: 2024 }),
  makeGame("3008", "Terror", "Sobrevive en una tienda infinita construyendo refugios y evitando empleados.", { creator: "uglyburger0", year: 2019 }),
  makeGame("Break In", "Terror", "Historia cooperativa de supervivencia dentro de una casa bajo amenaza.", { creator: "Cracky4", year: 2019 }),
  makeGame("Prison Life", "Roleplay", "Clasico de policias y prisioneros con escapes y enfrentamientos.", { creator: "Aesthetical", year: 2014 }),
  makeGame("Da Hood", "Roleplay", "Roleplay urbano con economia, combate y mucha interaccion social.", { creator: "Da Hood Entertainment", year: 2019 }),
  makeGame("Driving Empire", "Carreras", "Conduce, compra autos y compite en carreras de mundo abierto.", { creator: "Driving Empire by Voldex", year: 2019 }),
  makeGame("Shindo Life", "Aventura", "RPG ninja con linajes, habilidades, jefes y exploracion.", { creator: "RELL World", year: 2020 }),
  makeGame("Survive the Killer", "Terror", "Supervivencia por rondas donde rescatas aliados y evitas al asesino.", { creator: "Slyce Entertainment", year: 2020 }),
  makeGame("Car Dealership Tycoon", "Tycoon", "Construye un concesionario, compra autos y gana dinero conduciendo.", { creator: "Foxzie", year: 2018 }),
  makeGame("Pet Simulator 99", "Simulacion", "Colecciona mascotas, rompe objetos y progresa por areas cada vez mayores.", { creator: "BIG Games Pets", year: 2023 }),
  makeGame("Islands", "Simulacion", "Construye tu isla, farmea recursos y comercia con otros jugadores.", { creator: "Easy.gg", year: 2020 }),
  makeGame("Muscle Legends", "Simulacion", "Entrena fuerza, desbloquea zonas y pelea para subir poder.", { creator: "Scriptbloxian Studios", year: 2019 }),
  makeGame("Ninja Legends", "Simulacion", "Entrena ninjutsu, salta entre islas y colecciona mascotas.", { creator: "Scriptbloxian Studios", year: 2019 }),
  makeGame("Squid Game", "Supervivencia", "Minijuegos de eliminacion inspirados en retos de supervivencia.", { creator: "Trendsetter Games", year: 2021 }),
  makeGame("Funky Friday", "Ritmo", "Batallas musicales de ritmo con canciones, animaciones y duelos.", { creator: "Lyte Interactive", year: 2021 }),
  makeGame("Obby But You're on a Bike", "Obby", "Obby de precision donde completas recorridos montado en bicicleta.", { creator: "FORTUNE 777" }),
  makeGame("Sol's RNG", "Simulacion", "Experiencia RNG centrada en conseguir auras cada vez mas raras.", { creator: "Sol's Studio", year: 2023 }),
  makeGame("Speed Run 4", "Obby", "Clasico de velocidad con niveles de plataformas y musica energetica.", { creator: "Vurse", year: 2014 }),
  makeGame("Zombie Attack", "Supervivencia", "Oleadas de zombies, armas, mascotas y jefes cooperativos.", { creator: "wenlocktoad vs indra", year: 2017 }),
  makeGame("Strongman Simulator", "Simulacion", "Entrena fuerza arrastrando objetos y desbloqueando zonas.", { creator: "The Gang Stockholm", year: 2021 }),
  makeGame("Dragon Adventures", "Simulacion", "Cria dragones, explora mundos y comercia criaturas raras.", { creator: "Sonar Studios", year: 2019 }),
  makeGame("Deepwoken", "Aventura", "RPG desafiante con combate, exploracion, builds y riesgo alto.", { creator: "Monad Studios", year: 2021 }),
  makeGame("Anime Dimensions Simulator", "Aventura", "Combate anime por dimensiones con personajes y raids.", { creator: "Albatross Games", year: 2021 }),
  makeGame("Lumber Tycoon 2", "Tycoon", "Tala madera, construye base y vende recursos en un clasico sandbox.", { creator: "Defaultio", year: 2015 }),
  makeGame("Arm Wrestle Simulator", "Simulacion", "Entrena fuerza, gana duelos y avanza por mundos.", { creator: "Kubo Games", year: 2023 }),
  makeGame("Untitled Boxing Game", "Accion", "Boxeo competitivo con estilos, esquives y duelos tecnicos.", { creator: "drowningsome", year: 2023 }),
  makeGame("Grand Piece Online", "Aventura", "RPG de exploracion pirata con frutas, barcos, islas y bosses.", { creator: "Grand Quest Games", year: 2020 }),
  makeGame("Ro-Ghoul", "Aventura", "Combate anime entre facciones con progreso, quinques y kagunes.", { creator: "SushiWalrus", year: 2017 }),
  makeGame("Fruit Battlegrounds", "Accion", "Arena anime de frutas con combate, habilidades y rolls.", { creator: "P O P O", year: 2022 }),
  makeGame("My Restaurant", "Tycoon", "Administra restaurante, atiende clientes y mejora decoracion.", { creator: "BIG Games", year: 2019 }),
  makeGame("Type Soul", "Aventura", "RPG anime de facciones, builds y PvP intenso.", { year: 2023 }),
  makeGame("Southwest Florida", "Roleplay", "Roleplay de ciudad con trabajos, autos y vida cotidiana.", { creator: "Strigid Development", year: 2020 }),
  makeGame("Kaiju Universe", "Accion", "Combates de kaijus gigantes con habilidades, ciudades y progresion.", { creator: "Prometeo Games", year: 2019 }),
  makeGame("Murder Party", "Suspenso", "Roles secretos, caos social y objetivos ocultos por ronda.", { creator: "PlayMake", year: 2020 }),
  makeGame("Jujutsu Infinite", "Aventura", "RPG anime con tecnicas, progresion y combates de alto impacto.", { creator: "Awesome Ninja Games", year: 2024 }),
  makeGame("Project Slayers", "Aventura", "RPG anime de espadas, respiraciones, demonios y misiones.", { year: 2022 }),
  makeGame("Starving Artists", "Social", "Crea arte, monta un stand y vende obras a otros jugadores.", { creator: "Double Bandit Studios", year: 2022 }),
  makeGame("Super Striker League", "Deportes", "Futbol arcade con habilidades especiales y partidos de equipos.", { creator: "Cinder Studio", year: 2019 }),
  makeGame("Kick Off", "Deportes", "Partidos de futbol simples con control directo del balon."),
  makeGame("House Tycoon", "Tycoon", "Construye una casa paso a paso y mejora tu propiedad."),
  makeGame("Camping", "Terror", "Historia clasica de terror en grupo durante una salida al bosque.", { creator: "SamsonXVI", year: 2018 }),
  makeGame("Super Golf", "Deportes", "Minigolf multijugador con mapas, tiros precisos y cosmeticos.", { creator: "Nosniy Games", year: 2019 }),
  makeGame("Heroes World", "Aventura", "RPG de heroes con poderes, misiones y combate."),
  makeGame("My Supermarket", "Tycoon", "Administra un supermercado con estantes, clientes y mejoras.", { creator: "Rocky Studio", year: 2020 }),
  makeGame("Demon Slayer RPG 2", "Aventura", "RPG anime de cazadores, demonios, respiraciones y misiones.", { creator: "Shounen Studio", year: 2020 }),
  makeGame("Ghost Simulator", "Simulacion", "Captura fantasmas, mejora equipo y explora biomas.", { creator: "BloxByte Games", year: 2018 })
];

const trendSectionsData = [
  {
    id: "top-mes",
    kicker: "Top global Roblox",
    title: "Top del mes",
    note: "10 juegos",
    description: "Ranking de los juegos con mas actividad global en Roblox durante el snapshot mensual. Incluye jugadores, aprobacion y votos de la comunidad.",
    items: [
      { title: "Fish It!", metric: "554.1K jugando", meta: "83% aprobacion", likes: "1.3M", dislikes: "266K aprox.", context: "Lidera el snapshot mensual por concurrencia; pesca, progreso y coleccion lo mantienen arriba." },
      { title: "Adopt Me!", metric: "412.3K jugando", meta: "86% aprobacion", likes: "9.1M", dislikes: "1.5M", context: "Vuelve al bloque elite con eventos y una comunidad enorme de mascotas e intercambio." },
      { title: "Blox Fruits", metric: "346.3K jugando", meta: "92% aprobacion", likes: "12.1M", dislikes: "1.1M aprox.", context: "Sigue siendo el RPG de aventura mas fuerte por visitas, builds y progresion larga." },
      { title: "RIVALS", metric: "310.9K jugando", meta: "95% aprobacion", likes: "9.5M", dislikes: "500K aprox.", context: "El shooter competitivo mas dominante del mes por partidas cortas y retencion alta." },
      { title: "Brookhaven RP", metric: "296.7K jugando", meta: "86% aprobacion", likes: "7.5M aprox.", dislikes: "1.2M aprox.", context: "El gigante de roleplay sigue estable gracias a servidores sociales y actualizaciones constantes." },
      { title: "Steal a Brainrot", metric: "232.6K jugando", meta: "86% aprobacion", likes: "15.1M", dislikes: "2.5M aprox.", context: "Mantiene una presencia enorme por su loop viral de coleccion, robo y defensa de base." },
      { title: "99 Nights in the Forest", metric: "227.9K jugando", meta: "91% aprobacion", likes: "4.9M", dislikes: "485K aprox.", context: "Supervivencia cooperativa con noches tensas, crafting ligero y sesiones faciles de repetir." },
      { title: "Murder Mystery 2", metric: "126.2K jugando", meta: "91% aprobacion", likes: "9.6M", dislikes: "949K aprox.", context: "El clasico de roles ocultos conserva un volumen mensual altisimo despues de anos." },
      { title: "Jujutsu Shenanigans", metric: "102.6K jugando", meta: "86.9% aprobacion", likes: "2.3M", dislikes: "338.6K", context: "Battleground anime con comunidad competitiva, destruccion de escenarios y picos fuertes por update." },
      { title: "Forsaken", metric: "99.1K jugando", meta: "85% aprobacion", likes: "2.1M", dislikes: "355.5K", context: "Horror asimetrico reciente con empuje mensual suficiente para cerrar el top 10." }
    ]
  },
  {
    id: "revelacion-semana",
    kicker: "Descubrimientos",
    title: "Joyitas ocultas",
    note: "Heuristica",
    description: "Seleccion estimada de juegos con buen empuje reciente pero menor reconocimiento historico que los gigantes del top. Prioriza crecimiento y menor huella de visitas totales.",
    items: [
      { title: "Attack on Titan Revolution", metric: "58K jugando ahora", meta: "900.9M visitas", context: "Top 20 actual y todavia debajo de 1B visitas" },
      { title: "Hypershot", metric: "26K jugando ahora", meta: "984M visitas", context: "Shooter en ascenso con perfil mas niche" },
      { title: "Anime Vanguards", metric: "16K jugando ahora", meta: "+36.7% tendencia", context: "Tower defense anime con subida porcentual fuerte" },
      { title: "Anime Story", metric: "24K jugando ahora", meta: "29.4M visitas", context: "Muy poca huella historica para el trafico actual" }
    ]
  }
];
const categoryFilters = document.getElementById("categoryFilters");
const gamesGrid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");
const clearBtn = document.getElementById("clearBtn");
const favoritesFilterBtn = document.getElementById("favoritesFilterBtn");
const emptyState = document.getElementById("emptyState");
const cardTemplate = document.getElementById("cardTemplate");
const themeToggle = document.getElementById("themeToggle");
const trendSections = document.getElementById("trendSections");
const trendSectionTemplate = document.getElementById("trendSectionTemplate");
const viewTabs = document.querySelectorAll(".view-tab");
const wikiView = document.getElementById("wikiView");
const radarView = document.getElementById("radarView");
const gameModal = document.getElementById("gameModal");
const modalPanel = gameModal.querySelector(".modal-panel");
const modalImage = document.getElementById("modalImage");
const modalImageFallback = document.getElementById("modalImageFallback");
const modalFallbackInitials = document.getElementById("modalFallbackInitials");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalRobloxLink = document.getElementById("modalRobloxLink");
const modalFavoriteBtn = document.getElementById("modalFavoriteBtn");
const modalBadges = document.getElementById("modalBadges");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");
const modalEggs = document.getElementById("modalEggs");
const modalItems = document.getElementById("modalItems");
const modalItemHowto = document.getElementById("modalItemHowto");

let selectedCategory = "Todas";
let searchText = "";
let showFavoritesOnly = false;
let activeView = "wiki";
let activeGameTitle = "";
let modalCloseTimer = null;
let favoriteTitles = new Set();
const homeGameLimit = 12;
const suggestionLimit = 6;
const favoritesStorageKey = "robloxWikiFavorites";

function loadFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem(favoritesStorageKey) || "[]");
    favoriteTitles = new Set(Array.isArray(stored) ? stored : []);
  } catch {
    favoriteTitles = new Set();
  }
}

function saveFavorites() {
  localStorage.setItem(favoritesStorageKey, JSON.stringify([...favoriteTitles]));
}

function isFavorite(title) {
  return favoriteTitles.has(title);
}

function updateFavoriteButton(button, game) {
  const pressed = isFavorite(game.title);
  button.setAttribute("aria-pressed", String(pressed));
  button.setAttribute("aria-label", pressed ? `Quitar ${game.title} de favoritos` : `Marcar ${game.title} como favorito`);
  button.querySelector("span").textContent = pressed ? "★" : "☆";
}

function syncFavoritesFilterButton() {
  favoritesFilterBtn.setAttribute("aria-pressed", String(showFavoritesOnly));
  favoritesFilterBtn.textContent = showFavoritesOnly ? `Favoritos (${favoriteTitles.size})` : "Favoritos";
}

function toggleFavorite(game) {
  if (isFavorite(game.title)) {
    favoriteTitles.delete(game.title);
  } else {
    favoriteTitles.add(game.title);
  }

  saveFavorites();
  syncFavoritesFilterButton();

  if (activeGameTitle === game.title) {
    updateFavoriteButton(modalFavoriteBtn, game);
  }

  renderGames();

  if (searchText) {
    renderSearchSuggestions();
  }
}

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
  const hasCategoryFilter = selectedCategory !== "Todas";
  let matches = games.filter((game) => {
    return selectedCategory === "Todas" || game.category === selectedCategory;
  });

  if (showFavoritesOnly) {
    matches = matches.filter((game) => isFavorite(game.title));
  }

  if (!hasCategoryFilter && !showFavoritesOnly) {
    return matches.slice(0, homeGameLimit);
  }

  return matches;
}

function searchableText(game) {
  const badges = (game.badges || []).join(" ");
  const items = (game.items || []).map((item) => `${item.name} ${item.howTo}`).join(" ");
  const eggs = (game.easterEggs || []).join(" ");
  return `${game.title} ${game.category} ${game.creator} ${game.short} ${game.longDescription} ${badges} ${items} ${eggs}`.toLowerCase();
}

function suggestedGames() {
  const query = searchText.toLowerCase();
  if (!query) {
    return [];
  }

  return games
    .filter((game) => searchableText(game).includes(query))
    .sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      const aStarts = aTitle.startsWith(query) ? 0 : 1;
      const bStarts = bTitle.startsWith(query) ? 0 : 1;
      return aStarts - bStarts || aTitle.localeCompare(bTitle);
    })
    .slice(0, suggestionLimit);
}

function hideSearchSuggestions() {
  searchSuggestions.classList.add("hidden");
  searchSuggestions.innerHTML = "";
  searchInput.setAttribute("aria-expanded", "false");
}

function renderSearchSuggestions() {
  const suggestions = suggestedGames();
  searchSuggestions.innerHTML = "";

  if (suggestions.length === 0) {
    hideSearchSuggestions();
    return;
  }

  suggestions.forEach((game) => {
    const suggestion = document.createElement("div");
    suggestion.className = "suggestion-item";
    suggestion.setAttribute("role", "option");
    suggestion.tabIndex = 0;
    const shouldShowThumb = game.image;
    suggestion.innerHTML = `
      ${shouldShowThumb ? `<img class="suggestion-thumb" src="${game.image}" alt="${game.title} portada" loading="lazy">` : ""}
      <span class="suggestion-copy">
        <span class="suggestion-title">${game.title}</span>
        <span class="suggestion-meta">${game.category} | ${game.short}</span>
      </span>
      <button class="favorite-btn suggestion-favorite-btn" type="button" aria-label="Marcar como favorito" aria-pressed="false">
        <span aria-hidden="true">☆</span>
      </button>
    `;
    const favoriteBtn = suggestion.querySelector(".suggestion-favorite-btn");
    updateFavoriteButton(favoriteBtn, game);

    favoriteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(game);
    });

    favoriteBtn.addEventListener("keydown", (event) => {
      event.stopPropagation();
    });

    suggestion.addEventListener("click", () => {
      searchText = "";
      searchInput.value = "";
      hideSearchSuggestions();
      scrollToGame(game.title);
    });

    suggestion.addEventListener("keydown", (event) => {
      if (event.target.closest(".suggestion-favorite-btn")) {
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        searchText = "";
        searchInput.value = "";
        hideSearchSuggestions();
        scrollToGame(game.title);
      }
    });

    searchSuggestions.appendChild(suggestion);
  });

  searchSuggestions.classList.remove("hidden");
  searchInput.setAttribute("aria-expanded", "true");
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

function robloxGameUrl(game) {
  const slug = game.title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `https://www.roblox.com/games/${game.placeId}/${slug}`;
}

function closeGameModal() {
  gameModal.setAttribute("aria-hidden", "true");
  activeGameTitle = "";

  if (gameModal.classList.contains("hidden") || gameModal.classList.contains("is-closing")) {
    return;
  }

  gameModal.classList.add("is-closing");
  modalCloseTimer = window.setTimeout(() => {
    gameModal.classList.add("hidden");
    gameModal.classList.remove("is-closing");
    document.body.classList.remove("modal-open");
    modalCloseTimer = null;
  }, 160);
}

function openGameModal(game) {
  if (modalCloseTimer) {
    window.clearTimeout(modalCloseTimer);
    modalCloseTimer = null;
  }

  activeGameTitle = game.title;
  modalFallbackInitials.textContent = initialsFromTitle(game.title);
  modalImage.src = game.image || "";
  modalImage.alt = `${game.title} - portada del juego`;
  modalImageFallback.classList.toggle("is-visible", !game.image);

  modalCategory.textContent = game.category;
  modalTitle.textContent = game.title;
  updateFavoriteButton(modalFavoriteBtn, game);
  const showRobloxLink = game.placeId;
  modalRobloxLink.classList.toggle("hidden", !showRobloxLink);
  modalRobloxLink.href = showRobloxLink ? robloxGameUrl(game) : "#";
  modalMeta.textContent = `Categoria: ${game.category} | Creador: ${game.creator} | Ano: ${game.year}`;
  modalDescription.textContent = game.longDescription;

  modalBadges.innerHTML = "";
  (game.badges || []).forEach((badge) => {
    const badgeEl = document.createElement("span");
    badgeEl.className = "game-badge";
    badgeEl.textContent = badge;
    modalBadges.appendChild(badgeEl);
  });

  modalEggs.innerHTML = "";
  game.easterEggs.forEach((egg) => {
    const li = document.createElement("li");
    li.textContent = egg;
    modalEggs.appendChild(li);
  });

  modalItems.innerHTML = "";
  modalItemHowto.textContent = "Haz click en un item para ver como conseguirlo.";
  game.items.forEach((item) => {
    const itemBtn = document.createElement("button");
    itemBtn.type = "button";
    itemBtn.className = "item-chip";
    itemBtn.innerHTML = `<span class="item-icon">${item.icon}</span><span>${item.name}</span>`;
    itemBtn.addEventListener("click", () => {
      modalItems.querySelectorAll(".item-chip").forEach((chip) => chip.classList.remove("active"));
      itemBtn.classList.add("active");
      modalItemHowto.textContent = `${item.name}: ${item.howTo}`;
    });
    modalItems.appendChild(itemBtn);
  });

  gameModal.classList.remove("hidden", "is-closing");
  gameModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modalPanel.focus());
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
    const favoriteBtn = card.querySelector(".favorite-btn");
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

    card.setAttribute("aria-label", `Ver detalle de ${game.title}`);
    card.classList.toggle("is-selected", activeGameTitle === game.title);
    updateFavoriteButton(favoriteBtn, game);

    favoriteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(game);
    });

    card.addEventListener("click", () => openGameModal(game));
    card.addEventListener("keydown", (event) => {
      if (event.target.closest(".favorite-btn")) {
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openGameModal(game);
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
  hideSearchSuggestions();
  showFavoritesOnly = false;
  selectedCategory = "Todas";
  syncFavoritesFilterButton();
  setActiveView("wiki");
  buildFilters();
  renderGames();

  requestAnimationFrame(() => {
    const targetCard = [...gamesGrid.querySelectorAll(".game-card")].find((card) => {
      return card.querySelector(".game-title")?.textContent === title;
    });
    targetCard?.scrollIntoView({ behavior: "smooth", block: "center" });
    openGameModal(game);
  });
}

function renderTrendSections() {
  trendSections.innerHTML = "";

  trendSectionsData
    .filter((section) => section.id === activeView)
    .forEach((section) => {
    const isTopMonth = section.id === "top-mes";
    const card = trendSectionTemplate.content.firstElementChild.cloneNode(true);
    card.classList.toggle("top-month-board", isTopMonth);
    card.querySelector(".trend-kicker").textContent = section.kicker;
    card.querySelector(".trend-title").textContent = section.title;
    card.querySelector(".trend-note").textContent = section.note;
    card.querySelector(".trend-description").textContent = section.description;

    const list = card.querySelector(".trend-list");
    list.classList.toggle("top-month-list", isTopMonth);
    section.items.forEach((item, index) => {
      const linkedGame = gameByTitle(item.title);
      const thumbSrc = linkedGame?.image || "";
      const thumbInitials = initialsFromTitle(item.title);
      const trendItem = document.createElement(isTopMonth ? "article" : "button");
      if (!isTopMonth) {
        trendItem.type = "button";
      }
      trendItem.className = isTopMonth ? "trend-item top-month-item" : "trend-item";
      trendItem.tabIndex = 0;
      trendItem.setAttribute("role", "button");
      trendItem.setAttribute("aria-label", `Ver detalle de ${item.title}`);

      trendItem.innerHTML = isTopMonth ? `
        <div class="top-month-media">
          <span class="top-month-rank">#${index + 1}</span>
          <img class="trend-thumb top-month-thumb" src="${thumbSrc}" alt="${item.title} portada" loading="lazy">
          <span class="trend-thumb-fallback top-month-thumb-fallback">${thumbInitials}</span>
          <button class="favorite-btn top-month-favorite-btn" type="button" aria-label="Marcar como favorito" aria-pressed="false">
            <span aria-hidden="true">☆</span>
          </button>
        </div>
        <div class="top-month-copy">
          <div class="top-month-title-row">
            <div>
              <strong>${item.title}</strong>
              <span>${linkedGame?.category || "Roblox"}</span>
            </div>
            <span class="trend-meta">${item.meta}</span>
          </div>
          <p class="trend-context">${item.context}</p>
          <div class="top-month-stats">
            <span><b>${item.metric}</b><small>Jugadores</small></span>
            <span><b>${item.likes || "N/D"}</b><small>Likes</small></span>
            <span><b>${item.dislikes || "N/D"}</b><small>Dislikes</small></span>
          </div>
        </div>
      ` : `
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
      const thumb = trendItem.querySelector(".trend-thumb");
      const thumbFallback = trendItem.querySelector(".trend-thumb-fallback");

      thumb.addEventListener("error", () => thumbFallback.classList.add("is-visible"), { once: true });
      thumb.addEventListener("load", () => thumbFallback.classList.remove("is-visible"), { once: true });

      if (!thumbSrc) {
        thumbFallback.classList.add("is-visible");
      }

      if (isTopMonth && linkedGame) {
        const favoriteBtn = trendItem.querySelector(".top-month-favorite-btn");
        updateFavoriteButton(favoriteBtn, linkedGame);

        favoriteBtn.addEventListener("click", (event) => {
          event.stopPropagation();
          toggleFavorite(linkedGame);
          renderTrendSections();
        });
      }

      trendItem.addEventListener("click", () => scrollToGame(item.title));
      trendItem.addEventListener("keydown", (event) => {
        if (event.target.closest(".favorite-btn")) {
          return;
        }

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          scrollToGame(item.title);
        }
      });
      list.appendChild(trendItem);
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
  favoritesFilterBtn.disabled = !isWiki;
  categoryFilters.style.display = isWiki ? "flex" : "none";

  viewTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === viewName);
  });

  if (!isWiki) {
    hideSearchSuggestions();
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

modalImage.addEventListener("error", () => modalImageFallback.classList.add("is-visible"));
modalImage.addEventListener("load", () => modalImageFallback.classList.remove("is-visible"));

gameModal.querySelectorAll("[data-modal-close]").forEach((closeControl) => {
  closeControl.addEventListener("click", closeGameModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !gameModal.classList.contains("hidden")) {
    closeGameModal();
  }
});

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
  renderSearchSuggestions();
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideSearchSuggestions();
    return;
  }

  if (event.key === "Enter") {
    const firstSuggestion = suggestedGames()[0];
    if (!firstSuggestion) {
      return;
    }

    event.preventDefault();
    searchText = "";
    searchInput.value = "";
    hideSearchSuggestions();
    scrollToGame(firstSuggestion.title);
  }
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  searchText = "";
  hideSearchSuggestions();
  showFavoritesOnly = false;
  selectedCategory = "Todas";
  syncFavoritesFilterButton();
  buildFilters();
  renderGames();
});

favoritesFilterBtn.addEventListener("click", () => {
  showFavoritesOnly = !showFavoritesOnly;
  syncFavoritesFilterButton();
  renderGames();
});

modalFavoriteBtn.addEventListener("click", () => {
  const game = gameByTitle(activeGameTitle);
  if (game) {
    toggleFavorite(game);
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-box")) {
    hideSearchSuggestions();
  }
});

viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveView(tab.dataset.view);
  });
});

function init() {
  loadFavorites();
  initTheme();
  syncFavoritesFilterButton();
  buildFilters();
  renderGames();
  setActiveView("wiki");
}

init();
