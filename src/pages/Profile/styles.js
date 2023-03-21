import styled from 'styled-components/native';



export const Container = styled.View`
  flex: 1;
  background-color: #131313;
  align-items: center;
`;
export const Nome = styled.Text`
  text-align: center;
  font-size: 28px;
  margin-bottom: 10px;
  color: #FFF;
`;
export const NewLink = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  width: 60%;
  height: 45px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const NewText  = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
`;
export const Logout  = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #c62c36;
  width: 60%;
  height: 45px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const LogoutText = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
`;
export const EditProfile = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #4682B4;
  width: 60%;
  height: 45px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const EditText = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
`;
export const EditTextInput = styled.TextInput`
  width: 75%;
  height: 45px;
  background-color: #FFF;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 20px;
  padding-left: 15px;
  font-size: 16px;
`;

export const AreaEdit = styled.View`
  flex-direction: row;
`;

export const ConfirmEdit = styled.TouchableOpacity`
`;