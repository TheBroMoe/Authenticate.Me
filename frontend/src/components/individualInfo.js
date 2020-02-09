import React from 'react';
import { Button } from 'reactstrap';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


class IndividualInfo extends React.Component {


    render() {
        return(
        <MDBContainer>
        <MDBRow>
            <MDBCol size="4">.
                    <Button style ={ {backgroundColor : 'green', boxShadow: "2px 2px light-grey",fontSize: "2.1vw", color:'black',borderRadius: "10px",margin: "3px" }} >
                                Person 1
                            </Button>       
            </MDBCol>
            <MDBCol size="4">
                            <Button style ={ {backgroundColor : 'green', boxShadow: "2px 2px light-grey",fontSize: "2.1vw", color:'black',borderRadius: "10px",margin: "3px" }}
                                              >
                                Person 2
                            </Button>  

            </MDBCol>
            <MDBCol size="4">
                             <Button style ={ {backgroundColor : 'green', boxShadow: "2px 2px light-grey",fontSize: "2.1vw", color:'black',borderRadius: "10px",margin: "3px" }}
                                              >
                                Person 3
                            </Button>  

            </MDBCol>
        </MDBRow>
        </MDBContainer>)
        }
}

export default IndividualInfo;