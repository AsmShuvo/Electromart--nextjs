import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    addedDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },

    category: {
        type: String,
        enum: ["mobile", "computer", "gadget", "device"]
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

export const Product =
    mongoose.models.product || mongoose.model("product", ProductSchema);