import React, {useState, useContext} from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import {AuthContext} from '../../contexts/auth';

import {Background, Container, AreaInput, Input,
SubmitButton, SubmitText,} from '../SignIn/styles';

export default function SignUp() {

  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [name, setName ] = useState('');

  const {signUp, loadingAuth} = useContext(AuthContext);

  function handleSingUp(){
    signUp(email, password, name);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <AreaInput>
        
          <Input
            placeholder = "Nome"
            autoCorrect = {false}
            autoCapitalize = "none"
            value={name}
            onChangeText={ (text) => setName(text)}
          />

        </AreaInput>        

        <AreaInput>
        
          <Input
            placeholder = "Email"
            autoCorrect = {false}
            autoCapitalize = "none"
            value={email}
            onChangeText={ (text) => setEmail(text)}
          />

        </AreaInput>

        <AreaInput>
        
          <Input
            placeholder = "Senha"
            autoCorrect = {false}
            autoCapitalize = "none"
            value={password}
            onChangeText={ (text) => setPassword(text)}
            secureTextEntry ={true}
          />

        </AreaInput>

        <SubmitButton onPress = {handleSingUp}>

          {
            loadingAuth ? (
              <ActivityIndicator size = {20} color="#FFF" />
            ) : (
              <SubmitText>
                Cadastrar
              </SubmitText>
            ) 
          }

        </SubmitButton>


      </Container>
    </Background>
  );
}