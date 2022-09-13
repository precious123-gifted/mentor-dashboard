import styled from 'styled-components'


export const Homepage = styled.div`
width:100%;
display:flex;
flex-direction:column ;
align-items:center;
color:#023B44;
opacity:0;
margin-top:-600px;

.mentee-list{
    width:80%;
    height:500px;
    background-color:#00a3bd ;
   
    background: radial-gradient(ellipse at top,#00a4bd15  , transparent),
            radial-gradient(ellipse at bottom,#00a4bd15  , transparent);
    border-radius:10px ;overflow:scroll;
    table{
        width:100%;
        border-collapse: separate;
  border-spacing: 0 19px;
        th{color:#e09d00;
        text-align:left;
        
    
    }

    .list{
        border-radius:10px ;
        width:100%;
        height:10px;
        margin-bottom:30px ;
        td{
           border-bottom:2px solid #00A3BD0A; 
        }
        
        
        .id{
            span{
                display:inline-block;
                text-align:center;
                height: fit-content;
                width:fit-content;
                padding:4px;
              background-color:#00A3BD ;
              color:white;
              border-radius: 5px;
            }
           
        }
    }
    }
}



`