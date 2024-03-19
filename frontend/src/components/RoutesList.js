import React, {useState} from 'react';
import {Text, View, FlatList, TouchableHighlight} from 'react-native';

const RoutesList = () => {

    /* pass info into backend here */
    /* start info, dest info, selection data from SelectionPane */

    /* get backend results here */

    const routesResult = ["test1", "test2", "test3"];

    return (
        <View>
            <Text>Eco Routes</Text>
            <FlatList
                data = {routesResult}
                renderItem = {({item}) => (
                    <TouchableHighlight>
                        <Text>{item}</Text>
                    </TouchableHighlight>
                )}
                keyExtractor={item => item}/>
        </View>
    );
};

export default RoutesList;