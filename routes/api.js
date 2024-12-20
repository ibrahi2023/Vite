import express from 'express';
const router = express.Router();
import * as todoController from '../app/controllers/todoController.js';
import * as userController from "../app/controllers/authController.js";
import * as ClientController from "../app/controllers/ClientControler.js";

router.post('/store', todoController.store);
router.get('/show', todoController.show);
router.delete('/destroy/:id', todoController.destroy);
router.post("/signup",userController.signup);
router.post("/signin",userController.signin);
router.post('/updatesign', userController.ValideEdite);
router.post('/ValideUser', userController.ValideUser);
router.post('/DelleteCompte', userController.DelleteUser);
router.get('/GetUsers', userController.GetUser);
router.post('/AddClient', ClientController.AddClient);
router.post('/editClient', ClientController.EditClient);
router.get('/GetClient', ClientController.GetClient);
router.post('/GetMatricule', ClientController.GetMatricule);
router.post('/GetDashClient', ClientController.GetDashClient);


export default router;