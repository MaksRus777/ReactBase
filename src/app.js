import React from 'react';
import Header from './components/header'
import Users from './components/users'
import AddUser from './components/adduser'




class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[{id:1,
                firstname:'Bob',
                lastname:'Marley',
                bio:'Lorem aacadcczc',
                age: 40,
                isHappy:true
                },
        
                {id:2,
                firstname:'John',
                lastname:'Doe',
                bio:'Loremac fasvvsvsvsdvsvsv',
                age: 22,
                isHappy:false
                }]
        }
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)

    }

    render() {
    return( 
    <div>
        <Header name="Шапка профиля"/> 
        <main>
            <Users users={this.state.users} onDelete={this.deleteUser}/>  {/* мы передаем метод onDelete со значением deleteUser в компонент User,которое является функцией */}
        </main>     
        <aside>
            <AddUser onAdd={this.addUser}/>
        </aside>

        
    </div>
    )    
    }
    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((el)=> el.id !== id)
        })
    }
    addUser(user){
        const id = this.state.users.length + 1
        this.setState({users:[...this.state.users,{id, ...user}]})
    }

}

export default App