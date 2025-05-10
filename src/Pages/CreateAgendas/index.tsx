import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Keyboard,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../contextApi/context";
import { Alert } from "react-native";
import { TextInputMask } from 'react-native-masked-text'

export default function CretaeAgendas() {
  const navigation = useNavigation();
  const { AddAgenda } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [valor, setValor] = useState("");

  async function Add() {
    Keyboard.dismiss();
    if (name === "" || service === "" || date === "" || valor === "") {
      Alert.alert("Preencha todos os campos");
      return;
    }

    await AddAgenda({ name, service, date, valor });
  }

  return (
    <SafeAreaView style={s.CretaeAgendas}>
      <View style={s.form}>
        <Text style={s.title}>Adicionar um novo agendamento!</Text>
        <TextInput
          placeholder="Nome do cliente"
          value={name}
          onChangeText={setName}
          style={s.input}
        />
        <TextInput
          placeholder="Servico"
          value={service}
          onChangeText={setService}
          style={s.input}
        />
        <TextInputMask
          type="datetime"
          placeholder="Data do agendamento"
          value={date}
          onChangeText={setDate}
          style={s.input}
        />
        <TextInputMask
          type="money"
          placeholder="Valor do servico"
          value={valor}
          onChangeText={setValor}
          style={s.input}
        />
        <TouchableOpacity style={s.buttons} onPress={Add}>
          <Text style={s.textButtons}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.buttons} onPress={() => navigation.goBack()}>
          <Text style={s.textButtons}>Voltar para a Home</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={s.Aprensation}>
        <Image
          source={require("../../../assets/imgView.jpeg")}
          style={s.imgApresentation}
        />
      </View> */}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  CretaeAgendas: {
    flex: 1,
    backgroundColor: "#fff2ff",
  },

  form: {
    width: "90%",
    height: "auto",
    gap: 30,
    backgroundColor: "black",
    marginTop: 20,
    marginLeft: "5%",
    borderRadius: 15,
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    width: "90%",
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    marginLeft: "5%",
  },
  buttons: {
    width: "90%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 5,
    marginLeft: "5%",
    padding: 10,
    bottom: 10,
  },
  textButtons: {
    color: "white",
    fontFamily: "Arial",
    fontSize: 15,
    fontWeight: "700",
  },
  Aprensation: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  imgApresentation: {
    width: "90%",
    height: "80%",
    borderRadius: 30,
  },
});
