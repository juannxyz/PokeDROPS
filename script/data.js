const raridades = [
    { nome: "MASTER BALL", min: 1, max: 1, img: "MasterBall.png" },          // 0,01%
    { nome: "GS BALL", min: 2, max: 5, img: "GSBall.png" },                  // 0,04%
    { nome: "ORIGIN BALL", min: 6, max: 20, img: "OriginBall.png" },         // 0,15%
    { nome: "LUXURY BALL", min: 21, max: 70, img: "LuxuryBall.png" },        // 0,5%
    { nome: "TERA BALL", min: 71, max: 150, img: "TeraBall.png" },           // 0,8%
    { nome: "TIMER BALL", min: 151, max: 300, img: "TimerBall.png" },        // 1,5%
    { nome: "QUICK BALL", min: 301, max: 600, img: "QuickBall.png" },        // 3%
    { nome: "ULTRA BALL", min: 601, max: 1100, img: "UltraBall.png" },       // 5%
    { nome: "NEST BALL", min: 1101, max: 2000, img: "NestBall.png" },        // 9%
    { nome: "GREAT BALL", min: 2001, max: 3500, img: "GreatBall.png" },      // 15%
    { nome: "PREMIER BALL", min: 3501, max: 5500, img: "PremierBall.png" },  // 20%
    { nome: "POKE BALL", min: 5501, max: 10000, img: "PokeBall.png" }        // 45%
];


const chavesPorRaridade = {
    "MASTER BALL": ["DROP MASTER BALL"],
    "GS BALL": ["DROP GS BALL"],
    "ORIGIN BALL": ["DROP ORIGIN BALL"],
    "LUXURY BALL": ["DROP LUXURY BALL"],
    "TERA BALL": ["DROP TERA BALL"],
    "TIMER BALL": ["DROP TIMER BALL"],
    "QUICK BALL": ["DROP QUICK BALL"],
    "ULTRA BALL": ["DROP ULTRA BALL"],
    "NEST BALL": ["DROP NEST BALL"],
    "GREAT BALL": ["DROP GREAT BALL"],
    "PREMIER BALL": ["DROP PREMIER BALL"],
    "POKE BALL": ["DROP POKE BALL"]
};

const coresRaridade = {
    "MASTER BALL": "#000000",
    "GS BALL": "#df6500",
    "ORIGIN BALL": "#df6500",
    "LUXURY BALL": "#9e0000",
    "TERA BALL": "#9e0000",
    "TIMER BALL": "#9e0000",
    "QUICK BALL": "#bc0ff1",
    "ULTRA BALL": "#bc0ff1",
    "NEST BALL": "#2f7fff",
    "GREAT BALL": "#2f7fff",
    "PREMIER BALL": "#0ca84d",
    "POKE BALL": "#0ca84d"
};
