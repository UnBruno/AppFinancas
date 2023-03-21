import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {Container, ButtomMenu} from './styles'

export default function Header() {

  const navigation = useNavigation();

  return (
    <Container>

      <ButtomMenu onPress={() => navigation.toggleDrawer() }>
        <Icon
          name = "menu"
          color = "#FFF"
          size = {35}
        />
      </ButtomMenu>

    </Container>
  );
}