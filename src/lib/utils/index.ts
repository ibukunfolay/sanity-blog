import axios from 'axios';
import jwtDecode from 'jwt-decode';


const base_url = process.env.NEXT_PUBLIC_BASE_URL

export const createUser = async (userDetails: any, addUser: any) => {

    
    const decoded: { name: string; picture: string; sub: string } = jwtDecode(
      userDetails.credential,
    );
    const {name, picture, sub } = decoded

    const user = {
      _id: sub,
      _type: 'user',
        name: name,
        image: picture,
      username: name,
    }

    addUser(user)
  
    await axios.post(`${base_url}/api/auth`, user);

}