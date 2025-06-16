import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0 20% 0 20%;
`;

export const ProfileContainer = styled.div`
  display: flex;
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

export const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme["base-title"]};
    font-weight: 600;
    font-size: 1.5rem;
  }

  a {
    color: ${(props) => props.theme["blue"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.9rem;
  }
`;

export const ProfileBio = styled.div``;

export const ProfileFooter = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  p {
    display: flex;
    gap: 4px;
    line-height: 1.2;
  }
`;

export const SectionContainer = styled.div`
  margin-top: 4.5rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  p {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const SectionSearch = styled.div`
  input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;
    background-color: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme.white};
    border: none;
    outline-color: ${(props) => props.theme.blue};
  }
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

export const PostSection = styled.div`
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  padding: 2rem;
  height: 16.25rem;
  cursor: pointer;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  gap: 0.25rem;

  p {
    flex: 1;
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.25rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.75rem;
    white-space: nowrap;
  }
`;

export const PostBody = styled.div`
  p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    white-space: normal;
  }
`;
