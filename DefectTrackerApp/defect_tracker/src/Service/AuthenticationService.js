const AuthenticationService={
    login:function(userList,username,password){
        let isSuccess =false;
        userList.forEach((user) => {
       // console.log("user from auth", typeof(user.username))
       // console.log("param user",typeof username)
            if(user.username == username
                && user.password == password){
                    //console.log('inside if')
                    sessionStorage.setItem("authenticatedUserId",user.id);
                    sessionStorage.setItem("authenticatedUsername",user.username);
                    sessionStorage.setItem("userRole",user.role)
                    isSuccess=true;
                    //return true;
            }
        });
        //console.log('outside loop above return false')
        return isSuccess;
        //return false;
    },

    logout:function(){
        sessionStorage.setItem('authenticatedUserId','');
        sessionStorage.setItem('authenticatedUsername','');
        sessionStorage.setItem('userRole','');
    },
    isLoggedIn:function(){
        let user = sessionStorage.getItem('authenticatedUserId');
        console.log({user},"asdasdasd")
        if(user){
            return true;
        }else{
            return false;
        }
    }
}
export default AuthenticationService;   