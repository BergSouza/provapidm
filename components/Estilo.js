import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    },
    containerModal: {
      flex: 1,
      backgroundColor: 'black',
    },
    item: {
      fontSize: 20,
      color: '#aaa',
    },
    itemTitle: {
      fontSize: 50,
      color: 'white',
    },
    itemText: {
      fontSize: 20,
      color: '#aaa',
    },
    itemNome: {
      fontSize: 20,
      color: 'white',
      float: 'left'
    },
    
    itemPreco: {
      fontSize: 20,
      color: 'white',
      textAlign: 'right'
    },
    
    itemHorario: {
      fontSize: 20,
      color: 'white'
    },

    button: {
      height: 20,
      width: 100,
      backgroundColor: '#aaa',
      marginTop: 5,
      marginBottom: 5,
  },
});

export default styles