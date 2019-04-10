import React from 'react'
import { Title, Button } from './Hello.styles';

export default function Hello (props) {
  return (
    <div>
    <Title> Hello, {props.name} </Title>
    <Button onClick={props.onLogout}> Logout </Button>
    </div>
  )
}
