import { useState } from "react"
import Home from "../pages/home"
import Login from "../pages/Login"
import NavigationStack from "./auth"

export default function PriveRouts() {
    const [user, setUser] = useState(true)
    return (

        user ? <NavigationStack /> : <Login />


    )
}