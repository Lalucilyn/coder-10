import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthStackNavigator from './stacks/auth';
import AppStackNavigator from './stacks/app';
import AppLoading from './stacks/appLoading';

const ApplicationSwitchNavigator = createSwitchNavigator (
  {
    AppLoading: AppLoading,
    App: AppStackNavigator,
    Auth: AuthStackNavigator,
  },
  {
    initialRouteName: 'AppLoading',
  }
);

const ApplicationContainer = createAppContainer (ApplicationSwitchNavigator);
export default ApplicationContainer;
