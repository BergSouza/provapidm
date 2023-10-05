import { SectionList, View, Text } from "react-native";
import { Terca, VinteCincoSet, VinteQuatroSet, VinteUmSet } from './Dados';
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"
import Estilo from './Estilo';

const Questao01 = ({route, navigation}) => {
  return (
    <View style={Estilo.container}>
      <SectionList
        sections={[...Terca, ...VinteCincoSet, ...VinteQuatroSet, ...VinteUmSet]}
        renderItem={({ item }) => (
          <View>
            <PaperProvider>
            <View style={{
                marginTop: 30,
            }}>
                <IconButton
                    icon={item.icone}
                    iconColor={MD3Colors.tertiary0}
                    size={30}
                    onPress={() => console.log('Pressed')}
                    mode="contained"
                />
            </View>
        </PaperProvider>
            <Text  onPress={() =>
            navigation.navigate('Questao02', {nome: item.nome, preco: item.preco, horario: item.horario, dia: item.dia})
          }  style={Estilo.itemNome}>{item.nome}</Text>
            <Text style={Estilo.itemHorario}>{item.horario}</Text>
            <Text style={Estilo.itemPreco}>{item.preco}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={Estilo.itemText}>{section.title}</Text>
        )}
        keyExtractor={item => item.id}
        stickySectionHeadersEnabled
      />
    </View>
  )
};

export default Questao01;