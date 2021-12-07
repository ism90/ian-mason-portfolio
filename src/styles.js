import styled from "styled-components";

// Styled Components

export const StyledBasicLayout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fafafafa;
`;
export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
`;
export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 60%;
    height: 40vh;
    object-fit: cover;
  }
`;
export const StyledHide = styled.div`
  overflow: hidden;
`;

