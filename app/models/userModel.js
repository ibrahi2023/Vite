import mongoose from 'mongoose';
const Users = new mongoose.Schema(
 { username: {type:String,required:false},
  email: {type:String,required:false},
  password: {type:String,required:false},
  validUser:  {type:String,required:false},
  Opital:  {type:String,required:false},
  commune:  {type:String,required:false},
  typeuser:{type:String,required:false},
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ]
}
);
const User = mongoose.model('User', Users);
export default User;
