import React from 'react';
import Sidedrawer from '../../components/sidedrawerleft/Sidedrawer'
import  AreaChart  from "../../components/Charts/GoogleChart"
import { Row, Col } from "antd"
import { PageSideBar } from "../../components/Side bar/PageSideBar";
import  {DropdownTable}  from "../../components/dropdown/DropdownTable";
import { TopTab } from "../../components/Top Tab/TopTab";



export const Landingpage = () => {
  return <div>
      <Row gutter={0, 0}>
            <Col className="gutter-row" span={1}>
                <Sidedrawer />
            </Col>

            <Col className="gutter-row graphMain" span={19}>
                {/* <Dropbtn />
                <Cards /> */}
                <DropdownTable />
                <TopTab />
                <AreaChart/>

            </Col>

            <Col className="gutter-row pageBarMain" span={4}>
                {/* <Predictcard /> */}
                {/* <PageBar />
                <DealList /> */}
                <PageSideBar />
            </Col>

        </Row>
        </div>;
};




      