import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import appwriteService from '../appwrite/config';
import { PostCard,Container } from '../components';

function AllPost() {
    const [posts,setPosts]= useState([]);
    useEffect(()=>{
     appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
     })
    },[]);

  return (
    <div className='w-full py-8 h-[65vh]'>
      <Container>
        <div className='flex flex-wrap'>
            {
              posts.map((post)=>{
                console.log(post);
                return (
                <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                     <PostCard {...post} />
                </div>    
              )})  
            }
        </div>
      </Container>
    </div>
  )
}

export default AllPost
