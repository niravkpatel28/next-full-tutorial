

import { useRouter} from 'next/router';
import Layout from '../component/Layout';

const Post = ()=>{
    const router = useRouter();
    return (
        <Layout>
            <h2> Title : {router.query.title}</h2>
        </Layout>
    )
}

export default Post;