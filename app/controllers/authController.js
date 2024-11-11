import { JWT_SECRET} from "../config/config.js";
import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";
import  User  from "../models/userModel.js";
import { converBase64ToImage } from 'convert-base64-to-image'
 export const signup = async(req, res) => {
  const{username,email,commune,Opital,roles,typeuser,fileData}=req.body;
  if(!req.body) return;
  const password=req.body.password;
  const password2=req.body.password2;
 try {
    if(password!==password2){   
        return  res.status(200).json({username:"", message: "Erreur Confirmation password!"});
     }
    const finuser=await  User.findOne({
      username: req.body.username
    });
    if (finuser) {
      console.log("USER Existe")
      return res.status(200).json({username:username, message: "User existe" });
    } 
    const GetallUser=await  User.find({});
    if(GetallUser.length==0){
    const user = new User({
    username: "admin",
    email: email,
    commune:commune,
    Opital:Opital,
    typeuser:typeuser,
    validUser: "oui",
    password: bcrypt.hashSync(req.body.password, 8)
  });
  const result=await user.save(); 
  if(fileData){
    const base64 =fileData;  // 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//'
    const pathToSaveImage = `public/images/users/${result._id}.png`;
    const path = converBase64ToImage(base64, pathToSaveImage) //returns path /public/image.png 
  }
  res.status(200).json({users:result,message:"inscription Success"});
}
  else{
    const user = new User({
      username: username,
      email: email,
      commune:commune,
      Opital:Opital,
      typeuser:typeuser,
      validUser: "non",
      password: bcrypt.hashSync(req.body.password, 8)
    });
    const result=await user.save(); 
    res.status(200).json({users:result,message:"inscription Success"});
    if(fileData){
      const base64 =fileData;  // 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//'
      const pathToSaveImage = `public/images/users/${result._id}.png`;
      const path = converBase64ToImage(base64, pathToSaveImage) //returns path /public/image.png 
    }
  }
 } catch (error) {
    console.log(error);
    res.status(500).json({message:"error Enregistrement compte"})
}
};
export const signin =async (req, res) => {
  try {
 const user=await  User.findOne({
    username: req.body.username
  });
  if (!user) {
    return res.status(200).json({message: "User Non Valide." });
  }
  else{
       var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
     );

   if (!passwordIsValid) {
        return res.status(200).json({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      const token = jwt.sign({ id: user.id },
                             JWT_SECRET,
                              {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400, // 24 hours
                              });
      res.status(200).json(
                  {
                  _id:user?._id,
                  username:user?.username,
                  email:user?.email,
                  commune:user?.commune,
                  wilaya:user?.wilaya,
                  Opital:user?.Opital,
                  typeuser:user?.typeuser,
                  validUser: user?.validUser,
                  accessToken: token,
                  message:"Success"
                  })
                }
              } catch (error) {
                console.log(error)
              }
     
      };

export const GetUser=async(req,res)=>{
try {
  let result = await User.find({});
  res.status(200).json(result)
  } catch (err) {
  console.log(err);
  }
};
export const ValideEdite=async(req,res)=>{
try {
  const{username,email,commune,Opital,typeuser,password,password2,fileData,_id}=req.body;
  if(password==password2 && password!==""){
    const result={username:username,email:email,commune:commune,Opital:Opital,typeuser:typeuser,password:bcrypt.hashSync(password,8)};
    await User.findByIdAndUpdate(_id, result)
    res.status(200).json({data:result,message:"Compte moudifier avec Success"});
  }
  else{
    const result={username:username,email:email,commune:commune,Opital:Opital,typeuser:typeuser};
    await User.findByIdAndUpdate(_id, result)
    res.status(200).json({data:result,message:"Compte moudifier avec Success"});
  
  }
    if(fileData){
      const base64 =fileData;  // 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//'
      const pathToSaveImage = `public/images/users/${_id}.png`;
      const path = converBase64ToImage(base64, pathToSaveImage) //returns path /public/image.png 
    }    
   } catch (error) {
      console.log(error)
      res.status(500).json({message:"error Enregistrement compte"})
   }
  
};
export const ValideUser=async(req,res)=>{
  try {
    const{validUser,_id}=req.body;
    try {
        const result={validUser:validUser} 
        await User.findByIdAndUpdate(_id, {validUser:validUser})
          res.status(200).json({data:result,message:"Compte Valider avec Success"});
       } catch (error) {
        console.log(error)
        res.status(500).json({message:"error Enregistrement compte"})
       }
  } catch (error) {
    console.log(err);
  }
  }
  export const DelleteUser=async(req,res)=>{
    const{_id}=req.body;
    try {
    //await User.findByIdAndDelete(_id);
     const result= await User.find();
     res.status(200).json({data:result,message:'Compte Supprimer avec Success'});
      } catch (err) {
      console.log(err);
      }
    }
  
  