const fetch = require('isomorphic-unfetch');

// module.exports={
//     exportPathMap:function(){
//         return{
//             '/':{page:'/'},
//             '/aboutus': {page:'/aboutus'},
//             '/users': {page:'/users'}
//         };

//     }
// };


module.exports = {
    exportPathMap: async function (){
        //return path object with all path maps 

        const path = {
            '/' : {page:'/'},
            '/users':{page:'/users'},
            '/aboutus':{page:'/aboutus'}    
        }
        
        const response = await fetch ('https://jsonplaceholder.typicode.com/users');//take care of error handling
        const data = await response.json();

        data.forEach((user)=>{
            path[`/users/${user.id}`]= { page:`/users/[id]` ,query:{id:user.id}}
        })
        console.log(path);
        return path
    }
}