import React from 'react';
import {Container} from "mdbreact";

export default function CopyRights() {
    return (
        <Container style={{fontSize:'14px'}}>
            &copy; {(new Date().getFullYear())}  <a href="http://www.specjalisto.pl">Specjalisto.pl</a>
        </Container>
    );
}
