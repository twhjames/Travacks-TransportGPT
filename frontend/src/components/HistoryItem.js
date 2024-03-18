import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';

const HistoryItem = ({name, address, navigation}) => {
    
    return(
        <TouchableOpacity
            style = {styles.HistoryItem}
            onPress = {() => {
                navigation.navigate("Routes", {start: "curr location", end: address,})
            }}>
            <View>
                <Text>{name}</Text>
                <Text>{address}</Text>
            </View>
            <Text> arrowicon </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    HistoryItem: {
        flexDirection: "row",
        marginHorizontal: 10
    }

  });


export default HistoryItem;