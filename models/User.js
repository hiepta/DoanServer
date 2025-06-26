import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["admin", "employee"], required: true},
    profileImage: {type: String},
    fullName: {type: String},
    gender: {type: String},
    dob: {type: Date},
    permanentAddress: {type: String},
    phoneNumber: {type: String},
    personalEmail: {type: String},
    idNumber: {type: String},
    idIssuedDate: {type: Date},
    idIssuedPlace: {type: String},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
})

const User = mongoose.model("User", userSchema)
export default User 