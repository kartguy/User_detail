const {User}=require("../models/user");

async function handleGetAllUsers(req,res){
    const allDbUsers=await User.find({});
    return res.json(allDbUsers);
}
async function handleGetUserById(req,res){
    const user=await User.findById(req.params.id);
    return res.json(user);
}
async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({msg:'Successfully deleted'})
}
async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{lastname : "Changed"});
    return res.json({msg:'Successfully Updated'})
}
async function handleAddUser(req,res){
    const body=req.body;
    if(
        !body||
        !body.first_name||
        !body.last_name||
        !body.email||
        !body.gender||
        !body.job_title
    ){
        return res.status(400).json({msg:'All fields are required...'});
    }

    const result=await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title
    })

    console.log("result",result);

    return res.status(201).json({msg:'success',id:result._id})
}


module.exports={
    handleGetAllUsers,
    handleGetUserById,
    handleDeleteUserById,
    handleUpdateUserById,
    handleAddUser
}