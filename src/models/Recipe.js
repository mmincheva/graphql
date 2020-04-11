import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
})

const Recipe = mongoose.model("Recipe", RecipeSchema);

export default Recipe;