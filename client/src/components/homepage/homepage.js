import React from "react"
import { useNavigate } from "react-router-dom"
import "./homepage.css"

const Homepage = () => {
    const Navigate = useNavigate();
  
    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>

           <button className="button" onClick={()=>Navigate("login")}>LogOut</button>
        </div>
    )
}

export default Homepage