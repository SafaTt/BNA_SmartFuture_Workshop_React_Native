import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const topMargin = height/8

export const virement_style = StyleSheet.create({
   container:{
    flex: 1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
   },
   image:{
    width: 200,
    height:200,
    justifyContent:'center',
    alignSelf:'center',
    // marginTop: topMargin
   },

   input: {
    width: 335,
    height: 45,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15
   },

   btn:{
    width: 335,
    height: 45,
    backgroundColor : colors.primary,
    borderRadius : 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent:'center',
    alignItems:'center'
   },
   btnText:{
    color : "white",
    fontWeight:'500',
    fontSize: 15
   },

});
