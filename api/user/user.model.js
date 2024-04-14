// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const { validationPassword, validationEmail } = require("../../util/validate");

// const userSchema = new mongoose.Schema({
//   email: { type: String, trim: true, required: true },
//   password: { type: String, trim: true, required: true },
// });

// userSchema.pre("save", function (next) {
//   if (!validationPassword(this.password)) {
//     return new Error("The password does not meet the requirements"); // aqui entra si validationPass da false
//   }
//   if (!validationEmail(this.email)) {
//     return new Error("The email is not correct");
//   }

//   this.password = bcrypt.hashSync(this.password, 10);
//   next();
// });

// const User = mongoose.model("User", userSchema);
// module.exports = User;