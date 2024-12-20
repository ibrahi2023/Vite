import  Client  from "../models/clientModel.js";
export const AddClient = async(req, res) => {
    const{CTS, nom,prenom,date_naissansse,sexe,wilaya,commune, n_telephone,groupe_sanguin,phenotype,date_don,inscrip_registre,matricule,annee,month}=req.body;
   try {
     const client = new Client({
        CTS:CTS, nom:nom,prenom:prenom,date_naissansse:date_naissansse,sexe:sexe,wilaya:wilaya,commune:commune, n_telephone:n_telephone,groupe_sanguin:groupe_sanguin,phenotype:phenotype,date_don:date_don,inscrip_registre:inscrip_registre,matricule:matricule,annee:annee,month:month
    });
    const result=await client.save(); 
    console.log(result)
    res.status(200).json({data:result,message:"Client enregistrer avec Success"});
   } catch (error) {
      console.log(error);
      res.status(500).json({message:"error Enregistrement compte"})
   }
  };
  export const EditClient = async(req, res) => {
    const{CTS, nom,prenom,date_naissansse,sexe,wilaya,commune, n_telephone,groupe_sanguin,phenotype,date_don,inscrip_registre,matricule,annee,month,_id}=req.body;
    try {
        const result={ CTS:CTS, nom:nom,prenom:prenom,date_naissansse:date_naissansse,sexe:sexe,wilaya:wilaya,commune:commune, n_telephone:n_telephone,groupe_sanguin:groupe_sanguin,phenotype:phenotype,date_don:date_don,inscrip_registre:inscrip_registre,matricule:matricule,annee:annee,month:month,_id:_id} 
        await Client.findByIdAndUpdate(_id, {
            CTS:CTS, nom:nom,prenom:prenom,date_naissansse:date_naissansse,sexe:sexe,wilaya:wilaya,commune:commune, n_telephone:n_telephone,groupe_sanguin:groupe_sanguin,phenotype:phenotype,date_don:date_don,inscrip_registre:inscrip_registre,matricule:matricule
        })
          res.status(200).json({data:result,message:"Client moudifier avec Success"});
       } catch (error) {
        console.log(error)
        res.status(500).json({message:"error Enregistrement compte"})
       }
  };
  export const GetClient =async (req, res) => {

    try {
     const result=await Client.find({});
     res.status(200).json(result);
    }catch(err){
     res.status(500).json({message:"error get data"});
     }
    }
    export const GetMatricule =async (req, res) => {
      const {matricule}=req.body;
      try {
       const result=await Client.find({ matricule: matricule})
      res.status(200).json(result);
      }catch(err){
       res.status(500).json({message:"error get data"});
       }
      }
      export const GetDashClient =async (req, res) => {
        const{wilaya,commune,CTS,checkedwilaya,checkecommune,checkedCTS}=req.body;
       // User.find({$or:[{region: "NA"},{sector:"Some Sector"}]} 

        try {
        if(checkedwilaya ==true  && checkecommune==false && checkedCTS==false)  var result=await Client.find({wilaya:wilaya});
        else if(checkedwilaya ==true && checkecommune==true && checkedCTS==false )  var result=await Client.find({wilaya:wilaya,commune:commune});
        else if(checkedwilaya ==true && checkecommune==true && checkedCTS==true )  var result=await Client.find({wilaya:wilaya,commune:commune,CTS:CTS});
        else var result=await Client.find({});
        res.status(200).json(result);
      }catch(err){
        res.status(500).json({message:"error get data"});
        }
        }
    
      