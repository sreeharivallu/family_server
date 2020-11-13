import { Router } from 'express';
import Logger from '../middlewares/Logger';
import Member from '../controllers/MemberController';

const router = Router();

router.post('/createMember', Member.createMember);
// router.post('addMember', MemberController.addMember);

router.post('/updateMember/:email', Member.findMember)

router.get('/listMembers', Member.listMembers);
router.get('/readMember/:email', Member.findMember);

router.post('/deleteMember/:email', (req, res) => {
    Logger.info('Basic get call');
    res.send("Hello Node with Typescript");
})
export default router;