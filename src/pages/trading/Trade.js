import React from "react";
import Cards from "../../components/Cards/Cards";
import Candlebarchart from '../../components/Charts/Candlebarchart'
import Dropbtn from "../../components/dropdown/Dropbtn";
import Sidedrawer from '../../components/sidedrawerleft/Sidedrawer'
import Predictcard from '../../components/prediction/Predictcard'
import { Row, Col } from "antd"


export const Trade = () => {
    return <div >

        <Row gutter={0, 0}>
            <Col className="gutter-row" span={1}>
                <Sidedrawer />
            </Col>

            <Col className="gutter-row" span={19}>
                <Dropbtn />
                <Cards />
                <Candlebarchart />

            </Col>

            <Col className="gutter-row" span={4}>
                <Predictcard />
            </Col>

        </Row>






    </div>
};