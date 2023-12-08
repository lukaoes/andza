import styled from "styled-components";

export const AndzaLayout = styled.div`
    /* height: 500px;
    width: 200px;  // old was 100 */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 25px; */
    opacity: 1;
    position: absolute;
    bottom: 76px;
    left:60%;
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
        box-shadow: 0px 0px 5px 2px rgba(144, 12, 63,0.32) inset;
    }

    &:after {top: 0px; background: #F5F7F8;  }
    &:before {bottom: 0px; background: #ff3200;}
    
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
        #ff3200 23%,
        #ff3200 83%,
        #F5F7F8 83%,
        #F5F7F8 100%
    );

    box-shadow: 0px 0px 3px 1px rgba(144, 12, 63,0.52) inset;
    
`

export const ThickTop = styled.div`
    height: 185px;
    width: 6px;
    margin-right: 4px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    position: relative;
    background: linear-gradient(to bottom,
    #F5F7F8 14%,
    #ff3200 14%,
    #ff3200 41%,
    #F5F7F8 41%,
    #F5F7F8 51%,
    #ff3200 51%,
    #ff3200 83%,
    #F5F7F8 83%
  );
  box-shadow: 0px 0px 3px 1px rgba(144, 12, 63,0.52) inset;
  
`

export const MiddleThickConnectBottom = styled.div`
    width: 50px; // 42
    height: 13px; //5 
    /* border: 4px solid 	#ff3200; */

    border-radius: 2px;
    margin-right: 33px;
    position: relative;
    background-color: #c5c5c5;
    z-index: 1;
    box-shadow: 0px 0px 0px 4px rgba(255,50,0,0.92) inset;

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
    box-shadow: 0px 0px 7px 6px rgba(197,197,197,0.82) inset;
    z-index: 1;

`

export const TinyLegOne = styled.div`
    width: 55px;
    height: 3px;
    background-color: #F5F7F8;
    position: absolute;
    border-top-left-radius: 2px;
    top: 61.3px;
    right: 10px;
    box-shadow: 0px 0px 1px 1px rgba(197,197,197,1) inset;

`

export const TinyLegTwo = styled.div`
    width: 70px;
    height: 3px;
    background-color: #F5F7F8;
    transform: rotate(110deg);
    position: absolute;
    top: 28px;
    right: 16px;
    box-shadow: 0px 0px 1px 1px rgba(197,197,197,1) inset;

`

export const TinyLegThree = styled.div`
    width: 145px;
    height: 3px;
    background-color: #F5F7F8;
    transform: rotate(101deg);
    position: absolute;
    top: 63px;
    right: -50px;
    box-shadow: 0px 0px 1px 1px rgba(197,197,197,1) inset;

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
    box-shadow: 0px 0px 1px 1px rgba(197,197,197,1) inset;

`

export const SmallJointOne = styled.div`
    width: 21px;
    height: 1.5px;
    background-color: #ff3200;
    position: absolute;
    top: 104px;
    left: -21px;
    border-top-left-radius: 2px;
    box-shadow: 0px 0px 1px 0.3px rgba(144, 12, 63,0.52) inset;

`

export const SmallJointTwo = styled.div`
    width: 15px;
    height: 1.5px;
    background-color: #ff3200;
    position: absolute;
    top: 72px;
    left: -15px;
    border-top-left-radius: 2px;
    box-shadow: 0px 0px 1px 0.3px rgba(144, 12, 63,0.52) inset;

`

export const SmallJointThree = styled.div`
    width: 9px;
    height: 1.5px;
    background-color: #ff3200;
    position: absolute;
    top: 43px;
    left: -9px;
    border-top-left-radius: 2px;
    box-shadow: 0px 0px 1px 0.3px rgba(144, 12, 63,0.52) inset;

`

export const TopCircle = styled.div`
width: 10px;
    height: 10px;
    top: 5px;
    left: -2px;
    background-color: #ff3200;
    position: absolute;
    clip-path: ellipse(47% 28%);
    box-shadow: 0px 0px 3px 1px rgba(144, 12, 63,0.92) inset;

`