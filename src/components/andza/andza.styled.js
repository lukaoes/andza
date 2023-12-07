import styled from "styled-components";

export const AndzaLayout = styled.div`
    height: 500px;
    width: 100px;
    background-color: gray;
`

export const ThickBottom = styled.div`
    height: 125px;
    width: 10px;
    position: relative;

    &:after, &:before { 
        content:' ';
        position: absolute;
        width: 10px;
        height: 50%;
    }

    &:after {top: 0px; background: white;  }
    &:before {bottom: 0px; background: rgb(245 89 88);}
`

export const ThickMiddle = styled.div`
    height: 130px;
    width: 8px;

    background: linear-gradient(to bottom,
        rgb(245 89 88) 23%,
        rgb(245 89 88) 23%,
        white 23%,
        white 83%,
        rgb(245 89 88) 83%,
        rgb(245 89 88) 100%
    );
    
`

export const ThickTop = styled.div`
    height: 185px;
    width: 6px;
`