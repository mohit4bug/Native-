import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import CartListItem from '../components/CartListItem';
import { useSelector } from 'react-redux';


const EmptyCart = () => {
    return (
        <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>Cart is empty!</Text>
        </View>
    )
}



const ShoppingCart = () => {

    const cart = useSelector(state => state.cart.cart)
    const subTotal = useSelector(state => state.cart.subTotal)
    const deliveryCharge = subTotal > 500 ? 0 : (subTotal / 100) * 10

    return (
        cart.length > 0 ? <View style={styles.container}>
            <FlatList
                data={cart}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={() => (
                    <View style={styles.totalsContainer}>
                        <View style={styles.row}>
                            <Text style={styles.text}>Subtotal</Text>
                            <Text style={styles.text}>{subTotal} US$</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Delivery</Text>
                            <Text style={styles.text}>{deliveryCharge.toFixed(2)} US$</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.textBold}>Total</Text>
                            <Text style={styles.textBold}>{subTotal + deliveryCharge} US$</Text>
                        </View>
                    </View>
                )}
            />
            <View style={styles.footer}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Checkout</Text>
                </Pressable>
            </View>
        </View> : <EmptyCart />
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%'
    },

    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: "gainsboro",
        borderTopWidth: 1,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 2,
    },
    text: {
        fontSize: 16,
        color: "gray",
    },
    textBold: {
        fontSize: 16,
        fontWeight: "500",
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
        borderColor: "gainsboro",
        padding: 20,
    },

    button: {
        width: "100%",
        backgroundColor: "black",
        alignSelf: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 100,
    },
    buttonText: {
        color: "white",
        fontWeight: "500",
        fontSize: 16,
    },
    emptyCart: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyCartText: {
        fontSize: 25,
        fontWeight: '500',
        textTransform: 'uppercase'
    }
});

export default ShoppingCart