import styled from 'styled-components/native'


export const Background = styled.View` 
  flex: 1;
  background-color: #131313;
`;

export const Container = styled.View` 
  margin-left: 15px;
  margin-bottom: 25px;
`;

export const Nome = styled.Text` 
  font-size: 22px;
  color: #FFF;
  font-weight: bold;
`;

export const Saldo = styled.Text` 
  font-size: 28px;
  color: #fff;
  font-weight: bold;
`; 

export const Area = styled.View` 
  flex-direction: row;
  margin-left: 8px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
  
`; 

export const Title = styled.Text` 
  margin-left: 5px;
  color: #00b94a;
  
`; 

export const List = styled.FlatList.attrs({
  marginHorizontal: 15
})` 
  padding-top: 15px;
  background-color: #FFF;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-left: 8px;
  margin-right: 8px;
`; 