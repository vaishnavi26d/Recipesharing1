import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Updated Dummy Recipes with New Image URLs
  const dummyRecipes = [
    {
      _id: "1",
      name: "Spaghetti Carbonara",
      imageUrl: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      description: "A classic Italian pasta dish with a rich, creamy sauce.",
      ingredients: ["Spaghetti", "Eggs", "Parmesan", "Pancetta", "Black Pepper"],
      steps: [
        "Boil spaghetti until al dente.",
        "Fry pancetta until crispy.",
        "Mix eggs, parmesan, and black pepper.",
        "Combine everything and serve hot.",
      ],
    },
    {
      _id: "2",
      name: "Chocolate Cake",
      imageUrl: "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
      description: "Delicious and moist chocolate cake with creamy frosting.",
      ingredients: ["Flour", "Cocoa Powder", "Eggs", "Milk", "Sugar"],
      steps: [
        "Preheat oven to 350°F.",
        "Mix dry and wet ingredients separately.",
        "Combine and pour into a greased pan.",
        "Bake for 30 minutes and let cool before frosting.",
      ],
    },
    {
      _id: "3",
      name: "Grilled Chicken Salad",
      imageUrl: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
      description: "A healthy grilled chicken salad with fresh greens.",
      ingredients: ["Chicken Breast", "Lettuce", "Tomatoes", "Olive Oil", "Lemon Juice"],
      steps: [
        "Season chicken and grill until fully cooked.",
        "Chop vegetables and mix in a bowl.",
        "Slice grilled chicken and add to salad.",
        "Drizzle with olive oil and lemon juice before serving.",
      ],
    },
    {
      _id: "4",
      name: "Avocado Toast",
      imageUrl: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
      description: "A tasty and nutritious avocado toast for breakfast.",
      ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Lemon Juice"],
      steps: [
        "Toast the bread until golden brown.",
        "Mash avocado with salt, pepper, and lemon juice.",
        "Spread avocado mixture on toast.",
        "Serve with additional toppings as desired.",
      ],
    },
    {
      _id: "5",
      name: "Blueberry Pancakes",
      imageUrl: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
      description: "Fluffy pancakes loaded with fresh blueberries.",
      ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Blueberries"],
      steps: [
        "Mix flour, eggs, milk, and sugar until smooth.",
        "Fold in fresh blueberries.",
        "Cook pancakes on a hot griddle until golden brown.",
        "Serve with syrup and extra blueberries.",
      ],
    },
    {
      _id: "6",
      name: "Margarita Pizza",
      imageUrl: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
      description: "Classic Italian pizza with tomato, basil, and mozzarella.",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Basil", "Olive Oil"],
      steps: [
        "Roll out the pizza dough.",
        "Spread tomato sauce evenly over the dough.",
        "Top with mozzarella and fresh basil leaves.",
        "Bake at 475°F until golden and bubbly.",
      ],
    },
  ];

  // Find the recipe by ID
  const recipe = dummyRecipes.find((r) => r._id === id);

  // Redirect if recipe is not found
  useEffect(() => {
    if (!recipe) {
      navigate("/recipes");
    }
  }, [recipe, navigate]);

  if (!recipe) return null;

  return (
    <Container className="recipe-details-container mt-4">
      <Button variant="secondary" onClick={() => navigate("/recipes")}>
        ← Back to Recipes
      </Button>

      <Card className="recipe-details-card mt-3">
        <Card.Img variant="top" src={recipe.imageUrl} alt={recipe.name} className="recipe-image" />
        <Card.Body>
          <Card.Title className="text-center">{recipe.name}</Card.Title>
          <Card.Text className="text-center">{recipe.description}</Card.Text>

          <h4>Ingredients:</h4>
          <ul className="ingredients-list">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4>Steps:</h4>
          <ol className="steps-list">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <div className="recipe-actions text-center mt-3">
            <Button variant="outline-primary" className="me-2">
              ❤️ Like
            </Button>
            <Button variant="outline-success">💾 Save</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RecipeDetails;