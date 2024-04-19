import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const app_style = StyleSheet.create({
    labelStyleTxt: { 
        color: colors.bleu, 
        alignSelf: 'center', 
        fontSize: 15, 
        marginLeft: 20 
    },

    viewUserData:{
        alignSelf:'center',
        alignItems:'center',
        marginBottom: 50,
        // marginTop: 20,
        // backgroundColor: colors.primary,
        width:"90%",
        padding: 10 ,       
    },

    avartStyle:{
        width: 100,
        height: 100
    },
    nomStyle :{
        color: "white",
        fontSize: 15,
        fontWeight: "500",
        marginTop: 10
    },
    emailStyle:{
        fontSize: 13,
        // color:colors.bleu,
        color:"#ECECEC",
        fontWeight:'500'
    },

});
