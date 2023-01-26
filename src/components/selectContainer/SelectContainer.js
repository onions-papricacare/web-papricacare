import React from "react";
import styled from "styled-components"; 
import MediInfo from "components/mediInfo/MediInfo";
import Ranking from "components/mediInfo/Ranking";

const Detail = () => {
    return (
        <SelectContainer>
<Ranking/>
<MediInfo/>
        </SelectContainer>
    );
};

export default Detail;

const SelectContainer = styled.div`
 display: flex;
`