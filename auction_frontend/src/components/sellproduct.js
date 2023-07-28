import React from 'react'
import { Button,TextField,Box } from '@mui/material'
//import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import {useState} from 'react'
import axios from 'axios'
import './sellproduct.css'
import SellerNavbar from './SellerNavbar'
 function Admission() {
  const[fname,setFirstName]=useState('')
  const[lname,setLastName]=useState('')
  const[protype,setProtype]=useState('')
  const[proname,setProname]=useState('')
  const[minamt,setMinamt]=useState('')
  const[address,setAdd]=useState('')
  const[startdate,setStartdate]=useState('')
  const[enddate,setEnddate]=useState('')
  const[img,setImg]=useState('')
  const submitAd = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/postauction",{
      fname:fname,
      lname:lname,
      protype:protype,
      proname:proname,
      minamt:minamt,
      address:address,
      startdate:startdate,
      enddate:enddate,
      img:"https://c4.wallpaperflare.com/wallpaper/919/843/709/tesla-black-coupe-wallpaper-preview.jpg",
   

    }
      )
      .then((response)=>{
        console.log(response);
        
      })
      .catch((error)=>{
        console.error(error);
      });

  };

  
  return (
    <div>
      <SellerNavbar/>
                
      
        <form  className='admiss' onSubmit={submitAd}>
        <center>
        <br></br>
        
        <br></br>
        <TextField id ="outlined-basic"   label="First Name" 
        variant="outlined" type="text" value={fname} required onChange={(e) => setFirstName( e.target.value)} /><br />
        <br></br>
      
        <br></br>
        <TextField id ="outlined-basic"  label="Last Name" 
        variant="outlined" type="text" value={lname} required onChange={(e) => setLastName( e.target.value)} /><br />
        <br></br>
        <br></br>
       
        <TextField id ="outlined-basic"  label="Product Type" 
        variant="outlined" type="text" value={protype} required  onChange={(e) => setProtype( e.target.value)}/><br />
        <br></br>
       
        <TextField id ="outlined-basic"  label="Product Name" 
        variant="outlined" type="text" value={proname} required onChange={(e) => setProname( e.target.value)} /><br />
        <br></br>
        <TextField id ="outlined-basic"  label="Min Amount" 
        variant="outlined" type="text" value={minamt} required onChange={(e) => setMinamt( e.target.value)} /><br />
        <br></br>
        <TextField id ="outlined-basic" label="Full Address" 
        variant="outlined" type="text" value={address} required onChange={(e) => setAdd( e.target.value)} /><br />
        <br></br>
        <TextField id ="outlined-basic"   
        variant="outlined" type="date" valu={startdate} required onChange={(e) => setStartdate( e.target.value)}/><br />
       
        <br></br>
        <TextField id ="outlined-basic"   
        variant="outlined" type="date" value={enddate} required onChange={(e) => setEnddate( e.target.value)} /><br />
        <br></br>
        
        <br></br>
        
        
       
        <br></br>
        
        <br></br>
        <label>Upload Image</label><br></br>
        <br/>
        <TextField id ="outlined-basic"  
        variant="outlined" type="file" value={img} required onChange={(e) => setImg( e.target.value)}/><br />
        <br></br>
        
        
        <br/>
        

        </center>
        
       
        
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' >Add Product</Button>
        </Box>
        <br></br>
       
        </form>
       

    </div>
  )
}
export default Admission;