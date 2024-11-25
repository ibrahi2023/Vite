//export const MONGODB_CONNECTION = "mongodb+srv://mrrabbil:mernx123@cluster0.rtpbcy6.mongodb.net/app_todo?retryWrites=true&w=majority";

export const MONGODB_CONNECTION="mongodb://localhost:27017/mernDB"
//export const MONGODB_CONNECTION="mongodb+srv://akama2253:VpcAyvoSBBQuznwy@cluster0.ihrgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@mongodb0.example.com/?authSource=admin&replicaSet=myRepl
//mongodb+srv://[username:password@]host[/[defaultauthdb][?options]]
export const JWT_SECRET = "5EC7CEFA1BE7C9354A639369A2AA8A";
export const JWT_EXPIRATION_TIME = 60*60*24*30; // 30 Days

export const EMAIL_HOST = "";
export const EMAIL_PORT = "";
export const EMAIL_USER = "";
export const EMAIL_PASSWORD = "";

export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; // 15 Min
export const REQUEST_LIMIT_NUMBER = 3000; // Per 15 Min 3000 Request Allowed

export const WEB_CACHE=false;

export const PORT=3000;