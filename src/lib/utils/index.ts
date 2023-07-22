import axios from 'axios';
// import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
import { signIn } from 'next-auth/react';
import { signUp } from 'next-auth-sanity/client';

export const createUser = async (userDetails: any, addUser: any) => {

    
    // const salt = 10
    const {username, email, password } = userDetails
    // const hashedPassword = bcrypt.hash(password, salt)

    const user = {
        _id: uuidv4(),
        _type: 'user',
        email: email,
        username: username,
        password: password
    }

    addUser(user)

    await signUp(
        user
      );
  
    await signIn('sanity-login', {
    redirect: false,
    email,
    password
    });
  


}

export const loginUser = async (loginDetails: any) => {

    await axios.post(`/api/login`, loginDetails);

}

export const createPost = async (document: any) => {

    await axios.post(`localhost:3000/api/post`, document);

}

export const getAllPosts = async () => {

    await axios.get(`localhost:3000/api/post`);

}