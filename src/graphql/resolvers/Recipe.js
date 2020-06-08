import Recipe from "../../models/Recipe";
import { response } from "express";

export default {
    Query: {
        recipe: (root, args) => {
            return new Promise((resolve, reject) => {
                Recipe.findOne(args).exec((error, response)=> {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        recipes: () => {
            return new Promise((resolve, reject) => {
                Recipe.find({}).populate().exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    },
    Mutation: {
        addRecipe: (root, {name, description, imageUrl, time}) => {
            const newRecipe = new Recipe({name, description, imageUrl, time});
            return new Promise((resolve, reject) => {
                newRecipe.save((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        deleteRecipe: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Recipe.findByIdAndRemove({_id}).exec((error, response) => {
                    error ? reject(error): resolve(response);
                })
            })
        },
        editRecipe: (root, {_id, name, description, imageUrl, time}) => {
            return new Promise((resolve, reject) => {
                Recipe.findByIdAndUpdate({_id}, {$set: {name, description, imageUrl, time}}, {new: true}).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    }
}