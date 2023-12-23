import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { ImCheckmark } from "react-icons/im";
import mode from "../../Images/Mode.svg";
import arr from "../../Images/DownArrow.svg";

const Setting = () => {
	return (
		<div className="flex flex-col ml-[27px] sanchez gap-[21px] mt-[16px]">
			<div className="text-[36px] font-normal">Setting</div>
			<div className="flex flex-col mb-16">
				<div className="flex gap-2 pl-[32px] items-center rounded-md h-[58px] w-[1066px] text-[25px] bg-[#55D6C2]">
					General <IoIosArrowDown className="text-4xl" />
				</div>
				<div className="flex flex-col  w-[1065px] items-end">
					<div className="flex items-center justify-between px-[34px] h-[57px] w-[1021px] bg-[#C4C4C45E] text-[25px]">
						<div>Language</div>
						<img className="cursor-pointer" src={mode} alt="" />
					</div>
					<div className="flex items-center justify-between pl-[34px] pr-[58px]  h-[57px] w-[1021px] bg-[#C4C4C48F] text-[25px]">
						<div>Data Backup</div>
						<div>
							<ImCheckmark className="bg-white text-2xl" />
						</div>
					</div>
				</div>
				<div className="flex gap-2 pl-[32px] items-center rounded-md h-[58px] w-[1066px] text-[25px] bg-[#55D6C2]">
					Connect To <IoIosArrowDown className="text-4xl" />
				</div>
				<div className="flex flex-col  w-[1065px] items-end">
					<div className="flex items-center justify-between px-[34px] pr-[58px] h-[57px] w-[1021px] bg-[#C4C4C45E] text-[25px]">
						<div>Go Dash</div>
						<div>
							<ImCheckmark className="bg-white font-bold text-2xl" />
						</div>
					</div>
					<div className="flex items-center justify-between pl-[34px] pr-[58px]  h-[57px] w-[1021px] bg-[#C4C4C48F] text-[25px]">
						<div>SuperController</div>
						<div>
							<ImCheckmark className="bg-white font-bold text-2xl" />
						</div>
					</div>
				</div>
				<div className="flex gap-2 pl-[32px] items-center rounded-md h-[58px] w-[1066px] text-[25px] bg-[#55D6C2]">
					Email <IoIosArrowDown className="text-4xl" />
				</div>
				<div className="flex flex-col  w-[1065px] items-end">
					<div className="flex items-center justify-between px-[34px] pr-[58px] h-[57px] w-[1021px] bg-[#C4C4C45E] text-[25px]">
						<div>Enable SMTP</div>
						<div>
							<ImCheckmark className="bg-white font-bold text-2xl" />
						</div>
					</div>
				</div>
				<div className="flex gap-2 pl-[32px] items-center rounded-md h-[58px] w-[1066px] text-[25px] bg-[#55D6C2]">
					Authorization <IoIosArrowDown className="text-4xl" />
				</div>
				<div className="flex flex-col  w-[1065px] items-end">
					<div className="flex items-center justify-between px-[34px] pr-[58px] h-[57px] w-[1021px] bg-[#C4C4C45E] text-[25px]">
						<div>Edit authorization</div>
						<div>
							<ImCheckmark className="bg-white font-bold text-2xl" />
						</div>
					</div>
					<div className="flex items-center justify-between px-[34px]  h-[57px] w-[1021px] bg-[#C4C4C48F] text-[25px]">
						<div>Authority Level</div>
						<img className="cursor-pointer" src={arr} alt="" />
					</div>
				</div>
				<div className="flex gap-2 pl-[32px] items-center rounded-md h-[58px] w-[1066px] text-[25px] bg-[#55D6C2]">
					Notification <IoIosArrowDown className="text-4xl" />
				</div>
				<div className="flex flex-col  w-[1065px] items-end">
					<div className="flex items-center justify-between px-[34px] pr-[58px] h-[57px] w-[1021px] bg-[#C4C4C45E] text-[25px]">
						<div>Enable Notification</div>
						<div>
							<ImCheckmark className="bg-white font-bold text-2xl" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Setting;
