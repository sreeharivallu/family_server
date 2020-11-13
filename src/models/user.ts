import mongoose from '../providers/Database';

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: { type: String, default: '' },
    msisdn: { type: String, match: /[0-9]/ },
    imsi: { type: String, match: /[0-9]/ },
    type: { type: String }
});

const UserCollection = mongoose.model('User', memberSchema);

export default UserCollection;