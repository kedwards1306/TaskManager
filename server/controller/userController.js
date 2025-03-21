export const registerUser = async (req, res) => {
    try {
        const { name, email, password, isAdmin, role, title } = req.body;
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({
                status: false,
                message: "User already exists",
            });
        }
        const user = await User.create({
            name,
            email,
            password,
            isAdmin,
            role,
            title,
        });
        if (user) {
            isAdmin ? createJwt(res, user._id) : null;
            user.password = undefined;
            res.status(201).json(user);

        } else {
            res.status(400).json({
                status: false,
                message: "Failed to create user",
            });
        }
    } catch (error) {
        return res.status(400)
            .json({ status: false, message: error.message });
    }
    
};
export const loginUser = (req, res) => {
try {
    
} catch (error) {
    console.log(error);
    return res.status(400)
    .json({ status: false, message: error.message });
}
};