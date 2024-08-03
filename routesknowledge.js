here_creating_and_using_routes_discussed
//first require express and from express require router express=require("express") router=express.Router();
// first go and create controller folder and inside controller folder create auth.js and feature.js and creating inside them like login,signup,logout
// addtocart,removeformcart

// create middlewares folder and inside create like verifytoken.js and whaterver user
//here get the routes from controller import signup,login,logout,addtocart,removefromcart,increment,decrement,clearcart,getuser,veriytoken
auth_routes
// router.post("/signup",signup);
// router.post("/login",login);
// router.get("/logout",logout);
// router.get("/getUser",verifyToken,getUser);
feature_routes
// router.post("/addToCart/:id", addToCart);
// router.delete("/removeFromCart/:id",removeFromCart);
// router.get("/getCart/:id",getCart);
// router.put("/incrementQuantity/:id",incrementQuantity);
// router.put("/decrementQuantity/:id",decrementQuantity);
// router.delete("/clearCart",verifyToken,clearCart);
// module.exports=router;