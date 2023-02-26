import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {editEmail} from '../../store/reducers/AuthReducer'

export function Login(){
    const userData = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const [email, setEmail] = useState(userData.email)
    const [senha, setSenha] = useState(userData.senha)

    function handleEmail(){
        dispatch(editEmail(email))
    }

    return(
        <View style={style.container}>
            <Text style={{marginBottom: 10, fontSize: 25}}>Login</Text>
            <TextInput
              style={style.input}
              placeholder="Email"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={style.input}
              placeholder='Senha'
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={true}
            />
            <View style={style.btn}>
                <Button title="Entrar" onPress={handleEmail}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    },
    input:{
        backgroundColor: '#EEE',
        width: '90%',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        paddingLeft: 10,
        marginBottom: 10
    },
    btn:{
        width: '90%',
        borderRadius: 5,
        overflow: 'hidden'
    }
})