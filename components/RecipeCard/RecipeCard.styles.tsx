import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  recipeCard: {
    width: 300,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    marginBottom: 30,
  },
  recipeImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  recipeTextContainer: {
    padding: 10,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recipeDescription: {
    fontSize: 14,
    color: 'gray',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  noRecipesText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
  },
  recipeList: {
    paddingBottom: 20,
  },
  recipeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  recipeMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeMetaText: {
    marginLeft: 5,
    fontSize: 12,
    color: 'gray',
  },
  logoimage: {
    height: 18,
    width: 18,
    alignSelf: 'center',
  },
});
export default styles;
