import { useState } from "react";
import {
    DashboardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    TeamOutlined,
    BankOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Typography } from "antd";

import {
    Outlet,
    useLocation,
    useNavigate,
} from "react-router-dom";

const { Header, Sider, Content } = Layout;

const menuItems = [
    {
        key: "/admin/dashboard",
        icon: <DashboardOutlined />,
        label: "Dashboard",
    },
    {
        key: "/admin/students",
        icon: <TeamOutlined />,
        label: "Students",
    },
    {
        key: "/admin/faculties",
        icon: <BankOutlined />,
        label: "Faculties",
    },
    {
        key: "/admin/settings",
        icon: <SettingOutlined />,
        label: "Settings",
    },
];

function AdminLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Layout style={{ minHeight: "100vh"}}>
            <Sider
                style={{backgroundColor: "#ffff"}}
                trigger={null}
                collapsible
                collapsed={collapsed}            >
                <div
                    style={{
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#020000",
                        backgroundColor: "#ffffff",
                        fontSize: collapsed ? 18 : 20,
                        fontWeight: 700,
                    }}
                    
                >
                    {collapsed ? "SM" : "Student Manager"}
                </div>

                <Menu
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                    onClick={({ key }) => navigate(key)}
                />
            </Sider>

            <Layout>
                <Header
                    style={{
                        padding: "0 24px",
                        background: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                    }}
                >
                    <Button
                        type="text"
                        icon={
                            collapsed
                                ? <MenuUnfoldOutlined />
                                : <MenuFoldOutlined />
                        }
                        onClick={() => setCollapsed((value) => !value)}
                    />

                    <Typography.Title
                        level={4}
                        style={{ margin: 0 }}
                    >
                        Student Management
                    </Typography.Title>
                </Header>

                <Content
                    style={{
                        margin: 24,
                        padding: 24,
                        background: "#ffffff",
                        borderRadius: 12,
                    }}
                >
                     <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default AdminLayout;