import React from 'react';
import './LogForm.css';
import Header from '../Header/Header'
import AsideBar from '../ui-components/AsideBar'
import '../ui-components/ui.css'

class LogForm extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            name: "",
        }
    }

    render() {

        return(
            <section className="section-log-form-wrapper">
                <AsideBar/>
                <div className="log-form-wrapper">
                    <form className="log-form modal-window-primary" onSubmit={()=> this.props.setPage('map')} >
                        <h3 className="form-title">Войти</h3>
                        <label className="form-label">
                            <p>Имя пользователя:</p>
                            <input name = "login" type = "text" className="log-form-input input-primary" placeholder="mail@mail.ru"></input>
                        </label>
                        <label className="form-label">
                            <p>Пароль:</p>
                            <input name = "password" type = "password" className="log-form-input input-primary" placeholder="*************"></input>
                        </label>
                        <input type = "submit" value = "Войти" className="submit-primary log-form-submit"></input>
                        <p className="form-reg-link" >Новый пользователь? <span>Регистрация</span> </p>
                    </form>
                </div>

            </section>
        )
    }

}

export default LogForm;