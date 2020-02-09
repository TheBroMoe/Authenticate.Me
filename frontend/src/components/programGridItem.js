import React from 'react';
import GridItem from './gridItem.js';
import { MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';



class ProgramGridItem extends React.Component {

    render() {
        // const services = this.props.listServices
        return ( 
            <div>
               <MDBContainer>
                        <GridItem  />
                </MDBContainer> 
                <MDBContainer>
                                        <MDBCol>
                            <MDBCard style={{ width: "22rem" }}>
                                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                <MDBCardBody>
                                <MDBCardTitle>Person 1</MDBCardTitle>
                                <MDBCardText>
                                    Name: Example     &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;          
                                    Phone: 780-123-4567
                                </MDBCardText>
                                <MDBBtn>Change</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBCol>
                </MDBContainer>
                </div>
                )
    } 
}

export default ProgramGridItem;