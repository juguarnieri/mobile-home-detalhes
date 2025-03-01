import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Home() {
  const [texto, setTexto] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Persistência e Navegação</Text>

      <Text style={styles.textoVermelho}>Sem persistência: Nenhum texto salvo</Text>
      <Text style={styles.textoVerde}>Persistência: Nenhum texto salvo</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={texto}
        onChangeText={setTexto}
      />

      <TouchableOpacity style={styles.botao} onPress={() => alert("Texto salvo!")}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => setTexto("")}>
        <Text style={styles.textoBotao}>Limpar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => alert("Ainda sem navegação!")}>
        <Text style={styles.textoBotao}>Detalhes</Text>
      </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: "#6F2739",
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
    width: '100%', 
  },
  botao: {
    backgroundColor: "#6F2739", 
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 4, 
  },
  textoBotao: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
