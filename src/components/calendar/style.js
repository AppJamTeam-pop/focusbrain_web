import styled from "styled-components";


export const CalendarContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.5rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export const DaysOfWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: bold;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
`;

export const Day = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  background-color: ${(props) => (props.isCurrentDay ? "#f0f8ff" : "white")};
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }

  .event {
    margin-top: 0.5rem;
    background-color: #ffeb3b;
    padding: 0.2rem;
    font-size: 0.8rem;
    border-radius: 4px;
  }
`;