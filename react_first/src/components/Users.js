import React from 'react';

class Users extends React.Component {
    users = [
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
    ]

    render() {
        if(this.users.length > 0)
            return (<div>
                {this.users.map((el) => (<div className='user' key={el.id}>
                    <h3>{el.name}</h3>
                    <p>{el.age} {el.isHappy}</p>
                    <b>{el.isHappy ? "Счастлив!" : "Не особо :("}</b>
                </div>
                ))}
            </div>)
        else
            return (<div className='user'>
                    <h3>Пользователей нет</h3>
            </div>)
    }
}

export default Users