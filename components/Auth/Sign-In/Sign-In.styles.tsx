import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 250,
    width: 250,
    alignSelf: 'center',
  },
  logoimage: {
    height: 18,
    width: 18,
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -50,
  },
  subtitleText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 60,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: '#ed5a15',
    height: 50,
    width: 140,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  connectText: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'gray',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: '#ed5a15',
    flex: 0.38,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  socialButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: 'gray',
  },
  signupLinkText: {
    color: '#ed5a15',
    fontWeight: 'bold',
  },
});
export default styles;
