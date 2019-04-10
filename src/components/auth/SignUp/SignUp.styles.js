import styled from 'styled-components';

const Title = styled.h1`
font-size: 1.618em;
color: white;
font-family: 'Montserrat', sans-serif;
`
const Button = styled.button`
margin-top: 10px;
border-radius: 20px;
border: 1px solid #FF4B2B;
background-color: transparent;
border-color: #FFFFFF;
color: #FFFFFF;
font-size: 12px;
font-weight: bold;
padding: 12px 45px;
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 80ms ease-in;
`
const Input = styled.input`
background-color: #eee;
border: none;
padding: 1% 2%;
margin: 8px 0;
width: 35%;
font-family: inherit;
`
const P = styled.p`
bottom: 50px;
`

export { Title, Button, Input, P }
