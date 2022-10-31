
import {NavigationContainer}  from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer> 
    <Stack.Navigator initialRoute="Home" > 
      <Stack.Screen 
      name="Home"
      component={HomeScreen}
      options={{ title: 'Screen One'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
 }



export default App; 