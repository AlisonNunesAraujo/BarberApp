import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { useContext } from 'react';
import { AuthContext } from "../../contextApi/context";

export default function ViewAgendas() {
    const { agendas } = useContext(AuthContext)

    return (
        <SafeAreaView style={s.ViewAgendas}>
            <View style={s.render}>
                <Text style={s.title}>Suas agendas confirmadas!</Text>
                <FlatList
                    style={s.renderList}
                    data={agendas}
                    renderItem={({ item }) => (
                        <View style={s.areaRender}>
                            <Text style={s.textRender}>Nome: {item.name}</Text>
                            <Text style={s.textRender}>Servico: {item.service}</Text>
                            <Text style={s.textRender}>Data: {item.date}</Text>
                            <Text style={s.textRender}>Horario: {item.hour}</Text>
                            <TouchableOpacity style={s.bnt}>
                                <Text style={s.textButon}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    ViewAgendas: {
        flex: 1,
        backgroundColor: "black",
    },
    render: {
        width: "100%",
        height: "70%",
        gap: 20,
        marginTop: 20,
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Arial",
        textAlign: "center",
    },
    renderList: {
        width: "100%",
        height: "auto",
    },
    areaRender: {
        width: "90%",
        height: "auto",
        backgroundColor: "blue",
        borderRadius: 5,
        marginTop: 20,
        marginLeft: "5%",
        gap: 15,
        justifyContent: "center",
        padding: 10,
    },
    textRender: {
        color: "white",
        fontFamily: "Arial",
        fontSize: 15,
        fontWeight: "700",
        marginLeft: "5%",
    },
    bnt: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        borderRadius: 5,
        marginLeft: "5%",
        padding: 10,
    },
    textButon: {
        fontFamily: "sans-serif",
        fontSize: 15,
        color: "white",
    },
});
