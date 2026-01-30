const raridades = [
    { nome: "MASTER BALL", min: 1, max: 50, img: "MasterBall.png" },   // 0,5%
    { nome: "ULTRA BALL", min: 51, max: 1000, img: "UltraBall.png" }, // 9,5%
    { nome: "GREAT BALL", min: 1001, max: 4000, img: "GreatBall.png" }, // 30%
    { nome: "POKE BALL", min: 4001, max: 10000, img: "PokeBall.png" }  // 60%
];

const chavesPorRaridade = {
    "MASTER BALL": ["DROP MASTER BALL"],
    "ULTRA BALL": ["DROP ULTRA BALL"],
    "GREAT BALL": ["DROP GREAT BALL"],
    "POKE BALL": ["DROP POKE BALL"]
};

const coresRaridade = {
    "MASTER BALL": "#000000",
    "ULTRA BALL": "#FFED29",
    "GREAT BALL": "#2f7fff",
    "POKE BALL": "#FF746C"
};
