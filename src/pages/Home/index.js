import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Container, Grid, ProductCard, Gradient, CardImage, ProductPrice, ProductName, AddToCart } from './styles';
import { Card, CardBody, CardAction, PrimaryText, Button, ButtonText, SecondaryText } from '../../components/Card/styles'
import { Section, Title } from '../../components/Section/styles';
import { Header, FilterButton, HeaderTitle, CartButton } from '../../components/Header/styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Home({navigation}) {

    let carousel;
    const width = Dimensions.get('window').width;

    const [activeSlide, setActiveSlide] = useState(0);

    const [products, setProducts] = useState([
        { id: 1, name: 'Chair', img: require('../../../assets/img/chair.jpeg'), price: '169' },
        { id: 2, name: 'Chair', img: require('../../../assets/img/cadeirinha.jpeg'), price: '299' },
        { id: 3, name: 'Mirror', img: require('../../../assets/img/espelho.jpeg'), price: '689' },
        { id: 4, name: 'Luminaire', img: require('../../../assets/img/luminaria.jpeg'), price: '49' },
        { id: 5, name: 'Sofa', img: require('../../../assets/img/sofa.jpeg'), price: '1529' },
        { id: 6, name: 'Chair', img: require('../../../assets/img/banco.jpeg'), price: '99' }
    ])

    const [carouselItems, setcarouselItems] = useState([
        {
            title: "Furnitures Sale",
            text: "50% Off Exclusive Design Accesories",
            img: require('../../../assets/img/destaque.jpeg')
        },
        {
            title: "New Arrivals",
            text: "100+ Brand New Furniture Items",
            img: require('../../../assets/img/destaque3.jpeg')
        },

        {
            title: "Essentials",
            text: "You Better Have These",
            img: require('../../../assets/img/destaque2.jpeg')
        },

    ])

    const onSlide = (index) => {
        setActiveSlide(p => {
            return p = index;
        })
    }

    const openProduct = () => {
        navigation.navigate('Product')
    }

    const renderCarousel = ({ item, index }) => {
        return (
            <Card>
                <CardBody>
                    <PrimaryText>{item.title}</PrimaryText>
                    <SecondaryText>{item.text}</SecondaryText>
                </CardBody>
                <CardAction>
                    <Button>
                        <ButtonText>SHOP NOW</ButtonText>
                    </Button>
                </CardAction>
                <Image source={item.img} style={styles.image} />
            </Card>
        )
    }

    const render = ({ item, index }) => {
        return (
            <TouchableWithoutFeedback onPress={openProduct}>
                <ProductCard style={index % 2 == 0 ? { marginRight: 10, width: width * 0.42 } : { marginLeft: 10, width: width * 0.42 }}>
                    <AddToCart>
                        <Feather name="shopping-bag" size={18} color="white" />
                    </AddToCart>
                    <View style={{ position: 'absolute', bottom: 15, left: 20 }}>
                        <ProductName>{item.name}</ProductName>
                        <ProductPrice>$ {item.price}</ProductPrice>
                    </View>
                    <CardImage source={item.img} />
                </ProductCard>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#2D2D2E' }}>
            <ScrollView>
                <Gradient colors={['#2D2D2E', '#222']}></Gradient>
                <Container>
                    <Section>
                        <Header>
                            <FilterButton>
                                <MaterialIcons name="filter-list" size={17} color="black" />
                            </FilterButton>
                            <HeaderTitle>HOME</HeaderTitle>
                            <CartButton>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>2</Text>
                            </CartButton>
                        </Header>
                    </Section>

                    <Carousel
                        layout={"default"}
                        ref={(c) => { carousel = c; }}
                        data={carouselItems}
                        renderItem={renderCarousel}
                        sliderWidth={width}
                        itemWidth={width}
                        onSnapToItem={onSlide}

                    />
                    <Pagination
                        dotsLength={carouselItems.length}
                        activeDotIndex={activeSlide}
                        containerStyle={{ backgroundColor: 'transparent' }}
                        dotStyle={{
                            width: 5,
                            height: 5,
                            borderRadius: 5,
                            marginHorizontal: 8,
                            backgroundColor: 'rgba(255, 255, 255, 0.92)'
                        }}
                        inactiveDotStyle={{
                            // Define styles for inactive dots here
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />

                    <Section style={{ paddingTop: 10 }}>
                        <Title>Weekly Highlights</Title>
                    </Section>

                    <Grid>
                        <FlatList
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            ItemSeparatorComponent={
                                () => <View style={{ height: 20 }} />
                            }
                            renderItem={render}
                            data={products}
                        >
                        </FlatList>
                    </Grid>

                </Container>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 20,
        zIndex: -1,
        opacity: 0.7
    }
})
