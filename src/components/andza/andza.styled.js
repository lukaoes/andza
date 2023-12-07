import styled from "styled-components";

export const AndzaLayout = styled.div`
    height: 500px;
    width: 200px;  // old was 100
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
`

export const ThickBottom = styled.div`
    height: 125px;
    width: 10px;
    position: relative;
    margin-right: 4px;
    &:after, &:before { 
        content:' ';
        position: absolute;
        width: 10px;
        height: 50%;
    }

    &:after {top: 0px; background: white;  }
    &:before {bottom: 0px; background: #F55958;}
`

export const ThickMiddle = styled.div`
    height: 130px;
    width: 8px;
    margin-right: 4px;
    border-top-left-radius: 15%;
    border-top-right-radius: 15%;
    background: linear-gradient(to bottom,
        white 23%,
        white 23%,
        #F55958 23%,
        #F55958 83%,
        white 83%,
        white 100%
    );
    
`

export const ThickTop = styled.div`
    height: 185px;
    width: 6px;
    margin-right: 4px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background: linear-gradient(to bottom,
    white 14%,
    #F55958 14%,
    #F55958 41%,
    white 41%,
    white 51%,
    #F55958 51%,
    #F55958 83%,
    white 83%
  )
`

export const MiddleThickConnectBottom = styled.div`
    width: 42px;
    height: 5px;
    border: 4px solid 	#F55958;
    border-radius: 2px;
    margin-right: 33px;
    background-color: white;
`

export const MiddleThickConnectTop = styled.div`
    width: 35px;
    height: 25px;
    background-color: white;
    border-top-right-radius: 30%;
    border-top-left-radius: 30%;
    border-bottom-right-radius: 70%;
    border-bottom-left-radius: 70%;
    margin-right: 4.5px;
`
