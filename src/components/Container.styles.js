import styled from 'styled-components';

const Section = styled.div`
background-color: #fff;


position: relative;
overflow: hidden;
width: 100vw;
height: 100vh;
max-width: 100%;
min-width: 300px;
min-height: 480px;
margin: auto;
margin-top: 0px;
text-align: center;
`
// width: 30vw;
// height: 48.54vh;

const Wrapper = styled.div`
background: #FF416C;
background: -webkit-linear-gradient(to right, #ff8d90, #FF5A5F);
background: linear-gradient(to right, #ff8d90, #FF5A5F);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #FFFFFF;
position: relative;
height: 100%;
width: 100%;
`
const Overlay = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
height: 100%;
width: 100%;
`
const Title = styled.h1`
font-size: 1.618em;
color: white;
font-family: 'Work Sans', sans-serif;
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
font-family: 'Work Sans', sans-serif;
`

export { Section, Wrapper, Overlay, Title, Button }
