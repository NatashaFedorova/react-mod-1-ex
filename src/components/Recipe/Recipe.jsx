import PropTypes from 'prop-types';

import { Card, RecipeName, RecipeImg } from './Recipe.styled';
import { Info } from 'components/InfoContainer/Info';
import { Difficulty } from 'components/RecipeDifficulty/RecipeDifficulty';

export const Recipe = ({
  recipe: { name, time, servings, calories, image, difficulty },
}) => {
  return (
    <Card>
      <RecipeImg src={image} alt="dish" width="100" />
      <RecipeName>{name}</RecipeName>
      <Info time={time} servings={servings} calories={calories}></Info>
      <Difficulty difficulty={difficulty} />
    </Card>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.exact({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }),
};
