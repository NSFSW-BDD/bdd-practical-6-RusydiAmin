const express = require("express");
const userController = require("../controllers/userController");
const jwtMiddleware=require("../middlewares/jwtMiddleware");
const router = express.Router();

router.get('/', userController.readAllUser);
router.post('/',userController.createNewUser);

router.get('/:userid', userController.readUserById);
router.put('/:userid', userController.updateUserById);
router.delete('/:userid', userController.deleteUserById);

module.exports = router;