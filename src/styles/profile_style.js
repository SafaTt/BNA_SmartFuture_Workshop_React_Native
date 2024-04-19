import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const profile_style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.second,
  },
  greenStyle: {
    backgroundColor: colors.primary,
    flex: 2,
    alignItems: 'center', //aligner les élément hotizontalement
    justifyContent: 'center', //aligner les éléments verticalement
    // position: 'relative',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  secondGreenStyle: {
    flex: 4,
  },

  viewHeader: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    position: 'absolute',
    top: 20,
    padding: 10
  },

  avartStyle: {
    width: 120,
    height: 120,
    top: 80,
    position: 'absolute',
  },

  nomStyle: {
    position: 'absolute',
    top: 205,
    fontSize: 25,
    fontWeight: '500',
    color:'#fff',
    textAlign:'justify'
  },

  rôleStyle: {
    position: 'absolute',
    top: 235,
    fontSize: 15,
    color: '#E9E9E9'
  },
  // ------------------------------- details style view 2 --------------------------------
  detailUserStyle: {
    width: 335,
    height: 60,
    marginTop: 60,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ECECEC',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  viewCart: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: 20
  },
  textCart: {
    marginLeft: 15,
    fontSize: 15
  },

  iconRightStyle: {
    marginRight: 15
  },
});
