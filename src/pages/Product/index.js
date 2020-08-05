import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native'
import { Header, FilterButton, HeaderTitle, CartButton } from '../../components/Header/styles';
import { Container, Grid, ProductCard, Gradient, CardImage, ProductPrice, ProductName, AddToCart } from '../Home/styles';
import { Section, Title } from '../../components/Section/styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Ionicons } from '@expo/vector-icons';


export default function Product({navigation}) {
    let carousel;
    const width = Dimensions.get('window').width;

    const [product, setProduct] = useState(
        { id: 5, name: 'Sofa', price: '1529' },
    )


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#2D2D2E' }}>
            <ScrollView>
                <Gradient colors={['#2D2D2E', '#222']}></Gradient>
                
                <Container>
                    
                    <Section>
                        <Header>
                            <FilterButton onPress={()=>{navigation.pop()}}>
                                <Ionicons name="ios-arrow-round-back" size={24} color="black" />
                            </FilterButton>
                            <HeaderTitle>PRODUCT</HeaderTitle>
                            <CartButton>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>2</Text>
                            </CartButton>
                        </Header>
                    </Section>

                    <View style={styles.img}>
                        <Image  style={styles.image} source={require('../../../assets/img/sofa.jpeg')}></Image>
                    </View>

                </Container>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 250,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.9
    }
})
