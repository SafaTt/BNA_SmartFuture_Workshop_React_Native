import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import virementImg from '../../assets/images/virement.png'
import { StatusBar } from "expo-status-bar";
import { virement_style } from "../styles/virement_style";
import colors from "../constants/colors";
import { useState } from "react";
import { addVirement } from "../services/virement_service";

export default function VirementScreen(props) {

    const [beneficiaire, setBeneficier] = useState('');
    const [montant, setMontant] = useState('');
    // const [date, setDate]= useState(Date.now());
    const [description, setDescription] = useState('');

    const toAddVirement = async () => {
        await addVirement(beneficiaire, montant, description, props);
    }

    return (
        <View style={virement_style.container}>
            <StatusBar style="auto" />
            <Image
                source={virementImg}
                style={virement_style.image}
            />

            <TextInput
                placeholder="Bénéficier"
                style={virement_style.input}
                value={beneficiaire}
                onChangeText={setBeneficier}
            />

            <TextInput
                placeholder="Montant"
                style={virement_style.input}
                value={montant}
                onChangeText={setMontant}
                keyboardType="numeric"
            />

            <TextInput
                placeholder="Déscription"
                style={virement_style.input}
                value={description}
                onChangeText={setDescription}
            />

            <TouchableOpacity style={virement_style.btn} onPress={toAddVirement}>
                <Text style={virement_style.btnText}>Effectuer le virement</Text>
            </TouchableOpacity>
        </View>
    )
}