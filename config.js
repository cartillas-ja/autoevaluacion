// =====================================================================
//  CONFIGURACIÓN — el único archivo que hay que editar
// =====================================================================

// 1) Pega aquí la configuración de Firebase
//    (Configuración del proyecto > Tus apps > App web > firebaseConfig)
export const firebaseConfig = {
  apiKey: "AIzaSyA1N739S5btWr-uDoj9QEaGVyc-AaQYzow",
  authDomain: "autoevaluacion-11763.firebaseapp.com",
  projectId: "autoevaluacion-11763",
  storageBucket: "autoevaluacion-11763.firebasestorage.app",
  messagingSenderId: "468597881348",
  appId: "1:468597881348:web:20381586bb8e1ecde61351"
};

// 2) Caritas: [emoji, texto, puntos]
export const CARAS = [["😄", "Siempre", 1], ["🙂", "A veces", 0.7], ["🤔", "Aún no", 0.4]];

// 3) Preguntas (el orden importa: no las reordenes cuando ya haya respuestas)
export const PREGUNTAS = [
  "🙋 Levanté la mano y participé en clase.",
  "✏️ Hice mis trabajos y tareas con esfuerzo.",
  "👂 Escuché con atención cuando hablaba la profe.",
  "🧹 Cuidé mis cosas y las de mi salón.",
  "💪 Lo intenté otra vez cuando se me hizo difícil."
];
