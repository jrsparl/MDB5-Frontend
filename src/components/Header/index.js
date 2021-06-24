import React from 'react';
import { useState, useEffect } from 'react';
import desktopImage from '../../assets/JSBCoverPhoto.png';
import mobileImage from '../../assets/JSBSmallBg.png';
import { MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

  import {MDBInput,
    MDBIcon,
    MDBContainer,
    MDBRow,
    MDBCol} from 'mdbreact';

import NavBar from "../Navbar";
import FormPage from '../Form';

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 500 ? desktopImage : mobileImage;
  
    useEffect(() => {`z`
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);
  
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
  
  
    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = () => setCentredModal(!centredModal);
  
  
    return (
      <header>
    
       <NavBar></NavBar>
        
    
  
        <div
          id='intro-example'
          className='p-5 text-center bg-image'
          
          style={{backgroundImage: `url(${imageUrl})`,}}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white text-center'>
                <h1 className='mb-3 band-tite'>The John Sparling Band</h1>
               
                <MDBBtn onClick={toggleShow}
                  className='btn btn-outline-light btn-lg m-2'
                  role='button'
                  rel='nofollow'
                  target='_blank'
                >
                  Book Now
                  </MDBBtn>

                  <MDBModal tabIndex='-1' show={centredModal} getOpenState={(e: any) => setCentredModal(e)}>
                  <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="text-dark">Submit Request</MDBModalTitle>
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody fluid >
          
            <FormPage />

            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>



                {/* <a
                  className='btn btn-outline-light btn-lg m-2'
                  href='https://mdbootstrap.com/docs/standard/'
                  target='_blank'
                  role='button'
                >
                  Download MDB UI KIT
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;