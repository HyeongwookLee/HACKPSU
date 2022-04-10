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
    flex-direction: column;
    width: 100%;
    height: 65%;
    margin-top: 0;
    justify-content: center;
    background-color: #164688;
`
export const Title = styled.p`
    margin-top: 22%;
    font-family: Fira Sans;
    font-size: 30px;
    color: white;
`;

export const StartContainer = styled.div`
    display: flex;  
    height: 35%;
    justify-content: center;
`;

export const StartLink = styled(Link)`
    margin-top: auto;
    display: flex;
    width: 150px;
    margin-bottom: auto;
    text-decoration: none;
`;

export const Start = styled.button`
    display: flex;
    width: 100%;
    height: 100%;
    padding-top: 10%;
    padding-bottom: 10%;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    justify-content: center;
    background: white;
    box-shadow: 2px 2px gray;
`;

