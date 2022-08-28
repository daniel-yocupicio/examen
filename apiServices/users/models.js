const dao = require("./dao");

module.exports = {
    async getUserList() {
        return dao.getListUsers();
    },
    async createUser(data){
        return dao.addUser(data);
    },
    async checkLogin(data){
        return dao.getIsDataCorrectLogin(data);
    },
    async updateUser(data){
        return dao.editUser(data);
    }
}