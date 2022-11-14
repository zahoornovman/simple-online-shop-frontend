import styled from 'styled-components'

export const StyledForm = styled.form`
display: flex;
flex-direction: column;

input:hover{
    border: coral solid 3px;
    border-radius: 5px;
}

label{
    display:flex;
    flex-direction: row;   
    padding-top: 20px;
    width: 500px;
}

input{
    flex:50%;
    width: 300px;
    padding: 10px 0px;
    border-radius: 5px;
    border: black 3px solid;
}

div:hover{
    color: grey;
    text: bold;
}
`;

