import PropTypes from 'prop-types';
import { List } from 'components/RecipeList/RecipeList.styled';
import { Recipe } from 'components/Recipe/Recipe';

export const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map((recipe, idx) => (
        <li key={idx}>
          <Recipe recipe={recipe} />
        </li>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
};
