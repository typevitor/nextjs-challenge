import { GetServerSideProps, NextPage } from "next";
import PostsList from "../../components/PostsList";
import { Title } from "../../components/Title";
import { Post as PostModel } from "../../models/post";

type PostsPageProps = {
  posts: PostModel[];
}

const PostsPage: NextPage<PostsPageProps> = (props) => {
  return (
    <>
      <Title>List of Posts</Title>
      <div className="flex">
        <PostsList posts={props.posts} />
        <div className="h-96 border-2 text-center p-4 mx-5 my-4">
          Painel de Avisos
        </div>
      </div>
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