
import Layout from '../component/Layout'
import Link from 'next/link';
const PostLink = (props)=>{
  return (
    <li>
      <Link href={`/post?title=${props.title}`}> 
        <a > {props.title}</a>
      </Link>
    </li>
  )
}
const Index = ()=>{
    return (
      <>
        <Layout>
          <h1> Index Page </h1>

          <h3> Training Material </h3>
          <ul> 
            <PostLink title="React" />
            <PostLink title="Node-js" />
            <PostLink title="Redux" />            
          </ul>
        </Layout>
      </>
    );
}

export default Index ;