  // En tu controlador, al asignar permisos

  import pool from "../db.js";
  export const asignarPermisos = async (req, res) => {
    try {
      const { id_modulo, id_rol, permisos } = req.body;
  
    
      const existingEntry = await pool.query(
        "SELECT * FROM modulosxroles WHERE id_modulo = $1 AND id_rol = $2",
        [id_modulo, id_rol]
      );
  
      if (existingEntry.rows.length > 0) {
        
        await pool.query(
          "UPDATE modulosxroles SET permisos = $1 WHERE id_modulo = $2 AND id_rol = $3",
          [permisos, id_modulo, id_rol]
        );
      } else {
       
        await pool.query(
          "INSERT INTO modulosxroles (id_modulo, id_rol, permisos) VALUES ($1, $2, $3)",
          [id_modulo, id_rol, permisos]
        );
      }
  
      res.json({ message: "Permisos asignados exitosamente" });
    } catch (error) {
      console.error("Error al asignar permisos:", error);
      res.status(500).json({ message: "Error al asignar permisos en la base de datos" });
    }
  };
  