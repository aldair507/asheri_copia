import express from "express";
import { registerModulo } from "../controllers/modulo.controller.js";

const router = express.Router();

// Ruta para registrar un nuevo módulo
router.post("/modulos", registerModulo);

export default router;
