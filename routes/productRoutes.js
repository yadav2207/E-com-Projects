import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateroductController,
} from "../controller/productController.js";
import formidable from "express-formidable";

const router = express.Router();

// routes

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
// routes

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateroductController
);

// get products

router.get("/get-product", getProductController);

// single product
router.get("/get-product/:slug", getSingleProductController);

// create photo
router.get("/product-photo/:pid", productPhotoController);

// delete product
router.delete("/delete-product/:pid", deleteProductController);

// filter products
router.post("/product-filters", productFiltersController);

// product count
router.get("/product-count", productCountController);

// product per oage
router.get("/product-list/:page", productListController);

// search product
router.get("/search/:keyword", searchProductController);

// similiar product
router.get("/related-product/:pid/:cid", relatedProductController);

// category wise product
router.get("/product-category/:slug", productCategoryController);

// payment route
// token
router.get("/braintree/token", braintreeTokenController);

// payment 
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);
export default router;
