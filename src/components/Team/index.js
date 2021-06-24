import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBBtn, MDBContainer } from "mdbreact";
import johnImage from '../../assets/john.png';
import danielImage from '../../assets/daniel.png';
import mattImage from '../../assets/matt.png';
import tannerImage from '../../assets/tanner.png';

const TeamPage = () => {
    return (
        <MDBCard className="my-5 px-1 pb-5 text-center">
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold my-5">
                    This is the Band
                </h2>
                <MDBContainer>
                    <p className="grey-text w-responsive mx-auto mb-5">
                        You can't fabricate chemistry. These players at one
                        point or another sat in on a night with John and since then
                        have been unable to rid themselves of him.
                    </p>
                </MDBContainer>

                <MDBRow>
                    <MDBCol md="3" className="mb-md-0 mb-5">
                        <MDBAvatar
                            tag="img"
                            src={johnImage}
                            className="rounded z-depth-1-half img-fluid"
                            alt="Sample avatar"
                        />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            John Sparling
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">Lead Vocals + Piano</h6>
                        <MDBBtn
                            tag="a"
                            floating
                            size="sm"
                            className="mx-1 mb-0 btn-ins">
                            <MDBIcon fab icon="instagram" />
                        </MDBBtn>
                        <MDBBtn
                            tag="a"
                            floating
                            size="sm"
                            className="mx-1 mb-0 btn-fb"
                        >
                            <MDBIcon fab icon="facebook" />
                        </MDBBtn>
                        <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-yt">
                            <MDBIcon fab icon="youtube" />
                        </MDBBtn>
                    </MDBCol>

                    <MDBCol md="3" className="mb-md-0 mb-5">
                        <MDBAvatar
                            tag="img"
                            src={mattImage}
                            className="rounded z-depth-1-half img-fluid"
                            alt="Sample avatar"
                        />
                        <h4 className="font-weight-bold dark-grey-text my-4">Matt Sparks</h4>
                        <h6 className="text-uppercase grey-text mb-3">
                            Bass + Drums + Guitar
                        </h6>
                        <MDBBtn
                            tag="a"
                            floating
                            size="sm"
                            className="mx-1 mb-0 btn-email"
                        >
                            <MDBIcon icon="envelope" />
                        </MDBBtn>
                        <MDBBtn
                            tag="a"
                            floating
                            size="sm"
                            className="mx-1 mb-0 btn-ins">
                            <MDBIcon fab icon="instagram" />
                        </MDBBtn>
                        <MDBBtn
                            tag="a"
                            floating
                            size="sm"
                            className="mx-1 mb-0 btn-fb"
                        >
                            <MDBIcon fab icon="facebook" />
                        </MDBBtn>
                    </MDBCol>

                    <MDBCol md="3" className="mb-md-0 mb-5">
                        <MDBAvatar
                            tag="img"
                            src={tannerImage}
                            className="rounded z-depth-1-half img-fluid"
                            alt="Sample avatar"
                        />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            Tanner Johnson
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">Violin</h6>
                        <MDBBtn
                            tag="a"
                            floating
                            size="sm"
                            className="mx-1 mb-0 btn-email"
                        >
                            <MDBIcon icon="envelope" />
                        </MDBBtn>
                        <MDBBtn
                            tag="a"
                            floating
                            size="sm"
                            className="mx-1 mb-0 btn-ins">
                            <MDBIcon fab icon="instagram" />
                        </MDBBtn>
                        <MDBBtn
                            tag="a"
                            floating
                            size="sm"
                            className="mx-1 mb-0 btn-fb"
                        >
                            <MDBIcon fab icon="facebook" />
                        </MDBBtn>
                    </MDBCol>

                    <MDBCol md="3" className="mb-md-0 mb-5">
                        <MDBAvatar
                            tag="img"
                            src={danielImage}
                            className="rounded z-depth-1-half img-fluid"
                            alt="Sample avatar"
                        />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            Daniel Kelley
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">Guitar</h6>
                        <MDBBtn
                            tag="a"
                            floating
                            size="sm"
                            className="mx-1 mb-0 btn-email"
                        >
                            <MDBIcon icon="envelope" />
                        </MDBBtn>
                        <MDBBtn
                            tag="a"
                            floating
                            size="sm"
                            className="mx-1 mb-0 btn-ins">
                            <MDBIcon fab icon="instagram" />
                        </MDBBtn>
                        <MDBBtn
                            tag="a"
                            floating
                            size="sm"
                            className="mx-1 mb-0 btn-fb"
                        >
                            <MDBIcon fab icon="facebook" />
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    );
}

export default TeamPage;