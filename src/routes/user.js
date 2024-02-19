import { Router } from "express";
import {  getUsuarios, registerUsuarios, deleteUsuarios, updateUsuarios, getAllusuarios} from "../controllers/user.controllers.js";
const router= Router()

router.get("/:roleId",getUsuarios )
router.get("/",getAllusuarios )
router.post("/register", registerUsuarios)
router.delete("/:id", deleteUsuarios)
router.put("/:id",updateUsuarios)





export default router;