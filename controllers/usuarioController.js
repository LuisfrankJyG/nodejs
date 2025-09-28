const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');

// GET: Listar todos los usuarios
const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            attributes: { exclude: ['password'] },
            order: [['createdAt', 'DESC']]
        });

        res.json({
            success: true,
            message: 'Usuarios obtenidos correctamente',
            data: usuarios,
            total: usuarios.length
        });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor',
            error: error.message
        });
    }
};

// GET: Usuario por ID
const obtenerUsuarioPorId = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id, {
            attributes: { exclude: ['password'] }
        });

        if (!usuario) {
            return res.status(404).json({
                success: false,
                message: 'Usuario no encontrado'
            });
        }

        res.json({
            success: true,
            data: usuario
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// POST: Crear usuario
const crearUsuario = async (req, res) => {
    try {
        const { nombre, email, password, activo } = req.body;

        const passwordHash = await bcrypt.hash(password, 10);
        const nuevoUsuario = await Usuario.create({
            nombre,
            email,
            password: passwordHash,
            activo
        });

        res.status(201).json({
            success: true,
            message: 'Usuario creado correctamente',
            data: {
                id: nuevoUsuario.id,
                nombre: nuevoUsuario.nombre,
                email: nuevoUsuario.email,
                activo: nuevoUsuario.activo
            }
        });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// PUT: Actualizar usuario
const actualizarUsuario = async (req, res) => {
    try {
        const { nombre, email, password, activo } = req.body;
        const usuario = await Usuario.findByPk(req.params.id);

        if (!usuario) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
        }

        if (password) {
            usuario.password = await bcrypt.hash(password, 10);
        }
        if (nombre) usuario.nombre = nombre;
        if (email) usuario.email = email;
        if (activo !== undefined) usuario.activo = activo;

        await usuario.save();

        res.json({
            success: true,
            message: 'Usuario actualizado correctamente',
            data: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                activo: usuario.activo
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// DELETE: Eliminar usuario
const eliminarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
        }

        await usuario.destroy();

        res.json({
            success: true,
            message: 'Usuario eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};