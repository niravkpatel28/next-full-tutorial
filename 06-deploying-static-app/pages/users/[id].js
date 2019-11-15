import Layout from '../../component/Layout';
import { useRouter } from 'next/router';
// import fetch from 'isomorphic-unfetch';
import axios from 'axios'
const UserDetails = (props)=>{
    // console.log(props.user);
    const router = useRouter();
    console.log('Router ',router.query)
    return(
        <>
            <Layout>
                <h2> Router ID : {router.query.id} </h2>
                <p> UserName : {props.user.name} </p>
                <p> Email : {props.user.email}</p>
                <p> Phone : {props.user.phone}</p>

            </Layout>
        </>

    )
}

UserDetails.getInitialProps = async(context)=>{
    const {id} = context.query;
    // console.log('context' , id);
    // let details = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
    let details = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    // let user = await details.json();
    let user = details.data;
    return{
        user:user[0]
    }
}
export default UserDetails ;