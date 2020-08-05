import styled from 'styled-components';

export const Card = styled.View`
    height: 250px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
`;


export const PrimaryText = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: white;
`;
export const SecondaryText = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: white;
`;
export const Button = styled.TouchableOpacity`
    background: #eee;
    padding: 20px 25px;
    border-radius: 15px;
    width: 70%;
    max-width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: black;
    text-transform: uppercase;
`;

export const CardBody = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

`;
export const CardAction = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 20px;
`;