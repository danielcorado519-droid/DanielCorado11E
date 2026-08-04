/* ============================================
   BITÁCORA · Daniel Corado
   Lógica del menú y navegación
   ============================================
   👉 Para agregar/editar el contenido de cada semana,
   modifica el arreglo SEMANAS de aquí abajo.
*/

const SEMANAS = [
  {
    icono: "📁",
    titulo: "Semana 1",
    subtitulo: "Introducción",
    descripcion: "Escribe aquí un resumen de lo visto en la primera semana de clase.",
    bloques: [
      {
        titulo: "Documento",
        texto: `<iframe src="archivos/semana1.pdf" width="100%" height="500" style="border:none;border-radius:8px;"></iframe>`
      }
    ]
  },
  {
    icono: "💻",
    titulo: "Semana 2",
    subtitulo: "Práctica",
    descripcion: "Describe la actividad o proyecto trabajado esta semana.",
    bloques: [
      {
        titulo: "Imagen",
        texto: `<img src="archivos/semana2.jpg" alt="Trabajo de la semana 2" style="width:100%;border-radius:8px;">`
      }
    ]
  },
  {
    icono: "⚡",
    titulo: "Semana 3",
    subtitulo: "Proyecto",
    descripcion: "Detalla el avance del proyecto de esta semana.",
    bloques: [
      {
        titulo: "Video",
        texto: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/TU_ID_DE_VIDEO" title="Video semana 3" style="border:none;border-radius:8px;" allowfullscreen></iframe>`
      }
    ]
  },
  {
    icono: "🛠️",
    titulo: "Semana 4",
    subtitulo: "Desarrollo",
    descripcion: "Explica lo construido o investigado en esta semana.",
    bloques: [
      {
        titulo: "Video",
        texto: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/TU_ID_DE_VIDEO" title="Video semana 4" style="border:none;border-radius:8px;" allowfullscreen></iframe>`
      }
    ]
  },
  {
    icono: "🚦",
    titulo: "Semana 5",
    subtitulo: "Avance",
    descripcion: "Registra el progreso de la semana 5.",
    bloques: [
      {
        titulo: "Video",
        texto: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/TU_ID_DE_VIDEO" title="Video semana 5" style="border:none;border-radius:8px;" allowfullscreen></iframe>`
      }
    ]
  },
  {
    icono: "📡",
    titulo: "Semana 6",
    subtitulo: "Exploración",
    descripcion: "Anota lo aprendido o investigado en esta semana.",
    bloques: [
      {
        titulo: "Video",
        texto: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/TU_ID_DE_VIDEO" title="Video semana 6" style="border:none;border-radius:8px;" allowfullscreen></iframe>`
      }
    ]
  },
  {
    icono: "👁️",
    titulo: "Semana 7",
    subtitulo: "Cierre",
    descripcion: "Resume el cierre de esta etapa del curso.",
    bloques: [
      {
        titulo: "Video",
        texto: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/TU_ID_DE_VIDEO" title="Video semana 7" style="border:none;border-radius:8px;" allowfullscreen></iframe>`
      }
    ]
  },
  {
    icono: "📝",
    titulo: "Semana 8",
    subtitulo: "Examen",
    descripcion: "Anota aquí
