import MemberCollection from '../models/member';
import Logger from '../middlewares/Logger';

class Member {

    public static async createMember(req: any, res: any) : Promise<any>{

        Logger.info("Outside try block");
        try{
            Logger.info("Creating member", req.body);
            const newMember = new MemberCollection({name: req.body.name,
                DOB: req.body.DOB,
                gender: req.body.gender,
                email: req.body.email});
            const instance = await newMember.save();
            return res.status(201).send({message: instance});
        }catch(err){
            Logger.info("Failed to add member:", err);
            return res.status(404).send({error: err});
        }
    }

    public static async findMember(req: any, res: any) : Promise<any>{

        Logger.info("Outside try block");
        try{
            Logger.info("find member", req.params);

            const member = await MemberCollection.findOne({email: req.params.email})
            return res.status(200).send({message: member});
        }catch(err){
            Logger.info("Failed to find member:", err);
            return res.status(404).send({error: err});
        }
    }


    public static async updateMember(req: any, res: any) : Promise<any>{

        Logger.info("Outside try block");
        try{
            Logger.info("Updating member", req.body);
            const email = req.params.email;
            const updateObj = req.body.details;
            await MemberCollection.updateOne({email}, updateObj);
            return res.status(201).send({message: "Successfully updated member"});
        }catch(err){
            Logger.info("Failed to update member:", err);
            return res.status(404).send({error: err});
        }
    }

    public static async deleteMember(req: any, res: any) : Promise<any>{

        Logger.info("Outside try block");
        try{
            const email = req.params.email;
            await MemberCollection.deleteOne({email});
            return res.status(201).send({message: "Successfully deleted member"});
        }catch(err){
            Logger.info("Failed to delete member:", err);
            return res.status(404).send({error: err});
        }
    }

    public static async listMembers(req: any, res: any) : Promise<any>{

        Logger.info("Outside try block");
        try{
            Logger.info("find member", req.params);

            const members = await MemberCollection.find({})
            return res.status(200).send({message: members});
        }catch(err){
            Logger.info("Failed to list members:", err);
            return res.status(404).send({error: err});
        }
    }
}

export default Member;
