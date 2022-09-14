import styled from "styled-components";


export const Calenderpage = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
margin-top:-600px;
opacity:0;


.content{
    width:90%;
    height:90%;
display:flex;
justify-content:space-between;
align-items:center;

.section1{
 
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:40%;
    height:100%;
    .upcoming-div{
        width:100%;
        height:50%;
        display:flex;
        flex-direction:column;
    justify-content:space-between;
    .header{

color:#005B69;
font-size:150%;
font-weight:bold ;
    }
    .upcoming-list{
height: 70%;
width:100%;
display:flex;
flex-direction:column ;
justify-content:space-between;

.event{
background-color:#005B69 ;
color:white;
width:100%;
height:19%;
border-radius:12px ;
display:flex;
justify-content:center;
align-items:center;
box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.25);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.67));





}
    }
    .image-div{

    }
    }
}
.section2{
    width:50%;
    height:100%;
    .calender-div{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:60%;
        background-color: #005B69 ;
border-radius: 10px;
box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.25);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.67));

    }
}

}
`