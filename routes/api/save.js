const express = require("express");
const router = express.Router();
const jsonwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../../setup/myurl");

// @type    GET
// @route    /api
// @desc    just for testing
// @access  PUBLIC
router.get("/", (req, res) => res.json({ test: "Save is being tested" }));

//Import Schema for Product to Save
const Product = require("../../models/Product");

// @type    POST
//@route    /api/save
// @desc    route for save the new product details

router.post("/save", (req, res) => {
    Product.findOne({ id: req.body.id })
        .then(product => {
            if (product) {
                return res
                    .status(400)
                    .json({ iderror: "Product with this id  already registered in our system" });
            } else {
                const newProduct = new Product({
                    id: req.body.id,
                    name: req.body.name,
                    handle: req.body.handle,
                    description: req.body.description,
                    categories: req.body.categories,
                    tags: req.body.categories,
                    featuredImageId: req.body.featuredImageId,
                    images: req.body.images,
                    priceTaxExcl: req.body.priceTaxExcl,
                    priceTaxIncl: req.body.priceTaxIncl,
                    taxRate: req.body.taxRate,
                    comparedPrice: req.body.comparedPrice,
                    quantity: req.body.quantity,
                    sku: req.body.sku,
                    width: req.body.width,
                    height: req.body.height,
                    depth: req.body.depth,
                    weight: req.body.weight,
                    extraShippingFee: req.body.extraShippingFee,
                    active: req.body.active
                });
                newProduct
                    .save()
                    .then(Product => res.json(Product))
                    .catch(error => console.log(error));

            }
        })
        .catch(error => console.log(error));
});

module.exports = router;