import React from 'react';
import './HeaderStyle.css';


const UserSearch = (props) => {
    return (
        <div className="user-search-container">
            <div className="info">
                <div className="username">
                    {props.username}
                </div>
                <div className="fullName">
                    {props.fullName}
                </div>
            </div>
        </div>
    );
}

export default UserSearch;