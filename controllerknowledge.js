
here_discuss_about_auth_feature_like_file
create_a_controller_folder_inside_it
auth.js
// require User model,bcryptjs as bcyrypt, jsonwebtoken as jwt 
signup
// const signup=async(req,res)=>{
//     const {email,username,password}=req.body;
//     try {
//         let user=await User.findOne({email});
//         if(user){
//             return res.status(201).json({success:"false",message:"user already exist"});
//         }
//         let hashpassword=await bcrypt.hash(password,10); //here 10 is for number of letters for salting and also if not give then bydefault 10 set
//         const newUser=await User.create({
//             username:username,
//             password:hashpassword,
//             email:email,
//         });
//         await newUser.save();
//          return res.status(200).json({success:"true",message:"user created"});
//     } catch (error) {
//         return res.status(500).json({success:"false",message:error.message});
//     }
// }
login
// const login=async(req,res)=>{
//     const {email,password}=req.body;
//     try {
//         let user=await User.findOne({email});
//         if(!user){
//             return res.status(201).json({success:"false",message:"user not exist please signup first"});
//         }
//         let checkpassword=await bcrypt.compare(password,user.password);
//         if(!checkpassword){
//             return res.status(201).json({success:"false",message:"check password"});
//         }
//         const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{   //jwt.sign generates a new token with argument payload->userid which got include in token,
//             expiresin:"1h",          //then secretkey and then options 
//         });
//         res.cookie("token,",token,{  //here arguments are token name "token",token and options
//             httpOnly:true,
//             secure:true,
//             sameSite:"none",
//         }).status(200).json({success:"true",message:"user logged in"});
//     } catch (error) {
//         return res.status(501).json({success:"false",message:error.message});
//     }
// };
logout_just_clearCookie("token")
// const logout=async (req,res)=>{
//     try {
//         res.clearCookie("token"); //clear cookie with name token
//         return res.status(200).json({success:"true",message:"loggeedout"});
//     } catch (error) {
//         return res.status(500).json({ success: false, message: error.message });
//     }
// }
getUser
// const getUser=async(req,res)=>{
//     const reqId=req.id;
//     try {
//         let user=await User.findById(reqId).select("-password"); // by getting data except password
//         if(!user){
//               return res.status(400).json({ success: false, message: "please signup" });
//         }
//         res.status(200).json({user, success: true, message: "user found" });
//     } catch (error) {
//         return res.status(500).json({ success: false, message: error.message });
//     }
// };
// module.exports={signup,login,logout,getUser};

feature.js_require_Food_User_models
//adding to cart get userid from req.params and foodid,name,price,rating,image,quatity from body
// const addToCart = async (req, res) => {
//     const userId = req.params.id;
//     const { id, name, price, rating, image, quantity } = req.body;
//     try {
//       let existingItem = await Food.findOne({ id, userId: userId }); //get items with foodid and userid if present then increase
//       if (existingItem) {
//         existingItem.quantity += 1;                  //update the quantity
//         existingItem.totalPrice = existingItem.price * existingItem.quantity;  //update the total price
//         let updatedItem = await existingItem.save();  //save the existingitem
//         if (!updatedItem) {
//           return res
//             .status(400)
//             .json({ success: false, message: "fail to add to cart" });
//         }
//         return res
//           .status(200)
//           .json({ success: true, message: "item added to cart" });
//       }
//       let newFood = await Food.create({   //ifexistingitem not present then create a new food for cart 
//         id,
//         name,
//         price,
//         rating,
//         image,
//         quantity,
//         userId,
//         totalPrice: price * quantity,
//       });
//       const saveFood = await newFood.save(); //save the food
//       let user = await User.findByIdAndUpdate(  //push the new food item in user cart
//         { _id: userId },
//         {
//           $push: {
//             cartItems: saveFood._id,
//           },
//         }
//       );
//       if (!user) {
//         return res
//           .status(400)
//           .json({ success: false, message: "failed to add to cart" });
//       }
//       return res
//         .status(200)
//         .json({ success: true, message: "item added to cart" });
//     } catch (error) {
//       return res.status(500).json({ success: false, message: error.message });
//     }
//   };
  
  // getting items from cart
//   const getCart = async (req, res) => {
//     let userId = req.params.id;
//     try {
//       const cartItems = await Food.find({ userId });
//       if (!cartItems) {
//         return res.status(400).json({ success: false, message: "no cart items" });
//       }
//       return res.status(200).json({ success: true, cartItems });  //return the cartitems got from userid 
//     } catch (error) {
//       return res.status(500).json({ success: false, message: error.message });
//     }
//   };
  
  // remove from cart
//   const removeFromCart = async (req, res) => {
//     let foodId = req.params.id;
//     let userId = req.body.userId; // Assuming userId is passed in the request body
//     try {
//       // Find the user by their ID
//       let user = await User.findById(userId);
//       if (!user) {
//         return res.status(400).json({ success: false, message: "User not found" });
//       }
//       user.cartItems = user.cartItems.filter(itemId => itemId.toString() !== foodId);
//       await user.save();
//       let food = await Food.findByIdAndDelete(foodId);
//       if (!food) {
//         return res.status(400).json({ success: false, message: "Food not found" });
//       }
//       return res.status(200).json({ success: true, message: "Food removed from cart and database" });
//     } catch (error) {
//       return res.status(500).json({ success: false, message: error.message });
//     }
//   };
  
  
  // increment in cart
//   const incrementQuantity = async (req, res) => {
//     let id = req.params.id;
//     try {
//       let food = await Food.findByIdAndUpdate(
//         { _id: id },
//         [{
//           $set: {
//             quantity: { $add: ["$quantity", 1] },
//             totalPrice: { $multiply: ["$price", { $add: ["$quantity", 1] }] },
//           },
//         }],
//         { upsert: true, new: true }
//       );
//       if (!food) {
//         res.status(400).json({ success: false, message: "food not found" });
//       }
//       return res.status(200).json({ success: true, message: "food increased" });
//     } catch (error) {
//       return res.status(500).json({ success: false, message: error.message });
//     }
//   };
  
  //decrement quantity
//   const decrementQuantity = async (req, res) => {
//     let id = req.params.id;
//     try {
//       let food = await Food.findByIdAndUpdate(
//         { _id: id, quantity: { $gt: 0 } },
//         [{
//           $set: {
//             quantity: { $subtract: ["$quantity", 1] },
//             totalPrice: { $subtract: ["$totalPrice", "$price"] },
//           },
//         }],
//         {
//           upsert: true,
//           new: true,
//         }
//       );
  
//       if (!food) {
//         return res
//           .status(400)
//           .json({ success: false, message: "food not decremented" });
//       }
  
//       return res
//         .status(200)
//         .json({ success: true, message: " food decremented" });
//     } catch (error) {
//       return res.status(500).json({ success: false, message: error.message });
//     }
//   };
  
  
  //clearCart
//   const clearCart = async (req, res) => {
//     const userId = req.body.userId;
//     try {
//       // Delete all cart items associated with the user from the Food collection
//       await Food.deleteMany({ userId });
//       // Update the user document to clear the cart items
//       await User.updateOne({ _id: userId }, { cartItems: [] });
//       // Return success response
//       return res.status(200).json({ success: true, message: "Cart cleared successfully" });
//     } catch (error) {
//       // Return error response
//       return res.status(500).json({ success: false, message: error.message });
//     }
//   };
//   module.exports = {
//     addToCart,
//     getCart,
//     removeFromCart,
//     incrementQuantity,
//     decrementQuantity,
//     clearCart,
//   };