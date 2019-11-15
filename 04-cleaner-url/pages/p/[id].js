import Layout from '../../component/Layout';
import { useRouter } from 'next/router';
const Post = ()=>{
    const router = useRouter();
    console.log('Router ',router.query)
    return(
        <>
            <Layout>
                <h2> Router ID : {router.query.id} </h2>
            </Layout>
        </>

    )
}

export default Post ;