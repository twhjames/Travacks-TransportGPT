import HistoryItem from './components/HistoryItem.js';
import TripStats from './components/TripStats.js';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList} from 'react-native';


const Main = ( {navigation} ) => {

    /* Map API to show current location */

    return (
        <View style={styles.container}>
            <View>
                {/* TODO: connect to Google Map API of current location */}
                <Text>Map will be here</Text>
            </View>
            <View style = {[styles.searchBar, {flexDirection: "row"}]}>
                <Button 
                 title = "Search for a destination"
                 onPress = {() => {
                    navigation.navigate("LocationSearch")
                }}/>
            </View>
            <View>
                <View style = {styles.menu}>
                    <TouchableOpacity style = {styles.tab}>
                        <Text>Saved Places</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.tab}>
                        <Text>Work</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.tab}>
                        <Text> arrowicon </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {/* TODO: connect to database of 3 most recent searches */}
                    <HistoryItem name = "National University of Singapore" address = "21 Lower Kent Ridge Rd" navigation = {navigation}/>
                    <HistoryItem name = "Marina Bay Sands Singapore" address = "10 Bayfront Ave, Singapore 018956" navigation = {navigation}/>
                    <HistoryItem name = "The Clementi Mall" address = "3155 Commonwealth Ave W, Singapore 129588" navigation = {navigation}/>
                </View>
                <View>
                    <TripStats/>
                </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    menu: {
        flexDirection: "row",
    },

    tab: {
        margin: 10
    }
  });

export default Main