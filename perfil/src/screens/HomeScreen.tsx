import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen() {
  const [mostrarPerfil, setMostrarPerfil] =
    useState(false);

  function mostrarOuEsconder() {
    setMostrarPerfil(!mostrarPerfil);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botao}
        onPress={mostrarOuEsconder}
      >
        <Text style={styles.textoBotao}>
          {mostrarPerfil
            ? 'Esconder Perfil'
            : 'Mostrar Perfil'}
        </Text>
      </TouchableOpacity>

      {mostrarPerfil && (
        <View style={styles.card}>
          <Text style={styles.texto}>
            Nome: Allan Daniel
          </Text>

          <Text style={styles.texto}>
            Idade: 17 anos
          </Text>

          <Text style={styles.texto}>
            Curso: Técnico em análise e desenvolvimento de sistemas
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#18152b',
    padding: 20,
  },

  botao: {
    backgroundColor: '#2b443a',
    padding: 15,
    borderRadius: 12,
    width: 220,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#387c4f',
    marginTop: 20,
    padding: 20,
    borderRadius: 15,
    width: '100%',
    elevation: 4,
  },

  texto: {
    fontSize: 20,
    marginBottom: 8,
  },
});