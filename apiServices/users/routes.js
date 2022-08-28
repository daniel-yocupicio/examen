const express = require('express');
const controller = require('./controller');

const route = express.Router();

route.get('/userlist', controller.getUserList);
route.post('/usercreate', controller.userCreate);
route.post('/userlogin', controller.userLogin);
route.post('/logout', controller.userLogout);
route.put('/useredit', controller.userEdit);
route.get('/userdata', controller.getuser);

module.exports = route;