/* ============================================
   BITÁCORA · Daniel Corado
   Lógica del menú y navegación
   ============================================
   👉 Para agregar/editar el contenido de cada fase,
   modifica el arreglo FASES de aquí abajo.
*/

const FASES = [
  {
    icono: "📁",
    titulo: "Fase 1",
    subtitulo: "Introducción",
    descripcion: "Escribe aquí un resumen de lo visto en esta fase.",
    bloques: [
      {
        titulo: "Documento",
        texto: `<iframe src="s1.pdf" width="100%" height="500" style="border:none;border-radius:8px;"></iframe>`
      }
    ]
  },
  {
    icono: "💻",
    titulo: "Fase 2",
    subtitulo: "Práctica",
    descripcion: "Describe la actividad o proyecto trabajado en esta fase.",
    bloques: [
      {
        titulo: "Video",
        texto: `<video controls style="width:100%;border-radius:8px;">
          <source src="video1.mp4" type="video/mp4">
          Tu navegador no soporta el video.
        </video>`
      }
    ]
  },
  {
    icono: "⚡",
    titulo: "Fase 3",
    subtitulo: "Proyecto",
    descripcion: "Detalla el avance del proyecto de esta fase.",
    bloques: [
      {
        titulo: "Video",
        texto: `<video controls style="width:100%;border-radius:8px;">
          <source src="s3.mp4" type="video/mp4">
          Tu navegador no soporta el video.
        </video>`
      }
    ]
  },
  {
    icono: "🛠️",
    titulo: "Fase 4",
    subtitulo: "Desarrollo",
    descripcion: "Explica lo construido o investigado en esta fase.",
    bloques: [
      {
        titulo: "Video",
        texto: `<video controls style="width:100%;border-radius:8px;">
          <source src="s4.mp4" type="video/mp4">
          Tu navegador no soporta el video.
        </video>`
      }
    ]
  },
  {
    icono: "🚦",
    titulo: "Fase 5",
    subtitulo: "Avance",
    descripcion: "Registra el progreso de esta fase.",
    bloques: [
      {
        titulo: "Video",
        texto: `<video controls style="width:100%;border-radius:8px;">
          <source src="s5.mp4" type="video/mp4">
          Tu navegador no soporta el video.
        </video>`
      }
    ]
  }
];

const listaFases     = document.getElementById("listaFases");
const panelContenido = document.getElementById("panelContenido");
const bienvenida      = document.getElementById("bienvenida");
const tituloActivo   = document.getElementById("tituloActivo");

let faseActiva = null;

function construirMenu(){
  FASES.forEach((fase, indice) => {
    const boton = document.createElement("button");
    boton.className = "fase-item";
    boton.setAttribute("data-indice", indice);
    boton.innerHTML = `
      <span class="fase-num">${String(indice + 1).padStart(2, "0")}</span>
      <span class="fase-icono">${fase.icono}</span>
      <span class="fase-titulo">${fase.titulo}<small>${fase.subtitulo}</small></span>
    `;
    boton.addEventListener("click", () => mostrarFase(indice));
    listaFases.appendChild(boton);
  });
}

function mostrarFase(indice){
  faseActiva = indice;
  const fase = FASES[indice];

  document.querySelectorAll(".fase-item").forEach((el, i) => {
    el.classList.toggle("activa", i === indice);
  });

  tituloActivo.textContent = `${fase.titulo} · ${fase.subtitulo}`;

  const bloquesHTML = fase.bloques.map(b => `
    <div class="bloque">
      <h3>${b.titulo}</h3>
      <div class="bloque-contenido">${b.texto}</div>
    </div>
  `).join("");

  panelContenido.innerHTML = `
    <div class="contenido-fase">
      <span class="etiqueta">${fase.icono} ${fase.titulo}</span>
      <h2>${fase.subtitulo}</h2>
      <p class="descripcion">${fase.descripcion}</p>
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
