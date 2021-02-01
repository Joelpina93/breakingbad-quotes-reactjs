import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Quote from './components/Quote';

const ButtonQuote = styled.button`
    background: -webkit-linear-gradient(
        top left,
        #007d35 0%,
        #007d35 40%,
        #0f574e 100%
    );
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
    border-radius: 15px;
    transition: background-size 0.8s ease;
    :hover {
        cursor: pointer;
        background-size: 400px;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

function App() {
    const [quote, saveQuote] = useState({});
    const consultApi = async () => {
        const response = await fetch(
            'http://breaking-bad-quotes.herokuapp.com/v1/quotes'
        );
        const quote = await response.json();
        saveQuote(quote[0]);
    };
    useEffect(() => {
        consultApi();
    }, []);
    return (
        <Container>
            <Quote quote={quote} />
            <ButtonQuote onClick={() => consultApi()}>Next Quote</ButtonQuote>
        </Container>
    );
}

export default App;
