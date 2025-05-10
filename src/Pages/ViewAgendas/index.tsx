import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contextApi/context";

export default function ViewAgendas() {
    const { agendas, DeleteAgenda } = useContext(AuthContext);

    async function Delete(uid: string) {
        DeleteAgenda(uid);
    }

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
                            <Text style={s.textRender}>Valor: {item.valor}</Text>
                            <TouchableOpacity style={s.bnt} onPress={() => Delete(item.uid)}>
                                <Text style={s.textButon}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    ListEmptyComponent={() => {
                        return (
                            <View
                                style={{
                                    width: "100%",
                                    height: 50,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 20,
                                }}
                            >
                                <Text style={{ color: "white", fontFamily: "sans-serif" }}>
                                    Voçe não tem agendas marcadas!
                                </Text>
                            </View>
                        )
                    }}

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
        backgroundColor: "green",
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
