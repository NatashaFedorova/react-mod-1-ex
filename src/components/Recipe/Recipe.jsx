import PropTypes from 'prop-types';

import {
  AiOutlineClockCircle,
  AiOutlinePieChart,
  AiOutlineBarChart,
} from 'react-icons/ai';
import {
  Card,
  InfoContainer,
  RecipeName,
  RecipeImg,
  InfoBlock,
  Label,
} from './Recipe.styled';

export const Recipe = ({
  recipe: { name, time, servings, calories, image },
}) => {
  return (
    <Card>
      <RecipeImg src={image} alt="dish" width="100" />
      <RecipeName>{name}</RecipeName>
      <InfoContainer>
        <InfoBlock>
          <AiOutlineClockCircle size={24} />
          <Label>{time} min</Label>
        </InfoBlock>
        <InfoBlock>
          <AiOutlinePieChart size={24} />
          <Label>{servings} servings</Label>
        </InfoBlock>
        <InfoBlock>
          <AiOutlineBarChart size={24} />
          <Label>{calories} calories</Label>
        </InfoBlock>
      </InfoContainer>
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
  }),
};
