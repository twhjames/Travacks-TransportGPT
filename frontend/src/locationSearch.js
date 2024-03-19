import { StyleSheet, TextInput, View } from 'react-native';
import SearchItem from "./components/SearchItem.js"

const LocationSearch = ( {route, navigation} ) => {

    /* get text input values */

    /* search API with input string */

    /* display each location in result as Search Item*/

    return (
        <View style = {styles.container}>
            <TextInput 
                    placeholder = "Search for a destination"
                    style={{height: 40}}/>
            <View>
                {/* TODO: connect to database of 3 most recent searches */}
                <SearchItem name = "The Ritz-Carlton, Millenia Singapore" address = "Marina Bay 7, Raffles Ave., 039799" navigation = {navigation}/>
                <SearchItem name = "Capella Singapore" address = "1 The Knolls, Sentosa Island, 098297" navigation = {navigation}/>
                <SearchItem name = "Pan Pacific Serviced Suites Beach Road" address = "7500B Beach Rd, #7500B, Singapore 199592" navigation = {navigation}/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
  });

export default LocationSearch;