import { Router } from 'express';
import Logger from '../middlewares/Logger';
import User from '../controllers/userController';

const router = Router();

router.post('/createUser', User.createUser);
// router.post('addUser', UserController.addUser);

router.post('/updateUser/:name', User.findUser)

router.get('/listUsers', User.listUsers);
router.get('/readUser/:imsi', User.findUser);

router.post('/deleteUser/:imsi', (req, res) => {
    Logger.info('Basic get call');
    res.send("Hello Node with Typescript");
})
export default router;