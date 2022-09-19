import React from "react";
import Style from "./style.module.css"

const UserCards: React.FC<any> = ({ userList, ratting, increment, decrement }) => {


    
    const handleIncrement = () =>{
        increment()
    }

    const handleDecrement = () =>{
        decrement()
    }

    return (

        < div className="card" style={{ width: "18rem" }}>
            <img src={userList.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{userList.first_name}</p>
                <p className="card-text">{userList.last_name}</p>
                <div className="btn-group me-2" role="group" aria-label="Second group">
                <button type="button" className="btn btn-secondary btn-success" onClick={handleIncrement}>+</button>
                 <span className="badge text-bg-info">{ratting}</span>
                 <button type="button" className="btn btn-secondary btn-danger" onClick={handleDecrement}>-</button>
                </div>
            </div>
        </ div>
    )
}

export default UserCards