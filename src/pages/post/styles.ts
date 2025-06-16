import styled from "styled-components";

export const PostContainer = styled.div`
  margin: 0 20% 0 20%;
`;

export const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-profile"]};
  position: relative;
  height: 100%;
  width: 100%;

  padding: 2rem;
  border-radius: 10px;
  gap: 2rem;
  margin-top: -100px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  a, p {
    color: ${(props) => props.theme["blue"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
  }

  p {
    cursor: pointer;
  }
`;

export const PostTitle = styled.div`
  p {
    color: ${(props) => props.theme["base-title"]};
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  p {
    display: flex;
    gap: 4px;
    line-height: 1.2;
  }
`;

export const PostBody = styled.div`
  padding: 2rem 2.5rem;
`

export const DescriptionContainer = styled.div`

`

export const CodeContainer = styled.div`
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme["base-post"]};
  padding: 1rem;
  border-radius: 8px;
`