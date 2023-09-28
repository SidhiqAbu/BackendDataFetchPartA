



{

    
        
    // IMPORTING MONGOOSE.........
    const mongoose=require('mongoose');
    const {Schema} = mongoose

    //  CREATION OF SCHEMA..........
    const users= new mongoose.Schema({
        userId:{
            type:String,
            require:true
        },
        title:{
            type:String,
            require:true
        },
        firstName:{
            type:String,
            require:true
        },
        lastName:{
            type:String,
            require:true
        },
        picture:{
            type:String,
            require:true
        }
        
    },{
        timestamps:true
    });



    // CREATION OF MODEL..........
    const Users=mongoose.model('Users',users);
    // EXPORTING OF MODEL...............
    module.exports=Users;

}