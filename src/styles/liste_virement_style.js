import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const list_virement_style = StyleSheet.create({
    container: {
        flex: 1,
    },

    itemView: {
        flex: 1,
        width: "100%",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        marginBottom: 10,
        padding: 2
    },

    viewLine: {
        borderWidth: 0.3,
        borderColor: "black",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5
    },

    title: {
        color: "#000",
        marginLeft: 7,
        fontSize: 16,
        fontWeight: '500'
    },
    iconViewPlus: {
        alignSelf: 'flex-end',
        marginTop: 80,
        marginRight: 20,
        flexDirection: 'row',
    },


    rowItemView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight : 20
    },

    benifText:{
        fontSize: 17,
        fontWeight:'500'
    },

    dateText: {
        color: colors.grey
    },

    montantText:{
        color: colors.primary,
        fontSize: 13
    },

    descText:{
        fontSize: 12,
        color: colors.grey
    },

});
