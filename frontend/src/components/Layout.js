import React from 'react';
import { Layout } from 'antd';

import Navbar from './Navbar/Navbar';

const { Content } = Layout;

class CustomLayout extends React.Component {
    render() {
    return (
        <Layout>
        <Navbar />
        <Content style={{ padding: '0 50px' }}>
            <div style={{
                padding: 24,
                minHeight: 280}}>
                {this.props.children}
            </div>
        </Content>
        </Layout>
    )
    }
}

export default CustomLayout;
  