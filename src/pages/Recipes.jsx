import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Recipes.css";

const Recipes = () => {
    // Updated Recipe Data (More Items + Realistic Images)
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            title: "Spaghetti Carbonara",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDHU0Gvoc4iT9N0BWXa1ggcbYz9axGLju_Q&s",
            description: "A classic Italian pasta dish with creamy sauce.",
        },
        {
            id: 2,
            title: "Chocolate Cake",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOtZhTeZVIPnLfixShcNfk66UAW2_65-Puw&s",
            description: "Delicious and moist chocolate cake with frosting.",
        },
        {
            id: 3,
            title: "Grilled Chicken Salad",
            image: "https://i.ytimg.com/vi/vowdMP-iFDg/maxresdefault.jpg",
            description: "Healthy and tasty grilled chicken with fresh greens.",
        },
        {
            id: 4,
            title: "Vegetable Stir Fry",
            image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
            description: "A quick and easy vegetable stir fry with soy sauce.",
        },
        {
            id: 5,
            title: "Berry Smoothie",
            image: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
            description: "A refreshing berry smoothie with yogurt.",
        },
        {
            id: 6,
            title: "Margherita Pizza",
            image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
            description: "A simple yet delicious Margherita pizza with fresh basil.",
        },
        {
            id: 7,
            title: "Avocado Toast",
            image: "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
            description: "A tasty and nutritious avocado toast for breakfast.",
          },
          {
            id: 8,
            title: "Lasagna",
            image: "https://www.inspiredtaste.net/wp-content/uploads/2022/06/Cheese-Lasagna-Recipe-5-1200-1200x800.jpg",
            description: "A perfect blend of cheese.",
          },
    ]);

    return (
        <Container className="recipes-container mt-4">
            <h2 className="text-center">Explore Recipes</h2>
            <Row>
                {recipes.map((recipe) => (
                    <Col key={recipe.id} xs={6} sm={4} md={3} className="mb-3">
                        <Card className="recipe-card">
                            <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <Card.Text>{recipe.description}</Card.Text>
                                <Link to={`/recipe/${recipe._id}`} className="btn btn-primary">
                                  View Recipe
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Recipes;