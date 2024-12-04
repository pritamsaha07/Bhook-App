export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export default interface UserData {
  username: string;
  password: string;
}

export interface MealCategory {
  icon: string;
  label: string;
}

export const MOCK_USERS = [
  {username: 'Pritam', password: 'pass1'},
  {username: 'Somali', password: 'pass2'},
  {username: 'Aaryan', password: 'pass3'},
];
