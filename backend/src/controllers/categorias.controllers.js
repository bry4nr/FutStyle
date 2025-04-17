import getConnection from "../db/database.js"
const getcategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias")
        res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error en el servidor");
    }
}

const postCategorias = async (req, res) => {
    try {
        const {CategoriaNombre, Descripcion, Imagen} = req.body;
        const category = {
            CategoriaNombre,
            Descripcion,
            Imagen
        }
      
         const connection = await getConnection();
         const result = await connection.query("INSERT INTO categorias SET ?",category) 

         res.json({result, message: "Categoría creada"})
    } catch (error) {
      console.error(error);
      res.status(500).send("Error en el servidor");
    }
}

const getCategory = async (req, res) => {
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?",id);
        res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error en el servidor");
    }
}

const deleteCategory = async (req, res) => {
    try {
        console.log("id de categoria a eliminar: ", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM categorias WHERE CategoriaID = ?",id);
        res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error en el servidor");
    }
}
const updateCategorias = async (req, res) => {
    try {
        const {id} = req.params
        const {CategoriaNombre, Descripcion, Imagen} = req.body;
        const category = {
            CategoriaNombre,
            Descripcion,
            Imagen
        }
      
         const connection = await getConnection();
         const result = await connection.query("UPDATE categorias SET ? WHERE CategoriaID = ?",[category, id]) 

         res.json({result, message: "Categoría actualizada"})
    } catch (error) {
      console.error(error);
      res.status(500).send("Error en el servidor");
    }
}
export const methodHTTP = {
    getcategorias,
    postCategorias,
    getCategory,
    deleteCategory,
    updateCategorias
}

