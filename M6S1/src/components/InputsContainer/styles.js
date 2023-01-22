import styled from "styled-components"

export const Formulario = styled.form`
  background-color: #fff;
  color: #656565;

  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding-bottom: 42px;
  gap: 5px;

  h1 {
    margin-top: 40px;
    margin-bottom: 25px;
    font-size: bold;
    font-weight: 700;
    font-size: 18px;
  }

  .inputBox > input {
    margin: 0;
    width: 100%;
    padding: 10px 12px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #fff;
    border: 1.5px solid #DDE6E9;
    color: #000;

    ::placeholder {
      color: lightgray;
      line-height: 26px;
    }

    :focus {
      border: 1.5px solid #66AFE9;
      outline: 0;
    }
  }

  label {
    align-self: center;
    margin: 0;
    font-size: 14px;
  }

  button {
    color: #fff;
    width: 85%;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
  }


  .inputBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 85%;
    gap: 5px;
  }

  .inputField {
    display: flex;
    justify-content: space-between;
    gap: 2px;
    margin: 0;
  }

  .inputField > span {
    color: red;
    font-size: 9px;
    align-self: flex-end;
  }

  button {
    margin-top: 20px;
    background-color: blue;
    transition: 500ms;

    &:disabled {
      color: white;
      background-color: lightgray;
    }
  }
`;
