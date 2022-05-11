import React, { Fragment, useState, useEffect } from "react";
import Service from "./Service";
import logo from "../images/logo.png";
import Help from "./Help";
import { Link } from "react-router-dom";
// import one from "../images/home/one.JPG";
// import two from "../images/home/two.jpg";
// import three from "../images/home/three.jpeg";
// import four from "../images/home/four.jpg";
// import six from "../images/home/six.jpg";
// import seven from "../images/home/seven.jpg";
import PostService from "../Services/post";

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   const getPost = async () => {
      const data = await PostService.getAllPost();
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
  }, []);

  

  return (
    <Fragment>
      <div className="jumbotron text-center">
        <h1>TABITHA EVANGEL MISSIONS INTERNATIONAL ORPHANAGE</h1>
        <p>Every Orphan Can Have A Future</p>
      </div>

      {/* <!-- Container (About Section) --> */}
      <div id="about" className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <img className="logosx" alt={"my awesome logo"} src={logo} />
            <h2>About TEM</h2>
            <h4>We serve..</h4>
            <p>Go and be Dorcas to my People..</p>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-signal logo"></span>
          </div>
        </div>
      </div>
      <Service />

      <div className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-globe logo"></span>
          </div>
          <div className="col-sm-8">
            <h2>Our Values</h2>
            <h4>
              <strong>MISSION:</strong>To reveal the Love of Jesus Christ and to
              give hope to the Orphans, less privileged and Widows...
            </h4>
            <p>
              <strong>VISION:</strong> “Go and be Dorcas to my people” as given
              by God...
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Container (Post  Section) -->  */}
      <div id="portfolio" className="container-fluid text-center bg-grey">
        <h2>Blogs And Posts</h2>
        <br />
        <h4>A Few Out Of Many...</h4>
        <div className="row text-center">
          {posts.map((post) => (
            <div className="col-sm-4">
              <div className="thumbnail">
                <img
                  src={post.image}
                  style={{ height: 350 }}
                  alt={post.title}
                  width="400"
                  height="300"
                />
                <p>
                  <strong>{post.title}</strong>
                </p>
                <p>
                  {" "}
                  <i>
                    {post.title}
                    {post.comments.substring(0, 20)} ...
                  </i>
                </p>
                <Link
                  to={`/post/${post.id}`}
                  className="btn btn-lg btn-outline-danger "
                  id="myBtn1"
                >
                  view more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Help />

      <img
        src="./images/map.jpg"
        className="img-responsive"
        style={{ width: "100%" }}
      />
    </Fragment>
  );
};

export default HomeScreen;
