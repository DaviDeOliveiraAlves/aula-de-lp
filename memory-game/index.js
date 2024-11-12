const emojiData = [
  { src: "./assets/baku-baku.svg", alt: "baku-baku" },
  { src: "./assets/gomu-gomu.svg", alt: "gomu-gomu" },
  { src: "./assets/gura-gura.svg", alt: "gura-gura" },
  { src: "./assets/ito-ito.svg", alt: "ito-ito" },
  { src: "./assets/mera-mera.svg", alt: "mera-mera" },
  { src: "./assets/ope-ope.svg", alt: "ope-ope" },
  { src: "./assets/suna-suna.svg", alt: "suna-suna" },
  { src: "./assets/ushi-ushi.svg", alt: "ushi-ushi" },
];

// Duplicar os emojis para formar os pares
const emojis = [...emojiData, ...emojiData].map(
  (item) => `<img alt="${item.alt}" src="${item.src}" />`
);

// Função para embaralhar as imagens
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

// Função para tocar o áudio
const playSound = (audioName) => {
  const audio = new Audio(`./assets/sounds/${audioName}.m4a`);
  audio.volume = 0.5;
  audio.play();
};

let openCards = [];

// Embaralhar as imagens e adicioná-las na DOM
shuffle(emojis).forEach((emoji) => {
  const box = document.createElement("div");
  box.className = "item";
  box.innerHTML = emoji;
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
});

// Função para manipular o clique nos cartões
function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }

  playSound("flip");
}

// Verificar se os cards são iguais
function checkMatch() {
  const [card1, card2] = openCards;

  if (card1.innerHTML === card2.innerHTML) {
    card1.classList.add("boxMatch");
    card2.classList.add("boxMatch");
  } else {
    card1.classList.remove("boxOpen");
    card2.classList.remove("boxOpen");
    playSound("flipback");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Parabéns, você completou o jogo!");
    window.location.reload();
  }
}
