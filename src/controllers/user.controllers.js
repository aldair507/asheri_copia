import pool from "../db.js"; 





export const getUsuarios = async (req, res) => {
    try {
      const roleId = req.params.roleId;
      const results = await pool.query("SELECT * FROM usuarios WHERE id_rol = $1", [roleId]);
  
      res.json(results.rows);
    } catch (error) {
      console.error("Error al obtener usuarios por ID de rol:", error);
      res.status(500).json({ message: "Error al obtener usuarios de la base de datos" });
    }
  };
  export const getAllusuarios= async(req,res)=>{
    try {
        const results= await pool.query("SELECT * FROM usuarios")
        res.json(results.rows)
    } catch (error) {
        console.error("Error al obtener usuarios",error)
        res.status(500).json({ message: "Error al obtener usuarios de la base de datos" });

    }
  }

export const registerUsuarios= async(req, res,next)=>{
    const {identificacion, nombre, apellidos,telefono, email,contrasena}= req.body;

    try {
        await pool.query('INSERT INTO usuarios (identificacion, nombre, apellidos, telefono, email, contrasena) VALUES ($1,$2,$3,$4,$5,$6)',
        [identificacion,nombre,apellidos,telefono,email,contrasena])
        res.send("Usuario Registrado")
        
    } catch (error) {
        next(error)
        
    }
    
    
}

export const deleteUsuarios=async(req, res,next)=>{
    const {id}=req.params

    try {
        const emepleado= await pool.query('DELETE FROM usuarios WHERE _id= $1' , [id])

        if(emepleado.rowCount===0){
            return res.status(404).json({message: 'Not fount'})


        }
        
        return res.sendStatus(204)
        
    } catch (error) {
        next(error)
        
    }
}

export const updateUsuarios= async(req, res, next)=>{
    const {id}=req.params
    const {nombre,apellidos,telefono, email,contrasena}= req.body
    try {
        const update = await pool.query('UPDATE usuarios SET nombre=$1,apellidos=$2,telefono=$3,email=$4,contrasena=$5 WHERE _id= $6',[nombre,apellidos,telefono, email,contrasena, id])

        if(update.rowCount===0){
            return res.status(404).json({message: 'Not fount'})


        }
        res.sendStatus(204)
        
    } catch (error) {
        next(error)
        
    }


}




//CREATE TABLE usuarios (
//     _id SERIAL PRIMARY KEY,
//     identificacion INTEGER,
//     nombre VARCHAR(45),
//     apellidos VARCHAR(45),
//     telefono VARCHAR(45),
//     email VARCHAR(50),
//     contrasena VARCHAR(128);


