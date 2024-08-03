create_backend_folder
// then_here_in_terminal npm init -y 
// install npm i express mongoose cors jsonwebtoken bcryptjs cookie-parser


create_.envfile
// npm i dotenv
// keep here like port , mongoose connection url reqruire it in app.js like require('dotenv').config() and no need to require anywhere just use it



in_app.js
// require express, mongoose,require('dotenv').config()
// use app for express and port=process.env.PORT || 5000; and connect mongourl 
connecting_mongourl
// create connection.js file  ans export it get in app.js as const {connectdb}=require('./connection.js'); and call connectdb();
// const mongoose=require('mongoose');
// const connectdDB= async()=>{
//     try {
//         const connection=await mongoose.connect(process.env.MONGO_URL);
//         if(connection){
//             console.log("Connected to DB");
//         }
//     } catch (error) {
//         return error.message;
//     }
// }
// module.exports={connectdDB};

// app.listen(port, () => {
//     console.log(`App is running on port ${port}`);
// });


using_Some_middlewares
// app.use(cors({
//     origin:["http://localhost:5173","https://delicious-frontend-shjd.vercel.app"],
//     credentials:true,
// }));
// app.use(express.json());  to parse bodies in json 
// app.use(cookieParser());  to keep token in cookies format
// app.use("/api",routes);     to keep routes in organise way