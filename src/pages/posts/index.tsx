import { GetServerSideProps, NextPage } from "next";
import { Title } from "../../components/Title";
import { Post } from "../../models/post";

type PostsPageProps = {
  name: string;
  posts: Post[];
}

const PostsPage: NextPage<PostsPageProps> = (props) => {
  return (
    <>
      <Title>Posts 5!</Title>
      <p>{props.name}</p>
      {
        props.posts.map(post => (
          <p key={post.id}>{post.title}</p>
        ))
      }
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //ler arquivo
  const example = await import('../api/posts.json');
  return {
    props: {name: 'Nome', posts: example.default}
  }
}

export default PostsPage;