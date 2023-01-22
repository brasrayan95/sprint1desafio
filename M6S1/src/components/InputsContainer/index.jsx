import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Formulario } from "./styles";
import { useState, useContext } from "react";
import axios from "axios";
import { ResultContext } from "../../contexts/results";

const schema = yup.object().shape({
    amount: yup.number().required("Valor da venda é obrigatório obrigatório").min(1000, "Valor mínimo R$1000,00").typeError('Valor obrigatório'),
    installments: yup.number().required("Número de parcelas obrigatório").min(1, "Mínimo permitido 1").max(12, "Máximo permitido 12").typeError('Número obrigatório'),
    mdr: yup.string().required("Campo obrigatório"),
    // days: yup.nullable().optional().notRequired().matches(/^\d+(,\d+)*$/, 'Is not in correct format'),
  });


export default function InputsContainer(){

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
      });

    const fixDaysNumbers = (data) => {
        if (data.days == "") {
            delete data.days
        }
        if (typeof(data.days) === "string") {
            let daysList = data["days"].split(",")
            data["days"] = daysList
        }
        return data
    }

    const {setResult, result} = useContext(ResultContext)
    
    const signUp = async (data) => {
        // verificacao se no form existem dias
        fixDaysNumbers(data)
        await axios
          .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
          .then((resp) => {
            setResult(resp.data)
          })
          .catch((error) => console.log(error));
    };
    
    return (
        <div style={{width:"60%"}}>
            <Formulario onSubmit={handleSubmit(signUp)}>
                <h1>Simule sua Antecipação</h1>
                <div className="inputBox">
                    <div className="inputField">
                        <label htmlFor="amount">Informe o valor da venda *</label>
                        <span>{errors.amount?.message}</span>
                    </div>
                    <input placeholder="R$ 1.000,00" {...register("amount")} />
                </div>
                <div className="inputBox">
                    <div className="inputField">
                        <label htmlFor="installments">Em quantas parcelas *</label>
                        <span>{errors.installments?.message}</span>
                    </div>
                    <input placeholder="12" type="number" {...register("installments")} />
                </div>
                <div className="inputBox">
                    <div className="inputField">
                        <label htmlFor="mdr">Informe o percentual de MDR *</label>
                        <span>{errors.mdr?.message}</span>
                    </div>
                    <input
                        type="number"
                        placeholder="Ex.: 3"
                        {...register("mdr")}
                    />
                </div>

                <div className="inputBox">
                    <div className="inputField">
                        <label htmlFor="days">Informe o número de dias desejados</label>
                        <span>{errors.days?.message}</span>
                    </div>
                    <input
                        {...register("days")}
                        placeholder="Ex.:5, 10, 12"
                    />
                </div>

                <button type="submit" disabled={!isValid}>
                Fazer simulação
                </button>
            </Formulario>
      </div>

        
    )
}
