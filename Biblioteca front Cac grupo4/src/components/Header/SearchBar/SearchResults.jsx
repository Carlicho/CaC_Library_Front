import React from 'react'

import styled from 'styled-components'

const SearchResults = ({results}) => {

    const ContainerFilterCat = styled.div`
    display: flex;
    flex-direction: column;
    `
    const GeneralContainerProd = styled.div`
    display: flex;
    `

  return (
    <div>

<GeneralContainerProd>
    <ContainerFilterCat>
    <ProductCategories/>
    <ProductFilterPrice />
    </ContainerFilterCat>
    <ProductCards productos={results} /> 
  </GeneralContainerProd>

    </div>
  )
}

export default SearchResults