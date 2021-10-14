// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
  console.log("varun");
  const token = user.getJWTToken();
  
  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  console.log(token);

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;