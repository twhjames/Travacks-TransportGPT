import React, {useState} from 'react';
import {StyleSheet, FlatList, Text, View, TouchableOpacity} from 'react-native';

const SelectionPane = () => {

    const transportationTypes = ["All", "Walk", "Cycle", "Bus", "MRT", "LRT"];

    const optimisedOption = ["Eco", "Fastest", "Cheapest"];

    /* get the values here */

    return (
        <View style = {{ maxHeight: 100 }}>
            <View>
                <FlatList 
                    data={transportationTypes}
                    renderItem = {({item}) => (
                        <TouchableOpacity
                            style = {styles.tabs}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    horizontal/>
            </View>
            <View>
                <FlatList 
                    data={optimisedOption}
                    renderItem = {({item}) => (
                        <TouchableOpacity
                            style = {styles.tabs}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    horizontal/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabs: {
        margin: 10
    }
  });

export default SelectionPane;