import { Button, TextField } from '@material-ui/core'
import './style.css'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useState } from "react"





export default function LoginRegister(){
    const history = useHistory();

    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        name: yup.string().required("Campo obrigatório"),
        password: yup.string().min(8, "Mínimo de 8 dígitos").matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!").required("Campo obrigatório"),
        passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Senhas devem ser iguais')    
    });

    const {register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)}) 

    function handleForm(data){
        const formData = {
            "email": data.email,
            "password": data.password,
            "name": data.name,
            "bio": "Sem Bio no momento",
            "contact": data.email,
            "course_module": "Q2"
        }

        axios.post("https://kenziehub.herokuapp.com/users", formData).then(response => {
            window.location.reload()
        }).catch(e => {
            alert('Ouve algum erro, tente novamente mais tarde')
        })
    }


    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    function handleFormLogin(data){
        data.preventDefault()

        const formData= {
            "email": login,
            "password": senha
        }

        axios.post("https://kenziehub.herokuapp.com/sessions", formData).then(response => {
            localStorage.clear();
            localStorage.setItem("@KS:token", JSON.stringify(response.data.token));
            localStorage.setItem("@name", JSON.stringify(response.data.user.name));
            history.push(`/`)
        }).catch((e) =>{
            alert("Login ou senha inválidos")
        })
    }

    return (
        <div className="container-register">
            <div className="forms">
                <form className="Login" onSubmit={handleFormLogin}>
                    <h4 className="title-form">Já tenho cadastro</h4>
                    <TextField required 
                    margin="normal" 
                    label="Email" 
                    variant='outlined' 
                    className="input-Login"
                    onChange={e => setLogin(e.target.value)}
                    />
                    <TextField required 
                    margin="normal" 
                    label="Senha" 
                    type="password"
                    variant='outlined' 
                    className="input-Login"
                    onChange={e => setSenha(e.target.value)}
                    />
                    <Button variant="outlined" className="btn-login" type="submit" >Entrar</Button>
                </form>

                <form className="register" onSubmit={handleSubmit(handleForm)}>
                    <h4 className="title-form">Quero me Cadastrar</h4>
                    <TextField
                    margin="normal" 
                    label="Nome" 
                    variant='outlined' 
                    className="input-Login" 
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    />
                    <TextField 
                    margin="normal" 
                    label="Email" 
                    variant='outlined' 
                    className="input-Login"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    />
                    <TextField 
                    margin="normal" 
                    label="Senha" 
                    variant='outlined' 
                    className="input-Login"
                    type="password"
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    />
                    <TextField 
                    margin="normal" 
                    label="Confirme a Senha" 
                    variant='outlined' 
                    className="input-Login"
                    type="password"

                    {...register("passwordConfirmation")}
                    error={!!errors.passwordConfirmation}
                    helperText={errors.passwordConfirmation?.message}
                    />
                    <Button variant="outlined" className="btn-login" type="submit   ">Cadastrar</Button>
                </form>
            </div>
        </div>
    )
}