import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { MDBDatePickerV5 } from 'mdbreact';



const FormPage = () => {
 

return (
<MDBContainer fluid>
  <MDBRow className='justify-content-center'>
    <MDBCol md="6">
      <form id='request-form'>
        <div className="grey-text">
          <MDBInput containerClass='d-flex flex-row' icon="user" label="Your name"  group type="text" validate error="wrong"
            success="right" />
          <MDBInput containerClass='d-flex flex-row' label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBDatePickerV5 emptyLabel='Select Date'  inline getValue={(e)=> console.log(e)} />
          <MDBInput containerClass='d-flex flex-row' label="Request Details" icon="list-alt" group type="textarea" rows="5" />
        </div>
        <div className="text-center">
          <MDBBtn color="primary">Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;