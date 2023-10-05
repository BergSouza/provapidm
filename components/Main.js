import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './Home';
// import Cadastro from './Cadastro';
// import IMC from './IMC';
// import Perfil from './Perfil';
// import Resultado from './Resultado';
// import Sobre from './Sobre';

import Dados from './Dados';
import Questao01 from './Questao01';
import Questao02 from './Questao02';

const Stack = createNativeStackNavigator();

const Main = () => {
    return (<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Questao01" component={Questao01} />
        <Stack.Screen name="Questao02" component={Questao02} />
      </Stack.Navigator>
    </NavigationContainer>)
}

export default Main