var preguntas = {
  colorPelo_: {
    pregunta:
      "¿Tu perro tiene su pelaje de color negro y blanco? (sin contar sus orejas u hocico)",
    valor: "negro y blanco",
  },
  colorPelo: {
    pregunta:
      "¿Tu perro tiene su pelaje de mas de un color? (sin contar sus orejas u hocico)",
    valor: "mixto",
  },
  tamanio: { pregunta: "¿Tu perro es pequeño?", valor: "chico" },
  temperamento: {
    pregunta: "¿Tu perro es hiperactivo(alocado)?",
    valor: "energetico",
  },
  tipoPelo: { pregunta: "¿Tu perro es de pelaje corto?", valor: "corto" },
  tipoOscico: {
    pregunta: "¿Tu perro tiene el hocico pequeño(chato)?",
    valor: "corto",
  },
  tipoCola: { pregunta: "¿Tu perro tiene la cola larga?", valor: "larga" },
};

var perros = [
  {
    id: 1,
    colorPelo_: "cafe y blanco",
    raza: "BullDog",
    colorPelo: "mixto",
    tamanio: "chico",
    temperamento: "tranquilo",
    tipoPelo: "corto",
    tipoOscico: "corto",
    tipoCola: "corta",
    img: "./assets/img_bulldog.jpeg",
  },
  {
    id: 2,
    colorPelo_: "cafe",
    raza: "Chow Chow",
    colorPelo: "simple",
    tamanio: "mediana",
    temperamento: "tranquilo",
    tipoPelo: "largo",
    tipoOscico: "mediano",
    tipoCola: "larga",
    img: "./assets/img_chow_chow.jpeg",
  },
  {
    id: 3,
    colorPelo_: "negro y cafe",
    raza: "Doberman",
    colorPelo: "mixto",
    tamanio: "grande",
    temperamento: "energetico",
    tipoPelo: "corto",
    tipoOscico: "largo",
    tipoCola: "larga",
    img: "./assets/img_doberman.jpeg",
  },
  {
    id: 4,
    raza: "Husky",
    colorPelo_: "negro y blanco",
    colorPelo: "mixto",
    tamanio: "grande",
    temperamento: "energetico",
    tipoPelo: "largo",
    tipoOscico: "largo",
    tipoCola: "larga",
    img: "./assets/img_husky.jpeg",
  },
  {
    id: 5,
    raza: "Labrador",
    colorPelo_: "blanco",
    colorPelo: "simple",
    tamanio: "grande",
    temperamento: "energetico",
    tipoPelo: "corto",
    tipoOscico: "largo",
    tipoCola: "larga",
    img: "./assets/img_labrador.webp",
  },
  {
    id: 6,
    raza: "Pastor alemán",
    colorPelo_: "negro y cafe",
    colorPelo: "mixto",
    tamanio: "grande",
    temperamento: "energetico",
    tipoPelo: "largo",
    tipoOscico: "largo",
    tipoCola: "larga",
    img: "./assets/img_pastor_aleman.avif",
  },
  {
    id: 7,
    raza: "Shar Pei",
    colorPelo_: "cafe",
    colorPelo: "simple",
    tamanio: "chico",
    temperamento: "tranquilo",
    tipoPelo: "corto",
    tipoOscico: "corto",
    tipoCola: "larga",
    img: "./assets/img_shar_pei.webp",
  },
  {
    id: 8,
    raza: "Pug",
    colorPelo_: "blanco",
    colorPelo: "simple",
    tamanio: "chico",
    temperamento: "energetico",
    tipoPelo: "corto",
    tipoOscico: "corto",
    tipoCola: "corta",
    img: "./assets/img_pug.jpeg",
  },
];

var key_ = "";
var comparacion_ = "";
var tablero = document.getElementById("tablero");
document.getElementById("btn_si").addEventListener("click", evaluar);
document.getElementById("btn_no").addEventListener("click", evaluar);

perros.map((perro) => {
  tablero.innerHTML += `
          <div id="${perro.id}" class="tablero-item">
            <img src="${perro.img}" alt="${perro.raza}" />
            <span>${perro.raza}</span>
          </div>
  `;
});

function evaluar(e) {
  if (e.target.id === "btn_si") {
    var eliminar = perros.filter((perro) => perro[key_] !== comparacion_);
    eliminar.map((perro) => {
      document.getElementById(perro.id).className += " disabled";
    });
    perros = perros.filter((perro) => perro[key_] === comparacion_);
    getPreguntas();
  } else if (e.target.id === "btn_no") {
    var eliminar = perros.filter((perro) => perro[key_] === comparacion_);
    eliminar.map((perro) => {
      document.getElementById(perro.id).className += " disabled";
    });
    perros = perros.filter((perro) => perro[key_] !== comparacion_);
    getPreguntas();
  }
}

const getRandomInt = (max) => Math.floor(Math.random() * max);

function getPreguntas() {
  var cont = 0;
  var random_ = getRandomInt(Object.keys(preguntas).length);

  if (Object.keys(perros).length === 0) {
    alert("Tu perro no se encuentra en la lista");
    return;
  }
  if (Object.keys(preguntas).length > 0 && Object.keys(perros).length !== 1) {
    for (const key in preguntas) {
      if (cont === random_) {
        document.getElementById(
          "pregunta"
        ).innerHTML = `${preguntas[key].pregunta}`;
        key_ = key;
        comparacion_ = preguntas[key].valor;
        delete preguntas[key];
      }
      cont++;
    }
  } else {
    alert(`Tu perro es ${perros[0].raza}`);
    location.reload();
  }
}

getPreguntas();
