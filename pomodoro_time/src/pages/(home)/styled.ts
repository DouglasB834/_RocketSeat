import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;

  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.1rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  font-size: inherit;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["gray-100"]};
  &:focus {
    border-color: ${(props) => props.theme["green-500"]};
    box-shadow: none;
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinuteInput = styled(BaseInput)`
  width: 4rem;
`;

export const FormContentTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 8rem;
  font-weight: bold;
  line-height: 8rem;
  font-family: "Roboto Mono";
  color: ${(props) => props.theme["gray-100"]};
  span {
    background-color: ${(props) => props.theme["gray-700"]};
    padding: 0.5rem;
    border-radius: 8px;
  }
`;

export const SecondTimeSpace = styled.span`
  color: ${(props) => props.theme["green-300"]};
  display: flex;
  width: 3.5rem;
  justify-content: center;
  overflow: hidden;
  background-color: transparent !important;
`;

export const StartButton = styled.button`
  width: 100%;
  display: flex;
  padding: 1rem;
  gap: 5px;
  border: 0;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme["gray-100"]};
  background-color: ${(props) => props.theme["green-500"]};
  transition: 0.3s linear;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled) :hover {
    background-color: ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["gray-600"]};
  }
`;
