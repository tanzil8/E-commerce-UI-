import { useState } from 'react'
import { useAuth } from "../contexts/AuthContext.jsx";



const userSignup = () =>{
    const {login} = useAuth()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

const registerUser = async (values) =>{
  try {
    const res = await fetch('http://localhost:3000/api/signup',{
        method: 'POST',
        body: JSON.stringify(values)
    })

    const data = await res.json()
    if(res.status===201){
        alert('user register successful')
        login(data.token)
    }else if (res.status===4000) {
        setError('user register fail')
    }else{
        alert('user register fail')
    }
  } catch (error) {
    alert(error)
  }finally{
    setLoading(false)
  }
}

    return {loading, error, registerUser}
}

export default userSignup