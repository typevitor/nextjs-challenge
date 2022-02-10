import { Post as PostModel } from '../models/post';
import Post from './Post';

type PostTypes = {
  posts: PostModel[]
}

const PostsList: React.FunctionComponent<PostTypes> = ({ posts }) => {
  const postLists = posts.map(post => (
    <Post key={post.id} post={post} />
  ));
  return (
    <div className='mx-2 text-left'>
      {postLists}
    </div>
  )
}

export default PostsList;