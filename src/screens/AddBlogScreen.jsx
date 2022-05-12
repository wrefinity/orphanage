import React, { Fragment } from "react";
const AddBlogScreen = () => {
   return (
      <Fragment>
         {/* <!-- Container (Upload Post) --> */}
         <div id="contact" className="container-fluid bg-grey centered">
            <h2 className="text-center">Add a Post</h2>

            <div className="col-sm-7">
               <div className="row">
                  <div className="col-sm-6 form-group">
                     <input
                        className="form-control"
                        id="img "
                        name="img"
                        placeholder="Add Image or Video"
                        type="file"
                        required
                     />
                  </div>
                  <div className="col-sm-6 form-group">
                     <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Header"
                        type="text"
                        required
                     />
                  </div>
               </div>
               <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
                  placeholder="Add your Story here"
                  rows="30"
               ></textarea>
               <br />
               <div className="row">
                  <div className="col-sm-12 form-group">
                     <button
                        className="btn btn-default pull-right"
                        type="submit"
                     >
                        Send
                     </button>
                     <a href="adminhomepage.html">Back Home</a>
                  </div>
               </div>
            </div>
         </div>

         {/* <!-- Container (Add member of Board) --> */}
         <div id="contact" className="container-fluid bg-grey">
            <h2 className="text-center">Add a Board Member</h2>

            <div className="col-sm-7">
               <div className="row">
                  <div className="col-sm-6 form-group">
                     <input
                        className="form-control"
                        id="board-img "
                        name="board-img"
                        placeholder="Add Image or Video"
                        type="file"
                        required
                     />
                  </div>
                  <div className="col-sm-6 form-group">
                     <input
                        className="form-control"
                        id="board-name"
                        name="board-name"
                        placeholder="Add Name"
                        type="text"
                        required
                     />
                  </div>
                  <div className="col-sm-6 form-group">
                     <input
                        className="form-control"
                        id="board-position"
                        name="board-position"
                        placeholder="Add position"
                        type="text"
                        required
                     />
                  </div>
               </div>
               <div className="col-sm-12 form-group">
                  <button className="btn btn-default pull-right" type="submit">
                     Send
                  </button>
                  <a href="adminhomepage.html">Back Home</a>
               </div>
            </div>
         </div>
      </Fragment>
   );
};
export default AddBlogScreen;
