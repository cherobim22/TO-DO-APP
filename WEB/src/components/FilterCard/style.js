import styled from 'styled-components';


export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${props => props.actived ? 'orange' : '#20295F'} ;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    
    img{
        width: 25px;
        height: 25px;
    }

    span{
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover{
        background: orange;
    }

`