import {Post as PostModel} from '../models/post';

type PostTypes = {
  post: PostModel
}

const Post: React.FunctionComponent<PostTypes> = ({post}) => {
  return (
    <div className="my-5 border-b-2 p-5">
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
  );
}

export default Post;