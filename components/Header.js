import { View , Text, StyleSheet} from "react-native";

export default function Header(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'coral',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        
    },
    text:{
        color:'#fff',
        fontWeight:'bold'
    }
})