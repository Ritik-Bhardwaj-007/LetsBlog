import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Container,PostCard } from '../components';
import appwriteService from '../appwrite/config';
import authService from '../appwrite/auth';
import { useSelector } from 'react-redux';
function Home() {
    const [Curruser,setCurrUser]=useState(null);
    const [posts,setPosts]= useState([]);
    // const userData = useSelector((state) => state.auth.userData)
    // setCurrUser(userData)
    useEffect(()=>{
        authService.getCurrentUser().then((user)=>{
            console.log(`user updated : ${user}`);
                setCurrUser(user);
            });
            appwriteService.getPosts().then((posts)=>{
                if(posts){
                    setPosts(posts.documents);
                    console.log(posts);
                }
            })
        },[])
    if(Curruser===null) {
        return (
            <div className="w-full py-8 mt-4 text-center h-[63.5vh]">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full ">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    else if (posts.length===0) {
        return (
            <div className="w-full py-8 mt-4 text-center h-[63.5vh]">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No Post Available Yet!
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8 h-[65vh]'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => {
                        console.log(post);
                        return (<div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>)
                    })}
                </div>
            </Container>
        </div>
    )
}

export default Home
