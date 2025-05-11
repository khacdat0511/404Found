const userModel = require('../model/UserModel')

class UserController {
    async getUsers(req, res) {
        try {
            const users = await userModel.getAllUsers();
            res.status(200).json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
    async getUsersById(req, res) {
        try {
            const id=req.params.id;
            const users = await userModel.getUsers(id);
            res.status(200).json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}
module.exports =new UserController();