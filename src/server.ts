import dotenv from "dotenv";
dotenv.config();

import { app } from "./app";
import { connectDB } from "./config/database";

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server corriendo en puerto ${PORT}`);
});
