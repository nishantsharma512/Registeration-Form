import {
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Spin,
} from 'antd';
import {Link, useNavigate} from "react-router-dom"
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { loader, postTableData, submitStatus } from '../Actions';
const Registeration = () => {
const dispatch=useDispatch();
const navigate=useNavigate();
const isSubmit=useSelector(state=>state.isSubmit);
const loading= useSelector(state=>state.loading);

console.log(isSubmit)
useEffect(()=>{
    if(isSubmit)
    {
        navigate("/login")
        dispatch(submitStatus)
    }
},[isSubmit,navigate,dispatch])

const onFinish= (values)=>{  
    dispatch(loader)
    dispatch(postTableData(values))
   /*  const newValues={...values,key};
    axios.post('http://localhost:3001/user',newValues).then(()=>{dispatch(loader);setIsSubmit(true)}).catch(err=>console.log(err)); */
}

    return (
        <>
        {
            loading?<Spin spinning={loading} size={"large"} tip={"Loading..."} style={{display:"flex",justifyContent:"center",marginTop:"300px"}}></Spin>:
            
            <Row style={{display:"flex",marginTop:"100px"}}>
                    
                <Col span={8} offset={8} >
                <h1 style={{display:"flex",justifyContent:"center" ,color:"tomato", marginBottom:"10px",fontFamily:"cursive"}}>Registeration Form</h1>
                    <Form
                    autoComplete='off'
                    onFinish={onFinish}
                    labelCol={{span:10}}
                    wrapperCol={{span:14}}
                        >
                        <Form.Item 
                        name='firstName'
                        label='First Name'
                        rules={[{
                            required: true,
                            message: "Please enter your firstname"
                        }, 
                        { whitespace: true },
                        { min: 3 }]}
                        hasFeedback>
                            <Input placeholder='Enter your firstname' />
                        </Form.Item>

                        <Form.Item 
                        name='lastName' 
                        label='Last Name' 
                        rules={[{
                            required: true,
                            message: "Please enter your lastname"
                        }, 
                        { whitespace: true }, 
                        { min: 3 }]} 
                        hasFeedback>
                            <Input placeholder='Enter your lastname' />
                        </Form.Item>

                        <Form.Item 
                        name='email' 
                        label='Email' 
                        rules={[{
                             required: true, message: "Please enter your email" },
                             {type:"email",message:"Please enter a valid email id"}, 
                             { whitespace: true }]} 
                             hasFeedback>
                            <Input placeholder='Enter your email id' />
                        </Form.Item>

                        <Form.Item 
                        name='password' 
                        label='Password'
                        rules={[{
                            required:true,message:"Please enter the password"
                        },{min:6}]}
                        hasFeedback>
                            <Input.Password placeholder='Enter your password' />
                        </Form.Item>
                        <Form.Item 
                        name='confirmPassword' 
                        label='Confirm Password'
                        dependencies={['password']}
                        rules={[{
                            required:true,message:"Please enter the password"
                        },({getFieldValue})=>({
                            validator(_,value){
                                if(!value||getFieldValue('password')===value)
                                {
                                    return Promise.resolve()
                                }
                                return Promise.reject('Please enter the same password')
                            }
                        })]}
                        hasFeedback
                        >
                            
                            <Input.Password placeholder='Enter your password again' />
                        </Form.Item>
                        <Form.Item>
                            Existing user?<Link to='/login'>Click here</Link> open login page
                        </Form.Item>

                        <Form.Item 
                        name="agreement"
                        valuePropName='checked'
                        wrapperCol={{span:24}}
                        rules={[
                            {
                                validator:(_,value)=>
                                    value ? Promise.resolve()
                                          : Promise.reject("To proceed, You need to agree with terms and conditions")
                                
                            },
                            ]}>
                            <Checkbox>
                                I have read the agreement
                            </Checkbox>
                        </Form.Item>
                        <Form.Item wrapperCol={{span:24}}>
                            <Button block type='primary' htmlType='submit'>
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
}
        </>

    );
};

export default Registeration;