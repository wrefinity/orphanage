import React, { useEffect, useState } from 'react'
import FileInput from './formHelpers'
import { handleInput } from './helpers'
import PostService from "../Services/post"
import { Link } from 'react-router-dom'

const PostAdd = () => {
    const [post, setPost] = useState({ title: '', comments: '', image: '' });
    const [isSubmit, setIsSubmit] = useState(false);
    const [message, setMessage] = useState({ error: false, msg: '' })

    useEffect(() => {
        if (isSubmit) {
            addPost();
            console.log(post);
            reset();
        }
    }, [isSubmit])


    const handleOnSubmit = (e) => {
        e.preventDefault();
        setMessage({ error: false, msg: '' })
        setIsSubmit(true)
    }
    const handleInputImage = (name, value) => {
        setPost((prev) => ({ ...prev, [name]: value }));
    };
    const reset = () => {
        setPost({
            title: '',
            comment: '',
            image: '',
        })
    }

    const addPost = async () => {
        try {
            await PostService.addPost(post)
            setMessage({ error: false, msg: "post added sucessfully" });
        } catch (error) {
            setMessage({ error: true, msg: error.message })
        }
    }
    return (
        <div className="container-fluid bg-grey login">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 col-sm-12 formLog">
                    {message.msg && (<p className={!message?.error ? "text-danger" : "text-success"}>{message}</p>)}

                    <form onSubmit={handleOnSubmit} >
                        <h1 style={{ textAlign: "center" }}>POST</h1>
                        <label for="title">
                            <b>Title</b>
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter post"
                            name="title"
                            value={post.title}
                            onChange={(e) => handleInput(e, setPost)}
                            required
                        />


                        <FileInput
                            namer="image"
                            label="select Image"
                            handleInputImage={handleInputImage}
                            type="image"
                            value={post.image}
                        />

                        <label for="comments">
                            <b>Comment</b>
                        </label>
                        <textarea
                            className="form-control"
                            value={post.comment}
                            onChange={(e) => handleInput(e, setPost)}
                            id="comments"
                            name="comments"
                            placeholder="Comment"
                            rows="5"></textarea>


                        <div className="clearfix">
                            <Link to='/'>
                                <button type="button" className="cancelbtn">
                                    Go Back
                                </button>
                            </Link>
                            <button type="submit" className="signupbtn">
                                Post
                            </button>
                        </div>

                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>

        </div>
    )
}

export default PostAdd
