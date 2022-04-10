import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: #F0F0F0;
`;

export const BackGround = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    height: 30%;
    margin-top: 0;
    background-color: #164688;
`;

export const Header = styled.p`
    margin-top: 10%;
    font-family: Fira Sans;
    font-size: 30px;
    background: #F0F0F0;
`;

export const evenContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: transparent;
    margin-bottom: 5%;
`;

export const Search = styled.input`
    width: 30%;
    border: none;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 14px;
    padding-left: 14px;
`;

export const TagContainer = styled.div`
    display: flex;  
    height: 70%;
    justify-content: center;
`;

export const DoneLink = styled(Link)`

    margin-top: auto;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    text-decoration: none;
`;

export const DoneButton = styled.button`
    display: flex;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 2%;
    padding-right: 2%;
    align-items: center;
    border: none;
    border-radius: 20px;
    background-color: white;
    box-shadow: 2px 2px gray;
    margin-top: 30%;
    cursor: pointer;
    font-size: 20px;
`
