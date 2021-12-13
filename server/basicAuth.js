function authUser(req, res, next){
    if(req.user == null){
        //req.status(403) //You do not have access need to login
        return res.send('You need to sign in')
    }

    next()
}

function authRole(role){
    return(req, res, next) =>{
        if(req.user.role !== role){
        //req.status(401)
        return res.send('Not sufficient prermissions')}

        next()
    }
}

//Allows this fn to be exported from this file 
module.exports={
    authUser,
    authRole
}