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
        this.editUser = this.editUser.bind(this)


    }

    render() {
    return( 
    <div>
        <Header name="Шапка профиля"/> 
        <main>
            <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>  {/* мы передаем метод onDelete со значением deleteUser в компонент User,которое является функцией */}
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

    
    /*editUser передается вместе с addUser пошагово через компоненты в компонент  addUser по нахванию onAdd, таким образом одно нажатие
    на кнопку "добавить"  реализует сразу два созданых мной метода*, это и есть props*/
    editUser(user){
        let allUsers = this.state.users /*получили всех пользователей*/
        allUsers[user.id - 1]=user /*нашли нужного пользователя и сохранили в allUsers*/ 

        this.setState({users:[]}/*удаляем пользователей*/ ,/* функция будет выполнена после 
            выполнения предидущего кусочка кода*/() => {
                this.setState({users:[...allUsers]}) /*замена состояния обновленным allUsers*/
            } )
    }
    addUser(user){
        const id = this.state.users.length + 1
        this.setState({users:[...this.state.users,{id, ...user}]})
    }

}

export default App