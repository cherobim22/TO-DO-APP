import styled from 'styled-components';


export const container = styled.div` 
    width: 100%; 
    display: flex;
 align-items: center;
   flex-direction: column;


`

export const Form = styled.div`
 
    width: 50%;
   
`

export const TypeIcons = styled.div`
 
    width: 100%;
    display: flex;
    justify-content: center;

    .inative{
        opacity: 0.5;
    }

    button{
        border: none;
        background: none;
    }

    img {
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }

`

export const Input = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;


    span{
        color: #707070;
         margin-bottom: 5px;
       

    }

    input{
        font-size: 16px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid orange;
    }

 

`

export const TextArea = styled.div`
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;

        span{
        color: #707070;
         margin-bottom: 5px;
    }

    textarea{
        width: 100%;

        max-width: 100%;
        min-width: 100%;
        max-height: 250px;
        min-height: 50px;

        font-size: 16px;
        margin-top: 10px;
        border: 1px solid orange;
        border-radius: 5px;
      
    }


`

export const Options = styled.div`
        margin-top: 20px;   
        width: 100%;
        display: flex;
        justify-content: space-between;

        button{
            font-weight: bold;
            color: #20295f;
            border: none;
            background: none;
            font-size: 18px;
            cursor: pointer;

            &:hover{
                opacity: 0.5;
            }
        }

        div{
            display: flex;
            align-items: center;
            color: #ee6b26;
            font-weight: bold;
            font-size: 18px;

        }

`

export const Save = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;

        button{

            width: 100%;
            background: #ee6b26;
            border: none;
            font-size: 20px;
            color: white;
            font-weight: bold;
            border-radius: 10px;
            cursor: pointer;

            &:hover{
                opacity: 0.7;
            }
        }
`