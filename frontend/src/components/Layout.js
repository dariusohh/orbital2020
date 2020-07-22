import React from 'react';
import { Layout } from 'antd';
import Dashboard from './Dashboard/Dashboard'
import Navbar from './Navbar/Navbar';

const { Content } = Layout;

class CustomLayout extends React.Component {
    render() {
    return (
        <div>

        { (!(['/register','/','/login','/listing'].includes(window.location.pathname) || window.location.pathname.startsWith('/profile/'))
            || (window.location.pathname === '/listing' && localStorage.getItem("username")) 
            || (window.location.pathname.startsWith('/profile/') && localStorage.getItem("username"))
            || (window.location.pathname === '/profile/'))
            ?
        <Dashboard child={this.props.children}/>
            :
            <div>{this.props.children}</div>
        }
        </div>
                /* <Layout>
        <Navbar />
        <Content style={{ padding: '0 50px' }}>
            <div style={{
                padding: 24,
                minHeight: 280}}>
                {this.props.children}
            </div>
        </Content>
        </Layout> */
    )
    }
}

export default CustomLayout;
  