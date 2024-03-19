import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const SearchItem = ({name, address, navigation}) => {
    
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
            <Text> tripledot </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    HistoryItem: {
        flexDirection: "row",
        marginHorizontal: 10
    }

  });


export default SearchItem;