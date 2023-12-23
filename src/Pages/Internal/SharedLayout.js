import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Navbar";
import SideBar from "../../Components/SidebarLayout";
import Footer from "../../Components/Footer";

const SharedLayout = () => {
	return (
		<div className="h-full">
			<Navigation />
			<div className="flex  h-full   w-full">
				<SideBar />
				<div className=" w-full  ">
					<div className="min-h-[99vh]">
						<Outlet />
					</div>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default SharedLayout;
