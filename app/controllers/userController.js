export const allAccess =async (req, res) => {
  try {
    return res.status(200).send("Public Content.");
  } catch (error) {
    console.log(error)
  }
};

export const userBoard =async (req, res) => {
  try {
   return res.status(200).send("User Content.");
  } catch (error) {
    console.log(error)
  }
 
};

export const adminBoard = async(req, res) => {
  try {
   return res.status(200).send("Admin Content.");
  } catch (error) {
    console.log(error)
  }
 
};

export const moderatorBoard =async (req, res) => {
  try {
    return res.status(200).send("Moderator Content."); 
  } catch (error) {
    console.log(error)
  }
};
