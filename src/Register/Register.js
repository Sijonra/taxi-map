import React from "react";
import AsideBar from "../ui-components/AsideBar";
import './Register.css';


class Register extends React.Component{
    render() {
        return(
            <section className="section-reg-form-wrapper">
                <AsideBar/>
                <div className="reg-form-wrapper">
                    <form className="log-form modal-window-primary" onSubmit={()=> this.props.setPage('login')} >
                        <h3 className="form-title">Регистрация</h3>
                        <label className="form-label">
                            <p>Email*</p>
                            <input name = "login" type = "text" className="reg-form-input input-primary" placeholder="mail@mail.ru"></input>
                        </label>
                        <label className="form-label">
                            <p>Как вас зовут?*</p>
                            <input name = "login" type = "text" className="reg-form-input input-primary" placeholder="Петр Александрович"></input>
                        </label>
                        <label className="form-label">
                            <p>Придумайте пароль*</p>
                            <input name = "password" type = "password" className="reg-form-input input-primary" placeholder="*************"></input>
                        </label>
                        <input type = "submit" value = "Зарегистрироваться" className="submit-primary reg-form-submit"></input>
                        <p className="form-reg-link" >Уже зарегестрированны? <span onClick={()=> this.props.setPage('login')}>Войти</span> </p>
                    </form>
                </div>

            </section>
        )
    }

}

export default Register;