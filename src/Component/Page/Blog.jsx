import React,{useEffect, useState} from 'react'
import axios from "axios"
import { Grid,Card,CardContent } from '@mui/material'


export const Blog =() => {
    const [data,setData] =useState([])
    const getData=  async() =>{
        const res=await axios.get("https://fakestoreapi.com/products")
        setData(res.data)
        console.log(res.data)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
        <Grid container spacing={4}>
            {data.map((item,index)=>{
                return (
                    <Grid item xs={4}>
                        <Card>
                        <CardContent>
                            <h3>{item.id}</h3>
                            <h3>{item.titel}</h3>
                        </CardContent>
                        </Card>
                    </Grid>
                )
            })}

        </Grid>
    </div>
  )
}
