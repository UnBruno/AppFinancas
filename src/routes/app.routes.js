import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";
import CustomDrawer from "../components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

export default function AppRoutes(){
  return(
    <AppDrawer.Navigator

      drawerContent={(props) => <CustomDrawer {...props} /> }

      screenOptions={{
        drawerStyle: {
          backgroundColor: '#171717'
        },
        drawerLabelStyle:{
          fontWeight: 'bold'
        },
        drawerItemStyle:{
          marginVertical: 5,
        },
        drawerActiveTintColor: '#FFF',
        drawerActiveBackgroundColor: '#00b94a',
        drawerInactiveTintColor: '#DDD',
        drawerInactiveBackgroundColor: '#000',
        headerShown: false,
      }}


    >
      <AppDrawer.Screen name = "Home" component={Home} />
      <AppDrawer.Screen name = "Registrar" component={New} />
      <AppDrawer.Screen name = "Perfil" component={Profile} />
    </AppDrawer.Navigator>
  );
}