import React from 'react';
import appwritesService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          {console.log(featuredImage)}
          {console.log(appwritesService.getFilePreviewImage(featuredImage))}
            <img src={appwritesService.getFilePreviewImage(featuredImage)} alt={title} className='rounded-xl' />
            {/* <img src="https://cloud.appwrite.io/v1/storage/buckets/65c77fe643cc1fac36e0/files/65d4b13e4a645db19275/preview?project=65c77b990c6b309fe46c&mode=admin" alt={title} className='rounded-xl' /> */}
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
    </div>
    </Link>
  )
}

export default PostCard
