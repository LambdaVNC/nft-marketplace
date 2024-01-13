

import useSWR from "swr";

// deps -> ethereum, provider, contract (web3State)
export const hookFactory = (deps : any) => (params : any) =>{
    const swrRes = useSWR("web3/useAccounts", () => {
        console.log(deps)
        console.log(params)
        // Making request to get data
        return "Test User"
    })

    return swrRes;
}

export const useAccount = hookFactory({ethereum: null, provider:null})