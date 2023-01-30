import mongoose from 'mongoose'
import Department from './department.js'
const Schema=mongoose.Schema;
const options={
    toJSON:{
        virtuals:true
    }
}
const employeeSchema=new Schema({


    firstName: {
    type: String,
    required: [true, 'First Name is required']
},
    lastName: {
        type: String,
        required: [true, 'Last Name is required']
    },
    email: {
        type: String,
        required: [true, 'Last Name is required']
    }
    ,
    did:{
    type : Schema.Types.ObjectId,
        required:[true,'required'],
        ref:"Department"
    }
},options)

employeeSchema.virtual('eid').get(function (){
    return this._id
})

export default mongoose.model('Employee', employeeSchema)

