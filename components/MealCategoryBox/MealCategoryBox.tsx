import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import styles from './MealCategoryBox.styles';
import {MealCategory} from '../../constants/constants';

interface MealCategoryBoxProps extends MealCategory {
  onPress: (label: string) => void;
}

const MealCategoryBox: React.FC<MealCategoryBoxProps> = ({
  icon,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.mealBox} onPress={() => onPress(label)}>
      <Image
        source={typeof icon === 'string' ? {uri: icon} : icon}
        style={styles.mealBoxIcon}
      />
      <Text style={styles.mealBoxText}>{label || 'Category'}</Text>
    </TouchableOpacity>
  );
};
export default MealCategoryBox;
