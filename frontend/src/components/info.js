import React, { Component } from "react";
import { MDBContainer, MDBCardBody,MDBJumbotron, MDBRow, MDBCol, MDBCardTitle } from "mdbreact";
import CardExample from './cards';


class InfoCard extends Component {

  render() {
    return (
            <MDBContainer className="mt-5 text-center">
                <MDBRow>
                  <MDBCol>
                    <MDBJumbotron>
                      <MDBCardBody>
                        <MDBCardTitle className="h2">
                          Authenticate.Me
                        </MDBCardTitle>
                        <p className="blue-text my-4 font-weight-bold">
                          A streamlined verifiable credentials user experience for EVERYONE!
                        </p>
                        {/* <MDBCardText>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                          aliquid dolorem ea distinctio exercitationem delectus qui, quas
                          eum architecto, amet quasi accusantium, fugit consequatur
                          ducimus obcaecati numquam molestias hic itaque accusantium
                          doloremque laudantium, totam rem aperiam.
                        </MDBCardText> */}
                        <hr className="my-4" />
                        <div className="pt-2">
                     
                          <CardExample/>
                        </div>
                      </MDBCardBody>
                    </MDBJumbotron>
                  </MDBCol>
                </MDBRow>
      </MDBContainer>

    );
  }
}

export default InfoCard;