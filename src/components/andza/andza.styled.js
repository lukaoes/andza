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

    &:after {top: 0px; background: #F5F7F8;  }
    &:before {bottom: 0px; background: #F55958;}
`

export const ThickMiddle = styled.div`
    height: 130px;
    width: 8px;
    margin-right: 4px;
    border-top-left-radius: 15%;
    border-top-right-radius: 15%;
    position: relative;
    background: linear-gradient(to bottom,
        #F5F7F8 23%,
        #F5F7F8 23%,
        #F55958 23%,
        #F55958 83%,
        #F5F7F8 83%,
        #F5F7F8 100%
    );
    
`

export const ThickTop = styled.div`
    height: 185px;
    width: 6px;
    margin-right: 4px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background: linear-gradient(to bottom,
    #F5F7F8 14%,
    #F55958 14%,
    #F55958 41%,
    #F5F7F8 41%,
    #F5F7F8 51%,
    #F55958 51%,
    #F55958 83%,
    #F5F7F8 83%
  )
`

export const MiddleThickConnectBottom = styled.div`
    width: 42px;
    height: 5px;
    border: 4px solid 	#F55958;
    border-radius: 2px;
    margin-right: 33px;
    position: relative;
    background-color: #F5F7F8;
    z-index: 1;
`

export const MiddleThickConnectTop = styled.div`
    width: 35px;
    height: 25px;
    background-color: #F5F7F8;
    border-top-right-radius: 30%;
    border-top-left-radius: 30%;
    border-bottom-right-radius: 70%;
    border-bottom-left-radius: 70%;
    margin-right: 4.5px;
`

export const TinyLegOne = styled.div`
    width: 55px;
    height: 3px;
    background-color: #F5F7F8;
    position: absolute;
    border-top-left-radius: 2px;
    top: 61.3px;
    right: 10px;
`

export const TinyLegTwo = styled.div`
    width: 70px;
    height: 3px;
    background-color: #F5F7F8;
    transform: rotate(110deg);
    position: absolute;
    top: 28px;
    right: 16px;
`

export const TinyLegThree = styled.div`
    width: 145px;
    height: 3px;
    background-color: #F5F7F8;
    transform: rotate(101deg);
    position: absolute;
    top: 63px;
    right: -50px;
`

export const TinyLegFour = styled.div`
    width: 71px;
    height: 3px;
    background-color: #F5F7F8;
    transform: rotate(120deg);
    position: absolute;
    top: 91px;
    right: 45px;
    border-top-right-radius: 20px;
`

export const SmallJointOne = styled.div`
    width: 21px;
    height: 1.5px;
    background-color: #F55958;
    position: absolute;
    top: 104px;
    left: -21px;
    border-top-left-radius: 2px;
`

export const SmallJointTwo = styled.div`
    width: 15px;
    height: 1.5px;
    background-color: #F55958;
    position: absolute;
    top: 72px;
    left: -15px;
    border-top-left-radius: 2px;
`

export const SmallJointThree = styled.div`
    width: 9px;
    height: 1.5px;
    background-color: #F55958;
    position: absolute;
    top: 43px;
    left: -9px;
    border-top-left-radius: 2px;
`
