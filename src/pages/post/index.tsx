import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CodeContainer,
  DescriptionContainer,
  PostBody,
  PostContainer,
  PostFooter,
  PostHeader,
  PostSection,
  PostTitle,
} from "./styles";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { defaultTheme } from "../../styles/theme/default";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import { PostType } from "../home";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { FormatDate } from "../../utils/formatDate";
import Markdown from "react-markdown";

export function Post() {
  const { username, postIndex } = useParams();
  const [post, setPosts] = useState<PostType>({} as PostType);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPost(user: string) {
      try {
        const { data: postsData } = await api.get(
          `/repos/${user}/Blog/issues/${postIndex}`
        );
        console.log(`/repos/${user}/Blog/issues/${postIndex}`);
        setPosts(postsData);
      } catch (err) {
        console.error("Erro ao buscar o post:", err);
      }
    }

    if (username) fetchPost(username);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <PostContainer>
      <PostSection>
        <PostHeader>
          <p onClick={handleBack}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              color={defaultTheme["blue"]}
            />
            VOLTAR
          </p>
          <a href={post?.html_url}>
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        </PostHeader>
        <PostTitle>
          <p>{post?.title}</p>
        </PostTitle>
        <PostFooter>
          <p>
            <FontAwesomeIcon
              icon={faGithub}
              color={defaultTheme["base-label"]}
            />
            {post?.user?.login}
          </p>
          <p>
            <FontAwesomeIcon
              icon={faCalendarDay}
              color={defaultTheme["base-label"]}
            />
            {FormatDate(post.created_at)}
          </p>
          <p>
            <FontAwesomeIcon
              icon={faComment}
              color={defaultTheme["base-label"]}
            />
            {post?.comments}
            {post?.comments === 1 ? " comentário" : " comentários"}
          </p>
        </PostFooter>
      </PostSection>
      <PostBody>
        <DescriptionContainer>
          <Markdown>{post?.body}</Markdown>
        </DescriptionContainer>
      </PostBody>
    </PostContainer>
  );
}
