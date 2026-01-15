// ========================
// - Ident -> VARIÁVEIS GLOBAIS
// ========================
const chances = document.getElementById("chances");
const bolinhas = document.querySelectorAll("#chances span");
const contador = document.getElementById("jogosContador");
const glow = document.getElementById("glowEffect");
const ring = document.querySelector(".glow-ring");
const stars = document.querySelectorAll(".star");

// Modais
const modalInicio = new bootstrap.Modal(document.getElementById('modalInicio'));
const btnIniciar = document.getElementById("btnIniciar");
const inputJogos = document.getElementById("inputJogos");
const modalRecompensa = new bootstrap.Modal(document.getElementById('modalRecompensa'));
const modalJogosEsgotados = new bootstrap.Modal(document.getElementById('modalJogosEsgotados'));
const btnFecharEsgotados = document.getElementById("btnFecharEsgotados");
const btnAdicionarJogos = document.getElementById("btnAdicionarJogos");


// Botões
const btnCopiarChave = document.getElementById("btnCopiarChave");
const btnContinuar = document.getElementById("btnContinuar");

// Variáveis do jogo
let sorteAtual = 10000;
let jogosRestantes = 0;
let nivelChances = 0;
let rodadaFinalizada = false;
let rodadaEmAndamento = false;

// ========================
// - Ident -> FUNÇÕES DE UTILIDADE
// ========================

// Descobre raridade baseado no valor da sorte
function descobrirRaridade(valor) {
    return raridades.find(r => valor >= r.min && valor <= r.max);
}

// Sorteia uma chave para uma raridade
function sortearChave(raridadeNome) {
    const lista = chavesPorRaridade[raridadeNome];

    if (!lista || lista.length === 0) return "SEM CHAVES DISPONÍVEIS";

    const index = Math.floor(Math.random() * lista.length);
    const chave = lista[index];

    return chave;
}

// ========================
// - Ident -> FUNÇÕES DE JOGO
// ========================

// Inicia a lógica de um drop
function sortearDrop() {

    rodadaEmAndamento = true;

    let novoValor = parseInt(Math.random() * 10000 + 1);
    if (novoValor < sorteAtual) {
        sorteAtual = novoValor;
        atualizarRaridade();
    }

    nivelChances++;
    atualizarChances();

    if (nivelChances >= bolinhas.length) {
        jogosRestantes--;
        atualizarContador();

        setTimeout(() => {
            mostrarRecompensa();
            resetarRodada();
            rodadaEmAndamento = false;
        }, 500);

        return;
    }

    rodadaEmAndamento = false;
    atualizarChances();
}

// Reseta a rodada
function resetarRodada() {
    nivelChances = 0;
    sorteAtual = 10000;
    atualizarChances();

    const raridadeInicial = descobrirRaridade(10000);
    document.getElementById("tituloRaridade").textContent = raridadeInicial.nome;
    document.getElementById("imagemDrop").src = "./image/" + raridadeInicial.img;
}

// Reseta o jogo completo
function resetarJogo(qtdJogos) {
    jogosRestantes = qtdJogos;
    atualizarContador();
    resetarRodada();
}

// Mostra a recompensa no modal
function mostrarRecompensa() {
    const raridade = descobrirRaridade(sorteAtual);
    const chave = sortearChave(raridade.nome);

    document.getElementById("tituloRecompensa").textContent = raridade.nome;
    document.getElementById("imgRecompensa").src = "./image/" + raridade.img;
    document.getElementById("recompensa").textContent = chave;

    rodadaFinalizada = true;
    modalRecompensa.show();
}

// ========================
// - Ident -> FUNÇÕES DE UI / INTERFACE
// ========================

// Atualiza as bolinhas de chances
function atualizarChances() {
    bolinhas.forEach((bolinha, index) => {
        if (index < nivelChances) {
            bolinha.classList.add("bolinha-ativa", "animate__rubberBand");
        } else {
            bolinha.classList.remove("bolinha-ativa", "animate__rubberBand");
        }
    });
}

// Atualiza contador de jogos
function atualizarContador() {
    contador.textContent = jogosRestantes;
}

// Atualiza raridade visual do drop
function atualizarRaridade() {
    const raridade = descobrirRaridade(sorteAtual);
    document.getElementById("tituloRaridade").textContent = raridade.nome;
    document.getElementById("imagemDrop").src = "./image/" + raridade.img;
    animarFlipRaridade();

    if (raridade.nome !== "MASTER BALL") {
        document.body.style.backgroundColor = coresRaridade[raridade.nome];
    }
    else {
        document.body.style.backgroundColor = coresRaridade[raridade.nome];
        document.body.style.backgroundImage = "url(./image/fundoMasterBall.png)";
    }

    setGlowRaridade(raridade.nome);
}

// Anima flip da raridade
function animarFlipRaridade() {
    const titulo = document.getElementById("tituloRaridade");
    const imagem = document.getElementById("imagemDrop");
    imagem.classList.remove("rotate-center");
    void titulo.offsetWidth; // força reflow
    imagem.classList.add("rotate-center");
}

function setGlowRaridade(raridade) {
    glow.className = "glow-effect"; // limpa tudo

    if (raridade === "COBRE") glow.classList.add("glow-cobre");
    if (raridade === "FERRO") glow.classList.add("glow-ferro");
    if (raridade === "OURO") glow.classList.add("glow-ouro");
    if (raridade === "RUBI") glow.classList.add("glow-rubi");
    if (raridade === "DIAMANTE") glow.classList.add("glow-diamante");
    if (raridade === "DIAMANTE NEGRO") glow.classList.add("glow-negro");
}

function explosaoEnergia() {
    // ativa anel
    ring.classList.remove("ativo");
    void ring.offsetWidth; // reset animação
    ring.classList.add("ativo");

    // ativa estrelas
    stars.forEach(star => {
        star.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
        star.style.setProperty("--y", `${Math.random() * 200 - 100}px`);

        star.classList.remove("ativo");
        void star.offsetWidth;
        star.classList.add("ativo");
    });
}

// ========================
// - Ident -> EVENTOS / LISTENERS
// ========================

// Mostra modal de início ao carregar
window.addEventListener("load", () => modalInicio.show());

// Iniciar jogo ao clicar no botão
btnIniciar.addEventListener("click", () => {
    const qtd = parseInt(inputJogos.value);
    if (!qtd || qtd <= 0) return;
    resetarJogo(qtd);
    modalInicio.hide();
});

// Copiar chave
btnCopiarChave.addEventListener("click", () => {
    const chave = document.getElementById("recompensa").textContent;
    navigator.clipboard.writeText(chave).then(() => {
        btnCopiarChave.textContent = "COPIADO!";
        btnCopiarChave.classList.replace("btn-outline-warning", "btn-success");
        setTimeout(() => {
            btnCopiarChave.textContent = "COPIAR";
            btnCopiarChave.classList.replace("btn-success", "btn-outline-warning");
        }, 1500);
    });
});

// Continuar após recompensa
btnContinuar.addEventListener("click", () => {
    rodadaFinalizada = false;
    modalRecompensa.hide();
});

document.getElementById("modalRecompensa").addEventListener("hidden.bs.modal", () => {
    rodadaFinalizada = false;
});

const btnAbrirAdicionarJogos = document.getElementById("btnAbrirAdicionarJogos");

btnAbrirAdicionarJogos.addEventListener("click", () => {
    modalJogosEsgotados.hide(); // fecha o modal de Jogos Esgotados
    modalInicio.show();          // abre o modal de input de quantidade de jogos
});

// ========================
// - Ident -> MULTIPLATAFORMA / CONTROLES
// ========================

// Função principal de ação do jogo
function acaoJogo() {
    // Se modal de início aberto, bloqueia tudo
    if (document.getElementById('modalInicio').classList.contains('show')) return;

    // Se não há jogos, mostra modal de esgotados
    if (jogosRestantes <= 0) {
        modalJogosEsgotados.show();
        return;
    }

    // Bloqueia se a rodada está em andamento ou finalizada
    if (rodadaFinalizada || rodadaEmAndamento) return;

    explosaoEnergia();
    // Caso tudo ok, sorteia o drop
    sortearDrop();
}

// Tecla Space
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") acaoJogo();
});

// Clique / touch
document.body.addEventListener("pointerdown", () => {
    acaoJogo();
});