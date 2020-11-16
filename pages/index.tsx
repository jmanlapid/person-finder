import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Input, PersonCard } from "../design-system";
import { queryPersonByName } from "../store/people";
import { RootState } from "../store";

const PersonFinder: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const people = useSelector((state: RootState) => state.entities);
  const loading = useSelector((state: RootState) => state.loading);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setQuery(value);
    dispatch(queryPersonByName(value));
  };

  return (
    <PersonFinderContainer>
      <Title>The Person Finder</Title>
      <Text>
        If you just can’t find someone and need to know what they look like,
        you’ve come to the right place! Just type the name of the person you are
        looking for below into the search box!
      </Text>
      <Input
        placeholder="Type a name..."
        onChange={handleChange}
        value={query}
      />
      {loading === "pending" ? (
        <div>Loading...</div>
      ) : people.length ? (
        people.map((person) => <PersonCard person={person} key={person.id} />)
      ) : (
        <div data-test="personFinder-noResults">No Results</div>
      )}
    </PersonFinderContainer>
  );
};

const PersonFinderContainer = styled.div`
  width: 561px;
  margin: 0 auto;
  padding: 16px;
`;

const Title = styled.h2`
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 110%;
  color: #102261;
`;

const Text = styled.p`
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
  margin-bottom: 43px;
`;

export default PersonFinder;
