import { GetServerSideProps, NextPage } from "next";
import { Post } from "../../models/post";

type PostsPageProps = {
  name: string;
  posts: Post[];
}

const PostsPage: NextPage<PostsPageProps> = (props) => {
  return (
    <>
      <h1>Posts 5!</h1>
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