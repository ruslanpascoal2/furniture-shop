import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';

export const Gradient = styled(LinearGradient)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -2;

`;

export const Container = styled.View`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Grid = styled.View`
    
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const ProductCard = styled.View`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
`;

export const CardImage = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    z-index: -1;
    opacity: 0.7;
`;

export const ProductName = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

export const ProductPrice = styled.Text`
    color: white;
    font-size: 12px;
`;

export const AddToCart = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
`;