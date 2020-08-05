import styled from 'styled-components';

export const Header = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0px;
`;

export const FilterButton = styled.TouchableOpacity`
    background: #F5BF99;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const HeaderTitle = styled.Text`
    color: #fff;
    font-size: 12px;
`;

export const CartButton = styled.TouchableOpacity`
    background: #414141;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;