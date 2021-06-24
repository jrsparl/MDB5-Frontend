import React from 'react';
import {
  MDBIcon, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBNavbarItem,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';
import { MDBCardVideo } from 'mdbreact';
import { ImFontSize, ImYoutube2 } from 'react-icons/im'
import { SiCashapp } from 'react-icons/si';
import { GrArticle } from 'react-icons/gr';

export default function App() {
  return (
    <section className="text-center my-5">
       <h1 className="font-weight-bold mt-2 mb-3 black-text text-center">
                  <MDBIcon icon="eye" className="pr-2 mx-2" />
                   Our Best Projects
                </h1>
    <MDBRow className='row-cols-1 row-cols-md-2 g-4 mt-1'>
      <MDBCol>
        <MDBCard>
          <MDBCardVideo
            src='https://www.youtube.com/embed/CUecK1fMbFg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <a className= "black-text" href="#wedding-offerings">
            <MDBCardTitle>Wedding Band</MDBCardTitle>
           
            <MDBCardText>
              Along with original music and custom arrangements, the John Sparling Band brings
              a wide variety of configurations to provide just the right touch to your special
              occasion. Check out this video to see all the different instrument groups performing seemlessly
              through one song.
              <br />
              Piano Solo - Duo with Violin - Trio add Guitar - Quartet add Bass
              <br />
              Any configuration add String Quartet

            </MDBCardText>
            </a>
            <a href="https://www.youtube.com/channel/UCK5-kmub0xo4gYzLrH2ltEA?sub_confirmation=1" target='_blank' style={{ color: "red" }}>
              <ImYoutube2 size="40px" className="icon-theme iconSize" />
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard>
          <MDBCardVideo
            src='https://www.youtube.com/embed/ne8YHSOsCWU'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Public Shows</MDBCardTitle>
            <MDBCardText>
              The John Sparling Band was honored to be the house band for The Edison at Disney Springs Orlando, FL from 2020-2021.
              Check out their wild arrangement of Blink-182's "All The Small Things." Book them at your venue for an awesome night of kicking
              back and listening to music!
            </MDBCardText>
            <a href="https://www.youtube.com/channel/UCK5-kmub0xo4gYzLrH2ltEA?sub_confirmation=1" target='_blank' style={{ color: "red" }}>
              <ImYoutube2 size="40px" className="icon-theme iconSize" />
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard>
          <MDBCardVideo
            src='https://www.youtube.com/embed/LUANAulyWEg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Media</MDBCardTitle>
            <MDBCardText>
              The John Sparling Band is beginning to build their digital presence.  Here he is performing
              with Tanner Johnson (JSB) with his hit cover of Kings of Leon's "Use Somebody." Check out their
              YouTube channel and be sure to subscribe for updates!
            </MDBCardText>
            <a href="https://www.youtube.com/channel/UCK5-kmub0xo4gYzLrH2ltEA?sub_confirmation=1" target='_blank' style={{ color: "red" }}>
              <ImYoutube2 size="40px" className="icon-theme iconSize" />
            </a>



          </MDBCardBody>
        </MDBCard>
      </MDBCol>




      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://static.wixstatic.com/media/1f70b2_b3cc28be18fd4669ab9ebbc2bb5d8a17~mv2.jpg/v1/fill/w_1156,h_925,al_c,q_90/1f70b2_b3cc28be18fd4669ab9ebbc2bb5d8a17~mv2.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Streaming</MDBCardTitle>
            <div className='d-flex flex-row justify-space-between'> 
            <MDBCardText>
              You can find John Sparling streaming on all digital platforms. His debut original with Fabiola Rivera has just featured 
              with rave reveiw inside BuzzMusic's Indie Blog.
               <a className= 'mx-2' href="https://www.buzz-music.com/post/fabiola-rivera-and-john-sparling-share-an-irresistible-and-emotional-ballad" target='_blank' style={{ color: "red" }}>
              <GrArticle size="25px" className="icon-theme iconSize" />
            </a> 
            </MDBCardText>
            </div>
            
            
            <iframe src={"https://open.spotify.com/follow/1/?uri=spotify:artist:2qD6L86dwC2UsBK0sn3JxW?si=_m0rBGf2SJSAxgK9C80LgQ&dl_branch=1&size=detail&theme=light"}
              className="mt-2"
              width="300"
              height="56"
              scrolling="no"
              frameborder="0"
              style={{ border: "none", overflow: "hidden" }}
              allowtransparency="true"
              >
                
            </iframe>
           
     

          </MDBCardBody>
        </MDBCard>
      </MDBCol>



    </MDBRow>
    </section>
  );
}