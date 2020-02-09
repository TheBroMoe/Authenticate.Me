import React from 'react';
// import { Button } from 'reactstrap';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

// import { Link } from "react-router-dom";

class GridItemColor extends React.Component {


    render() {
        return(
            <MDBContainer>
            <MDBRow>
              <MDBCol size="4">Person 1</MDBCol>
              <MDBCol size="4">Person 2</MDBCol>
              <MDBCol size="4">Person 3</MDBCol>
            </MDBRow>
          
            <MDBRow>
              <MDBCol sm="4">Person 4</MDBCol>
              <MDBCol sm="4">Person 5</MDBCol>
              <MDBCol sm="4">Person 6</MDBCol>
            </MDBRow>
          
            <MDBRow>
              <MDBCol md="4">Person 7</MDBCol>
              <MDBCol md="4">Person 8</MDBCol>
              <MDBCol md="4">Person 9</MDBCol>
            </MDBRow>
          
            <MDBRow>
              <MDBCol lg="4">Person 10</MDBCol>
              <MDBCol lg="4">Person 11</MDBCol>
              <MDBCol lg="4">Person 12</MDBCol>
            </MDBRow>
          
            <MDBRow>
              <MDBCol xl="4">Person 13</MDBCol>
              <MDBCol xl="4">Person 14</MDBCol>
              <MDBCol xl="4">Person 15</MDBCol>
            </MDBRow>
          </MDBContainer>)
        }
}

export default GridItemColor;