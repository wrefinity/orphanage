import React, {Fragment} from 'react'


const Service = () => {

   
    return (
        <Fragment>

            <div id="services" className="container-fluid text-center" style={{marginTop:30}}>
                <h2>SERVICES</h2>
                <h4>What we offer</h4>

                <div className="row pt-5">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-off logo-small"></span>
                        <h4>POWER</h4>
                        <p>We Empower Every Child..</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-heart logo-small"></span>
                        <h4>LOVE</h4>
                        <p>Every Child is Loved..</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-lock logo-small"></span>
                        <h4>EQUIP</h4>
                        <p>We get every child ready for the Future..</p>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-leaf logo-small"></span>
                        <h4>FRUITFUL</h4>
                        <p>We Bring the best out of every Kid..</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-certificate logo-small"></span>
                        <h4>CERTIFIED</h4>
                        <p>Spiritual and Moral Standards are achived..</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-wrench logo-small"></span>
                        <h4  className='hard'>HARD WORK</h4>
                        <p>We ensure every child is hardworking..</p>
                    </div>
                </div>

            </div>

        </Fragment>
    );
};
export default Service;



// div>


