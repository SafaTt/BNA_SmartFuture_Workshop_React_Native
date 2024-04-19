import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'; //créer un conteneur de navigation. 
import { createStackNavigator } from '@react-navigation/stack'; // créer une pile de navigation.
import { Dimensions, LogBox, Text, ToastAndroid, View, Image } from "react-native";

import { 
  createDrawerNavigator, //créer un navigateur 
  DrawerContentScrollView, //définir le contenu personnalisé du drawer
  DrawerItemList, // afficher la liste des éléments de navigation
  DrawerItem //représenter un élément individuel dans la liste des éléments de navigation
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import avatarImg from './assets/images/avatar.png'

// const  {height} = Dimensions.get('window') //get le height du device
// console.log(height);

// importer les screens a utiliser
import LoginScreen from './src/component/login';
import ProfileScreen from './src/component/Profile';
import VirementScreen from './src/component/virement';
import ListVirementScreen from './src/component/list_verement';

import colors from './src/constants/colors';
import { app_style } from './src/styles/app_style';
import { getUserData } from './src/services/user_service';
import { StatusBar } from 'expo-status-bar';

LogBox.ignoreAllLogs();

const Stack = createStackNavigator(); //instance de la pile pour gérer les navigations en empilant les écrans
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState("")

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserData();
        setFirstname(userData.firstname);
        setLastname(userData.lastname);
        setEmail(userData.email)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  },);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      props.navigation.navigate('LoginScreen');
      ToastAndroid.showWithGravity(
        'Vous êtes déconnecté !',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  {/* transmettre toutes les propriétés passées au composant */}
  return (
    <DrawerContentScrollView {...props}>
      <View style={app_style.viewUserData}>
        <StatusBar style='auto' />
        <Image
          source={avatarImg}
          style={app_style.avartStyle} // Assurez-vous que cette classe est définie correctement dans votre fichier de styles
        />
        <Text style={app_style.nomStyle}>{firstname} {lastname}</Text>
        <Text style={app_style.emailStyle}>{email}</Text>
      </View>

      <DrawerItemList {...props} />
      <DrawerItem
        label="DECONNECTER"
        onPress={logout}
        labelStyle={app_style.labelStyleTxt}
      />
    </DrawerContentScrollView>
  );
};

const MenuDrawer = (props) => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.primary,
          borderColor: 'transparent',
        },
        drawerLabelStyle: {
          color: 'white',
          alignSelf: 'center',
          marginLeft: 20,
        },
        drawerItemStyle: {
          padding: 2,
        },
      }}
    >
      <Drawer.Screen name="PROFILE" component={ProfileScreen}
        options={{
          headerTransparent: true,
          headerTintColor: 'white',
          headerTitle: 'PROFILE',
          headerTitleStyle: {
            textAlign: 'center',
          },
        }}
      />

      <Drawer.Screen name="LISTE VIREMENTS" component={ListVirementScreen}
        options={{
          headerTransparent: true,
          headerTintColor: colors.primary,
          headerTitle: 'LISTE VIREMENTS',
          headerTitleStyle: {
            textAlign: 'center',
          },
        }}
      />

      <Drawer.Screen name="CREER VIREMENT" component={VirementScreen}
        options={{
          headerTransparent: true,
          headerTintColor: colors.primary,
          headerTitle: 'CREER_VIREMENT',
          headerTitleStyle: {
            textAlign: 'center',
          },
        }}
      />
    </Drawer.Navigator>

  )
}

const App = (props) => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MenuDrawer" component={MenuDrawer} />
        {/* <Stack.Screen name='ListVirementScreen' component={ListVirementScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
