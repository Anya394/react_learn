import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import logo from './img/logo.jpg';
import Button from './components/Button';
import Users from './components/Users';
import AddUser from './components/AddUser';
import axios from 'axios';

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {

    constructor(props) {
        super(props) 

        axios.get(baseUrl).then((res) => {
            this.setState({users: res.data.data})
        })

        this.state = {
            users: [],
            helpText: "Help text",
            userData: ""
        }

        this.inputClick = this.inputClick.bind(this)
        this.mouseOut = this.mouseOut.bind(this)
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }

    componentDidUpdate(prepProp) {
        if (this.state.helpText !== "Help")
            console.log("Some")
    }

    render() {
        return (
            <div>
                <div className="name"> 
                    <Header title="header site"/>
                    <h1>Hi!</h1>
                    <h2>{this.state.userData}</h2>
                    <input placeholder={this.state.helpText} 
                        onChange={event => this.setState({userData: event.target.value})}
                        onClick={this.inputClick} 
                        onMouseEnter={this.mouseOver} 
                        onMouseOut={this.mouseOut}/> 
                    <p>{this.state.helpText === "help text!" ? "Yes" : "No"}</p>
                    <Image image={logo}/>
                    <img src={logo} alt="" className='img'/>
                    <h1>Hi!!!!!!!!</h1>
                    <Button />
                    <Button text="lalala"/>
                </div>
                <div>
                    <Header title="Список пользователей"/>
                    <main>
                        <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
                    </main>
                    <aside>
                        <AddUser onAdd={this.addUser}/>
                    </aside>
                </div>
            </div>
        )
    }

    addUser(user) {
        const id = user.id;
        this.setState({ users: [...this.state.users, {id, ...user}]})
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        })
    }

    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id - 1] = user

        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }
    
    inputClick() {
        this.setState({helpText: "Changed"})
        console.log("Clicked")
    }
    mouseOver() {console.log("MouseOver")}
    mouseOut() {
        this.setState({helpText: "Help text"})
    }
}

export default App