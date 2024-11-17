import React from 'react';
import { IoIosCloseCircle,IoIosConstruct } from "react-icons/io";


class User extends React.Component {

    user= this.props.user
    render () {
        return(
            <div className="user" >
                <IoIosCloseCircle onClick={()=> this.props.onDelete(this.props.user.id)} className='delete-icon'/>
                <IoIosConstruct className='edit-icon'/>
                    <h3>{this.props.user.firstname} {this.user.lastname}</h3>
                    <p>{this.props.user.bio}</p>
                    <b>{this.props.user.isHappy === true ? 'счастлив :) ': 'не особо :('}</b>
                </div>
        )
    }
} 

export default User