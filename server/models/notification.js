import mongoose, {Schema} from "mongoose";

const noticeSchema = new Schema({
    team: [{ type: Schema.Types.ObjectId, ref: "User" }],
    
});

const Notice = mongoose.model("Notice", noticeSchema);

export default Notice;
