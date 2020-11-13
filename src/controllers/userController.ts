import UserCollection from '../models/user';
import Logger from '../middlewares/Logger';

class User {

    public static async createUser(req: any, res: any) : Promise<any>{

        Logger.info("Outside try block");
        try{
            Logger.info("Creating user", req.body);
            const newUser = new UserCollection({name: req.body.name,
                msisdn: req.body.msisdn,
                imsi: req.body.imsi,
                type: req.body.type});
            const instance = await newUser.save();
            return res.status(201).send({message: instance});
        }catch(err){
            Logger.info("Failed to add user:", err);
            return res.status(404).send({error: err});
        }
    }

    public static async findUser(req: any, res: any) : Promise<any>{

        Logger.info("Outside try block");
        try{
            Logger.info("find user", req.params);

            const user = await UserCollection.findOne({email: req.params.imsi})
            return res.status(200).send({message: user});
        }catch(err){
            Logger.info("Failed to find user:", err);
            return res.status(404).send({error: err});
        }
    }


    public static async updateUser(req: any, res: any) : Promise<any>{

        Logger.info("Outside try block");
        try{
            Logger.info("Updating user", req.body);
            const name = req.params.name;
            const updateObj = req.body.details;
            await UserCollection.updateOne({name}, updateObj);
            return res.status(201).send({message: "Successfully updated user"});
        }catch(err){
            Logger.info("Failed to update user:", err);
            return res.status(404).send({error: err});
        }
    }

    public static async deleteUser(req: any, res: any) : Promise<any>{

        Logger.info("Outside try block");
        try{
            const imsi = req.params.imsi;
            await UserCollection.deleteOne({imsi});
            return res.status(201).send({message: "Successfully deleted user"});
        }catch(err){
            Logger.info("Failed to delete user:", err);
            return res.status(404).send({error: err});
        }
    }

    public static async listUsers(req: any, res: any) : Promise<any>{

        Logger.info("Outside try block");
        try{
            Logger.info("find user", req.params);

            const users = await UserCollection.find({})
            return res.status(200).send({message: users});
        }catch(err){
            Logger.info("Failed to list users:", err);
            return res.status(404).send({error: err});
        }
    }
}

export default User;
