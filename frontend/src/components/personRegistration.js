import React, { useState } from 'react';
// import axios from 'axios';

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


const FormPage = () => {
    const [submission, setSubmission] = useState(false);
    // const[userInfo, setUserInfo]= useState

    const toggle = () => {
     setSubmission(!submission);
    }

    // const addUser = () => {
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('POST', 'http://18.216.140.153/api/v1/connections');
    //     xhr.send(JSON.stringify({ name: 'test4', phone: '7802655033', sms: true }))

    // }

    // const response =  axios.post(
    //     'http://18.216.140.153/api/v1/connections',
    //     { name: 'test5', phone: '7802655033', sms: true },
    //     { headers: { 'Content-Type': 'application/json' } }
    //   )
    //   console.log(response.data)
    const decider =() =>{

        if (submission)
        {return <div>
                    <div>THANKS FOR SUBMISSION</div>
                    <MDBBtn onClick={toggle} >Default</MDBBtn>
                </div>}

        else{
        return (
                <MDBContainer>
                <MDBRow>
                <MDBCol md="6">
                    <form>
                    <p className="h5 text-center mb-4">Registration</p>
                    <div className="grey-text">
                        <MDBInput label="Type your Name" icon="envelope" group type="email" validate error="wrong"
                        success="right" />
                        <MDBInput label="Type your Phone Number" icon="envelope" group type="email" validate error="wrong"
                        success="right" />
                    </div>
                    <div className="text-center">
                        <MDBBtn onClick={toggle}>Submit</MDBBtn>
                    </div>
                    </form>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
        )}}
return ( decider()
);
};

export default FormPage;