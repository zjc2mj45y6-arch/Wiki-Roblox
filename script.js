const games = [
  {
    title: "Brookhaven RP",
    placeId: 4924922222,
    image: "Imagenes/brookhaven-rp-cover.png",
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
    image: "Imagenes/adopt-me-cover.png",
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
    image: "Imagenes/blox-fruits-cover.png",
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
    image: "Imagenes/tower-of-hell-cover.png",
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
    title: "Tower Defense Simulator",
    placeId: 3260590327,
    image: "Imagenes/tower-defense-simulator-cover.png",
    category: "Tower Defense",
    short: "Tower defense cooperativo donde colocas torres para frenar oleadas de enemigos.",
    longDescription: "Tower Defense Simulator es una experiencia de estrategia en Roblox donde juegas solo o en equipo, colocas torres, mejoras defensas y sobrevives oleadas cada vez mas fuertes hasta derrotar jefes.",
    creator: "Paradoxum Games",
    year: 2019,
    easterEggs: [
      "Algunos mapas favorecen rutas de colocacion poco obvias para exprimir mejor el rango de las torres.",
      "Los eventos temporales suelen traer enemigos, recompensas y torres que no estan disponibles todo el ano."
    ],
    items: [
      { name: "Torre", icon: "T", howTo: "Se compra o desbloquea con monedas, gemas, nivel, eventos o pases segun el tipo de torre." },
      { name: "Skincrate", icon: "C", howTo: "Se obtiene en tienda, recompensas o eventos para desbloquear skins cosmeticas de torres." },
      { name: "Gemas", icon: "G", howTo: "Se ganan principalmente en modos avanzados y sirven para comprar torres especiales." }
    ],
    badges: ["Top del mes"]
  },
  {
    title: "Arsenal",
    placeId: 286090429,
    image: "Imagenes/arsenal-cover-original-style.png",
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
    image: "Imagenes/murder-mystery-2-cover.png",
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
    image: "Imagenes/pet-simulator-x-cover.png",
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
    image: "Imagenes/doors-cover.png",
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
    image: "Imagenes/rivals-cover.png",
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
    image: "Imagenes/jujutsu-shenanigans-cover.png",
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
    image: "Imagenes/99-nights-forest-cover.png",
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
    image: "Imagenes/fish-it-cover.png",
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
    placeId: 8481844229,
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
    placeId: 17516596118,
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
    placeId: 9417197334,
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
  },
  {
    title: "MeepCity",
    placeId: 370731277,
    image: "",
    category: "Roleplay",
    short: "Mundo social clasico con casas, fiestas, minijuegos y personalizacion.",
    longDescription: "MeepCity es uno de los juegos sociales historicos de Roblox. Se centra en decorar casas, reunirse con amigos, cuidar meeps y participar en actividades casuales.",
    creator: "alexnewtron",
    year: 2016,
    easterEggs: [
      "Algunas casas usan decoraciones para crear salas secretas o zonas tematicas.",
      "Los eventos y fiestas de jugadores pueden esconder minijuegos improvisados."
    ],
    items: [
      { name: "Meep", icon: "*", howTo: "Compra o adopta un meep dentro del sistema del juego y personalizalo con accesorios." },
      { name: "Muebles", icon: "#", howTo: "Se consiguen en tiendas internas usando monedas ganadas al jugar." }
    ]
  },
  {
    title: "Jailbreak",
    placeId: 606849621,
    image: "",
    category: "Accion",
    short: "Policias y criminales compiten en robos, persecuciones y escapes.",
    longDescription: "Jailbreak mezcla mundo abierto, vehiculos, atracos y roles de policia o criminal. El objetivo cambia segun tu equipo: escapar, robar, capturar o proteger la ciudad.",
    creator: "Badimo",
    year: 2017,
    easterEggs: [
      "Algunas rutas de escape son mas rapidas si conoces tuneles y puntos elevados.",
      "Los eventos grandes suelen dejar pistas visuales antes de una actualizacion."
    ],
    items: [
      { name: "Vehiculo", icon: "V", howTo: "Se compra con dinero del juego o se desbloquea en ubicaciones especificas del mapa." },
      { name: "Keycard", icon: "K", howTo: "Se obtiene robando a un policia, escapando con ayuda o encontrandola en situaciones concretas." }
    ],
    badges: ["Clasico"]
  },
  {
    title: "Piggy",
    placeId: 4623386862,
    image: "",
    category: "Terror",
    short: "Terror por capitulos con llaves, puzzles y persecucion constante.",
    longDescription: "Piggy combina supervivencia, escape room y narrativa por capitulos. Los jugadores deben encontrar objetos, abrir zonas y escapar antes de ser atrapados.",
    creator: "MiniToon",
    year: 2020,
    easterEggs: [
      "Muchos mapas tienen notas o detalles que conectan con la historia principal.",
      "Algunos finales requieren completar pasos especificos que no son obvios en la primera partida."
    ],
    items: [
      { name: "Llave", icon: "K", howTo: "Busca por habitaciones y usa el color correcto en la puerta correspondiente." },
      { name: "Herramienta", icon: "T", howTo: "Aparece en puntos del mapa y desbloquea mecanismos como tablas, generadores o cajas." }
    ]
  },
  {
    title: "Natural Disaster Survival",
    placeId: 189707,
    image: "",
    category: "Supervivencia",
    short: "Sobrevive desastres aleatorios en mapas pequenos y caoticos.",
    longDescription: "Natural Disaster Survival es un clasico donde cada ronda presenta un mapa y uno o mas desastres. La clave es leer el peligro y posicionarte bien antes de que sea tarde.",
    creator: "Stickmasterluke",
    year: 2008,
    easterEggs: [
      "El lobby permite ver la isla y anticipar parte del caos de cada ronda.",
      "Algunos mapas tienen estructuras que parecen seguras pero caen rapido con terremotos o tornados."
    ],
    items: [
      { name: "Globo", icon: "O", howTo: "Se consigue como item de tienda para saltar mas alto y moverte con ventaja." },
      { name: "Manzana", icon: "A", howTo: "Se obtiene como item de curacion para recuperar vida durante rondas dificiles." }
    ],
    badges: ["Clasico"]
  },
  {
    title: "Work at a Pizza Place",
    placeId: 192800,
    image: "",
    category: "Simulacion",
    short: "Trabaja en una pizzeria, gana dinero y mejora tu casa.",
    longDescription: "Work at a Pizza Place es una experiencia clasica de trabajos cooperativos. Puedes cocinar, entregar pedidos, atender clientes, manejar suministros y decorar tu casa.",
    creator: "Dued1",
    year: 2008,
    easterEggs: [
      "Los roles menos populares pueden acelerar mucho el flujo de pedidos si alguien los cubre bien.",
      "La decoracion de casas permite crear espacios secretos o tematicos con creatividad."
    ],
    items: [
      { name: "Cheque", icon: "$", howTo: "Se gana trabajando en cualquier rol y se usa para comprar muebles o mejoras." },
      { name: "Mueble", icon: "#", howTo: "Compralo en la tienda de muebles y colocalo dentro de tu casa." }
    ],
    badges: ["Clasico"]
  },
  {
    title: "Royale High",
    placeId: 735030788,
    image: "",
    category: "Roleplay",
    short: "Roleplay fantastico escolar con moda, clases, eventos y coleccion.",
    longDescription: "Royale High combina vida escolar fantastica, personalizacion de avatar, misiones, eventos de temporada y coleccion de accesorios.",
    creator: "callmehbob",
    year: 2017,
    easterEggs: [
      "Los eventos de temporada suelen esconder cofres o misiones por mapas especiales.",
      "Algunos accesorios tienen combinaciones visuales que cambian por color o estilo."
    ],
    items: [
      { name: "Diamantes", icon: "D", howTo: "Se ganan jugando, asistiendo a actividades o recogiendo recompensas en mapas." },
      { name: "Accesorio", icon: "+", howTo: "Se consigue en tienda, eventos, cofres o intercambios con otros jugadores." }
    ]
  },
  {
    title: "Welcome to Bloxburg",
    placeId: 185655149,
    image: "",
    category: "Roleplay",
    short: "Construccion, trabajo y vida familiar en una ciudad residencial.",
    longDescription: "Welcome to Bloxburg se centra en construir casas, trabajar para ganar dinero, mejorar habilidades y crear historias de vida cotidiana con otros jugadores.",
    creator: "Bloxburg Development",
    year: 2014,
    easterEggs: [
      "Muchos jugadores crean habitaciones ocultas usando paredes, sotanos y trucos de construccion.",
      "Algunas tareas de trabajo se vuelven mas eficientes si optimizas rutas y tiempos."
    ],
    items: [
      { name: "Plano de casa", icon: "H", howTo: "Usa el modo construir para colocar paredes, pisos, muebles y decoracion." },
      { name: "Dinero", icon: "$", howTo: "Se obtiene trabajando en empleos y subiendo habilidades de trabajo." }
    ]
  },
  {
    title: "Bee Swarm Simulator",
    placeId: 1537690962,
    image: "",
    category: "Simulacion",
    short: "Recolecta polen, crea miel y mejora tu enjambre de abejas.",
    longDescription: "Bee Swarm Simulator es un juego de progresion donde recolectas polen, conviertes miel, desbloqueas zonas y mejoras abejas con habilidades diferentes.",
    creator: "Onett",
    year: 2018,
    easterEggs: [
      "Algunas zonas tienen tokens y rutas de farmeo que cambian mucho la eficiencia.",
      "Los eventos de temporada suelen traer misiones largas con recompensas unicas."
    ],
    items: [
      { name: "Huevo", icon: "E", howTo: "Se compra en tiendas, se gana en misiones o aparece como recompensa especial." },
      { name: "Amuleto", icon: "M", howTo: "Se obtiene completando retos o derrotando enemigos concretos." }
    ]
  },
  {
    title: "Build A Boat For Treasure",
    placeId: 537413528,
    image: "",
    category: "Construccion",
    short: "Construye barcos creativos para cruzar obstaculos y ganar tesoros.",
    longDescription: "Build A Boat For Treasure premia la creatividad y la fisica. Construyes una nave con bloques, atraviesas etapas peligrosas y usas recompensas para mejorar tus diseños.",
    creator: "Chillz Studios",
    year: 2016,
    easterEggs: [
      "Algunos mecanismos con bisagras y motores permiten crear vehiculos muy distintos a barcos.",
      "Los codigos y eventos suelen dar bloques raros para builds especiales."
    ],
    items: [
      { name: "Bloque raro", icon: "B", howTo: "Se consigue en cofres, codigos, eventos o comprando paquetes del juego." },
      { name: "Motor", icon: "M", howTo: "Aparece en cofres o recompensas y sirve para builds con movimiento." }
    ]
  },
  {
    title: "Theme Park Tycoon 2",
    placeId: 69184822,
    image: "",
    category: "Tycoon",
    short: "Diseña parques de atracciones con montanas rusas, tiendas y decoracion.",
    longDescription: "Theme Park Tycoon 2 permite construir parques completos, gestionar visitantes, crear montanas rusas personalizadas y optimizar la experiencia para ganar dinero.",
    creator: "Den_S",
    year: 2012,
    easterEggs: [
      "Las construcciones avanzadas permiten ocultar recorridos y crear zonas tematicas muy detalladas.",
      "La satisfaccion de visitantes mejora si equilibras decoracion, comida, juegos y limpieza."
    ],
    items: [
      { name: "Montana rusa", icon: "R", howTo: "Se construye desde el menu de atracciones colocando vias y estaciones." },
      { name: "Decoracion", icon: "#", howTo: "Compra props y piezas para subir el atractivo visual del parque." }
    ]
  },
  {
    title: "Evade",
    placeId: 9872472334,
    image: "",
    category: "Supervivencia",
    short: "Corre, revive companeros y escapa de entidades en rondas rapidas.",
    longDescription: "Evade es una experiencia de supervivencia por rondas donde los jugadores deben moverse rapido, evitar nextbots, rescatar aliados y aprovechar mapas complejos.",
    creator: "Hexagon Development Community",
    year: 2022,
    easterEggs: [
      "Algunos mapas tienen rutas verticales que ayudan a cortar persecuciones.",
      "Los consumibles y utilidades pueden salvar una ronda si se usan en el momento justo."
    ],
    items: [
      { name: "Cola", icon: "C", howTo: "Se compra como consumible para ganar velocidad temporal durante una persecucion." },
      { name: "Radar", icon: "R", howTo: "Se obtiene en tienda o loadout para detectar amenazas y moverte con mas informacion." }
    ]
  },
  {
    title: "Rainbow Friends",
    placeId: 7991339063,
    image: "",
    category: "Terror",
    short: "Terror por capitulos con monstruos de colores, misiones y sigilo.",
    longDescription: "Rainbow Friends mezcla terror ligero, exploracion y objetivos cooperativos. Cada criatura tiene patrones distintos y obliga a cambiar la forma de moverte.",
    creator: "Roy & Charcle",
    year: 2021,
    easterEggs: [
      "Los sonidos ayudan a reconocer que criatura esta cerca antes de verla.",
      "Algunas zonas de mapa son mejores para esconderse, pero no siempre sirven contra todos los enemigos."
    ],
    items: [
      { name: "Caja", icon: "X", howTo: "Usala para esconderte de ciertos enemigos cuando estes en peligro." },
      { name: "Objeto de mision", icon: "!", howTo: "Se encuentra explorando y se entrega en la zona indicada para avanzar la noche." }
    ]
  },
  {
    title: "BedWars",
    placeId: 6872265039,
    image: "",
    category: "Estrategia",
    short: "Defiende tu cama, compra mejoras y elimina equipos rivales.",
    longDescription: "BedWars es un juego competitivo por equipos donde recolectas recursos, proteges tu base, mejoras equipo y atacas a otros jugadores.",
    creator: "Easy.gg",
    year: 2021,
    easterEggs: [
      "La seleccion de kit cambia mucho tu rol dentro del equipo.",
      "El control de generadores puede decidir la partida antes de las peleas finales."
    ],
    items: [
      { name: "Kit", icon: "K", howTo: "Se desbloquea en rotaciones, battle pass, tienda o recompensas especiales." },
      { name: "Esmeralda", icon: "E", howTo: "Controla generadores centrales para comprar equipo avanzado." }
    ]
  },
  {
    title: "Blade Ball",
    placeId: 13772394625,
    image: "",
    category: "Accion",
    short: "Reflejos, habilidades y duelos donde una bola elimina al objetivo.",
    longDescription: "Blade Ball combina reflejos rapidos con habilidades especiales. Debes bloquear la bola en el momento correcto, usar poderes y sobrevivir a rivales cada vez mas agresivos.",
    creator: "Wiggity",
    year: 2023,
    easterEggs: [
      "Algunas habilidades funcionan mejor si esperas el rebote exacto antes de activarlas.",
      "Los modos temporales suelen cambiar la prioridad de habilidades y posicionamiento."
    ],
    items: [
      { name: "Habilidad", icon: "P", howTo: "Se desbloquea con monedas, spins, eventos o progreso de cuenta." },
      { name: "Espada", icon: "S", howTo: "Se consigue como cosmetico en cajas, pases o recompensas especiales." }
    ]
  },
  {
    title: "Creatures of Sonaria",
    placeId: 5233782396,
    image: "",
    category: "Supervivencia",
    short: "Sobrevive como criatura fantastica, crece, explora y domina ecosistemas.",
    longDescription: "Creatures of Sonaria es una experiencia de supervivencia biologica donde juegas como criaturas con dietas, habilidades, crecimiento y riesgos distintos.",
    creator: "Sonar Studios",
    year: 2020,
    easterEggs: [
      "Algunas criaturas tienen comportamientos o ventajas que no se entienden hasta probar su ciclo completo.",
      "Los eventos de temporada agregan especies y materiales que luego pueden volverse dificiles de conseguir."
    ],
    items: [
      { name: "Especie", icon: "S", howTo: "Se obtiene por gachas, eventos, misiones o intercambio con otros jugadores." },
      { name: "Material", icon: "M", howTo: "Se consigue durante eventos o explorando zonas concretas del mapa." }
    ]
  },
  {
    title: "The Mimic",
    placeId: 6243699076,
    image: "",
    category: "Terror",
    short: "Terror narrativo inspirado en leyendas con capitulos y exploracion.",
    longDescription: "The Mimic ofrece capitulos de terror con ambientacion oscura, puzzles, persecuciones y una historia inspirada en mitos y leyendas.",
    creator: "MUCDICH",
    year: 2021,
    easterEggs: [
      "Los escenarios contienen detalles narrativos que anticipan enemigos o giros de la historia.",
      "Algunos caminos parecen decorativos pero ayudan a entender mejor el mapa."
    ],
    items: [
      { name: "Linterna", icon: "L", howTo: "Usala para orientarte en zonas oscuras y detectar caminos importantes." },
      { name: "Llave", icon: "K", howTo: "Se encuentra explorando habitaciones y desbloquea puertas de progreso." }
    ]
  },
  {
    title: "Apeirophobia",
    placeId: 10277607801,
    image: "",
    category: "Terror",
    short: "Exploracion de backrooms con puzzles, niveles y entidades peligrosas.",
    longDescription: "Apeirophobia se basa en recorrer niveles inquietantes, resolver objetivos y evitar entidades mientras avanzas por espacios laberinticos.",
    creator: "Polaroid Studios",
    year: 2022,
    easterEggs: [
      "Los niveles tienen pistas visuales que ayudan a ubicar salidas o codigos.",
      "Algunas entidades se controlan mejor escuchando sus sonidos que mirandolas de frente."
    ],
    items: [
      { name: "Camara", icon: "C", howTo: "Sirve para explorar con mas cuidado y detectar detalles en zonas oscuras." },
      { name: "Codigo", icon: "N", howTo: "Se obtiene observando pistas del nivel y resolviendo el puzzle correspondiente." }
    ]
  },
  {
    title: "Restaurant Tycoon 2",
    placeId: 3398014311,
    image: "",
    category: "Tycoon",
    short: "Construye y administra un restaurante con cocina, clientes y decoracion.",
    longDescription: "Restaurant Tycoon 2 te permite crear un restaurante, contratar personal, cocinar recetas, ampliar el local y mejorar la experiencia de clientes.",
    creator: "Ultraw",
    year: 2019,
    easterEggs: [
      "La distribucion de mesas y cocina afecta mucho la rapidez del servicio.",
      "Algunas recetas y estilos de restaurante cambian el tipo de experiencia que puedes crear."
    ],
    items: [
      { name: "Receta", icon: "R", howTo: "Se desbloquea progresando, comprando mejoras o expandiendo menus." },
      { name: "Empleado", icon: "E", howTo: "Contratalo desde la gestion del restaurante para automatizar tareas." }
    ]
  },
  {
    title: "Sonic Speed Simulator",
    placeId: 9049840490,
    image: "",
    category: "Carreras",
    short: "Corre por mundos coloridos, sube velocidad y desbloquea personajes.",
    longDescription: "Sonic Speed Simulator es una experiencia de velocidad y coleccion donde corres, subes nivel, completas eventos y desbloqueas personajes o skins.",
    creator: "Gamefam Studios",
    year: 2022,
    easterEggs: [
      "Los eventos temporales suelen esconder rutas de farmeo mejores para completar objetivos rapido.",
      "Algunos recorridos tienen atajos que aprovechan saltos y velocidad acumulada."
    ],
    items: [
      { name: "Skin", icon: "S", howTo: "Se desbloquea completando eventos, misiones o recompensas especiales." },
      { name: "Trail", icon: "T", howTo: "Se consigue por coleccion, tienda o eventos y modifica efectos al correr." }
    ]
  },
  {
    title: "Slap Battles",
    placeId: 6403373529,
    image: "",
    category: "Accion",
    short: "Arena caotica de guantes con habilidades raras y mucho humor.",
    longDescription: "Slap Battles gira alrededor de desbloquear guantes con poderes distintos y usarlos en arenas llenas de situaciones impredecibles.",
    creator: "Tencelll",
    year: 2021,
    easterEggs: [
      "Varios guantes secretos requieren pasos especificos o badges dificiles.",
      "Algunas habilidades tienen interacciones raras con mapas, bordes y otros poderes."
    ],
    items: [
      { name: "Guante", icon: "G", howTo: "Se desbloquea acumulando slaps, consiguiendo badges o completando desafios concretos." },
      { name: "Badge", icon: "B", howTo: "Se obtiene al cumplir condiciones especiales dentro de partidas o eventos." }
    ]
  },
  {
    title: "Michaels Zombies",
    placeId: 8054462345,
    image: "",
    category: "Shooter",
    short: "Supervivencia por rondas contra zombies con armas, perks y equipo.",
    longDescription: "Michaels Zombies es un shooter cooperativo de rondas donde sobrevives oleadas, compras armas, abres zonas y coordinas con tu equipo.",
    creator: "MZ Community",
    year: 2021,
    easterEggs: [
      "Algunos mapas esconden pasos de objetivos secretos para jugadores avanzados.",
      "La gestion de puertas y economia es clave para aguantar rondas altas."
    ],
    items: [
      { name: "Perk", icon: "P", howTo: "Se compra dentro de la partida para mejorar vida, velocidad o combate." },
      { name: "Caja misteriosa", icon: "?", howTo: "Usa dinero de la ronda para obtener armas aleatorias." }
    ]
  },
  {
    title: "Steal a Brainrot",
    image: "",
    category: "Simulacion",
    short: "Juego viral de coleccion y robo de brainrots con progresion rapida.",
    longDescription: "Steal a Brainrot se volvio uno de los fenomenos modernos de Roblox por su mezcla de coleccion, riesgo y competencia por recursos raros.",
    creator: "Brainrot Games",
    year: "N/D",
    easterEggs: ["Algunas bases usan rutas de entrada poco obvias.", "Los eventos temporales suelen cambiar que brainrots valen mas."],
    items: [{ name: "Brainrot raro", icon: "B", howTo: "Se consigue jugando, comprando mejoras o robando en momentos seguros." }, { name: "Base", icon: "H", howTo: "Mejorala para proteger mejor tu coleccion." }],
    badges: ["Top global"]
  },
  {
    title: "Grow a Garden",
    image: "",
    category: "Simulacion",
    short: "Cultiva, mejora semillas y vende cosechas en uno de los mayores hits recientes.",
    longDescription: "Grow a Garden combina farming simple, progresion constante y eventos masivos que lo convirtieron en una referencia de concurrencia dentro de Roblox.",
    creator: "The Garden Game",
    year: 2025,
    easterEggs: ["Algunas semillas rinden mejor durante eventos especiales.", "La organizacion del jardin ayuda a farmear mas rapido."],
    items: [{ name: "Semilla rara", icon: "S", howTo: "Comprala o consiguela en rotaciones y eventos." }, { name: "Cosecha", icon: "C", howTo: "Planta, espera el crecimiento y vende cuando tenga buen valor." }],
    badges: ["Top global", "Top del mes"]
  },
  {
    title: "All Star Tower Defense",
    image: "",
    category: "Tower Defense",
    short: "Tower defense anime con unidades coleccionables y mapas por oleadas.",
    longDescription: "All Star Tower Defense es uno de los tower defense anime mas conocidos de Roblox, centrado en invocar unidades, evolucionarlas y superar modos cada vez mas exigentes.",
    creator: "Top Down Games",
    year: 2020,
    easterEggs: ["Algunas combinaciones de unidades cambian mucho el resultado.", "Los eventos suelen traer unidades limitadas."],
    items: [{ name: "Unidad", icon: "U", howTo: "Se invoca usando recursos del juego." }, { name: "Gema", icon: "G", howTo: "Se gana en misiones, codigos y recompensas." }],
    badges: ["Top historico"]
  },
  {
    title: "Dandy's World",
    image: "",
    category: "Terror",
    short: "Supervivencia cooperativa con personajes, maquinas y amenazas por piso.",
    longDescription: "Dandy's World mezcla terror ligero, cooperacion y progresion por runs donde los jugadores deben completar objetivos mientras evitan enemigos.",
    creator: "BlushCrunch Studio",
    year: 2024,
    easterEggs: ["Cada personaje puede cambiar la estrategia del equipo.", "Los pisos avanzados tienen patrones mas faciles de leer si escuchas sonidos."],
    items: [{ name: "Toon", icon: "T", howTo: "Se desbloquea con progreso y recursos internos." }, { name: "Trinket", icon: "R", howTo: "Equipa mejoras para adaptar tu estilo de run." }],
    badges: ["Top global"]
  },
  {
    title: "Toilet Tower Defense",
    image: "",
    category: "Tower Defense",
    short: "Defensa por oleadas basada en unidades y upgrades de estilo meme.",
    longDescription: "Toilet Tower Defense se hizo enorme por su formato accesible, unidades coleccionables y ritmo constante de actualizaciones.",
    creator: "Telanthric Development",
    year: 2023,
    easterEggs: ["Algunas unidades rinden mejor en mapas con curvas largas.", "Los eventos pueden cambiar el valor de tradeo de unidades."],
    items: [{ name: "Unidad", icon: "U", howTo: "Se consigue mediante summons, cajas o tradeos." }, { name: "Moneda", icon: "$", howTo: "Se gana jugando partidas y completando retos." }],
    badges: ["Top historico"]
  },
  {
    title: "Flee the Facility",
    image: "",
    category: "Terror",
    short: "Escape asimetrico donde hackeas computadoras y huyes del cazador.",
    longDescription: "Flee the Facility es un clasico de suspenso multijugador: los supervivientes cooperan para escapar mientras una bestia intenta capturarlos.",
    creator: "A.W. Apps",
    year: 2017,
    easterEggs: ["Algunos mapas tienen rutas de escape mas seguras.", "Cerrar puertas en el momento correcto puede salvar a un companero."],
    items: [{ name: "Martillo", icon: "H", howTo: "Se obtiene como cosmetico en cajas o eventos." }, { name: "Computadora", icon: "C", howTo: "Hackeala durante la ronda para abrir salidas." }],
    badges: ["Clasico"]
  },
  {
    title: "Livetopia",
    image: "",
    category: "Roleplay",
    short: "Roleplay de ciudad con casas, vehiculos y espacios sociales.",
    longDescription: "Livetopia es una experiencia de roleplay moderna centrada en vida urbana, personalizacion y exploracion casual con amigos.",
    creator: "Century Makers",
    year: 2021,
    easterEggs: ["Algunos edificios tienen zonas poco visibles para historias privadas.", "Las actualizaciones agregan lugares tematicos por temporada."],
    items: [{ name: "Casa", icon: "H", howTo: "Selecciona una propiedad desde el sistema del mapa." }, { name: "Vehiculo", icon: "V", howTo: "Usa el menu de transporte para moverte rapido." }],
    badges: ["Top historico"]
  },
  {
    title: "PLS DONATE",
    image: "",
    category: "Social",
    short: "Plazas sociales donde los jugadores crean stands y reciben donaciones.",
    longDescription: "PLS DONATE es una experiencia social centrada en stands, gamepasses y pequenas transacciones entre jugadores.",
    creator: "Quataun",
    year: 2022,
    easterEggs: ["Un stand bien disenado suele atraer mas visitas.", "Los eventos comunitarios pueden llenar servidores rapidamente."],
    items: [{ name: "Stand", icon: "S", howTo: "Reclama uno en el mapa y personalizalo." }, { name: "Gamepass", icon: "G", howTo: "Crealo fuera del juego y enlazalo para recibir donaciones." }],
    badges: ["Top historico"]
  },
  {
    title: "Forsaken",
    image: "",
    category: "Terror",
    short: "Horror multijugador con supervivientes, cazadores y objetivos por ronda.",
    longDescription: "Forsaken destaca dentro del terror reciente por su formato de rondas, personajes y tension constante entre escapar y completar objetivos.",
    creator: "Forsaken Dev Team",
    year: "N/D",
    easterEggs: ["Conocer rutas laterales mejora mucho la supervivencia.", "Algunos personajes funcionan mejor con equipos coordinados."],
    items: [{ name: "Personaje", icon: "P", howTo: "Se desbloquea con progreso o monedas internas." }, { name: "Objetivo", icon: "O", howTo: "Completalo durante la ronda para avanzar hacia la salida." }],
    badges: ["Top global"]
  },
  {
    title: "Blue Lock: Rivals",
    image: "",
    category: "Deportes",
    short: "Futbol anime competitivo con estilos, habilidades y partidos rapidos.",
    longDescription: "Blue Lock: Rivals combina futbol arcade con habilidades inspiradas en anime, duelos intensos y progresion de estilos.",
    creator: "Blue Lock Rivals Unofficial Fans",
    year: "N/D",
    easterEggs: ["Los estilos cambian mucho tu rol en el equipo.", "La posicion antes de usar habilidad decide muchas jugadas."],
    items: [{ name: "Estilo", icon: "S", howTo: "Se obtiene con spins o progreso interno." }, { name: "Flujo", icon: "F", howTo: "Usalo en momentos clave para definir jugadas." }],
    badges: ["Top global"]
  },
  {
    title: "Fisch",
    image: "",
    category: "Simulacion",
    short: "Pesca, exploracion y coleccion con zonas y especies raras.",
    longDescription: "Fisch es una experiencia de pesca muy popular donde explorar zonas, mejorar canas y completar colecciones es el centro del progreso.",
    creator: "Fisching",
    year: 2024,
    easterEggs: ["Ciertas especies aparecen mejor en zonas o momentos concretos.", "El clima puede cambiar el valor de una ruta de pesca."],
    items: [{ name: "Cana", icon: "R", howTo: "Comprala o desbloqueala al avanzar." }, { name: "Pez raro", icon: "F", howTo: "Pesca en zonas especiales con buen equipo." }],
    badges: ["Top global"]
  },
  {
    title: "BARRY'S PRISON RUN",
    image: "",
    category: "Obby",
    short: "Obby de escape de prision con obstaculos, persecuciones y humor.",
    longDescription: "BARRY'S PRISON RUN es un obby muy visitado donde avanzas por secciones de prision evitando trampas y enemigos.",
    creator: "PlatinumFalls",
    year: "N/D",
    easterEggs: ["Algunos obstaculos tienen rutas mas cortas si observas bien.", "Los modos de dificultad cambian el ritmo de cada zona."],
    items: [{ name: "Checkpoint", icon: "C", howTo: "Avanza por el recorrido para activarlos." }, { name: "Power-up", icon: "P", howTo: "Usalo para superar secciones concretas." }],
    badges: ["Top historico"]
  },
  {
    title: "King Legacy",
    image: "",
    category: "Aventura",
    short: "RPG de islas, frutas, espadas y jefes inspirado en anime pirata.",
    longDescription: "King Legacy es una aventura de progresion donde subes nivel, consigues frutas, mejoras armas y exploras mares con enemigos cada vez mas fuertes.",
    creator: "Sea King Games",
    year: 2019,
    easterEggs: ["Algunos NPC aparecen en islas menos visitadas.", "Los bosses pueden soltar armas o materiales raros."],
    items: [{ name: "Fruta", icon: "F", howTo: "Comprala, encuentrala o consiguela por eventos." }, { name: "Espada", icon: "S", howTo: "Se compra o cae de jefes especificos." }],
    badges: ["Top historico"]
  },
  {
    title: "Anime Defenders",
    image: "",
    category: "Tower Defense",
    short: "Tower defense anime con invocaciones, evoluciones y raids.",
    longDescription: "Anime Defenders se centra en invocar unidades, optimizar equipos y superar mapas con oleadas de dificultad creciente.",
    creator: "Small World Games x Anime Defenders",
    year: 2024,
    easterEggs: ["Las evoluciones pueden cambiar completamente una unidad.", "Los banners temporales suelen concentrar el mayor interes."],
    items: [{ name: "Unidad", icon: "U", howTo: "Invocala en banners usando gemas." }, { name: "Material", icon: "M", howTo: "Farmea raids y retos para evolucionar." }],
    badges: ["Top historico"]
  },
  {
    title: "3008",
    image: "",
    category: "Terror",
    short: "Sobrevive en una tienda infinita construyendo refugios y evitando empleados.",
    longDescription: "3008 es una experiencia de supervivencia inspirada en una tienda enorme donde recolectas comida, haces bases y sobrevives a las noches.",
    creator: "uglyburger0",
    year: 2019,
    easterEggs: ["Las bases altas suelen ser mas seguras si estan bien cerradas.", "Explorar de dia reduce el riesgo de perder recursos."],
    items: [{ name: "Comida", icon: "F", howTo: "Buscala en estanterias y guardala para la noche." }, { name: "Mueble", icon: "M", howTo: "Usalo para construir refugios improvisados." }],
    badges: ["Top historico"]
  },
  {
    title: "Break In",
    image: "",
    category: "Terror",
    short: "Historia cooperativa de supervivencia dentro de una casa bajo amenaza.",
    longDescription: "Break In mezcla narrativa, exploracion y defensa en una experiencia cooperativa donde cada jugador aporta a la supervivencia del grupo.",
    creator: "Cracky4",
    year: 2019,
    easterEggs: ["Algunos objetos utiles estan escondidos en habitaciones pequenas.", "Elegir bien los roles ayuda a sobrevivir mas facilmente."],
    items: [{ name: "Arma", icon: "W", howTo: "Encuentrala o consiguela durante la historia." }, { name: "Comida", icon: "F", howTo: "Explora la casa y administra recursos." }],
    badges: ["Clasico"]
  },
  {
    title: "Prison Life",
    image: "",
    category: "Roleplay",
    short: "Clasico de policias y prisioneros con escapes y enfrentamientos.",
    longDescription: "Prison Life es uno de los juegos clasicos de Roblox donde los jugadores eligen entre custodiar la prision o intentar escapar.",
    creator: "Aesthetical",
    year: 2014,
    easterEggs: ["Algunas rutas de escape son mas rapidas si coordinas con otros.", "El control de llaves cambia el ritmo del servidor."],
    items: [{ name: "Keycard", icon: "K", howTo: "Se consigue aprovechando errores de guardias o robando en el momento justo." }, { name: "Arma", icon: "W", howTo: "Se obtiene en zonas de seguridad o armeria." }],
    badges: ["Clasico"]
  },
  {
    title: "Da Hood",
    image: "",
    category: "Roleplay",
    short: "Roleplay urbano con economia, combate y mucha interaccion social.",
    longDescription: "Da Hood es una experiencia urbana conocida por su comunidad, su sistema de dinero y enfrentamientos entre jugadores.",
    creator: "Da Hood Entertainment",
    year: 2019,
    easterEggs: ["Conocer tiendas y rutas ayuda a moverte con menos riesgo.", "El posicionamiento decide muchos duelos."],
    items: [{ name: "Dinero", icon: "$", howTo: "Se consigue jugando y realizando acciones dentro del mapa." }, { name: "Equipo", icon: "E", howTo: "Compralo en tiendas repartidas por la ciudad." }],
    badges: ["Top historico"]
  },
  {
    title: "Driving Empire",
    image: "",
    category: "Carreras",
    short: "Conduce, compra autos y compite en carreras de mundo abierto.",
    longDescription: "Driving Empire es una experiencia de coches centrada en coleccionar vehiculos, tunearlos y competir para ganar dinero.",
    creator: "Driving Empire by Voldex",
    year: 2019,
    easterEggs: ["Algunas rutas del mapa ayudan a probar velocidad maxima.", "Los eventos suelen traer vehiculos limitados."],
    items: [{ name: "Auto", icon: "C", howTo: "Compralo con dinero ganado en carreras." }, { name: "Mejora", icon: "U", howTo: "Invierte en rendimiento para competir mejor." }],
    badges: ["Top historico"]
  },
  {
    title: "Shindo Life",
    image: "",
    category: "Aventura",
    short: "RPG ninja con linajes, habilidades, jefes y exploracion.",
    longDescription: "Shindo Life es una experiencia anime de progresion donde desbloqueas poderes, entrenas personajes y completas misiones en distintos mapas.",
    creator: "RELL World",
    year: 2020,
    easterEggs: ["Algunos spawns de habilidades son temporales.", "Los bosses pueden soltar modos o armas raras."],
    items: [{ name: "Bloodline", icon: "B", howTo: "Se obtiene con spins o eventos." }, { name: "Scroll", icon: "S", howTo: "Aparece en ubicaciones y horarios concretos." }],
    badges: ["Top historico"]
  },
  {
    title: "Survive the Killer",
    image: "",
    category: "Terror",
    short: "Supervivencia por rondas donde rescatas aliados y evitas al asesino.",
    longDescription: "Survive the Killer es un juego de persecucion en el que debes esconderte, revivir companeros y escapar antes de que acabe la ronda.",
    creator: "Slyce Entertainment",
    year: 2020,
    easterEggs: ["Algunos mapas tienen escondites poco usados.", "Salvar companeros da ventaja si el equipo coordina rutas."],
    items: [{ name: "Cuchillo", icon: "K", howTo: "Se consigue en cajas, tienda o eventos." }, { name: "Skin", icon: "S", howTo: "Desbloqueala con monedas o recompensas." }],
    badges: ["Top historico"]
  },
  {
    title: "Car Dealership Tycoon",
    image: "",
    category: "Tycoon",
    short: "Construye un concesionario, compra autos y gana dinero conduciendo.",
    longDescription: "Car Dealership Tycoon combina coleccion de vehiculos, negocio incremental y carreras para expandir tu concesionario.",
    creator: "Foxzie",
    year: 2018,
    easterEggs: ["Una buena distribucion del concesionario mejora la presentacion.", "Algunos autos limitados vuelven solo por eventos."],
    items: [{ name: "Auto", icon: "C", howTo: "Compralo con dinero del tycoon." }, { name: "Concesionario", icon: "D", howTo: "Expande pisos y exhibidores para crecer." }],
    badges: ["Top historico"]
  },
  {
    title: "Pet Simulator 99",
    image: "",
    category: "Simulacion",
    short: "Colecciona mascotas, rompe objetos y progresa por areas cada vez mayores.",
    longDescription: "Pet Simulator 99 continua la formula de BIG Games con mascotas, huevos, zonas, economia y eventos frecuentes.",
    creator: "BIG Games Pets",
    year: 2023,
    easterEggs: ["Los eventos pueden acelerar mucho el progreso.", "Las mascotas enormes tienen valor especial en tradeos."],
    items: [{ name: "Mascota", icon: "P", howTo: "Eclosiona huevos o comercia con jugadores." }, { name: "Huevo", icon: "E", howTo: "Compralo en zonas desbloqueadas." }],
    badges: ["Top global"]
  },
  {
    title: "Islands",
    image: "",
    category: "Simulacion",
    short: "Construye tu isla, farmea recursos y comercia con otros jugadores.",
    longDescription: "Islands es una experiencia sandbox de recoleccion, crafting y economia donde tu isla funciona como base principal.",
    creator: "Easy.gg",
    year: 2020,
    easterEggs: ["Automatizar granjas mejora mucho la produccion.", "Algunos recursos raros dependen de islas o enemigos concretos."],
    items: [{ name: "Recurso", icon: "R", howTo: "Recolectalo, cultivalo o compralo a otros jugadores." }, { name: "Banco de trabajo", icon: "B", howTo: "Usalo para crear herramientas y maquinas." }],
    badges: ["Top historico"]
  },
  {
    title: "Muscle Legends",
    image: "",
    category: "Simulacion",
    short: "Entrena fuerza, desbloquea zonas y pelea para subir poder.",
    longDescription: "Muscle Legends es un simulador clasico de entrenamiento donde creces en fuerza, compras mascotas y compites en arenas.",
    creator: "Scriptbloxian Studios",
    year: 2019,
    easterEggs: ["Las mejores zonas aceleran mucho el entrenamiento.", "Las mascotas multiplican ganancias si las mejoras."],
    items: [{ name: "Mascota", icon: "P", howTo: "Se obtiene en huevos y zonas desbloqueadas." }, { name: "Fuerza", icon: "S", howTo: "Entrena con maquinas y vende progreso." }],
    badges: ["Top historico"]
  },
  {
    title: "Ninja Legends",
    image: "",
    category: "Simulacion",
    short: "Entrena ninjutsu, salta entre islas y colecciona mascotas.",
    longDescription: "Ninja Legends es un simulador de progreso vertical donde mejoras espadas, habilidades y mascotas para alcanzar nuevas islas.",
    creator: "Scriptbloxian Studios",
    year: 2019,
    easterEggs: ["Llegar a islas altas desbloquea mejores tiendas.", "Las mascotas raras multiplican mucho el progreso."],
    items: [{ name: "Espada", icon: "S", howTo: "Comprala para ganar mas ninjutsu." }, { name: "Mascota", icon: "P", howTo: "Eclosiona cristales en islas desbloqueadas." }],
    badges: ["Top historico"]
  },
  {
    title: "Squid Game",
    image: "",
    category: "Supervivencia",
    short: "Minijuegos de eliminacion inspirados en retos de supervivencia.",
    longDescription: "Squid Game agrupa pruebas competitivas donde reaccionar rapido y entender las reglas de cada ronda es clave para sobrevivir.",
    creator: "Trendsetter Games",
    year: 2021,
    easterEggs: ["Aprender patrones de cada prueba aumenta tus chances.", "Algunas rondas premian esperar en vez de correr."],
    items: [{ name: "Ronda", icon: "R", howTo: "Sobrevive minijuegos para avanzar." }, { name: "Recompensa", icon: "$", howTo: "Gana partidas o completa objetivos." }],
    badges: ["Top historico"]
  },
  {
    title: "Funky Friday",
    image: "",
    category: "Ritmo",
    short: "Batallas musicales de ritmo con canciones, animaciones y duelos.",
    longDescription: "Funky Friday es una experiencia de ritmo donde los jugadores compiten presionando notas al compas de canciones.",
    creator: "Lyte Interactive",
    year: 2021,
    easterEggs: ["Cambiar animacion da personalidad al duelo.", "Practicar canciones dificiles mejora mucho tu precision."],
    items: [{ name: "Animacion", icon: "A", howTo: "Comprala con puntos ganados jugando." }, { name: "Cancion", icon: "M", howTo: "Elige una pista desde el selector de partida." }],
    badges: ["Top historico"]
  },
  {
    title: "Obby But You're on a Bike",
    image: "",
    category: "Obby",
    short: "Obby de precision donde completas recorridos montado en bicicleta.",
    longDescription: "Obby But You're on a Bike cambia el parkour tradicional por control de vehiculo, equilibrio y momentum.",
    creator: "FORTUNE 777",
    year: "N/D",
    easterEggs: ["Algunas rampas se superan mejor con menos velocidad.", "Controlar el aterrizaje evita perder tiempo."],
    items: [{ name: "Bicicleta", icon: "B", howTo: "Usala desde el inicio para completar etapas." }, { name: "Checkpoint", icon: "C", howTo: "Avanza por cada zona para guardar progreso." }],
    badges: ["Top historico"]
  },
  {
    title: "Sol's RNG",
    image: "",
    category: "Simulacion",
    short: "Experiencia RNG centrada en conseguir auras cada vez mas raras.",
    longDescription: "Sol's RNG popularizo el formato de tiradas constantes, auras ultra raras y progresion basada en suerte y potenciadores.",
    creator: "Sol's Studio",
    year: 2023,
    easterEggs: ["Algunos buffs mejoran probabilidades durante ventanas concretas.", "Las auras raras suelen volverse el centro de tradeos y flexeo."],
    items: [{ name: "Aura", icon: "A", howTo: "Se consigue haciendo rolls." }, { name: "Pocion", icon: "P", howTo: "Crafting o eventos pueden mejorar tus chances." }],
    badges: ["Top global"]
  },
  {
    title: "Speed Run 4",
    image: "",
    category: "Obby",
    short: "Clasico de velocidad con niveles de plataformas y musica energetica.",
    longDescription: "Speed Run 4 es un obby clasico donde corres por mundos de plataformas con saltos rapidos y checkpoints por nivel.",
    creator: "Vurse",
    year: 2014,
    easterEggs: ["Aprender cada salto reduce mucho los errores.", "Algunos niveles tienen trayectorias mas cortas."],
    items: [{ name: "Nivel", icon: "L", howTo: "Completa el recorrido para desbloquear el siguiente." }, { name: "Gema", icon: "G", howTo: "Consigue recompensas al avanzar." }],
    badges: ["Clasico"]
  },
  {
    title: "Zombie Attack",
    image: "",
    category: "Supervivencia",
    short: "Oleadas de zombies, armas, mascotas y jefes cooperativos.",
    longDescription: "Zombie Attack es un simulador de supervivencia por oleadas donde subes nivel, desbloqueas armas y derrotas jefes con otros jugadores.",
    creator: "wenlocktoad vs indra",
    year: 2017,
    easterEggs: ["Mantener distancia ayuda contra zombies rapidos.", "Los bosses requieren moverse constantemente."],
    items: [{ name: "Arma", icon: "W", howTo: "Se desbloquea al subir nivel o comprar en tienda." }, { name: "Mascota", icon: "P", howTo: "Se consigue en cajas y ayuda en combate." }],
    badges: ["Top historico"]
  },
  {
    title: "Strongman Simulator",
    image: "",
    category: "Simulacion",
    short: "Entrena fuerza arrastrando objetos y desbloqueando zonas.",
    longDescription: "Strongman Simulator convierte el entrenamiento en un ciclo de arrastrar peso, ganar energia y avanzar a mundos mas exigentes.",
    creator: "The Gang Stockholm",
    year: 2021,
    easterEggs: ["Optimizar rutas de arrastre acelera el progreso.", "Las mascotas ayudan mucho en zonas avanzadas."],
    items: [{ name: "Energia", icon: "E", howTo: "Arrastra objetos y entrena para convertirla en fuerza." }, { name: "Mascota", icon: "P", howTo: "Eclosiona huevos para multiplicadores." }],
    badges: ["Top historico"]
  },
  {
    title: "Dragon Adventures",
    image: "",
    category: "Simulacion",
    short: "Cria dragones, explora mundos y comercia criaturas raras.",
    longDescription: "Dragon Adventures combina crianza, coleccion, exploracion y economia alrededor de dragones con rasgos y colores distintos.",
    creator: "Sonar Studios",
    year: 2019,
    easterEggs: ["Algunos mundos tienen huevos especificos.", "Los rasgos raros aumentan el valor de intercambio."],
    items: [{ name: "Dragon", icon: "D", howTo: "Incuba huevos o comercia con jugadores." }, { name: "Comida", icon: "F", howTo: "Cultivala o comprala para criar dragones." }],
    badges: ["Top historico"]
  },
  {
    title: "Deepwoken",
    image: "",
    category: "Aventura",
    short: "RPG desafiante con combate, exploracion, builds y riesgo alto.",
    longDescription: "Deepwoken es una experiencia RPG exigente donde cada build, combate y decision de exploracion importa por su sistema de riesgo y progresion.",
    creator: "Monad Studios",
    year: 2021,
    easterEggs: ["Explorar sin preparacion puede costar caro.", "Algunas builds dependen de talentos y rutas concretas."],
    items: [{ name: "Arma", icon: "W", howTo: "Encuentrala, comprala o ganala en combate." }, { name: "Talento", icon: "T", howTo: "Se obtiene al progresar y definir tu build." }],
    badges: ["Top historico"]
  },
  {
    title: "Anime Dimensions Simulator",
    image: "",
    category: "Aventura",
    short: "Combate anime por dimensiones con personajes y raids.",
    longDescription: "Anime Dimensions Simulator te lleva por mapas inspirados en anime para derrotar enemigos, mejorar personajes y farmear recompensas.",
    creator: "Albatross Games",
    year: 2021,
    easterEggs: ["Aprender patrones de bosses mejora tiempos.", "Algunos personajes funcionan mejor para farmear."],
    items: [{ name: "Personaje", icon: "P", howTo: "Desbloquealo con gemas o eventos." }, { name: "Carta", icon: "C", howTo: "Equipa mejoras para aumentar dano." }],
    badges: ["Top historico"]
  },
  {
    title: "Lumber Tycoon 2",
    image: "",
    category: "Tycoon",
    short: "Tala madera, construye base y vende recursos en un clasico sandbox.",
    longDescription: "Lumber Tycoon 2 es un juego clasico de economia y construccion donde cortar madera, transportar y vender define el progreso.",
    creator: "Defaultio",
    year: 2015,
    easterEggs: ["Algunas maderas raras requieren rutas complejas.", "Un buen vehiculo facilita transportar troncos grandes."],
    items: [{ name: "Hacha", icon: "A", howTo: "Comprala en tienda para talar mejor." }, { name: "Madera", icon: "W", howTo: "Cortala y vendela o usala para construir." }],
    badges: ["Clasico"]
  },
  {
    title: "Arm Wrestle Simulator",
    image: "",
    category: "Simulacion",
    short: "Entrena fuerza, gana duelos y avanza por mundos.",
    longDescription: "Arm Wrestle Simulator es un simulador de entrenamiento donde mejoras estadisticas, derrotas rivales y desbloqueas zonas.",
    creator: "Kubo Games",
    year: 2023,
    easterEggs: ["Los pets correctos aceleran cada stat.", "Cambiar de zona demasiado tarde frena el progreso."],
    items: [{ name: "Mascota", icon: "P", howTo: "Eclosiona huevos para multiplicadores." }, { name: "Fuerza", icon: "S", howTo: "Entrena brazos, manos y cardio." }],
    badges: ["Top historico"]
  },
  {
    title: "Untitled Boxing Game",
    image: "",
    category: "Accion",
    short: "Boxeo competitivo con estilos, esquives y duelos tecnicos.",
    longDescription: "Untitled Boxing Game es una experiencia de pelea enfocada en timing, lectura del rival y estilos de boxeo con habilidades distintas.",
    creator: "drowningsome",
    year: 2023,
    easterEggs: ["Castigar despues de un esquive perfecto cambia el combate.", "Cada estilo tiene ventanas fuertes y debiles."],
    items: [{ name: "Estilo", icon: "S", howTo: "Se obtiene con spins y progreso." }, { name: "Guante", icon: "G", howTo: "Desbloquea cosmeticos en recompensas o tienda." }],
    badges: ["Top global"]
  },
  {
    title: "Grand Piece Online",
    image: "",
    category: "Aventura",
    short: "RPG de exploracion pirata con frutas, barcos, islas y bosses.",
    longDescription: "Grand Piece Online es un RPG de mundo abierto inspirado en anime pirata, con exploracion maritima, builds y comercio de frutas.",
    creator: "Grand Quest Games",
    year: 2020,
    easterEggs: ["Algunos jefes tienen drops muy buscados.", "Navegar preparado evita perder tiempo entre islas."],
    items: [{ name: "Fruta", icon: "F", howTo: "Aparece en el mapa, eventos o comercio." }, { name: "Barco", icon: "B", howTo: "Compralo para viajar entre islas." }],
    badges: ["Top historico"]
  },
  {
    title: "Ro-Ghoul",
    image: "",
    category: "Aventura",
    short: "Combate anime entre facciones con progreso, quinques y kagunes.",
    longDescription: "Ro-Ghoul es un clasico de combate anime en Roblox donde eliges faccion, farmeas reputacion y mejoras habilidades.",
    creator: "SushiWalrus",
    year: 2017,
    easterEggs: ["Algunos estilos requieren practicar combos concretos.", "Las zonas de farmeo cambian segun tu nivel."],
    items: [{ name: "Kagune", icon: "K", howTo: "Progresa en faccion ghoul para mejorar poderes." }, { name: "Quinque", icon: "Q", howTo: "Usalo como investigador y mejora con recursos." }],
    badges: ["Top historico"]
  },
  {
    title: "Fruit Battlegrounds",
    image: "",
    category: "Accion",
    short: "Arena anime de frutas con combate, habilidades y rolls.",
    longDescription: "Fruit Battlegrounds se centra en conseguir frutas, dominar habilidades y pelear contra otros jugadores en arenas abiertas.",
    creator: "P O P O",
    year: 2022,
    easterEggs: ["Cada fruta tiene combos y rangos distintos.", "Practicar movilidad ayuda a sobrevivir habilidades grandes."],
    items: [{ name: "Fruta", icon: "F", howTo: "Se obtiene con spins o recompensas." }, { name: "Gema", icon: "G", howTo: "Se gana con codigos, misiones o progreso." }],
    badges: ["Top historico"]
  },
  {
    title: "My Restaurant",
    image: "",
    category: "Tycoon",
    short: "Administra restaurante, atiende clientes y mejora decoracion.",
    longDescription: "My Restaurant es un tycoon de gestion donde optimizas mesas, personal, cocina y decoracion para ganar mas dinero.",
    creator: "BIG Games",
    year: 2019,
    easterEggs: ["La distribucion de mesas afecta la eficiencia.", "Algunos muebles atraen clientes especiales."],
    items: [{ name: "Mesa", icon: "T", howTo: "Comprala y colocala para atender mas clientes." }, { name: "Empleado", icon: "E", howTo: "Contrata personal para automatizar tareas." }],
    badges: ["Top historico"]
  },
  {
    title: "Type Soul",
    image: "",
    category: "Aventura",
    short: "RPG anime de facciones, builds y PvP intenso.",
    longDescription: "Type Soul es una experiencia de combate y progresion inspirada en anime, con facciones, habilidades y contenido competitivo.",
    creator: "Type Soul",
    year: 2023,
    easterEggs: ["Elegir faccion cambia por completo la ruta de progreso.", "Los builds dependen mucho de habilidad y equipamiento."],
    items: [{ name: "Build", icon: "B", howTo: "Define habilidades y progreso segun tu faccion." }, { name: "Skill", icon: "S", howTo: "Desbloqueala avanzando en misiones y combate." }],
    badges: ["Top global"]
  },
  {
    title: "Southwest Florida",
    image: "",
    category: "Roleplay",
    short: "Roleplay de ciudad con trabajos, autos y vida cotidiana.",
    longDescription: "Southwest Florida es una experiencia de roleplay urbano centrada en coches, empleos, casas y actividades sociales.",
    creator: "Strigid Development",
    year: 2020,
    easterEggs: ["Algunos trabajos tienen rutas mas eficientes.", "Elegir un auto adecuado ayuda a moverte por la ciudad."],
    items: [{ name: "Auto", icon: "C", howTo: "Compralo con dinero ganado trabajando." }, { name: "Trabajo", icon: "J", howTo: "Elige un empleo para ganar ingresos." }],
    badges: ["Top historico"]
  },
  {
    title: "Kaiju Universe",
    image: "",
    category: "Accion",
    short: "Combates de kaijus gigantes con habilidades, ciudades y progresion.",
    longDescription: "Kaiju Universe permite controlar monstruos enormes, destruir escenarios y combatir contra otros jugadores.",
    creator: "Prometeo Games",
    year: 2019,
    easterEggs: ["Cada kaiju tiene rangos y tiempos de ataque distintos.", "Usar el entorno puede ayudarte a controlar peleas."],
    items: [{ name: "Kaiju", icon: "K", howTo: "Desbloquealo con celulas o progreso." }, { name: "Habilidad", icon: "A", howTo: "Aprende el kit de cada monstruo para pelear mejor." }],
    badges: ["Top historico"]
  },
  {
    title: "Murder Party",
    image: "",
    category: "Suspenso",
    short: "Roles secretos, caos social y objetivos ocultos por ronda.",
    longDescription: "Murder Party expande la formula de roles ocultos con equipos, objetivos y situaciones rapidas en partidas sociales.",
    creator: "PlayMake",
    year: 2020,
    easterEggs: ["Leer comportamiento de jugadores ayuda a detectar roles.", "Algunos mapas favorecen rutas de escape concretas."],
    items: [{ name: "Rol", icon: "R", howTo: "Se asigna al inicio de cada ronda." }, { name: "Cosmetico", icon: "C", howTo: "Se consigue jugando o en tienda." }],
    badges: ["Top historico"]
  },
  {
    title: "Jujutsu Infinite",
    image: "",
    category: "Aventura",
    short: "RPG anime con tecnicas, progresion y combates de alto impacto.",
    longDescription: "Jujutsu Infinite combina misiones, habilidades especiales y progresion de personaje dentro de una experiencia anime competitiva.",
    creator: "Awesome Ninja Games",
    year: 2024,
    easterEggs: ["Las tecnicas raras cambian mucho el estilo de juego.", "Farmear bosses ayuda a mejorar mas rapido."],
    items: [{ name: "Tecnica", icon: "T", howTo: "Se obtiene con sistema de rolls o progreso." }, { name: "Item maldito", icon: "I", howTo: "Farmea misiones y enemigos especiales." }],
    badges: ["Top global"]
  },
  {
    title: "Project Slayers",
    image: "",
    category: "Aventura",
    short: "RPG anime de espadas, respiraciones, demonios y misiones.",
    longDescription: "Project Slayers es un RPG de mundo abierto inspirado en anime donde entrenas estilos, completas misiones y derrotas enemigos.",
    creator: "Project Slayers",
    year: 2022,
    easterEggs: ["Algunos entrenadores estan en ubicaciones poco obvias.", "Los estilos requieren practicar combos para rendir bien."],
    items: [{ name: "Respiracion", icon: "R", howTo: "Entrena con NPC especificos para desbloquearla." }, { name: "Katana", icon: "K", howTo: "Compra o mejora armas segun progreso." }],
    badges: ["Top historico"]
  },
  {
    title: "Starving Artists",
    image: "",
    category: "Social",
    short: "Crea arte, monta un stand y vende obras a otros jugadores.",
    longDescription: "Starving Artists es una experiencia creativa donde los jugadores dibujan, exponen y venden piezas dentro de una galeria social.",
    creator: "Double Bandit Studios",
    year: 2022,
    easterEggs: ["Un stand ordenado ayuda a destacar tu arte.", "Los temas populares pueden atraer mas compradores."],
    items: [{ name: "Lienzo", icon: "L", howTo: "Crea una obra desde tu stand." }, { name: "Stand", icon: "S", howTo: "Personalizalo para mostrar tus dibujos." }],
    badges: ["Top historico"]
  },
  {
    title: "Super Striker League",
    image: "",
    category: "Deportes",
    short: "Futbol arcade con habilidades especiales y partidos de equipos.",
    longDescription: "Super Striker League es un juego deportivo rapido donde los jugadores usan poderes y pases para marcar goles.",
    creator: "Cinder Studio",
    year: 2019,
    easterEggs: ["Usar habilidades despues de un pase abre mejores tiros.", "Defender bien vale tanto como atacar."],
    items: [{ name: "Habilidad", icon: "A", howTo: "Equipa poderes desde tu loadout." }, { name: "Balon", icon: "B", howTo: "Controlalo con pases, tiros y posicionamiento." }],
    badges: ["Top historico"]
  },
  {
    title: "Kick Off",
    image: "",
    category: "Deportes",
    short: "Partidos de futbol simples con control directo del balon.",
    longDescription: "Kick Off ofrece futbol competitivo dentro de Roblox con enfoque en control, pases y tiros mas directos.",
    creator: "Roblox Sports Community",
    year: "N/D",
    easterEggs: ["Aprender angulos de tiro mejora tus goles.", "Moverse sin balon crea mejores oportunidades."],
    items: [{ name: "Balon", icon: "B", howTo: "Controlalo durante el partido para atacar." }, { name: "Equipo", icon: "T", howTo: "Coordina posiciones para ganar." }],
    badges: ["Top historico"]
  },
  {
    title: "House Tycoon",
    image: "",
    category: "Tycoon",
    short: "Construye una casa paso a paso y mejora tu propiedad.",
    longDescription: "House Tycoon es una experiencia de tycoon sencilla donde desbloqueas partes de una casa y mejoras su diseno con progreso.",
    creator: "House Tycoon Devs",
    year: "N/D",
    easterEggs: ["Completar zonas en orden ayuda a mantener ingresos.", "Algunas mejoras decorativas cambian bastante el aspecto final."],
    items: [{ name: "Mejora", icon: "U", howTo: "Compra botones del tycoon para expandir la casa." }, { name: "Dinero", icon: "$", howTo: "Se genera con progreso del tycoon." }],
    badges: ["Top historico"]
  },
  {
    title: "Camping",
    image: "",
    category: "Terror",
    short: "Historia clasica de terror en grupo durante una salida al bosque.",
    longDescription: "Camping es una de las experiencias narrativas clasicas de Roblox, con exploracion, sustos y decisiones grupales.",
    creator: "SamsonXVI",
    year: 2018,
    easterEggs: ["Explorar detalles del mapa ayuda a entender la historia.", "Mantenerse con el grupo reduce el riesgo en escenas clave."],
    items: [{ name: "Historia", icon: "H", howTo: "Avanza por eventos del campamento." }, { name: "Objeto", icon: "O", howTo: "Interactua con elementos del mapa cuando aparezcan." }],
    badges: ["Clasico"]
  },
  {
    title: "Super Golf",
    image: "",
    category: "Deportes",
    short: "Minigolf multijugador con mapas, tiros precisos y cosmeticos.",
    longDescription: "Super Golf adapta el minigolf a partidas rapidas de Roblox con campos variados y fisica accesible.",
    creator: "Nosniy Games",
    year: 2019,
    easterEggs: ["Los rebotes contra paredes pueden ahorrar golpes.", "Memorizar fuerza por mapa mejora resultados."],
    items: [{ name: "Pelota", icon: "B", howTo: "Personalizala con cosmeticos." }, { name: "Mapa", icon: "M", howTo: "Juega rotaciones con hoyos distintos." }],
    badges: ["Top historico"]
  },
  {
    title: "Heroes World",
    image: "",
    category: "Aventura",
    short: "RPG de heroes con poderes, misiones y combate.",
    longDescription: "Heroes World es una experiencia de accion donde desbloqueas habilidades, completas misiones y mejoras tu personaje.",
    creator: "Heroes World Devs",
    year: "N/D",
    easterEggs: ["Algunos poderes rinden mejor en equipo.", "Los enemigos fuertes suelen requerir mejorar stats antes."],
    items: [{ name: "Poder", icon: "P", howTo: "Desbloquealo con progreso o sistema interno." }, { name: "Mision", icon: "Q", howTo: "Completala para ganar experiencia y recursos." }],
    badges: ["Top historico"]
  },
  {
    title: "My Supermarket",
    image: "",
    category: "Tycoon",
    short: "Administra un supermercado con estantes, clientes y mejoras.",
    longDescription: "My Supermarket es un tycoon de gestion donde expandes tiendas, colocas productos y mejoras el servicio para ganar mas.",
    creator: "Rocky Studio",
    year: 2020,
    easterEggs: ["Organizar estantes reduce tiempos de reposicion.", "Mejorar empleados aumenta la eficiencia."],
    items: [{ name: "Estante", icon: "S", howTo: "Compralo y llenalo de productos." }, { name: "Empleado", icon: "E", howTo: "Contratalo para atender y reponer." }],
    badges: ["Top historico"]
  },
  {
    title: "Demon Slayer RPG 2",
    image: "",
    category: "Aventura",
    short: "RPG anime de cazadores, demonios, respiraciones y misiones.",
    longDescription: "Demon Slayer RPG 2 permite elegir ruta, entrenar habilidades y pelear contra enemigos en un mundo inspirado en anime.",
    creator: "Shounen Studio",
    year: 2020,
    easterEggs: ["Los entrenadores estan repartidos por el mapa.", "Elegir demonio o cazador cambia el progreso."],
    items: [{ name: "Respiracion", icon: "R", howTo: "Entrena con NPC especificos." }, { name: "Katana", icon: "K", howTo: "Mejora armas con progreso." }],
    badges: ["Top historico"]
  },
  {
    title: "Ghost Simulator",
    image: "",
    category: "Simulacion",
    short: "Captura fantasmas, mejora equipo y explora biomas.",
    longDescription: "Ghost Simulator es una experiencia de coleccion y progreso donde atrapas fantasmas, desbloqueas mascotas y completas misiones.",
    creator: "BloxByte Games",
    year: 2018,
    easterEggs: ["Algunas zonas tienen fantasmas con drops especificos.", "Las mascotas adecuadas aceleran el farmeo."],
    items: [{ name: "Aspiradora", icon: "V", howTo: "Mejorala para capturar fantasmas mas rapido." }, { name: "Mascota", icon: "P", howTo: "Se obtiene con cajas, misiones o eventos." }],
    badges: ["Top historico"]
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
