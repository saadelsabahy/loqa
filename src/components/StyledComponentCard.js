import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import COVER_IMAGE from '../../assets/download.png';
import { Button } from 'react-native-elements';

export default class StyledCard extends Component {
    render() {
        return (
            <Container>
                <Cover>
                    <CoverImage source={COVER_IMAGE} />
                    <Title>styled card</Title>
                    <Author>by saad</Author>
                </Cover>
                <ContentSection>
                    <Elementbtn />
                </ContentSection>
            </Container>
        );
    }
}
const Container = styled.View`
    width: 300px;
    height: 300px;
    background-color: #fff;
    box-shadow: 0 10px 25px #000;
    border-radius: 20px;
`;
const Cover = styled.View`
    width: 100%;
    height: 200px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    overflow: hidden;
`;
const CoverImage = styled.Image`
    width: 100%;
    height: 100%;
`;
const textStyle = css`
    color: #fff;
    position: absolute;
    width: 150px;
    padding: 5px;
    text-transform: capitalize;
`;
const Title = styled.Text`
    ${textStyle};
    top: 10px;
    left: 10px;
    font-size: 25px;
    font-weight: bold;
`;
const Author = styled.Text`
    ${textStyle};
    bottom: 10px;
    left: 10px;
    font-size: 20px;
`;
const ContentSection = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
`;
const Avatar = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
`;
const TextContainer = styled.View`
    margin-left: 5px;
    justify-content: center;
    align-items: center;
`;
const Name = styled.Text`
    color: #000;
`;
const Elementbtn = styled(Button).attrs({
    type: 'clear',
    title: 'press here',
    containerStyle: {
        backgroundColor: 'red',
    },
})`
    background-color: chartreuse;
`;
