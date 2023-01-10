import React from 'react'; 
import styled from 'styled-components';

const DetailHeader = ({title}) => {

  return (
   <CurrentContainer>
    <DrugNav>
    <Search>의약품검색</Search>
    <DrugDetail> > 의약품 상세정보 > </DrugDetail>
    <RealDrug>{title}</RealDrug>
    </DrugNav>
   </CurrentContainer>
  )
}

export default DetailHeader;

const CurrentContainer = styled.div `

`

const DrugNav = styled.div `
 display: inline;
`

const Search = styled.div `
display: inline;
color: #7F8694;
`

const DrugDetail = styled.div `
display: inline;
color: #7F8694;
`

const RealDrug = styled.div `
display: inline;
`




