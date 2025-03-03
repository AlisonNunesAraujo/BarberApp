import { useState } from "react"
import Home from "../pages/Home"
import Login from "../pages/Login"

export default function PriveRouts() {
    const [user, setUser] = useState(true)
    return (

        user ? <Home /> : <Login />


    )
}