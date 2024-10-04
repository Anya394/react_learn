import React from 'react';

class AddUser extends React.Component {
    userAdd = {}

    constructor(props) {
        super(props) 
        this.state = {
            id: "",
            first_name: "",
            last_name: "",
            age: "",
            isHappy: ""
        }
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="ИД" onChange={(e) => this.setState({id: e.target.value})}/>
                <input placeholder="Имя" onChange={(e) => this.setState({first_name: e.target.value})}/>
                <input placeholder="Фамилия" onChange={(e) => this.setState({last_name: e.target.value})}/>
                <input placeholder="Возраст" onChange={(e) => this.setState({age: e.target.value})}/>
                <lable htmlFor="isHappy">Счастлив?</lable>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        id: this.state.id,
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id

                    this.props.onAdd(this.userAdd)
                }}>Добавить</button>
            </form>
        )
    }
}

export default AddUser