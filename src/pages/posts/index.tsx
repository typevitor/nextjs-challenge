import { GetServerSideProps, NextPage } from "next";

type PostsPageProps = {
  name: string;
}

const PostsPage: NextPage<PostsPageProps> = (props) => {
  return (
    <>
      <h1>Posts!</h1>
      <p>{props.name}</p>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //api
  //ler arquivo
  return {
    props: {name: 'Nome', posts: [{title: 'Titulo do Post'}]}
  }
}

export default PostsPage;