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

export const methodHTTP = {
    getcategorias
}

