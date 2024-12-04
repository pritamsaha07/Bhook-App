import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    color: 'white',
    fontSize: 36,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  taglineContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  tagline: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});
export default styles;
