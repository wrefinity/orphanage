import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../Services/post"

const Post = () => {
  const { postId } = useParams();
  console.log(postId);
  const [post, setPost] = useState({});

  useEffect(async () => {
    const getPost = async ()=>{
        const data = await PostService.getPost(postId);
        setPost({ ...data.data()});
      }
      getPost()
  }, []);

  
  return (
    <div>
            {/* <!-- Container (Portfolio Section) -->  */}
            <div id="portfolio" className="container-fluid text-center bg-grey " style={{marginTop:50}}>
            <h2>Read The Post</h2>
            <br />
            { post && (
                <div className="row text-center">
                <div className="col-md-3 col-lg-3 col-sm-12"> </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="thumbnail">
                        <img
                            src={post.image}
                            alt="Paris"
                            width="500"
                            height="500"
                        />
                        <p>
                            <strong>{post.title}</strong>
                        </p>
                        <p>
                            {post.comments}
                        </p>

                    </div>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-12"> </div>

                </div>

            )}


         </div>
    </div>
  );
};

export default Post;
