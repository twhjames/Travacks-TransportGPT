import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SelectionPane from './components/SelectionPane.js';
import RoutesList from './components/RoutesList.js';

const Routes = ( {route, navigation} ) => {

    /* current location data as start, destination data as end, both passed from main*/

    const { start, end } = route.params;
    const { transType, setTransType } = useState("");
    const { optOption, setOptOption } = useState("");

    return (
        <View style={styles.container}>
            <View style = {styles.config_area}>
                {/* for navigating back to home page*/}
                <Button 
                    title = "<"
                    onPress = {() => {
                        navigation.navigate("Main")
                    }}/>

                <View>
                    <Text>{start}</Text>
                    <Text>{end}</Text>
                </View>
                <SelectionPane/> 
            </View>
            <RoutesList/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    config_area: {
        paddingVertical: 20
    }
});

export default Routes;