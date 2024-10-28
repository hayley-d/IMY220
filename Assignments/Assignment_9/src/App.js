import React from "react";
import { RecipeCard } from "./components/RecipeCard";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      recipes: "[]",
      currentRecipe: null,
    };
  }

  componentDidUpdate() {
    fetch("/recipes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ recipes: data });
      });
  }

  setCurrentRecipe = (id) => {
    const recipe = this.state.recipes.find((recipe) => recipe.id = id);
    this.setState({ currentRecipe: recipe });
  };

  render() {
    return (
      <div>
        <h1>Tayla's Delicious Treats!</h1>
        <div style={{ padding: "20px", display: "flex"}}>
          <div style={{ flexBasis: "40%" }}>
            {this.state.recipes &&
              this.state.recipes.map((recipe) => {
                return (
                  <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    title={recipe.title}
                    description={recipe.description}
                    setCurrentRecipe={this.setCurrentRecipe}
                  />
                );
              })}
          </div>
          <div>
            {this.state.currentRecipe && (
              <RecipePage
                title={this.state.currentRecipe.title}
                description={this.state.currentRecipe.description}
                instructions={this.state.currentRecipe.instructions}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
