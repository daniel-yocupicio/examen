const {conection} = require('../../services/mysql');

module.exports = {
    async getListUsers(){
        const sql = "call sp_getusers ()";

        return new Promise((resolve, reject) => {
            conection.query(sql, function(error, results, fields) {
                if(error) resolve({error: 'error al consultar'});
                const jsonString = JSON.stringify(Object.assign({}, results[0]));
                const json_obj = JSON.parse(jsonString);
                return resolve(json_obj);
            })
        })
    },

    async getIsDataCorrectLogin(data){
        const sql = "call sp_checarlogin (?)";
        const values = [data.contraseña, data.correo_electronico];

        return new Promise((resolve, reject) => {
            conection.query(sql, [values], function(error, results, fields) {
                if(error) resolve({error: 'error al consultar'});
                const jsonString = JSON.stringify(Object.assign({}, results[0]));
                const json_obj = JSON.parse(jsonString);
                return resolve(json_obj);
            })
        })
    },

    async editUser(data){
        const sql = "call sp_updateuser (?)";
        const values = [data.nombre, data.apellidos, data.correo_electronico, data.numero_tel, data.pais, data.cp, data.estado, data.municipio, data.localidad, data.colonia, data.calle, data.id];
        return new Promise((resolve, reject) => 
        conection.query(sql, [values], function(error, results, fields){
            if(error) resolve({error: error});
            return resolve(results[0]);
        })
    )
    },

    async addUser(data){
        const sql = "call sp_adduser (?)";
        const values = [data.nombre, data.apellidos, data.contraseña, data.correo_electronico, data.numero_tel, data.pais, data.cp, data.estado, data.municipio, data.localidad, data.colonia, data.calle];
        return new Promise((resolve, reject) => 
            conection.query(sql, [values], function(error, results, fields){
                if(error) resolve({error: error});
                return resolve(results[0]);
            })
        )
    },
}