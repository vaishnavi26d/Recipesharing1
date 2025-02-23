import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  // Updated Dummy Recipe Data with New Image URLs
  const [recipes, setRecipes] = useState([
    {
      _id: "1",
      name: "Spaghetti Carbonara",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDHU0Gvoc4iT9N0BWXa1ggcbYz9axGLju_Q&s",
      description: "A classic Italian pasta dish with a rich, creamy sauce.",
    },
    {
      _id: "2",
      name: "Chocolate Cake",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOtZhTeZVIPnLfixShcNfk66UAW2_65-Puw&s",
      description: "Delicious and moist chocolate cake with creamy frosting.",
    },
    {
      _id: "3",
      name: "Grilled Chicken Salad",
      imageUrl: "https://i.ytimg.com/vi/vowdMP-iFDg/maxresdefault.jpg",
      description: "A healthy grilled chicken salad with fresh greens.",
    },
    {
      _id: "4",
      name: "Avocado Toast",
      imageUrl: "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
      description: "A tasty and nutritious avocado toast for breakfast.",
    },
    {
      _id: "5",
      name: "Blueberry Pancakes",
      imageUrl: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
      description: "Fluffy pancakes loaded with fresh blueberries.",
    },
    {
      _id: "6",
      name: "Margarita Pizza",
      imageUrl: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
      description: "Classic Italian pizza with tomato, basil, and mozzarella.",
    },
  ]);

  return (
    <>
      {/* Landing Page Section */}
      <div className="home-background">
        <Container className="home-container">
          <h1 className="home-title">Welcome to Recipe World</h1>
          <p className="home-subtitle">
            Discover, share, and create delicious recipes from around the world!
          </p>
          <Button variant="primary" onClick={() => navigate("/recipes")}>
            Explore Recipes
          </Button>
        </Container>
      </div>

      {/* Latest Recipes Section */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Latest Recipes</h2>
        <Row>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Col key={recipe._id} md={4} sm={6} xs={12} className="mb-4">
                <Card className="recipe-card">
                  <Card.Img variant="top" src={recipe.imageUrl} alt={recipe.name} />
                  <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Text>{recipe.description}</Card.Text>
                    <Link to={`/recipe/${recipe._id}`} className="btn btn-primary">
  View Recipe
</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">No recipes available. Be the first to add one!</p>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Home;