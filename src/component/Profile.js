import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { profile_style } from '../styles/profile_style';
import avatarImg from '../../assets/images/avatar.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { getUserData } from '../services/user_service';
import colors from '../constants/colors';

export default function ProfileScreen(props) {

  const [firstname, setFirstname] = useState()
  const [lastname, setLasttname] = useState()
  const [email, setEmail] = useState()
  const [phoneNb, setPhoneNb] = useState()

  useEffect(() => {
    const userDataDetails = async () => {
      const userDataDetails = await getUserData();
      
      setFirstname(userDataDetails.firstname)
      setLasttname(userDataDetails.lastname)
      setEmail(userDataDetails.email)
      setPhoneNb(userDataDetails.phone_number)

    };
    userDataDetails();
  }, []);


  const logout = async () => {
    try {
      const token = await AsyncStorage.getItem('token')
      if(token){
        await AsyncStorage.removeItem('token');
        props.navigation.navigate('LoginScreen');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={profile_style.container}>
      <StatusBar style="auto" />

      <View style={profile_style.greenStyle}>
        <Image
          source={avatarImg}
          style={profile_style.avartStyle}
        />
        <Text style={profile_style.nomStyle}>{firstname} {lastname}</Text>
        <Text style={profile_style.rôleStyle}>@Client</Text>
      </View>

      <View style={profile_style.secondGreenStyle}>

        <View style={profile_style.detailUserStyle}>
          <View style={profile_style.viewCart}>
            <Icon name="phone" size={28} color="#18A775" />
            <Text style={profile_style.textCart}>{phoneNb}</Text>
          </View>

          <TouchableOpacity style={profile_style.iconRightStyle}>
            <Icon name="angle-right" size={30} color="#18A775" />
          </TouchableOpacity>
        </View>

        <View style={[profile_style.detailUserStyle, { marginTop: 20 }]}>
          <View style={profile_style.viewCart}>
            <Icon name="envelope" size={20} color="#18A775" />
            <Text style={profile_style.textCart}>{email}</Text>
          </View>

          <TouchableOpacity style={profile_style.iconRightStyle}>
            <Icon name="angle-right" size={30} color="#18A775" />
          </TouchableOpacity>
        </View>

        <View style={[profile_style.detailUserStyle, { marginTop: 20 }]}>
          <View style={profile_style.viewCart}>
            <Icon name="credit-card-alt" size={18} color="#18A775" />
            <Text style={profile_style.textCart}>Carte</Text>
          </View>

          <TouchableOpacity style={profile_style.iconRightStyle}>
            <Icon name="angle-right" size={30} color="#18A775" />
          </TouchableOpacity>
        </View>

        <View style={[profile_style.detailUserStyle, { marginTop: 20 }]}>
          <View style={profile_style.viewCart}>
            <Icon name="cog" size={25} color="#18A775" />
            <Text style={profile_style.textCart}>Paramétres</Text>
          </View>

          <TouchableOpacity style={profile_style.iconRightStyle}>
            <Icon name="angle-right" size={30} color="#18A775" />
          </TouchableOpacity>
        </View>

        <View style={[profile_style.detailUserStyle, { marginTop: 20 }]}>
          <TouchableOpacity style={profile_style.viewCart} onPress={logout}>
            <Icon name="sign-out" size={25} color="#18A775" />
            <Text style={profile_style.textCart}>Déconnecter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={profile_style.iconRightStyle}>
            <Icon name="angle-right" size={30} color="#18A775" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}