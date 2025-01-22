import React from 'react';
import {Container,PostForm} from "../Components/index";
import { useNavigate, useParams } from 'react-router';
import service from '../appwrite/config';

function EditPost() {
    const [post,setPost] = React.useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    React.useEffect(()=>{
        if(slug){
            service.getPost(slug).then((res)=>{
                if(res) setPost(res);
            })
        } else navigate('/');
    },[slug,navigate]);

  return post? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null;
}

export default EditPost;