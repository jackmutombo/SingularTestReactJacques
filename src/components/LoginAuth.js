import React from 'react';
import { Link } from 'react-router-dom';
import image from '../image/singular.png';
import '../components/staffs/StaffCreate.css';
import StaffProduct from '../apis/StaffProduct';


const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form error being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    });

    return valid;
}

class LoginAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            formErrors: {
                username: "",
                password: ""
            }
        };
    }
    // componentDidMount(){

    // }

    handleSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            const payload = {
                username: this.state.username,
                    password: this.state.password
            }
            StaffProduct.get('/staff/login', payload)
        } else {
            console.error('FORM INVALID');
        }
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
        switch (name) {
            case 'username':
                formErrors.username = value.length < 1 ? 'Empty username':'';
                break;
            case 'password':
                formErrors.password = value.length < 1 ?'Empty password':'';
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state))
    }
    render() {
        const { formErrors } = this.state;
        return (
            <div className="wrapper">
                <div className="logo">
                    <img src={image} alt="singularLogo" />
                </div>
                <div className="form-wrapper">
                    <strong className="title">Login</strong>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="username">
                            <label htmlFor="username"><strong>Username</strong></label>
                            <input
                                className={formErrors.username.length > 0 ? "error" : null}
                                id="username"
                                placeholder="Username"
                                name="username"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.username.length > 0 && (
                                <span className="errorMessage">{formErrors.username}</span>)}
                        </div>
                        <div className="password">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input
                                className={formErrors.password.length > 0 ? "error" : null}
                                id="password"
                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>
                        <div className="createAccount">
                            <button type="submit"><strong>Login</strong></button>
                            <Link to="/staffs/new"><small><strong>Don't have an Account?</strong></small></Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginAuth;