const {requireAuth}=require('@clerk/express');
const options={signInUrl: process.env.CLERK_SIGN_IN_URL}
//TODO
module.exports= {requireAuth,options};