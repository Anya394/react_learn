import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import logo from './img/logo.jpg';
import Button from './components/Button';
import Users from './components/Users';
import AddUser from './components/AddUser';

class App extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            users: [
                {
                    id: 1,
                    name: "Bob",
                    age: 40,
                    isHappy: true
                },
                {
                    id: 2,
                    name: "Alex",
                    age: 22,
                    isHappy: false
                }
            ],
            helpText: "Help text",
            userData: ""
        }

        this.inputClick = this.inputClick.bind(this)
        this.mouseOut = this.mouseOut.bind(this)
        this.addUser = this.addUser.bind(this)
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
                        <Users users={this.state.users}/>
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