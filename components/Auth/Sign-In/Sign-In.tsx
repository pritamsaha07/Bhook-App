import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import useUserStore from '../../../store/userStore';
import {useNavigation} from '@react-navigation/native';
import styles from './Sign-In.styles';
import {MOCK_USERS} from '../../../constants/constants';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {setUser} = useUserStore();
  const navigation = useNavigation();

  const handleLogin = () => {
    const validUser = MOCK_USERS.find(
      user => user.username === username && user.password === password,
    );

    if (validUser) {
      setUser({username, password});
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Invalid credentials', [{text: 'OK'}]);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/homescreen.png')}
        resizeMode="cover"
        style={styles.image}
      />

      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <Text style={styles.subtitleText}>Log in to your existing account</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#A0A0A0"
          value={username}
          onChangeText={setUsername}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#A0A0A0"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Image
                source={require('../../../assets/logos/eye-icon.png')}
                resizeMode="cover"
                style={styles.logoimage}
              />
            ) : (
              <Image
                source={require('../../../assets/logos/eye-blind-icon.png')}
                resizeMode="cover"
                style={styles.logoimage}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Text
          style={{color: '#FF6347', alignSelf: 'flex-end', fontWeight: 'bold'}}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.connectText}>Or connect using</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../../assets/logos/google-white-icon.png')}
            resizeMode="cover"
            style={styles.logoimage}
          />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../../assets/logos/facebook-app-round-white-icon.png')}
            resizeMode="cover"
            style={styles.logoimage}
          />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupLinkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInPage;
