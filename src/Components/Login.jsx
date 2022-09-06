import { Anchor, Button, Col, Form, Input, Row } from 'antd';
import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import {useSelector} from "react-redux/es/exports"
import {useDispatch} from "react-redux/es/exports"
import { extractTableData } from '../Actions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Login(props) {
    const navigate=useNavigate()
    const isSubmit=useSelector(state=>state.isSubmit)
    const dispatch=useDispatch()
    const tableRows=useSelector(state=>state.tableRows)
    const [message,setMessage]=useState(false)
    console.log(isSubmit)
    useEffect(()=>{
        dispatch(extractTableData)
    },[dispatch])

    const onFinish=(values)=>{
        axios.get(`http://localhost:3001/user?email=${values.userName}&&password=${values.password}`).then(res=>res.data.length!==0?navigate("/dataTable"):setMessage(true)).catch(err=>console.log(err))
        console.log(tableRows)
        console.log(values)
    }
    
    return (
        <>
        {
            console.log(isSubmit)
        }
            <Row style={{display:"flex",marginTop:"100px"}}>
                <Col span={8} offset={8}>
                    <h1 style={{display:"flex",justifyContent:"center", color:"tomato", marginBottom:"10px",fontFamily:"cursive"}}>Login Page</h1>
                    <Form
                    autoComplete='off'
                    onFinish={onFinish}>
                        <Form.Item
                        label="Username"
                        name="userName"
                        rules={[{required:true,
                        message:"Username can't be empty"},
                        {whitespace:true}]}
                        hasFeedback>
                            <Input placeholder='Please enter the username'/>
                        </Form.Item>

                        <Form.Item 
                        label="Password"
                        name="password"
                        rules={[{required:"true",
                        message:"Please enter your password"}
                        ,{whitespace:true}]}
                        hasFeedback>
                            <Input.Password placeholder='Please enter ytour password'/>
                        </Form.Item>
                        {
                            message&&
                            <Form.Item>
                                <h6 style={{color:"red"}}>Please Enter valid username/password</h6>
                            </Form.Item>
                        }
                        <Form.Item>
                            <Anchor>
                                New user?<Link to="/">Click here</Link> to open registeration form.
                            </Anchor>
                        </Form.Item>
                        <Form.Item >
                            <Button block type='primary' htmlType='sumbit'>Login</Button>
                        </Form.Item>

                    </Form>
                </Col>
            </Row>
        </>
    );
}

export default Login;