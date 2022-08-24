import styled from "styled-components";

export const Menulist = styled.div`
width:80%;
display:flex;
flex-direction:column ;
align-items:center;
justify-content:space-evenly;
height: 50%;
.list-item{
    text-decoration:none;
    color:#02020C;
    width:100%;
    height:80%;
    transition:0.3s all ease-in ;
    &:hover{
        background-color:#00a4bd8c ;
        
        &::before{
    content:'';
    height:100%;
    width:6px;
    background-color:#FFB300 ;
    border-radius:20px ;
    transition:0.3s all ease-in ;
}
    }

    
    display:flex;
    justify-content:center;
    align-items:center;
.content{
    width:100%;
    display:flex;
    align-items:center;
    
    .icon{
        margin-left:20px ;
        margin-right:20px ;
    }
    .chat{
        display:flex;
        .text{
            margin-right:5px ;
        }
        .chat-count{
            height: 20px;
            width:20px;
            background-color:#F52E2E;
            border-radius:20px ;
            color:white;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:10px ;
        }
    }
}
}





`