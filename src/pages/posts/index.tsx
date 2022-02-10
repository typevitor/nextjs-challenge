import { GetServerSideProps, NextPage } from "next";
import { Title } from "../../components/Title";
import { Post } from "../../models/post";

type PostsPageProps = {
  posts: Post[];
}

const PostsPage: NextPage<PostsPageProps> = (props) => {
  return (
    <>
      <Title>List of Posts</Title>
      {
        props.posts.map(post => (
          <div key={post.id} className="my-5 border-b-2 p-5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-3xl dark:text-white">{post.title}</span>
              <span className="text-gray-400 italic font-extralight">{post.created_at}</span>
            </div>
            <div className="mb-4">
              <span className="text-gray-500">by {post.author}, at {post.category}</span>
            </div>
            <div className="m-2 font-sans leading-6" >
              <p className="dark:text-white">{post.text}</p>
            </div>
          </div>
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