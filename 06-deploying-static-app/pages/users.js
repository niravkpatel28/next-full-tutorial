import Layout from "../component/Layout"
import fetch from 'isomorphic-unfetch';
import Link from 'next/link'
const UserLink = (props)=>{
    // console.log(props)
    return (
    
      <li>
        <Link
          href={`/users/[id]`} 
          as={`/users/${props.user.id}`}>  
          <a> {props.user.name}</a>
        </Link>
      </li>
    )
  }

const Users = (props)=>{

    return(
        <Layout> 
            <h2> Users Page </h2>
            <ul>
            {
                props.users.map((user)=>{
                    return (
                        <UserLink user={user} key={user.id}/>
                    )
                })
            }
            </ul>
        </Layout>
    )
}


Users.getInitialProps = async ()=>{
    //fetch data using jsonplaceholder. 
    //https://jsonplaceholder.typicode.com/users

    let users= await fetch('https://jsonplaceholder.typicode.com/users');
    users = await users.json();

    return{
        users:users
    }
}
export default Users ;