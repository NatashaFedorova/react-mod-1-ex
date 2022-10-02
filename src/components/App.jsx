import recipes from '../recipes.json';
import { RecipeList } from 'components/RecipeList/RecipeList';
import { Box } from 'components/Box/Box.styled';

export const App = () => {
  return (
    <Box>
      <RecipeList recipes={recipes} />
    </Box>
  );
};

// ==========================приклад із запитань======================
// import styled from 'styled-components';
// const Text = styled.p`
//   font-size: 36px;
//   width: calc(100% / 3);
// `;

// export const App = () => {
//   return <Text>React homework template</Text>;
// };
