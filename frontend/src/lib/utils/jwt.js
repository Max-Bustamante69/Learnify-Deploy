import jwt from "jsonwebtoken";

 export const isJwtExpired = (token) => {
   // offset by 60 seconds, so we will check if the token is "almost expired".
   const currentTime = Math.round(Date.now() / 1000 + 60);
   const decoded = jwt.decode(token);

   console.log(`Current time + 60 seconds: ${new Date(currentTime * 1000)}`);
   console.log(`Token lifetime: ${new Date(decoded["exp"] * 1000)}`);

   if (decoded["exp"]) {
     const adjustedExpiry = decoded["exp"];

     if (adjustedExpiry < currentTime) {
       console.log("Token expired");
       return true;
     }

     console.log("Token has not expired yet");
     return false;
   }

   console.log('Token["exp"] does not exist');
   return true;
 };