import Axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import path from "../constants/path";
import { ToastAndroid } from "react-native";

export const addVirement = async (beneficiaire, montant, description, props) => {
  try {
    // Récupérer le token d'authentification depuis AsyncStorage
    const token = await AsyncStorage.getItem('token');
    
    // Obtenir la date actuelle
    const date = Date.now();

    // Construire l'objet de données à envoyer dans la requête
    const data = {
      beneficiaire: beneficiaire,
      montant: montant,
      date: date, // Utiliser la date actuelle
      description: description
    };
    
    // Configurer les options de la requête (headers, etc.)
    const config = {
      headers: {
        'Authorization': `Bearer ${token}` // Ajouter le token dans les headers de la requête
      }
    };

    // Envoyer la requête POST à l'API
    const response = await Axios.post(`${path.virement}/create`, data, config);

    // Vérifier si la requête a réussi
    if (response.status === 201) {
      ToastAndroid.showWithGravity(
        'Virement créé avec succès !',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      props.navigation.navigate('MenuDrawer', {
        screen: "PROFILE"
    });
    } else {
      // Gérer les autres cas de réponse HTTP
      ToastAndroid.showWithGravity(
        'Erreur!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  } catch (error) {
    console.error('Error adding virement:', error);
    // Gérer les erreurs
  }
}

export const getAllVirements = async () => {
  try {
    const response = await Axios.get(`${path.virement}/all`);
    return response.data
  } catch (error) {
    throw new Error("Erreur lors de la récupération des virements : " + error.message);
  }
};
