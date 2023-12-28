const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: { type: Schema.Types.String, unique: true },
  email: { type: Schema.Types.String, unique: true },
  password: { type: Schema.Types.String },
  dispayName: { type: Schema.Types.String },
});

const UserModel = model("user", UserSchema);
module.exports = UserModel;
