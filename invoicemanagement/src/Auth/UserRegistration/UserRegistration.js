import React from "react";
import { useForm, Controller } from "react-hook-form";


import { Container, Row, Col } from 'reactstrap';
import { Back, InputFirst, InputS } from "./UserRegistrationStyle";


const UserRegistration = () => {
    const { control, register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    const signup=()=>{console.log("signup")
    }

    const signin=()=>{
        console.log("signin")
    }
    return (
        
            
        

        <>
            <Container>
                <Back>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-data">
                        <h5 className="top-head">
                            <ul className="options">
                                <li className="list1" onClick={signup}>Sign Up</li>
                                <li className="list" onClick={signin}>Sign In</li>

                            </ul>
                        </h5>
                        <Row>
                            <Col md="5">
                                <Row className="first">
                                    <Col md="6">
                                        <label for="first_name">First Name</label>



                                        <InputFirst placeholder="KeyMouseit"
                                            type="text"
                                            {...register('First_name', {
                                                required: true,
                                                max: 3
                                            })}
                                        />

                                    </Col>



                                
                                    <Col md="6">
                                        <label for="Last Name">Last Name</label>



                                        <InputS placeholder="KeyMouseit"
                                            type="text"
                                            {...register('Last_Name', {
                                                required: true,
                                                max: 3
                                            })}
                                        />


                                    </Col>
                                </Row>


                                <Row>
                                    <Col md="12">
                                        <label for="Cotact">Conatct</label>



                                        <InputS placeholder="KeyMouseit"
                                            type="text"
                                            {...register('company name', {
                                                required: true,
                                                max: 3
                                            })}
                                        />


                                    </Col>

                                    {/* <Col md="6">
                                        <label for="email">Email</label>



                                        <InputS placeholder="KeyMouseit"
                                            type="text"
                                            {...register('company name', {
                                                required: true,
                                                max: 3
                                            })}
                                        />


                                    </Col> */}

                                </Row>


                                <Row>
                                    <Col md="12">
                                        <label for="Email">Email</label>



                                        <InputS
                                            type="text"
                                            {...register('Address', {
                                                required: true,
                                                max: 3
                                            })}
                                        />


                                    </Col>

                                   
                                </Row>


                                <Row>
                                <Col md="6">
                                        <label for="Password">Password</label>



                                        <InputS
                                            type="password"
                                            {...register('password', {
                                                required: true,
                                                max: 3
                                            })}
                                        />


                                    </Col>

                                    <Col md="6">
                                        <label for="ConfirmPassword">Confirm password</label>



                                        <InputS
                                            type="password"
                                            {...register('confirm_password', {
                                                required: true,
                                                max: 3
                                            })}
                                        />


                                    </Col>

                                </Row>


                                <Row>
                                <Col md="12">
                                        <label for="Cotact">Address</label>



                                        <InputS placeholder="KeyMouseit"
                                            type="text"
                                            {...register('Address', {
                                                required: true,
                                                max: 3
                                            })}
                                        />


                                    </Col>

                                    

                                </Row>


                                            <Row>
                                            <Col md="12">
                                        <label for="status">Organisation</label>
                                        <select {...register("Country")} className="select">
                                            <option value="Keymouseit">KeyMouseit</option>
                                            <option value="Tcs">Tcs</option>
                                            <option value="Wipro">Wipro</option>
                                        </select>
                                    </Col>
                                            </Row>

                                <Row>
                                    <Col>




                                        <InputS
                                            type="checkbox" className="checkbox-para"
                                            {...register('checkbox', {
                                                required: true,
                                                max: 3
                                            })}
                                        />
                                        <label for="checkbox" className="checkbox-para">  I've Read agree with Terms of service and our privacy policy</label>

                                        {/* <p className="checkbox-para">I've Read agree with Terms of service and oor privacy policy</p> */}
                                    </Col>
                                </Row>


                                <Row>
                                    <Col>

                                        <button className="btn-sub">
                                            <div className="outer-icon">
                                                {/* <img className="arrow-image"


                                                    src={
                                                        require("/home/keymouseit/Documents/original Project/invoicemanagement/src/Images/next_arrow@3x.png")
                                                            .default
                                                    }
                                                    alt="Header Img"
                                                    srcset=""
                                                ></img> */}
                                            </div>
                                        </button>
                                    </Col>
                                </Row>







                            </Col>

                            <Col md="7">


                                {/* <img
                                    src={
                                        require("/home/keymouseit/Documents/original Project/invoicemanagement/src/Images/login_character.png")
                                            .default
                                    }
                                    alt="Header Img"
                                    srcset=""
                                ></img> */}
                            </Col>
                        </Row>






                    </form>
                </Back>

            </Container>

        </>
    )
}

export default UserRegistration