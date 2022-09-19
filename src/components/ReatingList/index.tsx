import React from "react";
import NegativeColumn from "../negativeColumn";
import PositiveColumn from "../positiveColumn";
import UserColumn from "../userColumn/index";
import Style from "./style.module.css"

const ReatingList: React.FC = () => {
    return (
        <div className="container">
            <h1 className={Style.title}>Reating List</h1>
            <div className={Style.content_wrapper}>
                <UserColumn />
                <PositiveColumn />
                <NegativeColumn />
            </div>
        </div>
    )
}

export default ReatingList