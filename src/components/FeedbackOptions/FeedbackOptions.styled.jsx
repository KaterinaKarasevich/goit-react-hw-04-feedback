import styled from "@emotion/styled";

 const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  justify-content: start;
  margin-top: 20px;
  margin-bottom: 20px;`

const Button = styled.li`
  padding: 6px 22px;
  display: inline-block;
  border: 1px solid blue;
  border-radius: 4px;
  color: blue;
  background-color: #F5F4FA;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(26 / 16);
  
  cursor: pointer;
  text-align: center;

  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1), background-color 500ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #FFFFFF;
    background-color: #2196F3;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.08), 0px 3px 1px 0px rgba(0, 0, 0, 0.1);
  
}
`
export {
    ButtonList,
    Button,
}