const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pert-app',{
        autoIndex: false,        
        useNewUrlParser: true
},(err)=>{
    if(!err){
        console.log('Database connection successful');
    }
    else{
        console.log('Error in DB Connection:  '+err)
    }
})
