import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.jsx';
import './App.css';
import { Card, CardHeader, CardContent, TextField, Button } from '@mui/material';
import { AuthContext } from '../auth/Authentication.jsx';

const Login = () => {
    const { user, login } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const submitHandler = async (data) => {
        // Simulating login - replace with actual API call
        login({ username: data.username, email: data.email, isAdmin: true }); // Example user data
        navigate("/dashboard");
    };

    useEffect(() => {
        if (user) navigate("/dashboard");
    }, [user, navigate]);

    return (
        <div className="login-container">
            <div className="login-inner">
                {/* Left side */}
                <div className="login-left">
                    <div className="login-content">
                        <span className="login-span">
                            Manage all your tasks in this one space
                        </span>
                        <p className="title">
                            <span>Task Manager</span>
                        </p>
                    </div>
                </div>

                {/* Right side */}
                <ThemeProvider theme={theme}>
                    <Card className="card-right">
                        <CardHeader
                            title="Login Information"
                            style={{ color: theme.palette.primary.main, textAlign: "center" }}
                        />
                        <CardContent>
                            <form onSubmit={handleSubmit(submitHandler)}>
                                <TextField
                                    label="Username"
                                    {...register("username", { required: "Username is required" })}
                                    error={!!errors.username}
                                    helperText={errors.username ? errors.username.message : ''}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Email"
                                    {...register("email", { required: "Email Address is required" })}
                                    error={!!errors.email}
                                    helperText={errors.email ? errors.email.message : ''}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    {...register("password", { required: "Password is required" })}
                                    error={!!errors.password}
                                    helperText={errors.password ? errors.password.message : ''}
                                    fullWidth
                                    margin="normal"
                                />
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    className="submit-button"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Login;
