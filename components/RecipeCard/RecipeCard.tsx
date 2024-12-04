import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Recipe} from '../../constants/constants';
import styles from './RecipeCard.styles';

const RecipeCard: React.FC<{recipe: Recipe; onPress?: () => void}> = ({
  recipe,
  onPress,
}) => {
  const prepTime = recipe.prepTimeMinutes || 0;
  const cookTime = recipe.cookTimeMinutes || 0;
  const totalTime = prepTime + cookTime;
  const instructions =
    recipe.instructions?.join(' ') || 'No description available';
  const rating = recipe.rating || 'N/A';

  return (
    <TouchableOpacity style={styles.recipeCard} onPress={onPress}>
      <Image
        source={{uri: recipe.image || 'https://via.placeholder.com/150'}}
        style={styles.recipeImage}
      />
      <View style={styles.recipeTextContainer}>
        <Text style={styles.recipeTitle} numberOfLines={2}>
          {recipe.name}
        </Text>
        <Text style={styles.recipeDescription} numberOfLines={2}>
          {instructions}
        </Text>
        <View style={styles.recipeMetaContainer}>
          <View style={styles.recipeMetaItem}>
            <Image
              source={require('../../assets/logos/clock-icon.png')}
              resizeMode="cover"
              style={styles.logoimage}
            />
            <Text style={styles.recipeMetaText}>{totalTime} mins</Text>
          </View>
          <View style={styles.recipeMetaItem}>
            <Image
              source={require('../../assets/logos/thumbs-up-black-icon.png')}
              resizeMode="cover"
              style={styles.logoimage}
            />
            <Text style={styles.recipeMetaText}>{rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;
