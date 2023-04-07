import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailScreen';
import ShoppingCart from './screens/ShoppingCart';
import { Pressable, Text } from 'react-native';

import { FontAwesome5 } from "@expo/vector-icons"
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const quantity = useSelector(state => state.cart.quantity)

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    contentStyle: {
                        backgroundColor: 'white'
                    }
                }}>
                <Stack.Screen
                    name="Products"
                    component={ProductsScreen}
                    options={({ navigation }) => ({
                        headerTitleAlign: 'center',
                        presentation: 'modal',
                        headerRight: () => (
                            <Pressable
                                onPress={() => navigation.navigate('Cart')}
                                style={{ flexDirection: 'row' }}
                            >
                                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                                <Text style={{ marginLeft: 5, fontWeight: '500' }}>{quantity}</Text>
                            </Pressable>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Product Details"
                    component={ProductDetailsScreen}
                    options={{
                        headerTitleAlign: 'center',
                        presentation: 'modal'
                    }}
                />
                <Stack.Screen
                    name="Cart"
                    component={ShoppingCart}
                    options={{ headerTitleAlign: 'center' }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default Navigation;
