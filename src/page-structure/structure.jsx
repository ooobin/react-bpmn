import React from 'react';
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Route, Switch } from "react-router-dom";
import Menu from "../components/menu/menu";

// 路由组件
import Test from "../demo/demo00-test";
import Common from "../demo/demo01-common";
import CommonClass from "../demo/demo02-common-class";
import TableDemo from "../demo/demo03-table";
import Timer from "../demo/demo04-timer";
import BreadcrumbDemo from "../demo/demo05-breadcrumb";
import BarEcharts from "../demo/demo08-echarts";
import Props from "../demo/props/parent";

// 函数组件
import MyApp from "../demo/function/demo01-app";
import MyGame from "../demo/function/demo02-game";

class Structure extends React.Component {
    constructor(props) {
        super(props);
        this.headerStyle = {
            textAlign: 'center',
            color: '#fff',
            height: '8vh',
            backgroundColor: '#4096ff',
        };
        this.bodyStyle = {
            height: '92vh'
        }
        this.siderStyle = {
            backgroundColor: '#fff',
        };
        this.state = {};
    }

    render() {
        return (
            <div id="home">
                <Layout>
                    <Header style={this.headerStyle}>Header</Header>
                    <Layout style={this.bodyStyle}>
                        <Sider width="25%" style={this.siderStyle}>
                            <Menu />
                        </Sider>
                        <Content>
                            <Switch>
                                <Route path="/home/test" exact component={Test} />
                                <Route path="/home/common" exact component={Common} />
                                <Route path="/home/common-class" exact component={CommonClass} />
                                <Route path="/home/table-demo" exact component={TableDemo} />
                                <Route path="/home/timer" exact component={Timer} />
                                <Route path="/home/breadcrumb-demo" exact component={BreadcrumbDemo} />
                                <Route path="/home/bar-echarts" exact component={BarEcharts} />
                                <Route path="/home/props" exact component={Props} />

                                {/* 函数组件 */}
                                <Route path="/home/my-app" exact component={MyApp} />
                                <Route path="/home/my-game" exact component={MyGame} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Structure;