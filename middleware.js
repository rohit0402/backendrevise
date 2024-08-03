create_middleware_folder_and_use_any_middleware_like_verifytoken.js_and_whatever

verifytoken.js
// require jwt from 'jsonwebtoken  '
const verifytoken=async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(200).json({success:false,message:"access denied"});
    }
    //get the token from given token get the user 
    try {
        const user=jwt.verify(token,process.env.JWT_SECRET);  // you create const JWT_SECRET="3241nfefvv" anythin in .env file
        req.id=user.id; //provide the id
        next();
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};
module.exports={verifytoken};