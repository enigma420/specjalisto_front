import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper/index";
import {
    Col,
    Row
} from "mdbreact";
import OutputCommissions from './OutputCommissions'

import SearchCommissions from "./SearchCommissions";

class Commissions extends Component {
    render() {

        return (
            <div style={{padding: '100px 0 0 100px'}}>
                <Paper style={{padding: '10px', margin: '10px', borderRadius: '20px', minWidth: '1135px'}}>
                    <Row>
                        <Col md={4}>
                            <SearchCommissions/>
                        </Col>
                        <Col md={8}>
                            <OutputCommissions/>
                        </Col>
                    </Row>
                </Paper>
            </div>

        );
    }
}

export default Commissions;