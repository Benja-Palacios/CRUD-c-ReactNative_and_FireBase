import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Screens/Home";
import Add from "./Screens/Add";

const Stack = createNativeStackNavigator();

function MyStack() {
    return( 
        <Stack.Navigator>
            <Stack.Screen  name="Home"component={Home}/>
            <Stack.Screen 
            name="Add" 
            component={Add}
            options={{ presentation: 'modal'}}/>  
        </Stack.Navigator>
    );
}

export default function Navigator(){

    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}
