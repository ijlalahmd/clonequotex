import React from "react";
import Cards from "../../components/Cards/Cards";
import Candlebarchart from '../../components/Charts/Candlebarchart'
import Dropbtn from "../../components/dropdown/Dropbtn";
import Sidedrawer from '../../components/sidedrawerleft/Sidedrawer'
import Predictcard from '../../components/prediction/Predictcard'
import { Row, Col } from "antd"
import { TopTab } from "../../components/Top Tab/TopTab";
import  {DropdownTable}  from "../../components/dropdown/DropdownTable";
import { DealList } from "../../components/deal list/DealList";
import "./trade.css"
import { PageBar } from "../../components/Pagebar/PageBar";
import { PageSideBar } from "../../components/Side bar/PageSideBar";

export const Trade = () => {
    return <div >

        <Row gutter={0, 0}>
            <Col className="gutter-row" span={1}>
                <Sidedrawer />
            </Col>

            <Col className="gutter-row graphMain" span={19}>
                {/* <Dropbtn />
                <Cards /> */}
                <DropdownTable />
                <TopTab />
                <Candlebarchart />

            </Col>

            <Col className="gutter-row pageBarMain" span={4}>
                {/* <Predictcard /> */}
                {/* <PageBar />
                <DealList /> */}
                <PageSideBar />
            </Col>

        </Row>






    </div>
};