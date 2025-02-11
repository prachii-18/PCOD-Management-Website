const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5003;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/femoraDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Recipe Schema
const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  instructions: String,
  image: String, //  Added image field for better display
});

const Recipe = mongoose.model("Recipe", recipeSchema);

// Function to Seed Database
const seedDatabase = async () => {
  try {
    await Recipe.deleteMany(); // Clear existing data

    const recipes = [
     
      {
        name: 'Avocado Toast',
        ingredients: [ 'Avocado', 'Bread', 'Salt' ],
        instructions: 'Mash avacado,spread on bread, sprinkle salt.',
        calories: 250
      },
      {
        name: 'Greek Salad',
        ingredients: [ 'Cucumber', 'Tomato', 'Feta Cheese' ],
        instructions: 'Chop all ingredients and mix.',
        calories: 150
      },
    ];

    await Recipe.insertMany(recipes);
    console.log("✅ Database seeded with recipes!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
};

// ✅ Route to Get Recipes
app.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start Server & Seed Database
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  await seedDatabase(); // Call seed function on server start
});
