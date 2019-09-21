import {createStackNavigator} from 'react-navigation-stack';
import SignInScene from '../../scenes/sign-in';

//stack
const AuthStackNavigator = createStackNavigator ({
  SignIn: {
    screen: SignInScene,
    navigationOptions: () => {
      return {
        header: null,
      };
    },
  },
});
export default AuthStackNavigator;
