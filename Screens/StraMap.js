import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Webview } from 'react-native-webview';

import AppHeader from '../Component/AppHeader';

const Path = 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true';

export default class StraMapScreen extends React.Component{
    render(){
        return(

            <View>

                <AppHeader/>

                <Text style={styles.title}>Stra Map</Text>

                <TextInput style={styles.in} placeholder="Enter latitude"/>

                <TextInput style={styles.in} placeholder="Enter longitude"/>

                <Webview
                scalePageToFit={true}
                source={{uri: Path}}
                style ={{marginTop: 20, marginBottom: 20,}}
                />

            </View>  
               

            
        )
    }
}


const styles = StyleSheet.create({
    title:{
      marginTop: 30,
    },

    in:{
        textAlign: 'center',
        width: 200,
        justifyContent: 'center',
        marginLeft: 580,
        marginTop: 30,
    },
  })