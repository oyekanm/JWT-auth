import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const {Schema,model,models} = mongoose

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// compare the password entered to the hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


// generate a hashed password before thschema runs
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
// console.log(this);
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
  next();
});
const User = models.User || model("User", userSchema);

export default User;
