import React, {useContext, useState} from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Feather from 'react-native-vector-icons/Feather';

import {AuthContext} from '../../contexts/auth';

import {Container, Nome, NewLink, NewText, Logout, LogoutText,
EditProfile, EditText, EditTextInput, AreaEdit, ConfirmEdit} from './styles';

export default function Profile() {

  const navigation = useNavigation();
  const {user, signOut, editName} = useContext(AuthContext);
  const [showEdit, setShowEdit] = useState(false);
  const [name, setName] = useState('');

  function handleEdit(){
    setName(user.nome);
    setShowEdit(true);
  }

  return (
    <Container>

      <Header/>

      <Image
        source={require('../../assets/Profile.png')}
        style = {{width: 180, height: 180, marginTop: 10}}
        resizeMode = "contain"
      />

      <Nome>
        {user && user.nome}
      </Nome>
      { showEdit && (
        <AreaEdit>
          <EditTextInput
            value = {name}
            onChangeText = {(text) => setName(text)}
          />

          <ConfirmEdit onPress = {() => editName(name, setShowEdit)}>
            <Feather
              name = "check-square"
              color = "#00b94a"
              size = {44.5}
              backgroundColor = "#DCDCDC"
              style = {{
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10
              }}
              
            />
          </ConfirmEdit>
        </AreaEdit>
      )}

      <NewLink onPress = {() => navigation.navigate("Registrar")}>
        <NewText>
          Registrar
        </NewText>
      </NewLink>

      <EditProfile onPress = {() => {handleEdit()}}>
        <EditText>
          Editar nome
        </EditText>
      </EditProfile>

      <Logout onPress = {() => signOut()}>
        <LogoutText>
          Sair
        </LogoutText>
      </Logout>

    </Container>
  );
}