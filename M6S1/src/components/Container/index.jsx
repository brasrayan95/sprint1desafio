import InputsContainer from "../InputsContainer"
import AppContainer from "./styles"

import {QueryClient, QueryClientProvider, useQuery, useMutation } from "@tanstack/react-query"
import ResultsContainer from "../ResultsContainer"

const queryClient = new QueryClient()

export default function Container(){
    return (
        <AppContainer>
            <InputsContainer/>
            <ResultsContainer></ResultsContainer>
        </AppContainer> 
    )
}
