import mongoose from 'mongoose';
const Clients = new mongoose.Schema(
 {
  Matricule:{type:String,required:false},
  nom: {type:String,required:false},
  prenom: {type:String,required:false},
  date_naissansse: {type:String,required:false},
  sexe:  {type:String,required:false},
  CTS:{type:String,required:false},
  wilaya:  {type:String,required:false},
  commune:  {type:String,required:false},
  n_telephone:  {type:String,required:false},
  groupe_sanguin:  {type:String,required:false},
  phenotype:  {type:String,required:false},
  date_don:  {type:String,required:false},
  inscrip_registre:  {type:String,required:false},
  matricule:  {type:String,required:false},
  annee:  {type:String,required:false},
  month:  {type:String,required:false}
}
);
const Client = mongoose.model('Client', Clients);
export default Client;
