export default `
    type Recipe {
        _id: String!
        name: String!
        description: String!
        imageUrl: String!
        time: Float!
    }
    type Query {
        recipe(_id: String!): Recipe
        recipes: [Recipe]
    }
    type Mutation {
        addRecipe(name: String!, description: String!, imageUrl: String!, time: Float!): Recipe
        deleteRecipe(_id: String!): Recipe
        editRecipe(_id: String!, name: String, description: String, imageUrl: String, time: Float): Recipe
    }
`