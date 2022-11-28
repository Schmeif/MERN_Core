import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>This is the Default Home Page</h1>
            <Link to="/home">Home</Link>
        </div>
    )
}

export default Home