import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
            {console.log(featuredImage)}
          {console.log(appwriteService.getFilePreviewImage(featuredImage).href)}
                <img src={appwriteService.getFilePreviewImage(featuredImage).href} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

// previous name changed
export default PostCard
