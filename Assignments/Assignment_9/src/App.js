import React from "react";
import { RecipeCard } from "./components/RecipeCard";
import { RecipePage } from "./components/RecipePage";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            currentRecipe: null,
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        fetch("/recipes")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); 
            })
            .then((data) => {
                this.setState({recipes:data}); 
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
            });
    }

    setCurrentRecipe = (id) => {
        const recipe = this.state.recipes.find((recipe) => (recipe.id === id));
        this.setState({ currentRecipe: recipe });
    };

    render() {
        return (
            <div>
                <h1>Tayla's Delicious Treats!</h1>
                <div style={{ padding: "20px", display: "flex" }}>
                    <div style={{ flexBasis: "40%" }}>
                        {this.state.recipes &&
                            this.state.recipes.map((recipe,index) => {
                                return (
                                    <RecipeCard
                                        key={index}
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
                                id={this.state.currentRecipe.id}
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
