import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { decrementRatting, fetchingUsers, incrementRatting } from "../../redux/getUserSlicer";
import UserCards from "../userCards";
import Style from "./style.module.css"

const UserColumn: React.FC = () => {

    const dispatch = useAppDispatch()

    const { list, loading, error } = useAppSelector(state => state.users)
    
    useEffect(() => {
        dispatch(fetchingUsers())
    }, [])

    return (
        <div className={Style.userColumn}>
            <div className={Style.column_wrapper}>

                {

                    loading ? <div className="d-flex justify-content-center">
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> : list?.map((userList: any) => {                        
                        return (
                            <div className={Style.card_item} key={userList.id}>
                                <UserCards
                                userList={userList} 
                                ratting={list[0].rating}
                                increment={() =>{
                                    dispatch(incrementRatting())
                                    
                                }}
                                decrement={() =>{
                                    dispatch(decrementRatting())
                                }}
                                />
                            </div>
                        )
                    })
                }
            </div>
            {
                error &&
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src="..." className="rounded me-2" alt="..." />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        {error}
                    </div>
                </div>
            }
        </div>
    )
}
export default UserColumn