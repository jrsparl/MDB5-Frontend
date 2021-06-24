import React from 'react';
import {
MDBNavbar,
MDBNavbarNav,
MDBNavbarItem,
MDBNavbarLink,
MDBContainer } from 'mdb-react-ui-kit';

import { SiCashapp } from 'react-icons/si';
import { SiApplemusic } from 'react-icons/si';
import { SiSpotify } from 'react-icons/si';
import { GrArticle } from 'react-icons/gr';
import { IoLogoVenmo } from 'react-icons/io5';
import { IoLogoPaypal } from 'react-icons/io5';



function NavBar () {

return(
  <MDBNavbar expand='lg' light bgColor='light'>
  <MDBContainer fluid>
    <MDBNavbarNav className='d-flex flex-row justify-content-center nav-font'>
      
      <MDBNavbarItem className='me-3 me-lg-0'>
        <MDBNavbarLink href='#'>
        <SiCashapp className="icon-theme iconSize"/>
        </MDBNavbarLink>
      </MDBNavbarItem>

      <MDBNavbarItem className='me-3 me-lg-0'>
        <MDBNavbarLink href='#'>
        <IoLogoPaypal className="icon-theme iconSize"/>
        </MDBNavbarLink>
      </MDBNavbarItem>
      
      <MDBNavbarItem className='me-3 me-lg-0'>
        <MDBNavbarLink href='#'>
        <IoLogoVenmo className="icon-theme iconSize"/>
        </MDBNavbarLink>
      </MDBNavbarItem>
    
      <MDBNavbarItem className='me-3 me-lg-0'>
        <MDBNavbarLink href='#'>
        <SiApplemusic className="icon-theme iconSize"/>
        </MDBNavbarLink>
      </MDBNavbarItem>

      <MDBNavbarItem className='me-3 me-lg-0'>
        <MDBNavbarLink href='#'>
        <SiSpotify className="icon-theme iconSize"/>
        </MDBNavbarLink>
      </MDBNavbarItem>

     

    
    
    </MDBNavbarNav>
  </MDBContainer>
</MDBNavbar>
   
);
}


export default NavBar;