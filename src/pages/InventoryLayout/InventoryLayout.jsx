import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Inventory from './Inventory/Inventory';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Navbar from '../../components/ui/Navbar/Navbar';
import Sidecar from '../../components/ui/Sidecar/Sidecar';
import { useSelector } from 'react-redux';

const InventoryLayout = () => {
    const [sidebarMobileview, setSidebarMobileview] = useState(false);
    const [activeTab, setActiveTab] = useState("inventory");

    const { pathname } = useLocation();

    const { shop } = useSelector(state=>state.shop);

    const listOfTabs = [
        {
            title: "Inventory",
            link: `/inventories/inventory/${shop.name}/${shop._id}`
        }
     
    ];

    useEffect(() => {
        const uri = pathname.split("/");
        setActiveTab(uri[2]);
        window.scrollTo(0, 0);
    }, [pathname,activeTab]);

    return (
        <>
            <div className='app-layout'>
                <div className='layout-left' style={sidebarMobileview ? { left: "0px" } : {}}>
                    <Sidecar />
                </div>

                <main className='layout-right' onClick={() => { setSidebarMobileview(false) }}>
                    <Navbar listOfTabs={listOfTabs} activeTab={activeTab} />
                    <div className='layout-right-main'>
                        {activeTab === "inventory" && <Inventory />}
                    </div>
                </main>

                <div
                    className='sidecar-right-arrow'
                    style={sidebarMobileview ? { left: "205px" } : {}}
                    onClick={() => { setSidebarMobileview(!sidebarMobileview) }}
                >
                    {sidebarMobileview ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
                </div>
            </div>
        </>
    );
};

export default InventoryLayout;