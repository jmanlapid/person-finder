import styled from "styled-components";

import { Person } from "../../store/people";

interface PersonCardProps {
  person: Person;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  const { avatar, description, name } = person;
  return (
    <PersonCardContainer data-test="personCard-container">
      <Avatar src={avatar} alt={`Picture of ${name}`} />
      <span>
        <Name data-test="personCard-name">{name}</Name>
        <Description>{description}</Description>
      </span>
    </PersonCardContainer>
  );
};

export default PersonCard;

const PersonCardContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
`;

const Avatar = styled.img`
  width: 96px;
  height: 96px;
  margin-right: 24px;
`;

const Name = styled.h3`
  color: #333333;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 700;
`;

const Description = styled.p`
  color: #666666;
  font-family: Helvetica;
  font-size: 14px;
  margin-bottom: 0;
`;
