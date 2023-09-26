import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Header from "../components/Header";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                header:(props)=><Header props={props} />,
                }}>
                <Stack.Group>
                    <Stack.Screen component={Home} name="Home_Screen" options={{
                        title: "Anna"
                    }} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;