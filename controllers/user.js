const User = require("../model/userModel");

//register
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });

    res.status(201).json({
        user,
        success:true,
        message:"Register successfully"
    })

};

//Login user
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
      return next("Vui lòng nhập Email và Password", 400)
  }

  const user = await User.findOne({ email }).select("+password")

  if (!user) {
      return next("Email hoặc password không hợp lệ", 401)
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
      return next("Password không hợp lệ", 401)
  }

  const token = user.getJWTToken();

  res.status(200).json({
      success:true,
      token,
      user,
      message:"Dang nhap thanh cong"
  })

}

//Logout User
exports.logout = async (req, res, next) => {

  res.cookie("token",null,{
    expires: new Date(Date.now()),
    httpOnly: true,
  });

console.log(req.cookies)
  res.status(200).json({
      success: true,
      message: "Đăng xuất thành công"
  })
}

//Get All user (Admin)
exports.getAllUser = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
      success: true,
      users,
  })
}

//Get user (Admin)
exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
      success: true,
      user,
  })
}

//update User Role (ADMIN)

exports.updateUserRole = async (req, res, next) => {

  const user = await User.findByIdAndUpdate(req.params.id,req.body)

  res.status(200).json({
      success: true,
      user
  })
}

//deleteUser (ADMIN)

exports.deleteUser = async (req, res, next) => {

      const user = await User.findById(req.params.id)
      if (!user) {
          return next("User khong ton tai")
      }
      await user.remove()
      res.status(200).json({
          success: true,
          user
      })
  }
