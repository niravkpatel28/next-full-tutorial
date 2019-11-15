//without as prop href will take [id] literally and pass it as a query param 
// to check that remove as prop from Link and run the app
import Layout from '../component/Layout'
import Link from 'next/link';
const PostLink = (props)=>{
  return (
    <li>
      <Link
        href={`/`} 
        >  
        <a > {props.id}</a>
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
            <PostLink id="React" />
            <PostLink id="Node-js" />
            <PostLink id="Redux" />            
          </ul>
        </Layout>
      </>
    );
}

export default Index ;