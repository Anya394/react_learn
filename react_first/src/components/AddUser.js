import React from 'react';

class AddUser extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            id: "",
            name: "",
            age: "",
            isHappy: ""
        }
    }

    render() {
        return (
            <form>
                <input placeholder="ИД" onChange={(e) => this.setState({id: e.target.value})}/>
                <input placeholder="Имя" onChange={(e) => this.setState({name: e.target.value})}/>
                <input placeholder="Возраст" onChange={(e) => this.setState({age: e.target.value})}/>
                <lable htmlFor="isHappy">Счастлив?</lable>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
                <button type="button" onClick={() => this.props.onAdd({
                    id: this.state.id,
                    name: this.state.name,
                    age: this.state.age,
                    isHappy: this.state.isHappy,
                })}>Добавить</button>
            </form>
        )
    }
}

export default AddUser