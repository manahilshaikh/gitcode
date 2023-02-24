import { Grid,Card,CardContent} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



export const Home =() =>{
  const [data,setData] =useState([])
  const getData=async ()=>{
    const res =await axios.get("https://fakestoreapi.com/products")
    setData(res.data)
    console.log(res.data)
  }
  useEffect(()=>{
    getData()

  },[])

  return (
    <div>
        <Grid container spacing={3} >
          {data.map((item)=>{
            return(
              <Grid item xs={4} width={300} height={300}>
                <Card>
                  <CardContent style={{backgroundColor:"azure"}}>
                    <h1>{item.id}</h1>
                    <h1>{item.price}</h1>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
    </div>
  )
}
