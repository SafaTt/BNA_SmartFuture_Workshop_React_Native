import Axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import path from "../constants/path";
import { ToastAndroid } from "react-native";

export const login = async (email, password, props) => {
    try {
        const response = await Axios.post(`${path.auth}/login`, {
            email: email,
            password: password
        });
        if (response.status === 200) { // Succès de l'authentification
            const token = response.data.token;
            await AsyncStorage.setItem('token', token)
            ToastAndroid.showWithGravity(
                'utilisateur connecté !',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
         
            props.navigation.navigate('MenuDrawer', {
                screen: "PROFILE"
            });

        } else {
            ToastAndroid.showWithGravity(
                'Erreur lors de l\'authentification',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            return false; // Échec de l'authentification
        }
    } 
    catch (error) {
        if (error.response && error.response.status === 401) {
            ToastAndroid.showWithGravity(
                'Informations d\'identification non valides !',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        } else {
            console.error('Erreur lors de l\'authentification:', error);
            ToastAndroid.showWithGravity(
                'Erreur lors de l\'authentification',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        }
        return false; // Échec de l'authentification
    }
}

