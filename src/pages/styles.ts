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
