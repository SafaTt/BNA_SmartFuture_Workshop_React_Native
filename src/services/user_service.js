import Axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import path from "../constants/path";

export const getUserData = async () => {
    try {
        // Récupère le jeton d'authentification depuis AsyncStorage
        const token = await AsyncStorage.getItem('token');
        
        // Configure les en-têtes de la requête avec le jeton d'authentification
        const headers = {
            Authorization: `Bearer ${token}`
        }

        const response = await Axios.get(`${path.user}/get`, { headers })
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}