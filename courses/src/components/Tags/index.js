import React, { useState } from 'react';
import {
    Container,
    TagContainer,
    TagButton,
} from "./styles";

const Tags = () => {
    return(
        <Container>
            <TagContainer>
                <TagButton>tag1</TagButton>
                <TagButton>tag2</TagButton>
                <TagButton>tag3</TagButton>
            </TagContainer>
        </Container>
    );
};
export default Tags;