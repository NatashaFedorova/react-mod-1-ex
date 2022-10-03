import {
  DiffWrapper,
  DiffTitle,
  DiffList,
  DiffItem,
} from './RecipeDifficulty.styled';

const recipeDifficulties = Object.freeze({
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
});

export const Difficulty = ({ difficulty }) => {
  return (
    <DiffWrapper>
      <DiffTitle>Difficulty</DiffTitle>
      <DiffList>
        <DiffItem selected={difficulty === recipeDifficulties.easy}>
          Easy
        </DiffItem>
        <DiffItem selected={difficulty === recipeDifficulties.medium}>
          Medium
        </DiffItem>
        <DiffItem selected={difficulty === recipeDifficulties.hard}>
          Hard
        </DiffItem>
      </DiffList>
    </DiffWrapper>
  );
};
