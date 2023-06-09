import { Button, Image, Menu } from 'antd';
import React, { useState } from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import {
    AiOutlineLogout,
    AiOutlineMenuFold,
    AiOutlineMenuUnfold,
} from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import Title from 'antd/es/skeleton/Title';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

export default function MenuNavigator() {
    const navigate = useNavigate();
    const items = [
        getItem('Home', '/listmovie', <HiOutlineHome size={30} />),
        getItem('Add Movie', '/addmovie', <IoAddCircleOutline size={30} />),
        {
            label: 'Logout',
            // link: '', // Có thể để trống hoặc gán giá trị null nếu không có link
            icon: <AiOutlineLogout size={30} />,
            onClick: () => {
                handleLogout(); // Gọi hàm handleLogout khi nhấp vào mục 'Logout'
            },
        },
    ];
    const handleLogout = () => {
        window.location.href = '/';
        localStorage.clear();
    };
    return (
        <div
            style={{
                height: '100%',
                backgroundColor: '#001529',
                padding: '24px 0',
                position: 'relative',
            }}
        >
            <div
                style={{
                    borderRadius: 25,

                    width: '50%',
                    overflow: 'hidden',
                    margin: 'auto',
                }}
            >
                <Image
                    height={100}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    preview={false}
                />
            </div>
            <div style={{ padding: '16px 0' }}>
                <h5 style={{ color: '#fff' }}> Angela Grey</h5>
            </div>

            <div
                style={{
                    padding: '24px 0',
                }}
            >
                <Menu
                    defaultSelectedKeys={[window.location.pathname]}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    items={items}
                    onClick={({ key }) => {
                        navigate(key);
                    }}
                ></Menu>
            </div>
        </div>
    );
}
