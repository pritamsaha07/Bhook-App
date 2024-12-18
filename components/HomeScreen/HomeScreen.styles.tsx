import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 44,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 16,
    color: 'gray',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 3,
    margin: 10,
    flexDirection: 'row',
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  mealCategories: {
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  todaysSpecialContainer: {
    padding: 20,
  },
  recipesContainer: {
    paddingHorizontal: 20,
  },
  recipesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  refreshButton: {
    padding: 10,
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
  },
  seeAllButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  seeAllButtonText: {
    color: '#ed5a15',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalRecipeList: {
    paddingBottom: 20,
  },
  logoimage: {
    height: 18,
    width: 18,
    alignSelf: 'center',
  },
});

export default styles;
