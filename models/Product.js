const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id:{
        type:Number
    },
    name:{
        type: String
    },
    handle: {
        type: String
    },
    description: {
        type: String
    },
    categories:{
        type:Array
    },
    tags:{
        type:Array
    },
    featuredImageId:{
        type:Number
    },
    images:{
        id:{
            type:Number
        },
        url:{
            type:String
        },
        type:{
            type:String
        }
    },
    priceTaxExcl:{
        type:String
    },
    priceTaxIncl:{
        type:String
    },
    taxRate:{
        type:Number
    },
    comparedPrice:{
        type:Number
    },
    quantity:{
        type:String
    },
    sku:{
        type:String
    },
    width:{
        type:String
    },
    height:{
        type:String
    },
    depth:{
        type:String
    },
    weight:{
        type:String
    },
    extraShippingFee:{
        type:Number
    },
    active:{
        type:Boolean
    }
   
});
module.exports = Product = mongoose.model("myProduct",productSchema);