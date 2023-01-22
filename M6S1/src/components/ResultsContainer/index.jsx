import ResultBox from "./styles";
import { ResultContext } from "../../contexts/results";
import { useContext } from "react";

export default function(){
    const { result } = useContext(ResultContext)
    let lista = Object.keys(result)
    return(
        <ResultBox>
            <h1>VOCÊ RECEBERÁ:</h1>
            <hr style={{
                background: "gray",
                color: "gray",
                height: "1px",
                width: "100%",
            }} />

            {lista.map((key)=> {
                 if (key=="1"){
                     return <p key={key}>Amanhã: R${result[key]},00</p>
                }
                return <p key={key}>Em {key} dias: R${result[key]},00</p>})}
        </ResultBox>
    )
}