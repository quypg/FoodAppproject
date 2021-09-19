const jwt = require('jsonwebtoken')

exports.checklogin =function(req,res,next){
    if(req.session){
    const {access_token} = req.session
    if(access_token){
        jwt.verify(access_token,process.env.JWT_SECRET_KEY,function (err,decoded){
                if(err){
                     res.redirect("/");
                }else{
                    next()
                }
        })
    }else{
         res.redirect("/");
    }}else{
        res.redirect("/");
    }
}