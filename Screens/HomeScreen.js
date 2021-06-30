import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native';

import AppHeader from '../Component/AppHeader';
import spaceGif from '../assets/space.gif';
import MainIcon from '../assets/main-icon.png';
import Pic1 from '../assets/space_crafts.png';
import Pic2 from '../assets/star_map.png';
import Pic3 from '../assets/daily_pictures.png';

export default class HomeScreen extends React.Component{
    render(){
        return(

            <View>

                <AppHeader/>
                
                <SafeAreaView>
                <ImageBackground source={spaceGif}>
                        <Image source={MainIcon} style={styles.imgtop}/>
                        <Text style={styles.title}>Stellar App</Text>
                        
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SpaceCraft')} style={styles.btn}>
                            <Text style={styles.btntxt}>Space Craft</Text>
                            <Image source={Pic1} style={styles.btnimg}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('StraMap')} style={styles.btn}>
                            <Text style={styles.btntxt}>Stra Map</Text>
                            <Image source={Pic2} style={styles.btnimg}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DailyPic')} style={styles.btn}>
                            <Text style={styles.btntxt}>Daily Pic</Text>
                            <Image source={Pic3} style={styles.btnimg}/>
                        </TouchableOpacity>

                    </ImageBackground>
                </SafeAreaView>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    Main:{
      marginTop: 40,
    },

    title:{
        fontSize: 25,
        color: 'white',
    },

    imgtop:{
        height:200,
        width:200,
        marginLeft:570
    },

    btn:{
        backgroundColor: 'white',
        width: 300,
        height: 50,
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 520,
    },

    btntxt:{
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        justifyContent: 'center',
        marginTop: 10,
    },

    btnimg:{
        height: 60,
        width: 60,
        justifyContent: 'left',
        marginTop: -40
    },

  })
