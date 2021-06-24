import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

import soloPiano from '../../assets/solopiano.jpg';
import pianoDuo from '../../assets/pianoduo.jpg';
import pianoquintet from '../../assets/pianoquartet.JPG';
import stringQuartet from '../../assets/stingquartet.JPG';
import jstrio from '../../assets/JS3.JPG';
import jsBand from '../../assets/JSBand.jpg';
import totalpackage from '../../assets/totalpackage.JPG';




const ConfigurationPage = () => {
    return (
        <MDBContainer id="wedding-offerings">
            <MDBCard className="my-5 px-5 pb-1 text-center">
                <MDBCardBody>
                    <h2 className="h1-responsive font-weight-bold my-5">
                        Our Wedding Offerings
                    </h2>
                    <p className="grey-text w-responsive mx-auto mb-5">
                        The John Sparling Band is an incredibly flexible group that can work with your budget and wishes!
                        You are able to select from any number of musicians and offerings they provide.
                    </p>
                    <MDBRow className="text-md-left">

                        {/* card */}

                        <MDBCol lg="6" md="12" className="mb-5">
                            <MDBCol md="4" lg="6" className="float-left">
                                <MDBAvatar
                                    src={soloPiano}
                                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                    tag="img"
                                    alt="Sample avatar"
                                />
                            </MDBCol>
                            <MDBCol md="8" lg="6" className="float-right">
                                <h4 className="font-weight-bold mb-3 mt-1">Piano Solo</h4>
                                {/* <h6 className="font-weight-bold grey-text mb-3">
                Piano Solo
              </h6> */}
                                <p className="grey-text">
                                    John Sparling is a top notch piano player/singer who can play anything from Sinatra to Bieber.
                                    He has been on several tours in the United States, Italy and the Pacific with varying ensembles as well
                                    as a sought after performer in the Orlando, FL area. This set-up is best for ceremony and cocktail hour!

                                </p>
                                <p>Check Availibility</p>
                                <div className="d-flex flex-row justify-content-center">
                                
                                    <MDBBtn tag="a" size="lg" floating gradient="dusty-grass">
                                        <MDBIcon icon="calendar-check" />
                                    </MDBBtn>
                                   
                                </div>
                                
                            </MDBCol>
                        </MDBCol>

                        {/* card */}


                        <MDBCol lg="6" md="12" className="mb-5">
                            <MDBCol md="4" lg="6" className="float-left">
                                <MDBAvatar
                                    src={pianoDuo}
                                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                    tag="img"
                                    alt="Sample avatar"
                                />
                            </MDBCol>
                            <MDBCol md="8" lg="6" className="float-right">
                                <h4 className="font-weight-bold mb-3 mt-1">Piano Duo</h4>
                                {/* <h6 className="font-weight-bold grey-text mb-3">
                Piano Duo
              </h6> */}
                                <p className="grey-text">
                                    This musically rich duo is the perfect compliment to your ceremony.  John and Tanner
                                    together play lush melodies and can turn any song into the perfect romantic moment for your
                                    special day.
                                </p>
                                <p>Check Availibility</p>
                                <div className="d-flex flex-row justify-content-center">
                                
                                    <MDBBtn tag="a" size="lg" floating gradient="dusty-grass">
                                        <MDBIcon icon="calendar-check" />
                                    </MDBBtn>
                                   
                                </div>
                            </MDBCol>
                        </MDBCol>

                        {/* card */}


                        <MDBCol lg="6" md="12" className="mb-5">
                            <MDBCol md="4" lg="6" className="float-left">
                                <MDBAvatar
                                    src={pianoquintet}
                                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                    tag="img"
                                    alt="Sample avatar"
                                />
                            </MDBCol>
                            <MDBCol md="8" lg="6" className="float-right">
                                <h4 className="font-weight-bold mb-3 mt-1">Piano Quintet</h4>
                                {/* <h6 className="font-weight-bold grey-text mb-3">
                Piano Quintet
              </h6> */}
                                <p className="grey-text">
                                    As in the old days of the classical era there is no mixture of instruments more
                                    beautiful than a piano with a string quartet.  Playing beautiful arrangements of
                                    music from top 40's to classical this chamber ensemble would be an unforgettable addition to your
                                    ceremony and cocktail hour.
                                </p>
                                <p>Check Availibility</p>
                                <div className="d-flex flex-row justify-content-center">
                                
                                    <MDBBtn tag="a" size="lg" floating gradient="dusty-grass">
                                        <MDBIcon icon="calendar-check" />
                                    </MDBBtn>
                                   
                                </div>
                            </MDBCol>
                        </MDBCol>

                        {/* card */}


                        <MDBCol lg="6" md="12" className="mb-5">
                            <MDBCol md="4" lg="6" className="float-left">
                                <MDBAvatar
                                    src={stringQuartet}
                                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                    tag="img"
                                    alt="Sample avatar"
                                />
                            </MDBCol>
                            <MDBCol md="8" lg="6" className="float-right">
                                <h4 className="font-weight-bold mb-3 mt-1">String Quartet</h4>
                                {/* <h6 className="font-weight-bold grey-text mb-3">
                String Quartet
              </h6> */}
                                <p className="grey-text">
                                    Tanner Johnson leads this string quartet which would be a great stand-alone ensemble
                                    to fit into either ceremony or cocktail hour.
                                </p>
                                <p>Check Availibility</p>
                                <div className="d-flex flex-row justify-content-center">
                                
                                    <MDBBtn tag="a" size="lg" floating gradient="dusty-grass">
                                        <MDBIcon icon="calendar-check" />
                                    </MDBBtn>
                                   
                                </div>
                            </MDBCol>
                        </MDBCol>

                        {/* card */}

                        <MDBCol lg="6" md="12" className="mb-5">
                            <MDBCol md="4" lg="6" className="float-left">
                                <MDBAvatar
                                    src={jstrio}
                                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                    tag="img"
                                    alt="Sample avatar"
                                />
                            </MDBCol>
                            <MDBCol md="8" lg="6" className="float-right">
                                <h4 className="font-weight-bold mb-3 mt-1">The John Sparling Trio</h4>
                                {/* <h6 className="font-weight-bold grey-text mb-3">
                The John Sparling Trio
              </h6> */}
                                <p className="grey-text">
                                    This is the original configuration of the John Sparling Band.  This incredibly
                                    diverse group can provide entertainment throughout the entire night. This trio
                                    is dynamic in instrumentation as well! You will find our main man Matt switching from
                                    acoustic guitar to keybass and drums (At the same time!! what?!?) Also the lead instrument
                                    is interchangeable between guitar or violin!
                                </p>
                                <p>Check Availibility</p>
                                <div className="d-flex flex-row justify-content-center">
                                
                                    <MDBBtn tag="a" size="lg" floating gradient="dusty-grass">
                                        <MDBIcon icon="calendar-check" />
                                    </MDBBtn>
                                   
                                </div>
                            </MDBCol>
                        </MDBCol>

                        {/* card */}

                        <MDBCol lg="6" md="12" className="mb-5">
                            <MDBCol md="4" lg="6" className="float-left">
                                <MDBAvatar
                                    src={jsBand}
                                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                    tag="img"
                                    alt="Sample avatar"
                                />
                            </MDBCol>
                            <MDBCol md="8" lg="6" className="float-right">
                                <h4 className="font-weight-bold mb-3 mt-1">The John Sparling Band</h4>
                                {/* <h6 className="font-weight-bold grey-text mb-3">
                Front-end Developer
              </h6> */}
                                <p className="grey-text">
                                    We would never say outloud that this is our favorite pairing! This group
                                    will pull at your heartstrings, get your head nodding and your feet moving
                                    with some of the best musicians you'll have the pleasure of coming by.
                                </p>
                                <p>Check Availibility</p>
                                <div className="d-flex flex-row justify-content-center">
                                
                                    <MDBBtn tag="a" size="lg" floating gradient="dusty-grass">
                                        <MDBIcon icon="calendar-check" />
                                    </MDBBtn>
                                   
                                </div>
                            </MDBCol>
                        </MDBCol>



                        <MDBContainer className="d-flex flex-row justify-content-center">
                        <MDBCol lg="8" md="12" className="mb-5">
                            <MDBCol md="4" lg="6">
                                <MDBAvatar
                                    src={totalpackage}
                                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                    tag="img"
                                    alt="Sample avatar"
                                />
                            </MDBCol>
                            <MDBCol md="8" lg="6" className="float-right">
                                <h4 className="font-weight-bold mb-3 mt-1">The Total Package</h4>
                                {/* <h6 className="font-weight-bold grey-text mb-3">
                Front-end Developer
              </h6> */}
                                <p className="grey-text">
                                    This includes <br/>
                                    <h5>ceremony | cocktail hour  <br/>
                                    reception band | reception DJ</h5> <br/>
                                    <h4>Our Ideal Night</h4>
                                
                                    <dl className="row">
    <dt className="col-sm-4">Ceremony</dt>
    <dd className="col-sm-8">The Piano Quintet for processional, ceremony music and recessional.</dd>

    <dt className="col-sm-4">Cocktail Hour</dt>
    <dd className="col-sm-8">The John Sparling Trio with Piano/Singer, Acoustic Guitar and Violin</dd>

    <dt className="col-sm-4">Reception</dt>
    <dd className="col-sm-8">Begin with The John Sparling Band (Piano, Violin, Guitar, Bass/Drums)</dd>

    <dt className="col-sm-4">Late Reception</dt>
    <dd className="col-sm-8"> Second half finishing off with Matt Sparks our resident DJ to pump up the volume, energy and 
    good times.
    </dd>

    
  </dl>

                                </p>
                                <p>Check Availibility</p>
                                <div className="d-flex flex-row justify-content-center">
                                
                                    <MDBBtn tag="a" size="lg" floating gradient="dusty-grass">
                                        <MDBIcon icon="calendar-check" />
                                    </MDBBtn>
                                   
                                </div>
                            </MDBCol>
                        </MDBCol>
                        </MDBContainer>




                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default ConfigurationPage;