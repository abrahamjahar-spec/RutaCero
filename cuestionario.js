const preguntas = [
  { q: "1. ¿Cómo te desplazas normalmente?", a: [ {t: "Auto propio (Combustible)", p: 10}, {t: "Transporte Público", p: 5}, {t: "Bici / Caminar", p: 0} ] },
  { q: "2. ¿Cuánta carne roja consumes a la semana?", a: [ {t: "Más de 4 veces", p: 10}, {t: "1 a 3 veces", p: 5}, {t: "Casi nunca / Vegano", p: 0} ] },
  { q: "3. ¿Sueles dejar aparatos conectados?", a: [ {t: "Sí, siempre", p: 8}, {t: "A veces", p: 4}, {t: "No, desconecto todo", p: 0} ] },
  { q: "4. ¿Qué haces con tus residuos orgánicos?", a: [ {t: "Los tiro a la basura común", p: 8}, {t: "Trato de reciclar plástico", p: 4}, {t: "Hago compostaje en casa", p: -5} ] },
  { q: "5. ¿De dónde vienen los productos que compras?", a: [ {t: "Importados (Vienen de lejos)", p: 10}, {t: "Mezcla", p: 5}, {t: "Locales / De temporada", p: 2} ] },
  { q: "6. ¿Utilizas aire acondicionado o calefacción en exceso?", a: [ {t: "Sí, todo el día", p: 10}, {t: "Uso moderado", p: 5}, {t: "Casi nunca", p: 0} ] },
  { q: "7. ¿Participas en siembra de árboles o cuidas un jardín denso?", a: [ {t: "No tengo plantas", p: 5}, {t: "Tengo algunas plantas", p: 0}, {t: "Sí, siembro o tengo jardín", p: -10} ] },
  { q: "8. ¿Cuánta ropa nueva compras al mes?", a: [ {t: "Mucha (Fast Fashion)", p: 10}, {t: "Solo lo necesario", p: 5}, {t: "Segunda mano / Casi nada", p: 2} ] }
];

// codigo para emerger en cualquier pagina
const widgetHTML = `
  <div id="btn-flotante">🌿 Calcula tu Huella</div>
  <div id="ventana-chat" class="oculta">
    <div class="chat-header">
      <h4>Calculadora de Carbono</h4>
      <span id="cerrar-chat">✖</span>
    </div>
    <div id="chat-body">
      </div>
  </div>
`;
document.body.insertAdjacentHTML('beforeend', widgetHTML);

//Logica
let preguntaActual = 0;
let puntajeTotal = 0;

const btnFlotante = document.getElementById('btn-flotante');
const ventanaChat = document.getElementById('ventana-chat');
const btnCerrar = document.getElementById('cerrar-chat');
const chatBody = document.getElementById('chat-body');


btnFlotante.addEventListener('click', () => {
  ventanaChat.classList.remove('oculta');
  btnFlotante.style.display = 'none';
  iniciarCuestionario();
});

btnCerrar.addEventListener('click', () => {
  ventanaChat.classList.add('oculta');
  btnFlotante.style.display = 'block';
});

function iniciarCuestionario() {
  preguntaActual = 0;
  puntajeTotal = 0;
  mostrarPregunta();
}

function mostrarPregunta() {
  if (preguntaActual < preguntas.length) {
    const data = preguntas[preguntaActual];
    let htmlBotones = '';
    
    data.a.forEach((respuesta, index) => {
      htmlBotones += `<button class="btn-respuesta" onclick="responder(${respuesta.p})">${respuesta.t}</button>`;
    });

    chatBody.innerHTML = `
      <p class="pregunta-texto">${data.q}</p>
      <div class="respuestas-contenedor">${htmlBotones}</div>
      <small class="progreso">Pregunta ${preguntaActual + 1} de ${preguntas.length}</small>
    `;
  } else {
    mostrarResultado();
  }
}


window.responder = function(puntos) {
  puntajeTotal += puntos;
  preguntaActual++;
  mostrarPregunta();
};

function mostrarResultado() {
  let mensaje = "";
  let color = "";

  if (puntajeTotal >= 40) {
    mensaje = "Tu huella es <b>muy alta (Carbono Positivo)</b>. Emitiste demasiados gases. ¡Te recomendamos leer la sección de soluciones urgentes!";
    color = "#ff3333";
  } else if (puntajeTotal > 10) {
    mensaje = "Estás en el <b>promedio</b>. Tienes buenos hábitos pero aún hay acciones que puedes mejorar para llegar a ser Neutral.";
    color = "#ffaa00";
  } else {
    mensaje = "¡Increíble! Tu impacto es <b>muy bajo (o Carbono Negativo)</b>. Gracias a acciones como compostar y plantar, le haces un gran favor al planeta.";
    color = "#00ff88";
  }

  chatBody.innerHTML = `
    <h3 style="color: ${color}; text-align: center; margin-top: 0;">Puntaje: ${puntajeTotal}</h3>
    <p style="text-align: center;">${mensaje}</p>
    <button class="btn-respuesta" style="background: #333; margin-top: 15px;" onclick="iniciarCuestionario()">🔄 Volver a intentar</button>
  `;
}