import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import socioRoutes from "./routes/socio.routes";
import shareRoutes from "./routes/share.routes";
import paymentRoutes from "./routes/payment.routes";
import reportRoutes from "./routes/report.routes";

export const app = express();

app.use(express.json());

// Configuración de CORS mejorada
app.use(cors({
  // Reemplaza esta URL con la que te dio Vercel
  origin: [
    "https://oxigeno-eight.vercel.app", 
    "http://localhost:5173" // Mantenemos el local para que puedas seguir probando en tu PC
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use("/users", userRoutes);
app.use("/socios", socioRoutes);
app.use("/shares", shareRoutes);
app.use("/payments", paymentRoutes);
app.use("/reports", reportRoutes);