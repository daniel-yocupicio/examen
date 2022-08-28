const models = require('./models');

module.exports = {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async getUserList(req, res) {
        if (!req.session.user){
            return res.json({data: 'usuario invalido'});
        }
        const value = await models.getUserList();
        return res.json({data: value});
    },

    async userCreate(req, res) {
        if(!req.body.nombre) return res.sendStatus(400);
        if(!req.body.apellidos) return res.sendStatus(400);
        if(!req.body.contraseña) return res.sendStatus(400);
        if(!req.body.correo_electronico) return res.sendStatus(400);
        if(!req.body.numero_tel) return res.sendStatus(400);
        if(!req.body.pais) return res.sendStatus(400);
        if(!req.body.cp) return res.sendStatus(400);
        if(!req.body.estado) return res.sendStatus(400);
        if(!req.body.municipio) return res.sendStatus(400);
        if(!req.body.localidad) return res.sendStatus(400);
        if(!req.body.colonia) return res.sendStatus(400);
        if(!req.body.calle) return res.sendStatus(400);
        const value = await models.createUser(req.body);
        if(!value.error){
            req.session.user = value['0'];
        }
        return res.json({data: value});
    },

    async userLogin(req, res) {
        if(!req.body.contraseña) return res.sendStatus(400);
        if(!req.body.correo_electronico) return res.sendStatus(400);
        const value = await models.checkLogin(req.body);
        req.session.user = value['0'];
        return res.json({data: value});
    },

    async userLogout(req, res) {
        if (!req.session.user){
            return res.json({data: 'usuario invalido'});
        }
        req.session.destroy();
        return res.json({data: 'cerro sesión'})
    },

    async userEdit(req, res) {
        if (!req.session.user){
            return res.json({data: 'usuario invalido'});
        }
        if(!req.body.nombre) return res.sendStatus(400);
        if(!req.body.apellidos) return res.sendStatus(400);
        if(!req.body.correo_electronico) return res.sendStatus(400);
        if(!req.body.numero_tel) return res.sendStatus(400);
        if(!req.body.pais) return res.sendStatus(400);
        if(!req.body.cp) return res.sendStatus(400);
        if(!req.body.estado) return res.sendStatus(400);
        if(!req.body.municipio) return res.sendStatus(400);
        if(!req.body.localidad) return res.sendStatus(400);
        if(!req.body.colonia) return res.sendStatus(400);
        if(!req.body.calle) return res.sendStatus(400);

        const value = await models.updateUser({...req.session.user, ...req.body});
        if(!value.error){
            req.session.user = {...req.session.user, ...req.body};
        }
        return res.json({data: value});
    },

    async getuser(req, res) {
        return res.json({data: req.session.user ?? 'usuario invalido'});
    },
};