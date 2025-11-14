import axios from 'axios';


export async function login(email, password) {
    try{
    const url='http://localhost:4000/user/login';
    const body={email,password}
    const response=await axios.post(url,body);
    return response.data;   
       
}catch(ex){
    console.log(`exception: `, ex)
}
}