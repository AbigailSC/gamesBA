const gamesData = [
  {
    id: 1,
    name: 'Sea of Thieves',
    price: 5400,
    image: './assets/allGames/seaofthieves.jpg',
    category: 'Acción'
  },
  {
    id: 2,
    name: 'Cyberpunk 2077',
    price: 4800,
    image: './assets/allGames/Cyberpunk_2077_box_art.jpg',
    category: 'Acción'
  },
  {
    id: 3,
    name: 'Ghost recon Breakpoint',
    price: 4200,
    image: './assets/allGames/ghostReconBreakpoint.jpg',
    category: 'Acción'
  },
  {
    id: 4,
    name: 'Star Wars Jedi Survivor',
    price: 5500,
    image: './assets/allGames/swjediSurvivors.jpg',
    category: 'Acción'
  },
  {
    id: 5,
    name: 'God of War Ragnarok',
    price: 7800,
    image: './assets/allGames/godOfWarRagnarok.jpg',
    category: 'Acción'
  },
  {
    id: 6,
    name: 'Forspoken',
    price: 3800,
    image: './assets/allGames/forspoken.jpg',
    category: 'Acción'
  },
  {
    id: 7,
    name: 'Persona 5 Royal',
    price: 4200,
    image: './assets/allGames/persona5royal.jpg',
    category: 'Aventura'
  },
  {
    id: 8,
    name: 'Elden Ring',
    price: 7700,
    image: './assets/allGames/eldenRing.jpg',
    category: 'Aventura'
  },
  {
    id: 9,
    name: 'Red Dead Redemption 2',
    price: 6300,
    image: './assets/allGames/rdr2.jpg',
    category: 'Aventura'
  },
  {
    id: 10,
    name: 'Hogwarts Legacy',
    price: 8800,
    image: './assets/allGames/hogwartsLegacy.jpg',
    category: 'Aventura'
  },
  {
    id: 11,
    name: 'Life is Strange',
    price: 3500,
    image: './assets/allGames/lifeisstrange.jpg',
    category: 'Aventura'
  },
  {
    id: 12,
    name: 'Monster Hunter World Iceborne',
    price: 4800,
    image: './assets/allGames/monsterHunterIceborne.jpg',
    category: 'Aventura'
  },
  {
    id: 13,
    name: 'Nier Automata',
    price: 4600,
    image: './assets/allGames/nierautomata.jpg',
    category: 'Supervivencia'
  },
  {
    id: 14,
    name: 'Ark survival evolved',
    price: 3600,
    image: './assets/allGames/ark.jpg',
    category: 'Supervivencia'
  },
  {
    id: 15,
    name: 'Resident evil 4 Remake',
    price: 7200,
    image: './assets/allGames/re4Remake.jpg',
    category: 'Supervivencia'
  },
  {
    id: 16,
    name: 'Terraria',
    price: 4900,
    image: './assets/allGames/Terraria_Steam_artwork.jpg',
    category: 'Supervivencia'
  },
  {
    id: 17,
    name: 'The Forrest',
    price: 4800,
    image: './assets/allGames/theforest.jpg',
    category: 'Supervivencia'
  },
  {
    id: 18,
    name: 'Days Gone',
    price: 4100,
    image: './assets/allGames/daysgone.jpg',
    category: 'Supervivencia'
  },
  {
    id: 19,
    name: 'DevilMayCry 5',
    price: 6900,
    image: './assets/allGames/devilmaycry5.jpg',
    category: 'Lucha'
  },
  {
    id: 20,
    name: 'Dragon Ball Z Kakarot',
    price: 8200,
    image: './assets/allGames/dragonballkakarot.jpg',
    category: 'Lucha'
  },
  {
    id: 21,
    name: 'Guilty Gear Strive',
    price: 6800,
    image: './assets/allGames/guiltygear.jpg',
    category: 'Lucha'
  },
  {
    id: 22,
    name: 'Street Fighter V',
    price: 4300,
    image: './assets/allGames/streetfigtherv.jpg',
    category: 'Lucha'
  },
  {
    id: 23,
    name: 'Tekken 8',
    price: 9300,
    image: './assets/allGames/tekken8.jpg',
    category: 'Lucha'
  },
  {
    id: 24,
    name: 'Mortal Kombat 11',
    price: 5800,
    image: './assets/allGames/mk11.jpg',
    category: 'Lucha'
  },
  {
    id: 25,
    name: 'The Callisto Protocol',
    price: 6800,
    image: './assets/allGames/callistoprotocol.jpg',
    category: 'Terror'
  },
  {
    id: 26,
    name: 'Visage',
    price: 4800,
    image: './assets/allGames/visage.jpg',
    category: 'Terror'
  },
  {
    id: 27,
    name: 'Resident Evil Village',
    price: 5900,
    image: './assets/allGames/re8.jpg',
    category: 'Terror'
  },
  {
    id: 28,
    name: 'Signalis',
    price: 5500,
    image: './assets/allGames/signalis.jpg',
    category: 'Terror'
  },
  {
    id: 29,
    name: 'Song of Horror',
    price: 6300,
    image: './assets/allGames/songofhorror.jpg',
    category: 'Terror'
  },
  {
    id: 30,
    name: 'Soma',
    price: 3800,
    image: './assets/allGames/soma.jpg',
    category: 'Terror'
  },
  {
    id: 31,
    name: 'Smite',
    price: 2100,
    image: './assets/allGames/smite.jpg',
    category: 'Moba'
  },
  {
    id: 32,
    name: 'Pokemon Unite',
    price: 2800,
    image: './assets/allGames/pokemon.jpg',
    category: 'Moba'
  },
  {
    id: 33,
    name: 'Arena od Valor',
    price: 2700,
    image: './assets/allGames/arenavalor.jpg',
    category: 'Moba'
  },
  {
    id: 34,
    name: 'League of legends',
    price: 3500,
    image: './assets/allGames/lol.jpg',
    category: 'Moba'
  },
  {
    id: 35,
    name: 'Heroes of the Storm',
    price: 2100,
    image: './assets/allGames/hots.jpg',
    category: 'Moba'
  },
  {
    id: 36,
    name: 'Dota 2',
    price: 3000,
    image: './assets/allGames/dota2.jpg',
    category: 'Moba'
  },
  {
    id: 37,
    name: 'Anno Mutationem',
    price: 7500,
    image: './assets/allGames/anno.jpg',
    category: 'Rol'
  },
  {
    id: 38,
    name: 'Assasins Creed Valhalla',
    price: 6800,
    image: './assets/allGames/acvalhalla.jpg',
    category: 'Rol'
  },
  {
    id: 39,
    name: 'Monster Hunter Rise',
    price: 6800,
    image: './assets/allGames/mhrise.jpg',
    category: 'Rol'
  },
  {
    id: 40,
    name: 'New World',
    price: 4600,
    image: './assets/allGames/newworld.jpg',
    category: 'Rol'
  },
  {
    id: 41,
    name: 'One Piece Odissey',
    price: 6400,
    image: './assets/allGames/onepiece.jpg',
    category: 'Rol'
  },
  {
    id: 42,
    name: 'Stardew Valley',
    price: 2900,
    image: './assets/allGames/stardewvalley.jpg',
    category: 'Rol'
  },
  {
    id: 43,
    name: 'Rainbow Six Siege',
    price: 4400,
    image: './assets/allGames/rainbowsixsiege.jpg',
    category: 'FPS'
  },
  {
    id: 44,
    name: 'Overwatch 2',
    price: 3800,
    image: './assets/allGames/ow2.jpg',
    category: 'FPS'
  },
  {
    id: 45,
    name: 'Killing Floor 2',
    price: 2400,
    image: './assets/allGames/killingfloor2.jpg',
    category: 'FPS'
  },
  {
    id: 46,
    name: 'Hunt Showdown',
    price: 5700,
    image: './assets/allGames/huntshowdown.jpg',
    category: 'FPS'
  },
  {
    id: 47,
    name: 'House of the Dead Remake',
    price: 6800,
    image: './assets/allGames/houseofthedead.jpg',
    category: 'FPS'
  },
  {
    id: 48,
    name: 'Back 4 Blood',
    price: 8800,
    image: './assets/allGames/bfb.jpg',
    category: 'FPS'
  },
]

const trendingProductsArray = [
  {
    id: 49,
    name: 'A plague tale: Requiem',
    price: 6000,
    olderPrice: 7200,
    image: './assets/trending/aplagetale.png',
    category: 'Trending'
  },
  {
    id: 50,
    name: 'Bayonetta 3',
    price: 8600,
    image: './assets/trending/bayonetta3.png',
    category: 'Trending'
  },
  {
    id: 51,
    name: 'Call of Duty Modern Warfare 2',
    price: 9400,
    image: './assets/trending/cod2.png',
    category: 'Trending'
  },
  {
    id: 52,
    name: 'Dragon Ball: The Breakers',
    price: 3200,
    olderPrice: 3700,
    image: './assets/trending/dragonball.png',
    category: 'Trending'
  },
  {
    id: 53,
    name: 'Uncharted Legacy of Thieves Collection',
    price: 7200,
    olderPrice: 7900,
    image: './assets/trending/uncharted.png',
    category: 'Trending'
  },
  {
    id: 54,
    name: 'Fifa 23',
    price: 8300,
    image: './assets/trending/fifa23.png',
    category: 'Trending'
  },

]

const latestProductsArray = [
  {
    id: 55,
    name: `Marvel's Spider-Man: Miles Morales`,
    price: 6600,
    image: './assets/news/spiderman.png',
    category: 'Latest'
  },
  {
    id: 56,
    name: "Silent hill 2 remastered",
    price: 7600,
    olderPrice: 7900,
    image: './assets/news/silenhill2.png',
    category: 'Latest'
  },
  {
    id: 57,
    name: "Gotham Knights Deluxe Edition",
    price: 5400,
    olderPrice: 5900,
    image: './assets/news/gothanknights.png',
    category: 'Latest'
  },
  {
    id: 58,
    name: "Farming Simulator 2022",
    price: 4400,
    olderPrice: 4900,
    image: './assets/news/farmingsimulator.png',
    category: 'Latest'
  },
  {
    id: 59,
    name: "Dead Space Remake",
    price: 5200,
    olderPrice: 5800,
    image: './assets/news/deadSpace.png',
    category: 'Latest'
  },
  {
    id: 60,
    name: "Star Ocean: The Divine Force",
    price: 6800,
    image: './assets/news/ocean.png',
    category: 'Latest'
  },
]

const imagesBackgroundArray = [
  "../assets/diablo4.jpg",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/capsule_616x353.jpg?t=1661963377",
  "../assets/Resident-Evil-4-Remake.jpg",
  "../assets/silenthill2vs.jpg"
]

const titleArray = [
  "Diablo 4",
  "Songs of the forrest",
  "Resident Evil 2 Remake",
  "Silent Hill 2"
]

const overviewArray = [
  "Diablo IV es un videojuego de rol de acción desarrollado por Blizzard Entertainment y es la cuarta entrega de la saga Diablo. Fue anunciado el 19 de noviembre de 2019 durante la BlizzCon 2019.",
  "Songs of the forest es un videojuego de terror y supervivencia en primera persona desarrollado por el estudio independiente español The Game Kitchen. El juego se lanzó en Steam el 28 de octubre de 2020.",
  "Resident Evil 2 Remake es un videojuego de acción-aventura de supervivencia en tercera persona desarrollado y publicado por Capcom. Es una remasterización del videojuego de 1998 Resident Evil 2, y es la segunda entrega de la saga Resident Evil que se remasteriza.",
  `“En mis sueños más inquietos, veo esa ciudad. Silent Hill. Prometiste volver a llevarme
allí algún día. Pero nunca lo hiciste. Y ahora estoy aquí sola… En nuestro "lugar
especial" esperándote...”.`
]