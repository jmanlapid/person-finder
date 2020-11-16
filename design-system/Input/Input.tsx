import styled from "styled-components";

const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  height: 40px;
  width: 100%;
  font-family: Helvetica;
  font-size: 14px;
  color: 393939;
  background-color: #efefef;
  padding: 0 16px;
  border: none;
  margin-bottom: 43px;
`;

export default Input;
