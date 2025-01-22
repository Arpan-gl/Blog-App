import React from 'react';
import {Container,PostCard} from "../components/index";
import service from '../appwrite/config';

function AllPosts() {
    const [posts,setPosts] = React.useState([]);
    React.useEffect(()=>{
        service.getAllPosts([]).then((value)=>{
            if(value){
                setPosts(value.documents);
            }
        })
    },[]);

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts;