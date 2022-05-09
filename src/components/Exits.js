import styled from "styled-components"
import axios from "axios"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { useContext } from "react"
import UserContext from "../assets/context/UserContext"


function Exit(){
    const navigate = useNavigate()

    const {token} = useContext(UserContext)
    console.log(token.email)

    const [record, setRecord] = useState({
        value: '',
        description: ''
    })

    const add = async () => {
        try{
             await axios.post('http://localhost:5000/exit', {
                 value: record.value,
                 description: record.description,
                 email: token.email
             })
            alert("Registro feito com sucesso!")
            navigate("/records")            
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
            <div>
                <h1>Nova saída</h1>
                <input type='text' placeholder="Valor" name="value" value={record.value} onChange={handleFormChange}></input>
                <input type='text' placeholder="Descrição" name='description' value={record.description} onChange={handleFormChange}></input>
                <button onClick={add}>Salvar saída</button>
            </div>
            
        </Main>
    )
}

const Main = styled.main`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    

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
        align-self: flex-start;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin: 25px 0 40px 0;
    }

    div{
        width: 326px;
        margin-top: 25px;
        display: flex;
        flex-direction: column;
    }
`

export default Exit