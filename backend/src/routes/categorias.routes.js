import { Router } from "express";
import { methodHTTP as CategoriaController } from "../controllers/categorias.controllers.js";
const router = Router();

/*Configurar respuesta desde el server metodo http get*/
router.get("/", CategoriaController.getcategorias);/*PARA CRUD - read*/
router.post("/", CategoriaController.postCategorias); /*PARA CRUD - create */
/*ruta que recibe un parametro*/ 
router.get("/:id", CategoriaController.getCategory); /*PARA CRUD -  read 1 sola fila*/
/* ruta que recibe un parametro id de categoria a borrar*/ 
router.delete("/:id", CategoriaController.deleteCategory); /*PARA CRUD -  delete 1 sola fila*/
/* Ruta que recibe como parametro el id de la categoria a actualizar*/
router.put("/:id", CategoriaController.updateCategorias); /*PARA CRUD -  update */

/*hacemos disponible al router para toda la aplicacion*/
export default router;
