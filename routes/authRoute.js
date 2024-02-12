import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router objects
const router = express.Router();
// routing
// register
router.post("/register", registerController);

// login post req

router.post("/login", loginController);

// forgot password
router.post("/forgot-password", forgotPasswordController);

// tets route
router.get(`/test`, requireSignIn, isAdmin, testController);

// protected  user route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
// update profile
router.put("/profile", requireSignIn, updateProfileController);

// orders
router.get('/orders' , requireSignIn, getOrdersController)
// orders
router.get('/all-orders' , requireSignIn, getAllOrdersController)

// order update status
router.put('/order-status/:orderId' , requireSignIn, orderStatusController)

export default router;
