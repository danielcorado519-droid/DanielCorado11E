/* ============================================
   BITÁCORA · Daniel Corado
   Lógica del menú y navegación
   ============================================
   👉 Para agregar/editar el contenido de cada semana,
   modifica el arreglo SEMANAS de aquí abajo.
   Cada semana tiene: icono, título, descripción y bloques.
*/

const SEMANAS = [
  {
    icono: "📁",
    titulo: "Semana 1",
    subtitulo: "Introducción",
    descripcion: "Escribe aquí un resumen de lo visto en la primera semana de clase.",
    bloques: [
      { titulo: "Contenido", texto: "Sustituye este texto por el trabajo, apuntes o enlaces de la semana 1." }
    ]
  },
  {
    icono: "💻",
    titulo: "Semana 2",
    subtitulo: "Práctica",
    descripcion: "Describe la actividad o proyecto trabajado esta semana.",
    bloques: [
      { titulo: "Contenido", texto: "Sustituye este texto por el trabajo de la semana 2." }
    ]
  },
  {
    icono: "⚡",
    titulo: "Semana 3",
    subtitulo: "Proyecto",
    descripcion: "Detalla el avance del proyecto de esta semana.",
    bloques: [
      { titulo: "Contenido", texto: "Sustituye este texto por el trabajo de la semana 3." }
    ]
  },
  {
    icono: "🛠️",
    titulo: "Semana 4",
    subtitulo: "Desarrollo",
    descripcion: "Explica lo construido o investigado en esta semana.",
    bloques: [
      { titulo: "Contenido", texto: "Sustituye este texto por el trabajo de la semana 4." }
    ]
  },
  {
    icono: "🚦",
    titulo: "Semana 5",
    subtitulo: "Avance",
    descripcion: "Registra el progreso de la semana 5.",
    bloques: [
      { titulo: "Contenido", texto: "Sustituye este texto por el trabajo de la semana 5." }
    ]
  },
  {
    icono: "📡",
    titulo: "Semana 6",
    subtitulo: "Exploración",
    descripcion: "Anota lo aprendido o investigado en esta semana.",
    bloques: [
      { titulo: "Contenido", texto: "Sustituye este texto por el trabajo de la semana 6." }
    ]
  },
  {
    icono: "👁️",
    titulo: "Semana 7",
    subtitulo: "Cierre",
    descripcion: "Resume el cierre de esta etapa del curso.",
    bloques: [
      { titulo: "Contenido", texto: "Sustituye este texto por el trabajo de la semana 7." }
    ]
  },
  {
    icono: "📝",
    titulo: "Semana 8",
    subtitulo: "Examen",
    descripcion: "Anota aquí notas de repaso o resultados del examen.",
    bloques: [
      { titulo: "Contenido", texto: "Sustituye este texto por el trabajo de la semana 8." }
    ]
  }
];

const listaSemanas   = document.getElementById("listaSemanas");
const panelContenido = document.getElementById("panelContenido");
const bienvenida      = document.getElementById("bienvenida");
const tituloActivo   = document.getElementById("tituloActivo");

let semanaActiva = null;

function construirMenu(){
  SEMANAS.forEach((semana, indice) => {
    const boton = document.createElement("button");
    boton.className = "semana-item";
    boton.setAttribute("data-indice", indice);
    boton.innerHTML = `
      <span class="semana-num">${String(indice + 1).padStart(2, "0")}</span>
      <span class="semana-icono">${semana.icono}</span>
      <span class="semana-titulo">${semana.titulo}<small>${semana.subtitulo}</small></span>
    `;
    boton.addEventListener("click", () => mostrarSemana(indice));
    listaSemanas.appendChild(boton);
  });
}

function mostrarSemana(indice){
  semanaActiva = indice;
  const semana = SEMANAS[indice];

  document.querySelectorAll(".semana-item").forEach((el, i) => {
    el.classList.toggle("activa", i === indice);
  });

  tituloActivo.textContent = `${semana.titulo} · ${semana.subtitulo}`;

  const bloquesHTML = semana.bloques.map(b => `
    <div class="bloque">
      <h3>${b.titulo}</h3>
      <p>${b.texto}</p>
    </div>
  `).join("");

  panelContenido.innerHTML = `
    <div class="contenido-semana">
      <span class="etiqueta">${semana.icono} ${semana.titulo}</span>
      <h2>${semana.subtitulo}</h2>
      <p class="descripcion">${semana.descripcion}</p>
      ${bloquesHTML}
    </div>
  `;
}

/* ===== Selector de tema (colores) ===== */
document.querySelectorAll(".swatch").forEach(boton => {
  boton.addEventListener("click", () => {
    document.body.setAttribute("data-theme", boton.getAttribute("data-theme"));
  });
});

/* ===== Modo claro / oscuro ===== */
const btnModo = document.getElementById("btnModo");
btnModo.addEventListener("click", () => {
  document.body.classList.toggle("claro");
  btnModo.textContent = document.body.classList.contains("claro") ? "☀️" : "🌙";
});

construirMenu();
