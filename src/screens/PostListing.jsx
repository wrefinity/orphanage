import React, {useEffect, useState} from 'react'
import PostService from "../Services/post"

const PostListing = () => {
  
    const [posts, setPosts] = useState([])
    useEffect(() => {
      getPosts();
    }, [])

    const getPosts = async () => {
        const data = await PostService.getAllPost();
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
 

    const deleteHandler = async (id) => {
      console.log("i run")
        await PostService.deletePost(id);
        getPosts();
    }
  return (
    <div>
      <div>
            <div className="container-fluid">
                <h3 className="text-center">All Post </h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="product-thumbnail">Title</th>
                            <th className="product-thumbnail">Image</th>
                            <th className="product-thumbnail">comment</th>
                            <th className="product-thumbnail">action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr>
                                <td className="product-name bold-text">
                                    {post.title}
                                </td>
                                <td className="bold-text">
                                    <img src={`${post.image}`} class="img-circle" style={{ height: 70, width: 70 }} alt="cheffx" />
                                </td>
                                <td className="bold-text">{post.comments}</td>
                                <td className="bold-text">
                                    <button className="btn btn-sm btn-danger"
                                        onClick={() => {
                                          deleteHandler(post.id);
                                        }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}

export default PostListing
