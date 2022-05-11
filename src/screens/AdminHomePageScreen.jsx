import React, { Fragment} from "react";
// import { Link } from "react-router-dom";
import Service  from "./Service"
import NavBar from './navBar';
import Footer from './Footer'

const AdminHomePageScreen = () => {
   // const [isReadMore, setIsReadMore] = useState(true);
   // const toggleReadMore = ()=>{
   //    setIsReadMore(!isReadMore);
   // }

   
   return (
      <Fragment>
        <NavBar/>

         <div className="container text-center">
            <h1>TABITHA EVANGEL MISSIONS INTERNATIONAL ORPHANAGE</h1>
            <p>Every Orphan Can Have A Future</p>
         </div>

         {/* <!-- Container (About Section) --> */}
         <div id="about" className="container-fluid">
            <div className="row">
               <div className="col-sm-8">
                  <h2>About TEM</h2>
                  <h4>We serve..</h4>
                  <p>Go and be Dorcas to my People..</p>
               </div>
               <div className="col-sm-4">
                  <span className="glyphicon glyphicon-signal logo"></span>
               </div>
            </div>
         </div>

         <Service/>

         <div className="container-fluid bg-grey">
            <div className="row">
               <div className="col-sm-4">
                  <span className="glyphicon glyphicon-globe logo"></span>
               </div>
               <div className="col-sm-8">
                  <h2>Our Values</h2>
                  <h4>
                     <strong>MISSION:</strong>To reveal the Love of Jesus Christ
                     and to give hope to the Orphans, less privileged and
                     Widows...
                  </h4>
                  <p>
                     <strong>VISION:</strong> “Go and be Dorcas to my people” as
                     given by God...
                  </p>
               </div>
            </div>
         </div>

         {/* <!-- Container (Portfolio Section) --> */}
         <div id="portfolio" className="container-fluid text-center bg-grey">
            <h2 className='p-2'>Blogs And Posts</h2>
            
            <i className='p-2'>A Few Out Of Many...</i>
            <div className="row text-center">
               <div className="col-sm-4">
                  <div className="thumbnail">
                     <img
                        src="./images/paris.jpg"
                        alt="Paris"
                        width="400"
                        height="300"
                     />
                     <p>
                        <strong>Peace Story</strong>
                     </p>
                     <p>
                        {" "}
                        <i>
                           There was an attack in their village by the Fulani
                           herdsmen followed by burning of houses which her
                           parents were inside.
                           <span id="dots1">...</span>
                           <span id="more1">
                              Both of her parents were burnt to death as a
                              result. Peace was left with her brothers and
                              sisters. She was brought to TEM while the
                              remaining of her siblings was taken by other
                              relatives for upkeep. Peace is so determine to
                              excel academically as she found a place in TEM.
                           </span>
                        </i>{" "}
                     </p>
                     <button>Read more</button>
                  </div>
               </div>
               <div className="col-sm-4">
                  <div className="thumbnail">
                     <img
                        src="./images/newyork.jpg"
                        alt="New York"
                        width="400"
                        height="300"
                     />
                     <p>
                        <strong>Our Farm Projects</strong>
                     </p>
                     <p>
                        {" "}
                        <i>
                           We have adopted plenty skills overtime to empower the
                           kids. such as carpentry, sewing, baking, farming
                           <span id="dots2">...</span>
                           <span id="more2">
                              graphics design etc. Our farm produce have been a
                              major source of sustainace and have helped feed
                              the kids. You can support our farm projects as we
                              grow food crops for sale and also for consumption
                              by the kids.{" "}
                           </span>
                        </i>
                     </p>
                     <button onclick="myFunction2()" id="myBtn2">
                        Read more
                     </button>
                  </div>
               </div>
               <div className="col-sm-4">
                  <div className="thumbnail">
                     <img
                        src="./images/newyork.jpg"
                        alt="New York"
                        width="400"
                        height="300"
                     />
                     <p>
                        <strong>Honoring The Visit of Rev. BIll Green</strong>
                     </p>
                     <p>
                        In may 2021, the leadership of Religious freedom
                        coalation saw it deem fit to support the orphanage.
                        <span id="dots3">...</span>
                        <span id="more3">
                           The President, Rev Bill Green Have been one of our
                           international Sponosors. He Loves working among
                           Africans and ahve been a pillar in the sustainance
                           and funding of the Orphanage.
                        </span>
                     </p>
                     <button onclick="myFunction3()" id="myBtn3">
                        Read more
                     </button>
                  </div>
               </div>
               <div className="col-sm-4">
                  <div className="thumbnail">
                     <img
                        src="./images/newyork.jpg"
                        alt="New York"
                        width="400"
                        height="300"
                     />
                     <p>
                        <strong>Our Transformation Story</strong>
                     </p>
                     <p>
                        {" "}
                        In 2012, we had a limited supply of many ammenities and
                        facilities such as good food, clothes for the children,
                        <span id="dots4">...</span>
                        <span id="more4">
                           pipe borne water, sport facilities and also quality
                           education which is relatively important in the life
                           of every child. TEM underwent what could best be
                           described as "dark days". But then a miracle happened
                           and as John (12 years old) said "I was never used to
                           eating meat, fish and egg but now in TEM I can eat".
                           This miracle was made possible by the helping hands
                           of our donors. You too can put a smile on the face of
                           a kid today by making a donation. We are in need of
                           facilities such as beds, foodstuff, computers,
                           toiletries, furniture, clothes, Utencils etc.
                        </span>
                     </p>
                     <button onclick="myFunction4()" id="myBtn4">
                        Read more
                     </button>
                  </div>
               </div>
               <div className="col-sm-4">
                  <div className="thumbnail">
                     <img
                        src="./images/newyork.jpg"
                        alt="New York"
                        width="400"
                        height="300"
                     />
                     <p>
                        <strong>Mustapha's Story</strong>
                     </p>
                     <p>
                        {" "}
                        <i>
                           Am 19 years old and am from Goza in Borno state. We
                           were all Christians with all my family members until
                           2013 when Boko
                           <span id="dots">...</span>
                           <span id="more">
                              Haram members came to our house in Goza and
                              demanded that we convert to Islam or we be killed.
                              Out of fear, my father advised every member of the
                              family to accept Islam, to my greatest surprise,
                              everyone complied except me. So the Boko Haram
                              members turned their threat to me. They gave me
                              time to take my decision but before the time
                              elapsed I ran out of the house into the bush
                              secretly. Even though I had no destination, I just
                              kept moving, on my way I ran into the house of a
                              woman, and I discovered that all the children of
                              the woman had been murdered right before her eyes.
                              So I begged her to let me stay with her with some
                              other children I met there. I wondered why her
                              children were killed, because the woman was a
                              Muslim. The woman took me in and took care of me
                              for about 3 days. For the 3 days I stayed with the
                              woman, if we must go out to do anything, we will
                              have to dress like women in disguise so that we
                              can be allowed to move. The woman got tired of
                              staying in that community, so told me that she
                              wants to see if she can find a way of escape. Of
                              all the children there, I was the only one willing
                              to take that step with her. So we moved the next
                              day. We took garri along with us, so that we can
                              feed on it, since we didn’t know what the road
                              will be like and how many days we will spend. On
                              our way, the first set of Boko Haram members we
                              met stopped us and asked where we were going, we
                              told them we were going to Biu, when they
                              discovered we were trying to escape they told us
                              to go ahead but not without a disheartening
                              statement like, “you will still meet us on your
                              way ahead, so you can’t escape” but we kept going.
                              After some kilometers we met another set of the
                              sect, almost the same conversation as the previous
                              ensured, so we moved on. We met the last set of
                              people again and this time it was tough; we met 3
                              people at this point and they stopped us as usual,
                              they asked what we had in our bag and we told them
                              garri. One of them said we should open the bag and
                              we did, when he discovered it is garri he said we
                              should close it. Then he asked if am a Muslim or a
                              Christian and i thought deep about what to say but
                              I just answered and said am a Christian while the
                              woman said she is a Muslim, so he told the woman
                              to step aside so that he can shoot me and the
                              woman obeyed, then he pulled his trigger to shoot
                              me, then I bend my head down to pray. Then the man
                              changed his mind and decided to take us to the
                              major road by himself so that nobody will attack
                              us again and he did until we came to a clear road
                              then he went back. That was how God helped us to
                              escape death. I went to deeper life bible church
                              branch in Biu and that was how they sent us down
                              to TEM INT’L ministry for up keep and education. I
                              have learnt a lot in TEM; both spiritually and
                              academically. My pain is that right now I don’t
                              know anything about my parents and siblings. I
                              have not seen them for so long now. I pray that
                              God will keep them alive and return them to
                              Christianity.
                           </span>
                        </i>
                     </p>
                     <button onclick="myFunction()" id="myBtn">
                        Read more
                     </button>
                  </div>
               </div>
               <div className="col-sm-4">
                  <div className="thumbnail">
                     <img
                        src="./images/sanfran.jpg"
                        alt="San Francisco"
                        width="400"
                        height="300"
                     />
                     <p>
                        <strong>
                           Attack on our Permanent Site In Jebbu Miango.
                        </strong>
                     </p>
                     <p>
                        <i>
                           {" "}
                           On the Night of 2nd december 2021, there was an inter
                           ethnic/religious clash between the Fulani and
                           <span id="dots5">...</span>
                           <span id="more5">
                              the Indegenious Irigwe people residing in Gebbu
                              Miango. The unfortunate event led to the loss of
                              lives and properties our camp which is located in
                              the heart of Miango was not left out as it was
                              tragically burnt down. We lost everything we have
                              been building for years. all the hostel
                              facilities, chapel and school class rooms where
                              burnt to the ground We are still grateful to God
                              that the lives of all the kids was spared as they
                              were immediately led to safety a night before the
                              attack but this have left the Orphanage in a
                              desolate state trying pick up from whatever is
                              lost. The camp is moved temporarilly to Jos city
                              of Plateau State. You can aslo be a part of this
                              great projet of rebuilding TEM and you can make
                              donations or contact us directly.
                           </span>{" "}
                        </i>
                     </p>
                     <button>Read more</button>
                  </div>
               </div>
            </div>
         </div>


         {/* <!-- Image of location/map --> */}
         <img
            src="./images/map.jpg"
            className="img-responsive"
            style={{ width: "100%" }}
         />
         <Footer/>
      </Fragment>
   );
};

export default AdminHomePageScreen;
