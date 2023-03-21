import styled from 'styled-components/native'


export const Background = styled.View`
  flex: 1;
  background-color: #131313;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#222'
})`
  width: 90%;
  height: 54px;
  background-color: #FFF;
  margin-top: 30px;
  font-size: 17px;
  padding-left: 13px;
  margin-bottom: 8px;
`;


export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  width: 60%;
  height: 50px;
  margin-bottom: 8px;
  margin-left: 15px;
  margin-top: 20px;
`;

export const SubmitText = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #fff;
`;

