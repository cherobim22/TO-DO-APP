import styled from 'styled-components';

export const container = styled.div` 
    width: 100%; 

    
`
export const Content = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 70px;

    a{
       text-decoration: none;
       color: #000;
    }

`

export const FilterArea = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: space-around;
   
    

    button{
        width: 250px;
        display: flex;
        background: none;
        border: none
        
    }
`

export const Title = styled.div`
    width:100%;
    border-bottom: 1px solid #20295f;
   display: flex;
   justify-content: center;
   margin-bottom: 20px;


    h3{
        color: #20295f;
        position: relative; 
        top: 30px;
        background: #FFF;
        padding: 0 20px;
    }
    
`