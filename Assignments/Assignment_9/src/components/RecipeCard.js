

export class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.setCurrentRecipe(props.id);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <button onClick={onClick}>View Recipe</button>
      </div>
    );
  }
}