import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Props } from "../../Routs/freeRouts";
import Header from "../../components/header";

export default function Home() {
    const navigation = useNavigation<NativeStackNavigationProp<Props>>();

    return (
        <View style={s.conteiner}>
            <Header />

            <View style={s.card}>

                <Image
                    source={require("../../../assets/imgBarber.jpeg")}
                    style={s.imgCard}
                />
            </View>

            <View style={s.menu}>
                <View style={s.btns}>
                    <TouchableOpacity
                        style={s.buttonsAdd}
                        onPress={() => navigation.navigate("CretaeAgendas")}
                    >
                        <Text style={s.textButtons}>Adcionar um novo agendamento</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={s.buttons}
                        onPress={() => navigation.navigate("ViewAgendas")}
                    >
                        <Text style={s.textButtons}>Ver a sua agenda</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={s.Aprensation}>
                <Image
                    source={require("../../../assets/imgView.jpeg")}
                    style={s.imgApresentation}
                />
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    menu: {
        width: "100%",
        height: 150,
        gap: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: "90%",
        height: "15%",
        backgroundColor: "#000234",
        borderRadius: 30,
        marginTop: 20,
        marginLeft: "5%",
        justifyContent: "center",
        alignItems: "center",
    },
    imgCard: {
        width: "99%",
        height: "99%",
        borderRadius: 30,
    },
    cardText: {
        color: "white",
        fontFamily: "Arial",
        fontSize: 15,
        fontWeight: "700",
        marginLeft: "5%",
    },
    btns: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginTop: 30,
    },
    buttonsAdd: {
        width: "40%",
        height: "75%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000234",
        borderRadius: 7,
    },
    buttons: {
        width: "40%",
        height: "75%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000234",
        borderRadius: 7,
    },
    textButtons: {
        color: "white",
        fontFamily: "Arial",
        fontSize: 15,
        fontWeight: "700",
        textAlign: "center",
        padding: 10,
    },
    Aprensation: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
    },
    imgApresentation: {
        width: "70%",
        height: "50%",
        borderRadius: 30,
    },
});
