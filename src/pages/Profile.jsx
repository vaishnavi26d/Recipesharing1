import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css"; // Import the CSS file

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <Container className="profile-container mt-4">
      <h2 className="profile-title">Welcome, {user.username}!</h2>

      <Card className="profile-card mb-3">
        <Card.Body>
          <Card.Title className="profile-card-title">Saved Recipes</Card.Title>
          <p>Here are your saved recipes...</p>
        </Card.Body>
      </Card>

      <Card className="profile-card mb-3">
        <Card.Body>
          <Card.Title className="profile-card-title">Liked Recipes</Card.Title>
          <p>Here are the recipes you liked...</p>
        </Card.Body>
      </Card>

      <Card className="profile-card mb-3">
        <Card.Body>
          <Card.Title className="profile-card-title">My Recipes</Card.Title>
          <p>Here are the recipes you posted...</p>
        </Card.Body>
      </Card>

      <Button
        variant="success"
        className="add-recipe-btn w-100"
        onClick={() =>
          window.open("https://forms.google.com/your-form-url", "_blank")
        }
      >
        Add My Recipe
      </Button>
    </Container>
  );
};

export default Profile;