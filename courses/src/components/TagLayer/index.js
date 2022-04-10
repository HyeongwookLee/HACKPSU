import React from 'react';
import {
    Container,
    BackGround,
    Header,
    SearchContainer,
    Search,
    DoneButton,
    DoneLink,
    TagContainer,
} from "./styles";
import Tag from "../Tag"

const TagLayer = () => {
    return(
        <Container>
            <BackGround>
                <Header>
                    Select at least 5 that interests you
                </Header>
            </BackGround>
            <TagContainer>
                <Tag />
                <DoneLink to="/TagResult" style={{ textDecoration: 'none' }}>
                    <DoneButton>Done!</DoneButton>
                </DoneLink>
            </TagContainer>
        </Container>
    );
};
export default TagLayer;