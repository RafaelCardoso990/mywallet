import styled from 'styled-components';
import { Link } from 'react-router-dom';

import exit from '../assets/image/Vector.png'
import minus from '../assets/image/minus.png'
import plus from '../assets/image/plus.png'

function Records(){
    

    return (
        <Main>
            <header>
                <h1>Olá, Fulano</h1>
                <img src={exit}/>
            </header>
            <section className='records'>

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