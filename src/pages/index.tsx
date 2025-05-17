import {
  HomeContainer,
  ProfileBio,
  ProfileContainer,
  ProfileContent,
  ProfileFooter,
  ProfileHeader,
} from "./styles";

import profilePhoto from "../assets/profilePhot.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { defaultTheme } from "../styles/theme/default";

export function Home() {
  return (
    <HomeContainer>
      <ProfileContainer>
        <img src={profilePhoto} />
        <ProfileContent>
          <ProfileHeader>
            <p>Gabriel Schu</p>
            <a href="#">
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </a>
          </ProfileHeader>
          <ProfileBio>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </ProfileBio>
          <ProfileFooter>
            <p>
              <FontAwesomeIcon
                icon={faGithub}
                color={defaultTheme["base-label"]}
              />
              SchuGabriel
            </p>
            <p>
              <FontAwesomeIcon
                icon={faBuilding}
                color={defaultTheme["base-label"]}
              />
              Rocketseat
            </p>
            <p>999 Seguindo</p>
          </ProfileFooter>
        </ProfileContent>
      </ProfileContainer>
    </HomeContainer>
  );
}
