import React, { Component } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdbreact";

class CardExample extends Component {

  render() {
    return (
      <MDBRow>
        <MDBCol>
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="pink-text">
                  <MDBIcon icon="chart-pie"/> Registration
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>Register your personal credentials today!</strong>
                </MDBCardTitle>
                <MDBBtn color="pink">
                  <MDBIcon icon="clone left" /> Start 
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
              <div>
                <h5 className="orange-text">
                  <MDBIcon icon="desktop" /> Coorporations
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong> Securely manage incoming credential requests!</strong>
                </MDBCardTitle>
                <MDBBtn color="deep-orange">
                  <MDBIcon icon="clone left" /> Confirm Now
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default CardExample;