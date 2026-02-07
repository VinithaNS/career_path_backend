const User = require("../model/userModel");

// Sign Up //
exports.signup = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ message: "Email already registered" });

    const user = await User.create(req.body);

    return res.status(201).json({
      message: "User registered successfully",
      userId: user._id
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//Sign In //
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    return res.status(200).json({
      message: "Login successful",
      userId: user._id
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
