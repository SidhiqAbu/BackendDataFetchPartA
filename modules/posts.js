



{

    
        
    // IMPORTING MONGOOSE.........
    const mongoose=require('mongoose');
    const {Schema} = mongoose

    //  CREATION OF SCHEMA..........
    const posts= new mongoose.Schema({
        postId:{
            type:String,
            require:true
        },
        image:{
            type:String,
            require:true
        },
        likes:{
            type:Number,
        },
        tags:{
            type:Array,
        },
        text:{
            type:String,
            require:true
        },
        publishDate:{
            type:String,
            require:true
        },
        ownerId:{
            type:String,
            require:true
        }
        
    },{
        timestamps:true
    });



    // CREATION OF MODEL..........
    const Posts=mongoose.model('Posts',posts);
    // EXPORTING OF MODEL...............
    module.exports=Posts;

}