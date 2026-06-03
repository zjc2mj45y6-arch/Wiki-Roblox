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
    const button = document.createElement("button");
    button.type = "button";
    button.className = "suggestion-item";
    button.setAttribute("role", "option");
    const shouldShowThumb = game.image;
    button.innerHTML = `
      ${shouldShowThumb ? `<img class="suggestion-thumb" src="${game.image}" alt="${game.title} portada" loading="lazy">` : ""}
      <span class="suggestion-copy">
        <span class="suggestion-title">${game.title}</span>
        <span class="suggestion-meta">${game.category} | ${game.short}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      searchText = "";
      searchInput.value = "";
      hideSearchSuggestions();
      scrollToGame(game.title);
    });
    searchSuggestions.appendChild(button);
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
