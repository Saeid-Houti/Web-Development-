import express from 'express';
import morgan from 'morgan';
import router from './router.js';
import mongoose from 'mongoose';

const port = 6060;
const app = express();

const uri='mongodb://127.0.0.1:27017/em-App'
const options = {useNewUrlParser:true,useUnifiedTopology:true}

mongoose.connect(uri,options,()=>{
    console.log("Connected to MongoDB successfully")
})

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', router);

app.listen(port, () => console.log(`server listening on http://localhost:${port}`));
