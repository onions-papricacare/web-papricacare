import React from 'react'; 
import styled from 'styled-components';

const DetailHeader = ({data}) => {

  return (
   <CurrentContainer>
    <DrugNav>
    <Search>의약품검색</Search>
    <DrugDetail> > 의약품 상세정보 > </DrugDetail>
    <RealDrug>{data.name}</RealDrug>
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




