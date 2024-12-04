import {create} from 'zustand';
import UserData from '../constants/constants';
interface UserStore {
  user: UserData | null;
  setUser: (userData: UserData) => void;
}

const useUserStore = create<UserStore>(set => ({
  user: null,
  setUser: (userData: UserData) => set({user: userData}),
}));

export default useUserStore;
