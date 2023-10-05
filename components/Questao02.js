import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Estilo from './Estilo';

const Questao02 = ({route, navigation}) => {
    const nome = route.params.nome
    const preco = route.params.preco
    const horario = route.params.horario
    const dia = route.params.dia
    return (
      <View style={Estilo.containerModal}>
        <Text style={Estilo.itemTitle}>{nome}</Text>
        <Text style={Estilo.itemTitle}>{preco}</Text>
        <Text style={Estilo.item}>{dia}</Text>
        <Text style={Estilo.item}>{horario}</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={Estilo.button}>Comprar à vista</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    backgroundColor: '#0fe',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  paragrafo: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 20
  }
});

export default Questao02