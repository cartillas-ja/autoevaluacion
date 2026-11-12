// =====================================================================
//  CONFIGURACIÓN — Pasaporte de la Profe Marce
// =====================================================================

// Conexión a Firebase (el mismo proyecto de la autoevaluación de Sabrina)
export const firebaseConfig = {
  apiKey: "AIzaSyA1N739S5btWr-uDoj9QEaGVyc-AaQYzow",
  authDomain: "autoevaluacion-11763.firebaseapp.com",
  projectId: "autoevaluacion-11763",
  storageBucket: "autoevaluacion-11763.firebasestorage.app",
  messagingSenderId: "468597881348",
  appId: "1:468597881348:web:20381586bb8e1ecde61351"
};

// Colección propia: las respuestas de Marce van separadas de las de Sabrina
export const COLECCION = "respuestas_marce";

// Sellos: emoji, texto, color y puntos (los 6 suman 5.0)
// El orden importa: no los reordenes cuando ya haya respuestas.
export const SELLOS = [
  { e: "🕒", t: "Me conecté puntual", c: "#e0524d", p: 0.8 },
  { e: "📹", t: "Mantuve mi cámara abierta", c: "#2f7fd1", p: 0.8 },
  { e: "🔇", t: "No abrí el micro para interrumpir", c: "#8a5cc9", p: 0.8 },
  { e: "📤", t: "Envié mis trabajos a tiempo a la plataforma", c: "#1f9d72", p: 0.8 },
  { e: "👂", t: "Presté atención a las indicaciones de las clases", c: "#e08a1e", p: 0.9 },
  { e: "⏪", t: "Si no pude conectarme, vi la clase grabada y me adelanté", c: "#d94f9a", p: 0.9 }
];
