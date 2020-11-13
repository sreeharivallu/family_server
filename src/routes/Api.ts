import { Router } from 'express';
import Logger from '../middlewares/Logger';
// import Locals from 'src/providers/Locals';

const router = Router();


router.get('/', (req, res) => {
    Logger.info('Basic get call');
    res.send("Hello Node with Typescript");
})
// router.post('addMember', MemberController.addMember);


export default router;