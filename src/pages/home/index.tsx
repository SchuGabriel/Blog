import {
  SectionContainer,
  HomeContainer,
  ProfileBio,
  ProfileContainer,
  ProfileContent,
  ProfileFooter,
  ProfileHeader,
  SectionHeader,
  SectionSearch,
  PostContainer,
  PostSection,
  PostHeader,
  PostBody,
} from "./styles";

import profilePhoto from "../../assets/profilePhot.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { defaultTheme } from "../../styles/theme/default";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { FormatDate } from "../../utils/formatDate";

export interface User {
  login: string;
  id: number;
  name: string;
  bio: string;
  company: string;
  followers: number;
  avatar_url: string;
  html_url: string;
}

export interface PostType {
  number: number;
  user: {
    login: string;
  };
  html_url: string;
  title: string;
  body: string;
  comments: number;
  created_at: string;
}

export function Home() {
  const { username } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchUser(user: string) {
      try {
        const { data: userData } = await api.get(`/users/${user}`);
        setUser(userData);
        const { data: postsData } = await api.get(`/repos/${user}/Blog/issues`);
        setPosts(postsData);
      } catch (err) {
        alert("Erro ao buscar informações");
        console.error("Erro ao buscar usuário:", err);
      }
    }

    if (username) fetchUser(username);
  }, []);

  const handleNavigate = (postId: number) => {
    navigate(`post/${postId}`);
  };

  const handleSearch = async () => {
    const query = `${search} repo:${username}/Blog`;
    try {
      if (!search) {
        const { data } = await api.get(`/repos/${username}/Blog/issues`);
        setPosts(data);
      } else {
        const { data } = await api.get("/search/issues", {
          params: {
            q: query,
          },
        });
        setPosts(data.items);
      }
    } catch (e) {
      alert("Erro ao buscar informações");
      console.error("Erro ao buscar usuário:", e);
    }
  };

  return (
    <HomeContainer>
      <ProfileContainer>
        <img src={user?.avatar_url} />
        <ProfileContent>
          <ProfileHeader>
            <p>{user?.name}</p>
            <a href={user?.html_url}>
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </a>
          </ProfileHeader>
          <ProfileBio>
            <p>{user?.bio}</p>
          </ProfileBio>
          <ProfileFooter>
            <p>
              <FontAwesomeIcon
                icon={faGithub}
                color={defaultTheme["base-label"]}
              />
              {user?.login}
            </p>
            {user?.company && (
              <p>
                <FontAwesomeIcon
                  icon={faBuilding}
                  color={defaultTheme["base-label"]}
                />
                {user?.company}
              </p>
            )}
            <p>{user?.followers} Seguindo</p>
          </ProfileFooter>
        </ProfileContent>
      </ProfileContainer>

      <SectionContainer>
        <SectionHeader>
          <p>Publicações</p>
          <span>
            {posts.length}
            {posts.length <= 1 ? " publicação" : " publicações"}
          </span>
        </SectionHeader>
        <SectionSearch>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </SectionSearch>
      </SectionContainer>

      <PostContainer>
        {posts.map((post) => {
          const formattedDate = FormatDate(post.created_at);

          return (
            <PostSection
              key={post.number}
              onClick={() => handleNavigate(post.number)}
            >
              <PostHeader>
                <p>{post.title}</p>
                <span>{formattedDate}</span>
              </PostHeader>
              <PostBody>
                <p>{post.body}</p>
              </PostBody>
            </PostSection>
          );
        })}
      </PostContainer>
    </HomeContainer>
  );
}
