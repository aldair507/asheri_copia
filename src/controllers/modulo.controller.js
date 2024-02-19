export const registerModulo = async (req, res, next) => {
    const { id_modulo_padre, nombre_modulo, url_modulo, icono, orden } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO modulos (id_modulo_padre, nombre_modulo, url_modulo, icono, orden) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [id_modulo_padre, nombre_modulo, url_modulo, icono, orden]
        );

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};