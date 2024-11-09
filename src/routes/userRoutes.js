const express = require("express");
const userController = require("../controllers/userController");
const jwtMiddleware=require("../middlewares/jwtMiddleware");
const router = express.Router();

router.get('/', jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, userController.readAllUser);
router.post('/',userController.createNewUser);

router.get('/:userid', userController.readUserById);
router.put('/:userid', userController.updateUserById);
router.delete('/:userid', userController.deleteUserById);

router.post('/login', userController.loginUser, jwtMiddleware.generateToken, jwtMiddleware.sendToken);

module.exports = router;