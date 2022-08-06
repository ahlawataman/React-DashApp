import React from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import { userRows } from '../../dummyData';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CircularProgress, {
    circularProgressClasses,
    CircularProgressProps,
  } from '@mui/material/CircularProgress';
  
import Box from '@mui/material/Box';

function FacebookCircularProgress(CircularProgressProps) {
    const prop = CircularProgressProps
    return (
      <Box sx={{ position: 'relative' }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
          }}
          size={60}
          thickness={4}
          {...prop}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
            animationDuration: '550ms',
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
          size={60}
          thickness={4}
          {...prop}
        />
      </Box>
    );
  }

export default function UserList() {

    const [data, setData] = useState([])

    const [dataFetched, setDataFetched] = useState(false);
    useEffect(() => {
        axios.get('https://script.google.com/macros/s/AKfycbweO_N_4u5JDm26FPlB1lPvp1Ue8bC09St37yfh1ZcF1NFPrR2sNpPJ2SU-uKdfTr1O/exec?info=userRows').then(res => {
            console.log(res.data.data)
            setData(res.data.data)
            setDataFetched(true)
        })
    }, [])
    

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id!==id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <div className='userListUser'>
                    <img className='userListImg' src={params.row.avatar} alt=''/>
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={'/user/'+params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutlineIcon className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];

    console.log(dataFetched)

    return (
        <div className='userList'>
            {!dataFetched?(
                <Box sx={{ display: 'flex', height:'100%', justifyContent: 'center', alignItems: 'center' }}>
                    <FacebookCircularProgress />
                </Box>
            ):(
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />)}
        </div>
    )
}
