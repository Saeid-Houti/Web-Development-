import mongoose from "mongoose";

const Schema = mongoose.Schema;

const departmentSchema = new Schema({

    name: {
        type: String,
        required: [true, ' Name is required'],
        enum:['ITS','Administration','HR','Health and safety','Faculty']
    },

    location: {
        type: String,
        required: [true, 'location is required'],
        enum:['H04','B01','C08','C06','C03']
    }
})


export default mongoose.model('Department', departmentSchema)






