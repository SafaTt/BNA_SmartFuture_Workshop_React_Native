import { StyleSheet } from "react-native";

export const login_style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column'
    },
  
    viewImg: {
      flex: 2, //vue doit occuper 2 fois la taille de son contenu
      marginTop: 30,
      justifyContent: 'center', //centre le contenu verticalement dans la vue
      alignItems: 'center', //centre le contenu horizontalement dans la vue
      shadowColor: "#000",
      shadowOffset: { //la distance de décalage de l'ombre 
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25, //définit l'opacité de l'ombre
      elevation: 2, // contrôle la profondeur de l'ombre  (= shadowOpacity en IOS)
      borderWidth: 0.1,
      borderColor:'white'
    },
  
    viewFormulaire: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    logoImg: {
      height: "80%",
      width: "100%"
    },
  
    input: {
      width: 335,
      marginLeft: 10,
      marginRight: 10,
      borderWidth: 1,
      padding: 5,
      height: 45,
      marginTop: 5,
      borderRadius: 5
    },
  
    loginBtn: {
      width: 335,
      height: 45,
      backgroundColor: "#0DAD78",
      borderRadius: 5,
      padding: 5,
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    loginTxt: {
      color: 'white',
      fontWeight: '500'
    },
  
    titleTxt: {
      alignSelf: 'flex-start',
      marginLeft: 25,
      fontSize: 25,
      fontWeight: '500'
    },
  
    errorTxt:{
     alignSelf:'flex-start',
     marginLeft: 30,
     fontSize: 13,
     fontWeight:'500',
     color : '#E75555' 
    },

    viewPassword:{
      flexDirection:'row',
      width: 335,
      marginLeft: 10,
      marginRight: 10,
      borderWidth: 1,
      padding: 5,
      height: 45,
      marginTop: 5,
      borderRadius: 5,
      alignContent:'center',
      alignItems:'center'
    },

    inputPassword:{
      width: 300
    },
  
  });
  