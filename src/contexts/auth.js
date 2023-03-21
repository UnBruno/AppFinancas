import React, {createContext, useState, useEffect} from "react";
import {Keyboard} from 'react-native' 
import firebase from '../services/firebaseConnection';
import AsyncStorage from "@react-native-async-storage/async-storage";


export const AuthContext = createContext({});


export default function AuthProvider({children}){

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setloadingAuth] = useState(false);

  //Salvando dados do usuario no asynsotrage
  async function storageUser(data){
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  //Buscando dados do usuário no asyncstorage
  useEffect(() => {
    async function loadStorage(){
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if(storageUser){
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);

    }

    loadStorage();
  }, [])

  //Cadastrado usuários
  async function signUp(email, password, name){
    
    setloadingAuth(true);

    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( async (value) => {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).set({
        saldo: 0,
        nome: name
      })
      .then(() => {
        let data = {
          uid: uid,
          nome: name,
          email: value.user.email,
        }

        setUser(data);
        storageUser(data);
        setloadingAuth(false);
      })
    })
    .catch((error) => {
      setloadingAuth(false);
      alert(error.code);
    })
  }

  //Login de usuários
  async function signIn(email, password){
    
    setloadingAuth(true);

    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).once('value')
      .then((snapshot) => {
        let data = {
          uid: uid,
          nome: snapshot.val().nome,
          email: value.user.email,
        };
        setUser(data);
        storageUser(data);
        setloadingAuth(false);
      })
    })
    .catch((error) => {
      setloadingAuth(false);
      alert(error.code);
    })
  }

  //Deslogando usuários
  async function signOut(){
    await firebase.auth().signOut();

    await AsyncStorage.clear()
    .then(() => {
      setUser(null);
    })
  }

  //Editar nome de usuário
  async function editName(name, setShowEdit){
    if(name !== ''){
      await firebase.database().ref('users').child(user.uid).update({
        nome: name
      })
      .then(() => {
        setUser( prevState => {
          return{...prevState, nome: name}
        })
        setShowEdit(false);
      })
      .catch((error) => {
        alert(error);
      })

      Keyboard.dismiss();
     
    }

  }

  return(
    <AuthContext.Provider value = {{signed: !!user, user, loading, signUp, signIn, signOut, editName, loadingAuth}}>
      {children} 
    </AuthContext.Provider>
  );
}