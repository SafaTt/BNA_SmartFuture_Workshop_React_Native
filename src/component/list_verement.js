import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View, ToastAndroid } from 'react-native';
import { useEffect, useState } from 'react';
import { list_virement_style } from '../styles/liste_virement_style';
import { getAllVirements } from '../services/virement_service';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ListVirementScreen(props) {
    const [virements, setVirements] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userAllVirements = await getAllVirements();
                setVirements(userAllVirements);

            } catch (error) {
                console.error('Error fetching virements:', error);
            }
        };
        fetchData();
    }, [virements]);

    const itemFunciton = (item) => {
        ToastAndroid.showWithGravity(
            item.beneficiaire,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    }
    // Fonction pour formater la date
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString("fr-FR", options);
    };

    const renderVirementItem = ({ item }) => (
        <>
            <TouchableOpacity style={list_virement_style.itemView} onPress={() => itemFunciton(item)}>
                <View style={list_virement_style.rowItemView}>
                    <Text style={list_virement_style.benifText}>{item.beneficiaire}</Text>
                    <Text style={list_virement_style.dateText}>{formatDate(item.date)}</Text>
                </View>
                <Text style={list_virement_style.montantText} >{item.montant} DT</Text>

                <Text style={list_virement_style.descText}>Description : {item.description}</Text>
            </TouchableOpacity>
            <View style={list_virement_style.viewLine} />
        </>
    );

    return (
        <View style={list_virement_style.container}>
            <StatusBar style='auto' />
            {/* <Text style={list_virement_style.title}>Ajouter virement</Text> */}
            <TouchableOpacity style={list_virement_style.iconViewPlus}
                onPress={() => props.navigation.navigate('MenuDrawer', {
                    screen: "CREER VIREMENT"
                })}>
                <Icon
                    name='plus'
                    color={"#000"}
                    size={22}
                />
                <Text style={list_virement_style.title}>Créer virement</Text>

            </TouchableOpacity>

            <FlatList
                data={virements}
                renderItem={renderVirementItem}
                keyExtractor={(item) => item._id.toString()}
            />

        </View>
    );
}
