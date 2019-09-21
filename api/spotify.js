import {AsyncStorage} from 'react-native';
export const signIn = () => {
  return new Promise (resolve => {
    setTimeout (() => {
      const data = {isLoggedIn: true};
      AsyncStorage.setItem ('auth', JSON.stringify (data));
      resolve (data);
    }, 200);
  });
};
