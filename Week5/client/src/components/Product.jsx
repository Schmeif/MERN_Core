import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, Link, useNavigate} from 'react-router-dom'

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getOneProduct/' + id)
        .then((res)=>{
            console.log(res)
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
        .then((res)=>{
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
                <div>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <Link to={`/api/updateProduct/${product._id}`}>Edit Product</Link>
                    <button onClick={deleteHandler}>Delete Product</button>
                </div>
    </div>
  )
}

export default Product;