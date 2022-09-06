import axios from "axios";
import uuid from "react-uuid"
export const postTableData=(values)=>{
    const key=uuid();
    const newValues={...values,key};
    return async function(dispatch){
        const res= await axios.post('http://localhost:3001/user',newValues)
        if(Object.keys(res).length!==0)
        {
            dispatch(loader);
            dispatch(submitStatus)
        }
    }
}

export const extractTableData=(dispatch)=>{
    axios.get("http://localhost:3001/user").then(res=>dispatch({type:"getTableRows",payload:res.data})).catch(err=>console.log(err))
   
}
export const loader=(dispatch)=>{
    dispatch({type:"getLoader"})
}
export const submitStatus=(dispatch)=>{
    dispatch({type:"setIsSubmit"})
}