import styled from 'styled-components'

export const StatisticsBox = styled.div`
    display: block;
    align-items: center;
    border: 1px transparent;
    border-radius: 4px;
    width: calc(100%/2);
    justify-content: center;
    align-content: center;
    margin: 50px auto 0 auto;
    background-color: aliceblue;

`

export const StatsList = styled.ul`
    display: flex;
    align-items: center;
    gap: 50px;
    list-style: none;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    padding: 0;
    background-color: ${getRandomHexColor()};
`

export const ListItemInfo = styled.span`
    display: block;
    padding: 0;
`
export const ListItem = styled.li`
    display: block;
    padding: 0;
    padding: 10px 0;
   
`
export const BoxTitle = styled.h2`

    justify-content: center;
    text-align: center;
    padding: 20px 0;
   border-bottom: 1px solid grey;
   margin: 0;
`

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
