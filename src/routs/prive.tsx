import { useState } from "react"
import Logar from "../pages/Login"
import NavigationStack from "./auth"

import { useContext } from "react"
import { AuthContext } from "../ContextApi"
export default function PriveRouts() {
    const {logado} = useContext(AuthContext)

    return (

        logado ? <NavigationStack /> : <Logar />


    )
}