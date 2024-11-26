import React from 'react';
import { IoIosCloseCircle,IoIosConstruct } from "react-icons/io";
import AddUser from './adduser';


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }    

    user = this.props.user
    render() {
        return(
            <div className="user" >
                <IoIosCloseCircle onClick={()=> this.props.onDelete(this.props.user.id)} className='delete-icon'/>
                <IoIosConstruct onClick={()=>
                    this.setState({
                        editForm:!this.state.editForm
                    })
                }className='edit-icon'/>
                <h3>{this.props.user.firstname} {this.user.lastname}</h3>
                <p>{this.props.user.bio}</p>
                <b>{this.props.user.isHappy === true ? 'счастлив :) ': 'не особо :('}</b>
                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>}
            </div>
        )
    }
} 

export default User