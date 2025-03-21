import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
    team: [{ type: Schema.Types.ObjectId, ref: "User" }],
    
});

const Notice = mongoose.model("Notice", noticeSchema);

export default Notice;