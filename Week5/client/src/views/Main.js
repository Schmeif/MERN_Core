import React, {useState, useEffect} from 'react'
import Form from '../components/Form'
import List from '../components/List'
import axios from 'axios'

const Main = () => {
    const [product, setProduct] = useState([])
    const removeProduct = id => {
        setProduct(product.filter(item => item._id !== id))
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getProducts')
        .then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    return (
        <div>
            <List product={product} setProduct={setProduct} removeProduct={removeProduct} />
            <Form product={product} setProduct={setProduct} />
        </div>
    )
}

export default Main;