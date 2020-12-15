class UserService{
    async create(user){
        console.log("用户数据保存成功",user);
        return "用户数据保存成功"
    }
}
module.exports=new UserService()