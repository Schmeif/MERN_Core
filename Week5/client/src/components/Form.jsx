import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Form = ({product, setProduct}) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')


    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/createProduct', {
            title,
            price,
            description,
        }).then((res)=>{
            console.log(res)
            setProduct([...product, res.data])
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className='col-6 mx-auto'>
        <h1>Post Your Product</h1>
        <form onSubmit={submitHandler}>
            <label className="form-label mt-3">Title</label>
            <input type="text" className='form-control  ' onChange={(e)=>setTitle(e.target.value)} />
            <label className="form-label mt-3">Price</label>
            <input type="number" className='form-control ' onChange={(e)=>setPrice(e.target.value)} />
            <label className="form-label mt-3">Description</label>
            <input type="text" className='form-control ' onChange={(e)=>setDescription(e.target.value)} />
            <button className='mt-3'>Submit</button>
        </form>
    </div>
  )
}

export default Form