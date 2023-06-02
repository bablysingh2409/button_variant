import styled, { css } from 'styled-components';

// export const ButtonView = styled.button`
//   background-color: white;
//   border: 1px solid black;
//   color: black;
//   ${(props) =>
//     props.filled &&
//     css`
//       background-color: ${props.bg || 'black'};
//       color: ${props.color || 'white'};
//       border: none;
//     `};
// `;
export const ButtonView = styled.button`
  outline: none;
  height: 50px;
  width: 250px;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${(props) => (props.filled ? props.bg || '#000' : '#fff')};
  color: ${(props) => (props.filled ? props.color || '#fff' : '#000')};
  border: ${(props) => (props.filled ? 'none' : '3px solid #000')};
  cursor: pointer;
`;
