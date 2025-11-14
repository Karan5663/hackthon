import axios from 'axios'
//import { config } from './config'

export async function register(first_name, last_name, email, password, mobile, birth) {
  try {
    // url to send the request
    const url = `http://localhost:4000/user/register`

    // create a body object
    const body = { first_name, last_name, email, password, mobile, birth }

    // send POST request
    const response = await axios.post(url, body)

    // return response body
    console.log(response.data);
    return response.data
    
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}