import React from 'react';

import {
    Container,
    BackGround,
    Title,
    StartContainer,
    StartLink,
    Start,
} from "./styles";

const Main = () => {
    return(
        <Container>
            <BackGround>
                <Title>The Perfect Course for You</Title>
            </BackGround>
            <StartContainer>
                <StartLink to="/TagSelect" style={{ textDecoration: 'none' }}>
                    <Start>Get Started</Start>
                </StartLink>
            </StartContainer>
        </Container>
    );
};
export default Main;