const express=require("express");

const{handleGetAllUsers,
    handleGetUserById,
    handleDeleteUserById,
    handleUpdateUserById,
    handleAddUser
}=require("../controllers/user");

const router=express.Router();

router
.route("/")
.get(handleGetAllUsers)
.post(handleAddUser);

router
.route("/:id")
.get(handleGetUserById)
.delete(handleDeleteUserById)
.patch(handleUpdateUserById);



module.exports=router;