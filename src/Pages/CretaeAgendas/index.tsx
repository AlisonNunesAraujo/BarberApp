import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../contextApi/context";
import { Alert } from "react-native";
export default function CretaeAgendas() {
  const navigation = useNavigation();
  const { AddAgenda } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  async function Add() {
    Keyboard.dismiss();
    if (name === "" || service === "" || date === "" || hour === "") {
      Alert.alert("Preencha todos os campos");
      return;
    }

    await AddAgenda({ name, service, date, hour });
  }

  return (
    <SafeAreaView style={s.CretaeAgendas}>
      <View style={s.form}>
        <Text style={s.title}>CretaeAgendas</Text>
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
        <TextInput
          placeholder="Data do agendamento"
          value={date}
          onChangeText={setDate}
          style={s.input}
        />
        <TextInput
          placeholder="Horario do agendamento"
          value={hour}
          onChangeText={setHour}
          style={s.input}
        />
        <TouchableOpacity style={s.buttons} onPress={Add}>
          <Text style={s.textButtons}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.buttons} onPress={() => navigation.goBack()}>
          <Text style={s.textButtons}>Voltar para a Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  CretaeAgendas: {
    flex: 1,
    backgroundColor: "black",
  },

  form: {
    width: "100%",
    height: "auto",
    gap: 20,
    backgroundColor: "#000000",
    marginTop: 20,
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    fontFamily: "serif",
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
});
