import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { TbWorldSearch } from 'react-icons/tb';
import { RiAdvertisementFill } from 'react-icons/ri';
import { MdMarkEmailUnread } from 'react-icons/md';
import { FaLaptop } from 'react-icons/fa';
import { GrCloudComputer } from 'react-icons/gr';

const ServiceContent = ({ data = [] }) => {
    const iconMap = {
        HiOutlineDesktopComputer,
        TbWorldSearch,
        RiAdvertisementFill,
        MdMarkEmailUnread,
        FaLaptop,
        GrCloudComputer,
    };

    return (
        <div className="mt-20 max-w-[1200px] mx-auto p-3">
            <div className="flex flex-col gap-12">
                {data.map((item, index) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                        <div key={index} className="flex justify-between items-center gap-3 flex-wrap">
                            {/* Conditional rendering for even and odd indexes */}
                            {index % 2 === 0 ? (
                                <>
                                    <div className="w-full md:w-1/2 order-1 md:order-none">
                                        <div className="flex items-center gap-3 pr-2">
                                            {IconComponent && (
                                                <IconComponent className="text-3xl text-purple-500 hover:text-white mb-3" />
                                            )}
                                            <h3 className="text-purple-600 font-semibold hover:underline">
                                                {item.slogan}
                                            </h3>
                                        </div>
                                        <h2 className="text-2xl font-bold">{item.head}</h2>
                                        <p className="whitespace-normal overflow-visible text-clip mt-2">{item.desc}</p>
                                    </div>
                                    <div>
                                        <img src={item.img} alt="Service" className="w-[500px] h-[300px] object-cover" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <img src={item.img} alt="Service" className="w-[500px] h-[300px] object-cover" />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="flex items-center gap-3 pr-2">
                                            {IconComponent && (
                                                <IconComponent className="text-3xl text-purple-500 hover:text-white mb-3" />
                                            )}
                                            <Link to={item.link}>
                                                <h3 className="text-purple-600 font-semibold hover:underline">
                                                    {item.slogan}
                                                </h3>
                                            </Link>
                                        </div>
                                        <h2 className="text-2xl font-bold">{item.head}</h2>
                                        <p className="whitespace-normal overflow-visible text-clip mt-2">{item.desc}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ServiceContent;
