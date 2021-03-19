import styled from 'styled-components';

type InputProps = {
  isCompleted: boolean;
};

type ItemProps = {
  isEven: boolean;
}

export const Item = styled.div<ItemProps>`
  width: 400px;
  display: flex;
  margin: 20px 0;
  padding: 10px;
  background-color: ${({ isEven }) => isEven ? 'rgba(0, 0, 0, 0.1)' : 'transparent'};
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  height: 50px;
  cursor: pointer;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  border: none;
  padding: 0 10px;
  font-size: 18px;
  border-right: 1px solid gray;
  background-color: transparent;
  text-decoration: ${({ isCompleted }) => isCompleted ? 'line-through' : 'auto'};
  &:focus {
    outline: none;
  }
`;

export const Delete = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 50px;
  justify-content: center;
  cursor: pointer;
`;
