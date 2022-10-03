import {
  AiOutlineClockCircle,
  AiOutlinePieChart,
  AiOutlineBarChart,
} from 'react-icons/ai';

import { InfoContainer, InfoBlock, Label } from './Info.styled';

export const Info = ({ time, servings, calories }) => {
  return (
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
  );
};
