const { default: mongoose, mongo } = require("mongoose");

here_in_schemaknowledge_discuss_about;
first_create_a_models_folder_where_you_keep_all_database_schema
// inside_model_folder create like user.js food.js like that 
user.js
// require mongoose and create new Schema 
// const userSchema=new mongoose.Schema({
//         username:{
//             type:String,
//             required:true,
//         },
//         email:{
//             type:String,
//             required:true,
//             unique:true,
//             // validator get it from google and use it helps for validating email is proper format or not
//         },
//         password:{
//             type:String,
//             required:true,
//         },
//         cartItems:{
//             type:Array,
//             default:[
//                 {
//                     type:mongoose.Schema.Types.ObjectId,  //don't know much about it i think like using food schema from model if defined
//                     ref:"food",
//                 }
//             ],
//         },
// });
// const User=mongoose.model('user',userSchema); //here first argument is collction like in which collection it is goiing to be kept and last is the schema model
// module.exports=User;

food.js
// require mongoose
// const foodSchema=new mongoose.Schema({
//     id:Number,
//     name:String,
//     price:Number,
//     totalPrice: Number,
//     quantity: Number,
//     rating: Number,
//     image: String,
//     userId: String,
// });
// const Food=mongoose.model('food',foodSchema);
// module.exports=Food;