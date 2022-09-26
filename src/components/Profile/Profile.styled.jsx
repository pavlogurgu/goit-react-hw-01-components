import styled from 'styled-components'

export const DescriptionContainer = styled.div`
    display: block;
    align-items: center;
    border: 1px solid grey;
    border-radius: 4px;
    width: calc(100%/2);
    justify-content: center;
    align-content: center;
    margin: 0 auto;
`
export const StatsContainer = styled.li`
    display: flex;
    align-items: center;
    list-style: none;
    background-color: aliceblue;
    justify-content: center;
    align-content: center;
    gap: 30px;
    height: 40px;
    width: calc(100%/2);
    margin: 0 auto;
`
export const UserName = styled.p`
font-size: 40px;
text-align: center;
margin: 0 auto;
`
export const UserTag = styled.p`
font-size: 25px;
text-align: center;
margin: 0 auto;
color: gray;
`
export const UserLocation = styled.p`
font-size: 25px;
text-align: center;
margin: 0 auto;
color: gray;
`
export const UserPicture = styled.div`
 width: calc(100%/2);
    justify-content: center;
    align-content: center;
    margin: 0 auto;

`