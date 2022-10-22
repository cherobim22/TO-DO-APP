import React, {useEffect, useState} from 'react';
import * as S from './style';
import { Link}from 'react-router-dom';

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png';

import api from '../../services/Api';
import isConnected from '../../utils/isConnected';

//Quando for estilizar apenas um item usa ID, quando for estilizar varios ao mesmo tempo usa className;
// <> </> Operador de Fragment "Emapacotando"

function Header({ clickNotification}){
    const [lateCount, setLateCount]= useState();

    async function lateVerify(){
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
        .then(response => {
            setLateCount(response.data.length);
        });
    }

    useEffect(() => {
        lateVerify();
    })

    async function Logout(){
        localStorage.removeItem('@todo/macaddress');
        window.location.reload();
    }

    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo"/>
            </S.LeftSide>
            <S.RightSide>
            <Link to="/">INÍCIO</Link>
                <span className="split"/>
                <Link to="/task"> NOVA TAREFA</Link>
                <span className="split"/>
                { !isConnected ?
                    <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
                        :
                     <button type="button" onClick={Logout}>SAIR</button>
                }
                {
                    lateCount &&
                    <>
                    <span className="split"/>
                    <button onClick={clickNotification} id="notification">
                        <img src={bell} alt="notifiação" />
                        <span>{lateCount}</span>
                    </button>
                    </>
                }
            </S.RightSide>
        </S.Container>
    )
}

export default Header;