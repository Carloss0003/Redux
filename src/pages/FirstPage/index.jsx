import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableHighlight, TouchableOpacity, View, Text } from "react-native";

export function FirstPage(){
    const navigate = useNavigation()
    return(
        <View style={style.container}>
           <TouchableOpacity 
               style={style.btn}
               onPress={()=>navigate.navigate('login')}
            >
              <Text style={style.text}>Fazer login</Text>
           </TouchableOpacity>
           <TouchableOpacity 
               style={style.btn}
               onPress={()=>navigate.navigate('cadastro')}
           >
              <Text style={style.text}>Cadastrar</Text>
           </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
     container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
     },
     btn:{
        backgroundColor: '#FF0000',
        width: 300,
        height: 50,
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 10
     },
     text:{
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20
     }
})