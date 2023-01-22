import styled from "styled-components"

const ResultBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 25px;
    background-color: #D1DCE3;
    font-style: italic;
    color: #5D9CEC;
    align-items: flex-start;
    box-sizing: border-box;

    h1{
        font-size: 16px;
        color: #3D75BB;
    }

    p{
        display: block;
        font-style: italic;
        margin: 5px;
    }

    b{
        display: inline;
    }
    
`

export default ResultBox