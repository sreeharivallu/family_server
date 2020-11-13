import mongoose from '../providers/Database';

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: { type: String, default: '' },
    gender: { type: String, match: /[a-z]/ },
    DOB: { type: Date, default: Date.now },
    email: { type: String, required: true, unique: true }
});

const MemberCollection = mongoose.model('Member', memberSchema);

export default MemberCollection;