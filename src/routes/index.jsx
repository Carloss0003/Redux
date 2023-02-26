import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Cadastro } from '../pages/cadastro'
import { FirstPage } from '../pages/FirstPage'
import { Login } from '../pages/Login'

const Stack = createNativeStackNavigator()

export function Routes(){
    return(
       <Stack.Navigator
         screenOptions={{
            headerShown: false
         }}
       >
         <Stack.Screen
           component={FirstPage}
           name='Cadastro'
         />
         <Stack.Screen
           component={Login}
           name="login"
         />
         <Stack.Screen
           component={Cadastro}
           name="cadastro"
         />
       </Stack.Navigator>
    )
}