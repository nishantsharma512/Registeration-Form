import React from 'react';
import { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/exports';
import { extractTableData } from '../Actions';
function DataTable(props) {

    /* const [tableRows,setTableRows]=useState([]) */
    const dispatch=useDispatch()
    const tableRows=useSelector(state=>state.tableRows)
    console.log(tableRows)
    useEffect(()=>{
        dispatch(extractTableData)
       /*  return async function(){
            const rows=await axios.get("http://localhost:3001/user")
            setTableRows(rows.data)
        } */
    },[dispatch])
    const columns=[{
        title:"Firstname",
        dataIndex:"firstName",
        key:"key"   
    },
    {
        title:"Lastname",
        dataIndex:"lastName",
        key:"key"
    },
    {
        title:"Email",
        dataIndex:"email",
        key:"key"
    },
    {
        title:"Password",
        dataIndex:"confirmPassword",
        key:"key"
    },]

    return (
        <>
        <Table dataSource={tableRows} columns={columns} ></Table>
        </>
    );
}

export default DataTable;