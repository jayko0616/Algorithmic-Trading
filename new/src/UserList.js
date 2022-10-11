import { useState } from "react";

function UserList(){
    function getUserList(){
        let reqOption = {
            method: "get",
            headers: {
                "content-type" : "application/json"
            }
        }
        fetch("/api/userList", reqOption).then((res) => res.json()).then(data=>console.log(data));
    }
    getUserList();
    return(
        <div className="contents"></div>
    )
}
export default UserList;