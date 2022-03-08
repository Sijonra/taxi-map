import React from "react";
import AsideBar from "../ui-components/AsideBar";

class Register extends React.Component{
    render() {
        return(
            <section className="section-log-form-wrapper">
                <AsideBar/>
                <div className="log-form-wrapper">
                    <form className="log-form modal-window-primary" onSubmit={()=> this.props.setPage('map')} >
                        <h3 className="form-title">Регистрация</h3>
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

export default Register;