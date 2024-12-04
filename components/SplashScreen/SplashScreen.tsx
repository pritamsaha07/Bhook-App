import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './SplashScreen.styles';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/burger.png')}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to Bhook</Text>
      <View style={styles.taglineContainer}>
        <Text style={styles.tagline}>Eat</Text>
        <Text style={styles.tagline}>Drink</Text>
        <Text style={styles.tagline}>Love</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
