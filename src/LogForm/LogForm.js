import React from 'react';
import Header from '../Header/Header'

class LogForm extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            name: "",
        }
    }

    render() {

        return(
            <>
                <form>
                    <label>
                        Имя пользователя:
                        <input name = "login" type = "text"></input>
                    </label>
                    <label>
                        Пароль:
                        <input name = "password" type = "password"></input>
                    </label>
                    <input type = "submit" value = "Submit"></input>
                </form>
            </>
        )
    }

}

export default LogForm;