import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Div, Title, ThL, Logo, FlexEndTxt } from '../styles/loginStyles';
import { LinearGradient } from 'expo-linear-gradient';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Login:', { email, senha });
    Keyboard.dismiss();
    navigation.replace('Main');
  };

  return (
    <Div style={styles.container}>
      <Div style={styles.header}>
        <Logo source={require('../../assets/greenClaspIco.png')} />
      </Div>
      <Title>Entre com sua conta</Title>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      
      <FlexEndTxt>Esqueci minha senha</FlexEndTxt>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CadastroScreen')}>
        <Text style={styles.termsText}>
          Não possue uma conta?
          <ThL>Cadastre-se</ThL>
        </Text>
      </TouchableOpacity>
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  
  termsText: {
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 90,
    
  },
  button: {
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    backgroundColor: '#8ea863',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
