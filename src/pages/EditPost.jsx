import React from 'react'
import { Container,PostForm } from '../components';
import appwriteService from '../appwrite/config'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
function EditPost() {
    const [post,setPost]=useState({});
    const {slug}= useParams();
    console.log(slug);
    const navigate= useNavigate();

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPost({post});
                    console.log(post);
                }
            })
        }
        else{
             navigate('/');
        }
    },[slug,navigate])
  return post? (
    <div className='py-8'>
      <Container>
        <PostForm {...post}/>
      </Container>
    </div>
  ):null
}

export default EditPost
