import React from "react";

import styled from "@emotion/styled";


const Detail = () => {
    return (
        <>
            <Container>
             
            </Container>
        </>
    );
};

export default Detail;

const Container = styled.div`
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    background-color: white;
    border-radius: 20px;
    padding-bottom: 30px;

    img {
        width: 300px;
        margin-bottom: 20px;
    }
`;

const Info = styled.div``;

const InfoLeft = styled.span`
    font-weight: 600;
    font-size: 18px;
`;
