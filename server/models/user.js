import bcrypt from "bcryptjs";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        title: { type: String, required: true },
        role: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },
        tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
        isActive: { type: Boolean, default: true, required: true }
    },
    { timestamps: true }
    
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return (next);
    }
    const saltPassword = await bcrypt.genSalt(11);
    this.password = await bcrypt.hash(this.password, saltPassword);
    next();
}
  

);
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;