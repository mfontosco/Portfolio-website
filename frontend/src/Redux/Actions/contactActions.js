import {CONTACT_ADMIN_REQUEST,
 CONTACT_ADMIN_SUCCESS,
 CONTACT_ADMIN_FAIL  } from '../Constants/ContactConstants'
 import axios from 'axios'
 

const baseUrl ="http://localhost:5001"
 const contactAminActions = (name,email,subject,message)=>async(dispatch)=>{

    try{
dispatch({
    type:CONTACT_ADMIN_REQUEST
})
const config ={
    headers:{
"content-type":"application/json"
    }
}
const {data} =await axios.post(`${baseUrl}/api/v1/contact`,{name,email,subject,message},config)
console.log(data)
dispatch({
    type:CONTACT_ADMIN_SUCCESS,
    payload:data.contact
})
    }catch(err){
        console.log(err)
let message = err.response && err.response.data.message ? err.response.data.message : err.message
    dispatch({
        type:CONTACT_ADMIN_FAIL,
        payload:message
    })
    }

 }
 export {contactAminActions}