import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import { Icon } from 'react-native-elements';

const SlidePhotos = props => {
    const photos = props.photos;
    
    return ( 
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.topCard}>
                    <Text style={styles.titleCard}>DESTAQUES</Text>
                        <Icon
                            underlayColor="#fff"                        
                            name='star-border'
                            type='material'
                            color='#600000'
                            size={15}
                            onPress={() => props.checkFavorite()} 
                        />                
                </View>

                <Slideshow 
                    style={styles.slideShow}
                    height={150}
                    dataSource={photos} 
                />

                <Text style={styles.titleSlide}>Conheça o Clube de Vantagens do Sindico!</Text>
                <Text style={styles.content}>
                    Com o clube você tem descontos e benefícios especiais na compra de 
                    diversos produtos em mais de 80 parceiros.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },  
    card: {
        width: '90%',
        height: 420,
        marginTop: 30,
        padding: 20,
        borderRadius: 5,
        shadowColor: "#fff",
        shadowOpacity: 0.20,
        shadowRadius: 2.41,
        elevation: 3,
    },  
    topCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },  
    titleCard: {
        fontFamily: 'Lato-Regular',
        color: 'rgb(155, 155, 155)',
        fontSize: 11,
    },   
    slideShow: {
      width: 300,
      height: 320,
    },
    titleSlide: {
        fontFamily: 'Lato-Light',
        fontSize: 18,
        color: 'rgb(74, 74, 74)',
        marginTop: 15,
    },
    content: {
        fontFamily: 'Lato-Light',
        fontSize: 14,
        color: 'rgb(74, 74, 74)',
        marginTop: 15,
    }
  });

export default SlidePhotos;