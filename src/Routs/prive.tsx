import React, { useState } from "react";
import FreeRouts from "./freeRouts";
import { useContext } from "react";
import { AuthContext } from "../contextApi/context";
import Login from "../Pages/Register";
export default function Prive() {
    const { logado } = useContext(AuthContext)



    return (
        logado ? <FreeRouts /> : <Login />
    )
}