import { useState } from 'react'
import axios from 'axios';
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate();

    const [record, setRecord] = useState({
        name: '',
        email: '',
        password: '',
        checkPassword: '',
    })

    const SignUp = async () => {
        try{
            await axios.post('http://localhost:5000/sign-up', {
                name: record.name,
                email: record.email,
                password: record.password,
                checkPassword: record.checkPassword
            })
            alert("cadastro feito com sucesso!")
            navigate('/') 
        } catch(e){
            console.log("error",e.response.data)
            alert(`Ops, ocorreu um erro! ${e.response.data}`)
        }
    }

    const handleFormChange = (e) => {
        setRecord({...record, [e.target.name]: e.target.value})
    }

    return (
        <Main>
            <h1>MyWallet</h1>
            <div>
                <input type='text' placeholder="Name" name="name" value={record.name} onChange={handleFormChange}></input>
                <input type='text' placeholder="E-mail" name="email" value={record.email} onChange={handleFormChange}></input>
                <input type='password' placeholder="Senha" name='password' value={record.password} onChange={handleFormChange}></input>
                <input type='password' placeholder="Confirme a senha" name='checkPassword' value={record.checkPassword} onChange={handleFormChange}></input>
                <button onClick={SignUp}>Cadastrar</button>
            </div>
            <Link to="/"><h2>Já tem uma conta? Entre agora!</h2></Link>
        </Main>
    )
}

const Main = styled.main`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    h2{
        margin-top: 36px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;       
        color: #FFFFFF;
    }

    button{
        width: 330px;
        height: 46px;    
        background: #A328D6;
        border-radius: 5px;
        border: none;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;

    }

    input{
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 13px;
        border: none;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;

    }

    h1{
        margin-top: 160px;
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
    }

    div{
        margin-top: 25px;
        display: flex;
        flex-direction: column;
    }
`

export default SignUp;