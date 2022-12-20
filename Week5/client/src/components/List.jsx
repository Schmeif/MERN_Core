import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const List = ({removeProduct, product, setProduct}) => {

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
        .then((res)=>{
            removeProduct(id)
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
        <h2>All Products</h2>
        {
            product.map((item, index)=>(
                <div key={index}>
                        <Link to={`/api/getOneProduct/${item._id}`}>
                            {item.title} 
                        </Link>
                        <button onClick={(e)=>{deleteHandler(item._id)}}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default List;