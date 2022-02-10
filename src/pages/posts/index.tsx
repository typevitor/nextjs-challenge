import { GetServerSideProps, NextPage } from "next";
import Post from "../../components/Post";
import { Title } from "../../components/Title";
import { Post as PostModel } from "../../models/post";

type PostsPageProps = {
  posts: PostModel[];
}

const PostsPage: NextPage<PostsPageProps> = (props) => {
  return (
    <>
      <Title>List of Posts</Title>
      {
        props.posts.map(post => (
          <Post key={post.id} post={post} />
        ))
      }
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const example = await import('../api/posts.json');
  return {
    props: { posts: example.default }
  }
}

export default PostsPage;