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

const TagLayer = () => {
    return(
        <Container>
            <BackGround>
                <Header>
                    Select at least 5 that interests you
                </Header>
                <SearchContainer>
                    <Search placeholder="Search tag">
                    
                    </Search>
                </SearchContainer>
            </BackGround>
            <TagContainer>
                <DoneLink to="/Recommendation" style={{ textDecoration: 'none' }}>
                    <DoneButton>Done!</DoneButton>
                </DoneLink>
            </TagContainer>
        </Container>
    );
};
export default TagLayer;