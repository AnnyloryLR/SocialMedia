import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return <Stack.Navigator>
        <Stack.Navigatior>
            <Stack.Screen name={Routes.Home} component={Home} />
        </Stack.Navigatior>
    </Stack.Navigator>

};

export default MainNavigation;