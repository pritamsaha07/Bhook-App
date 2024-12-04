import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  TextInput,
  Modal,
  Image,
  Alert,
  RefreshControl,
} from 'react-native';
import {MealCategory, Recipe} from '../../constants/constants';
import useUserStore from '../../store/userStore';
import RecipeCard from '../RecipeCard/RecipeCard';
import MealCategoryBox from '../MealCategoryBox/MealCategoryBox';
import styles from './HomeScreen.styles';
import axios from 'axios';
export const mealCategories: MealCategory[] = [
  {icon: require('../../assets/logos/toast-icon.png'), label: 'Breakfast'},
  {icon: require('../../assets/logos/pizza-food-icon.png'), label: 'Lunch'},
  {
    icon: require('../../assets/logos/soup-cup-and-soup-icon.png'),
    label: 'Dinner',
  },
  {icon: require('../../assets/logos/ice-cream-icon.png'), label: 'Dessert'},
];

const HomeScreen = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isAllRecipesModalVisible, setIsAllRecipesModalVisible] =
    useState(false);

  const {user} = useUserStore();

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://dummyjson.com/recipes');
      if (!response) {
        throw new Error('Failed to fetch recipes');
      }
      const data: {recipes: Recipe[]} = await response.data;
      setRecipes(data.recipes || []);
      setFilteredRecipes(data.recipes || []);
      setError(null);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : 'An unknown error occurred',
      );
      Alert.alert('Data fetching failed');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchRecipes();
  };

  const handleMealTypeFilter = (mealType: string) => {
    const filtered = recipes.filter(recipe =>
      recipe.mealType.some(
        type => type.toLowerCase() === mealType.toLowerCase(),
      ),
    );
    setFilteredRecipes(filtered);
    setSearchQuery('');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#ed5a15']}
          />
        }>
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Hello,</Text>
          <Text style={styles.welcomeText}>{user?.username || 'User'}!</Text>
          <Text style={styles.subtitleText}>What do you want to eat?</Text>
        </View>

        <View style={styles.searchInput}>
          <Image
            source={require('../../assets/logos/search-icon.png')}
            resizeMode="cover"
            style={styles.logoimage}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Search recipes"
            placeholderTextColor="#A0A0A0"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.mealCategories}>
          {mealCategories.map((meal, index) => (
            <MealCategoryBox
              key={index}
              {...meal}
              onPress={handleMealTypeFilter}
            />
          ))}
        </ScrollView>

        <View style={styles.todaysSpecialContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Special</Text>
            <TouchableOpacity
              onPress={() => setIsAllRecipesModalVisible(true)}
              style={styles.seeAllButton}>
              <Text style={styles.seeAllButtonText}>See All</Text>
            </TouchableOpacity>
          </View>
          {loading ? (
            <ActivityIndicator size="large" color="#ed5a15" />
          ) : error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : filteredRecipes.length > 0 ? (
            <FlatList
              data={filteredRecipes.slice(0, 3)}
              renderItem={({item}) => <RecipeCard recipe={item} />}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <Text style={styles.noRecipesText}>No recipes found</Text>
          )}
        </View>
      </ScrollView>

      <Modal
        visible={isAllRecipesModalVisible}
        animationType="slide"
        onRequestClose={() => setIsAllRecipesModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>All Recipes</Text>
            <TouchableOpacity
              onPress={() => setIsAllRecipesModalVisible(false)}>
              <Image
                source={require('../../assets/logos/red-x-icon.png')}
                resizeMode="cover"
                style={styles.logoimage}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={filteredRecipes}
            renderItem={({item}) => <RecipeCard recipe={item} />}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.modalRecipeList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
