import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect,useState,useContext } from 'react';
import axios from 'axios';

import exit from '../assets/image/Vector.png'
import minus from '../assets/image/minus.png'
import plus from '../assets/image/plus.png'

import UserContext from '../assets/context/UserContext';

function Records(){      
    
    const {token} = useContext(UserContext)
    console.log(token.email)

    const [records, setRecords] = useState([])
    console.log(records)

    const [amount, setAmount] = useState([])
    console.log(amount)

    const [nome, setNome] = useState([])
    console.log(nome)
    
     useEffect(() =>{ 
     (async () => {
         try{
             const userOn = await axios.get('http://localhost:5000/records', {
                 headers: {Authorization: `Bearer ${token.token}`} 
             })
             console.log(userOn.data)
             const {name} = userOn.data                        
             setNome(name)
         } catch(e){
             console.log(e)
         }
     })();   
        
     },[])        

     useEffect(() =>{ 
        (async () => {
            try{
                const transactions = await axios.get('http://localhost:5000/transactions',{
                    headers: {Authorization: `Bearer ${token.token}`,
                    email: token.email}                    
                    })
                console.log(transactions.data)
                const {data} = transactions
                setRecords(data)
            } catch(e){
                console.log(e)
            }
        })();   
           
        },[])    

        useEffect(() =>{ 
            (async () => {
                try{
                    const amount = await axios.get('http://localhost:5000/cache',{
                        headers: {Authorization: `Bearer ${token.token}`,
                        email: token.email}                    
                        })
                    console.log(amount.data)
                    const {data} = amount
                    setAmount(data)
                } catch(e){
                    console.log(e)
                }
            })();   
               
        },[])   

    return (
        <Main>
            <header>
                <h1>Olá, {nome}</h1>
                <img src={exit}/>
            </header>

            <section className='records'>
                {records.map(record =>{
                    const {_id, value, description, is, time} = record
                    return(
                        <div className='historic'>
                            <p className='time'>{time}</p>
                            <p className='description'>{description}</p>
                            <p className={is == "entry"? "green" : "red"}>{value}</p>
                        </div>               
                    )
                })}
                <div className='amount'>
                    <p className='balance'>Saldo</p>
                    <p className={amount >= 0 ? "amount-green": "amount-red"}>{amount}</p>
                </div>
            </section>

            <section className='box'>

                <Link to='/entry'><div className='entry' >
                    <img src={plus}/>
                    <h1>Nova entrada</h1>
                </div></Link>

                <Link to='/exit'><div className='exit'>
                    <img src={minus}/>
                    <h1>Nova saída</h1>
                </div></Link>
            </section>

        </Main>
    )
}

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .records{
        width: 326px;
        height: 446px;        
        background: #FFFFFF;
        border-radius: 5px;
        position: relative;
        
        .historic{
            display: flex;
            justify-content: space-between;
            padding: 23px 11px 0 11px;
        }

        .time{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #C6C6C6;
        }

        .description{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            color: #000000;

        }

        .green{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            text-align: right;
            color: #71D06F;
        }

        .red{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            text-align: right;
            color: #C70000;
        }

    }
    
    .amount{
        position: absolute;
        bottom: 0;                     
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        .balance{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;        
            color: #000000;
            margin-right: 220px;
        }

        .amount-green{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 20px;       

            text-align: right;

            color: #03AC00;
        }
        
        .amount-red{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 20px;       

            text-align: right;

            color: #C70000;
        }
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 326px;
        margin: 25px 0 22px 0;
      
       
        h1{            
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 26px;
            line-height: 31px;    
            color: #FFFFFF;
        }
    }

   .box{
        display: flex;
        justify-content: space-between;
        width: 326px;
        margin-top: 12px;

       div{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;          
            flex-direction: column;

            width: 155px;
            height: 114px;       
            background: #A328D6;
            border-radius: 5px;

            img{
                width: 25px;
                height: 25px;
                margin: 8px 0 0 8px;
            }

            h1{
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 17px;
                line-height: 20px;
                color: #FFFFFF;
                margin: 0 0 8px 8px;
            }
        }


   }

`

export default Records;