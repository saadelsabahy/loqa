import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet, Platform} from 'react-native';
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import IMAGE from '../../assets/download.png'

// import styles from './styles';
const {width, height} = Dimensions.get('window');

export default class ImageCarousel extends Component {
    state = {
        activeSlide: ''
    };

    _renderItem({item, index}, parallaxProps) {
        return (

            <ParallaxImage
                source={item.image}
                parallaxFactor={1}
                fadeDuration={50}
                containerStyle={styles.imageContainer}
                style={styles.image}
                showSpinner={true}
                {...parallaxProps}
            />

        );
    }

    render() {
        const data = [{id: 1, image: IMAGE}, {id: 2, image: IMAGE,}, {id: 3, image: IMAGE,}, {
            id: 4,
            image: IMAGE,
        }, {id: 5, image: IMAGE,}];
        return (
            <View style={{
                backgroundColor: '#ddd',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: 'auto',
                width: '100%',
            }}>
                <Carousel
                    data={data}
                    renderItem={this._renderItem}
                    itemWidth={width}
                    sliderWidth={height}
                    sliderHeight={width * .7}
                    hasParallaxImages={true}
                    onSnapToItem={(index) => this.setState({activeSlide: index})}
                    autoplay={true}
                    autoplayInterval={1000}
                    contentContainerCustomStyle={{margin: 5}}

                />

                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={Number(this.state.activeSlide)}
                    containerStyle={{position: 'absolute', bottom: 5, paddingVertical: 0, paddingHorizontal: 0,}}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: '#ccc6c6',
                    }}
                    inactiveDotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: 'transparent',
                        borderColor: '#ccc',
                        borderWidth: 1
                    }}
                    inactiveDotOpacity={0.8}
                    inactiveDotScale={0.7}
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 200,

    },
    imageContainer: {
        width: '100%',
        height: 200,
        borderRadius: 20,

    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
});