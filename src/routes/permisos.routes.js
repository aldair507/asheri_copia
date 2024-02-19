

import express from "express";
import { asignarPermisos } from "../controllers/permisos.controllers.js";

const router = express.Router();


router.post('/modulosxroles/:roleId', asignarPermisos);

export default router;

