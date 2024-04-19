import { StatusBar } from 'expo-status-bar';
import { Image, TextInput, TouchableOpacity, View, Text, ToastAndroid } from 'react-native';
import logoImg from '../../assets/images/logo.png'
import { useState } from 'react';
import { login_style } from '../styles/login_style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { login } from '../services/auth_service';
import colors from '../constants/colors';
export default function LoginScreen(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleEmail = (text) => {
    setEmail(text)
    if (text.length <= 1) {
      setIsValidEmail(false)
    } else {
      setIsValidEmail(true)
    }
  }

  const handlePassword = (text) => {
    setPassword(text)
    if (text.length < 8) {
      setIsValidPassword(false)
    } else {
      setIsValidPassword(true)
    }
  }

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
    console.log(isPasswordVisible);
  }

  const toLogin = async () => {
    if (isValidEmail && isValidPassword && email && password) {
      await login(email, password, props)       
    } else if (!email || !password || !isValidEmail || !isValidPassword) {
      ToastAndroid.showWithGravity(
        'Champs non valides !',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  }
  

  return (
    <View style={login_style.container}>
      <StatusBar style="auto" />
      <View style={login_style.viewImg}>
        <Image
          source={logoImg}
          style={login_style.logoImg}
          resizeMode='contain'
        />
      </View>

      <View style={login_style.viewFormulaire}>
        <Text style={login_style.titleTxt}>Connectez vous</Text>
        <TextInput
        autoCapitalize='none'
          style={login_style.input}
          placeholder='Entrez votre Email'
          value={email}
          onChangeText={handleEmail} //détecter les changements de texte
        />
        {!isValidEmail ? <Text style={login_style.errorTxt}>Champ invalid!</Text> : null}

        <View style={login_style.viewPassword}>
          <TextInput
            style={login_style.inputPassword}
            placeholder='Entrez votre mot de passe'
            secureTextEntry={isPasswordVisible ? true : false}
            value={password}
            onChangeText={handlePassword} //détecter les changements de texte
          />

          <TouchableOpacity onPress={handlePasswordVisibility}>
            <Icon
              name={isPasswordVisible ?'eye-slash' : 'eye'}
              size={18}
            />
          </TouchableOpacity>
        </View>
        {!isValidPassword ? <Text style={[login_style.errorTxt, { textAlign: 'justify' }]}>Le mot de passe ne doit pas être moins de 8 caractères !</Text> : null}


        <TouchableOpacity style={login_style.loginBtn} onPress={toLogin}>
          <Text style={login_style.loginTxt}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}