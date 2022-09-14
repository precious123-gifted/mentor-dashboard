import styled,{ThemeProvider} from "styled-components";
import dp from '../../../../assets/dp.jpg'


export const Chatroom = styled.div`
height: 100%;
display:flex;
justify-content:space-between;
align-items:center;
overflow:hidden;
margin-top:-600px;
opacity:0;


.mentee-chat-list{
    border-top-right-radius: 4px ;
    border-bottom-right-radius: 4px ;
    width:25%;
    height:90%;
    transition: 0.3s ease-in all;
    /* margin-left:-23% ; */
    border-right: 2px solid black;
    /* background-color:#009cb5; */
    display:flex;
    justify-content:center;
    align-items:center;
    .mentees{
        font-family:sans-serif ;
        
        height: 100%;
        width:100%;
display:flex;
flex-direction:column;
margin-left:30px;
scrollbar-width:none;
overflow:scroll;

.mentee{
    border-bottom:2px solid  #009db59a;
    display:flex;
    justify-content:space-between;
    align-items:center ;
    width:90%;
    height  :50px;
    position:relative;
    color:#01020C;
    margin-bottom:10px ;


    .profile-picture{
width:40px;
height:40px;
background-color: #009db550;
border-radius:100px ;
background-image:url(${dp});
background-size:contain;
    }
    .nameNmessage-div{
        width:50%;
height:100%;

display:flex;
flex-direction:column ;
overflow:hidden;
justify-content:center;
align-items:center;


.name{
height:50%;
width:100%;
display:flex;
font-size:15px ;

}
.last-message{
    width:100%;
    height:50%;
    display:flex;
    font-size:15px;
    color: rgb(82, 82, 82);
    
    font-size:12px;
    span{
        width:100%;
white-space:nowrap;
display:inline-block;
text-overflow:ellipsis;
text-overflow: "---"; 
     
    overflow:hidden;   
    }
}
    }
    
    .timeNmessagecount-div{
width:20%;
height:100%;
display:flex;
flex-direction:column ;
justify-content:space-between;
align-items:flex-end;


.time{
    font-size:smaller ;
}
.message-count{
    width:10px;
    height: 10px;
    border-radius:20px ;
    background-color:#00A3BD ;
}


    }
}

    }
    .drawer-handle{
        margin-right:5px ;
    }

}
.chat-box{
   
    transition: 0.3s ease-in all;
    height:600px;
    background: radial-gradient(ellipse at top,#00899e25  , transparent),
            radial-gradient(ellipse at bottom,#00899e25  , transparent);
    border-radius:30px ;

.content{
    width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
.chat-content{

  padding:20px ;
width:80%;
height:80%;
display :flex;
flex-direction:column ;
align-items:flex-end;
color:white; 
overflow:scroll;
 .sender1{
    display:flex;
    margin-bottom:10px ;
    max-width:35%;
    padding:15px;
    background-color: #384648;

border-radius: 10px;


}

.sender2{
    align-self:flex-start ;
    display:flex;
    margin-bottom:10px ;
    max-width:35%;
    padding:15px;
    background-color: #005B69;

border-radius: 10px;


}
}

.message-sender{
    display:flex;
    justify-content:space-between;
    align-items:center;
width:80%;
height:10%;
position: relative;

    .attachment{
        position:absolute;
        height:50%;
        width:10%;
        display:flex;
        justify-content:center;
        align-items:center;
       left:80%;

    }
    .input-area{
        width:80%;
        height: 50%;
input{
    color:#005B69 ;
    padding-left:10px ;
    padding-right:10px ;
    outline:none;
   border:0.1px solid #005B69;
    width:100%;
    height:100%;
background: #FFFFFF;
padding-right:20% ;
border-radius: 14px;
overflow-wrap: break-word;

}
    }
    .send-BTN{
       
        height:50%;
        width:10%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
}

}

}


`