import React from 'react';
import './App.css';
import './components/form'
// import StepperExample from './components/personRegistration';
// import CardExample from './components/cards';
import Example from './components/home';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// import { useState } from 'react'
// import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardText,  MDBCardTitle } from "mdbreact";
    

function App() {

  // const [ main, setMain] = useState(true);
  // const [ person, setPerson] = useState(false);
  // const [ company, setCompany] = useState(false);

  // const handleMainChange = () =>{
  //   setMain(!main)
  //   console.log("status main page:", main)
  //   }
  // const handlePersonChange = () =>{
  //   setPerson(!person)
  //   console.log("status person page:", person)
  //     }
  // const handleCompanyChange = () =>{
  //   setCompany(!company)
  //   console.log("status company page:", company)
  //       }
  // const pageLoader = () => {

  //   if (main === true && person === false && company && false )
  //   {console.log('this')
  //     return <div>Main Page</div>}

  //   if (main === false && person === true && company && false ) 
  //   {return <div>Person Page</div>}

  //   if (main === false && person === false && company && true ) 
  //   {return <div>Company Page</div>}


  // }
      return (
  
            <Example/>
        
          //   <MDBContainer className="mt-5 text-center">
          //       <MDBRow>
          //         <MDBCol>
          //           <MDBJumbotron>
          //             <MDBCardBody>
          //               <MDBCardTitle className="h2">
          //                 Authenticate Me
          //               </MDBCardTitle>
          //               <p className="blue-text my-4 font-weight-bold">
          //                 A streamlined verifiable credentials user experience for EVERYONE!
          //               </p>
          //               <MDBCardText>
          //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          //                 aliquid dolorem ea distinctio exercitationem delectus qui, quas
          //                 eum architecto, amet quasi accusantium, fugit consequatur
          //                 ducimus obcaecati numquam molestias hic itaque accusantium
          //                 doloremque laudantium, totam rem aperiam.
          //               </MDBCardText>
          //               <hr className="my-4" />
          //               <div className="pt-2">
                     
          //                 <CardExample/>
          //               </div>
          //             </MDBCardBody>
          //           </MDBJumbotron>
          //         </MDBCol>
          //       </MDBRow>
          //       <div>
          //         <button onClick={handleMainChange}>Main</button>
          //         <button onClick={handlePersonChange}>Person</button>
          //         <button onClick={handleCompanyChange}>Company</button>
          //       </div>
          //       <div>
          //       {pageLoader()}
          //       <StepperExample/>
          //       </div>
          // </MDBContainer>
  );
}

export default App;
