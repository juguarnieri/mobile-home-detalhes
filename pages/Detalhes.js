import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Detalhes() {
  const [texto, setTexto] = useState("Texto sem persistência");
  const [persistedTexto, setPersistedTexto] = useState("Texto com persistência");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes</Text>

      <Text style={styles.textoVermelho}>
        Sem persistência: {texto || "Nenhum texto salvo"}
      </Text>

      <Text style={styles.textoVerde}>
        Persistência: {persistedTexto || "Nenhum texto salvo"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 25,
    gap: 20,
    backgroundColor: "#EFEBE0",
  },
  titulo: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "#100B60",
  },
  textoVermelho: {
    fontSize: 20,
    textAlign: "center",
    color: "#C33E60",
  },
  textoVerde: {
    fontSize: 20,
    textAlign: "center",
    color: "#206220",
  },
});
