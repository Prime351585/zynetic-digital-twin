'use client';

import { useStatusStore } from '@/app/Store/status';
import Image from 'next/image';
import doorIcon from '../../public/Doors/door.svg';

export default function DoorStatus() {
    const { status } = useStatusStore();

    const getDoorStatusColor = (doorStatus: 'open' | 'closed') => {
        return doorStatus === 'open' ? 'text-warning' : 'text-notification-heading';
    };
    const getDoorIconFilter = (doorStatus: 'open' | 'closed') => {
        return doorStatus === 'open'
            ? 'brightness(0) saturate(100%) invert(77%) sepia(71%) saturate(425%) hue-rotate(359deg) brightness(103%) contrast(101%)'
            : 'none';
    }


    return (
        <div className="w-[544px] h-[184px] bg-foreground rounded-lg relative">
            {/* Header Section */}
            <div className="absolute left-8 top-7 flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 w-[108px] h-[11px]">
                    <p className="text-[16px] font-medium leading-[28%] text-notification-heading">
                        Door Status
                    </p>
                    <div className="w-[11px] h-[11px] bg-success rounded-full relative">
                        <div className="absolute w-[9.5px] h-[9.5px] right-[1.12px] top-1/2 -translate-y-1/2 bg-[#D7EBC1] rounded-full invisible"></div>
                    </div>
                </div>
                <p className="text-[12px] font-normal leading-[111%] text-notification-text">
                    Status of Charger Doors
                </p>
            </div>

            {/* Door Status Items */}
            {status?.door ? (
                <>
                    {/* Front Door */}
                    <div className="absolute left-[50px] top-[102px] w-[87px] h-[53.45px]">
                        <p className="text-[14.5px] font-normal leading-[111%] text-notification-text">
                            FRONT DOOR
                        </p>
                        <div className="absolute left-1 top-[34px]">
                            <Image 
                                src={doorIcon} 
                                alt="door" 
                                width={15} 
                                height={15}
                                style={{ filter: getDoorIconFilter(status.door.front) }}
                            />
                        </div>
                        <p className={`absolute left-[23.64px] top-[26.26px] text-[23.32px] font-medium leading-7 capitalize ${getDoorStatusColor(status.door.front)}`}>
                            {status.door.front}
                        </p>
                    </div>

                    {/* First Divider */}
                    <div className="absolute left-[187.85px] top-[129.88px] w-[0.7px] h-[55.53px] bg-linear-to-b from-transparent via-[#ADB7D2] to-transparent"></div>

                    {/* Left Door */}
                    <div className="absolute left-[237.7px] top-[102px] w-[87px] h-[53.45px]">
                        <p className="text-[14.5px] font-normal leading-[111%] text-notification-text">
                            LEFT DOOR
                        </p>
                        <div className="absolute left-1 top-[34px]">
                            <Image 
                                src={doorIcon} 
                                alt="door" 
                                width={15} 
                                height={15}
                                style={{ filter: getDoorIconFilter(status.door.left) }}
                            />
                        </div>
                        <p className={`absolute left-[23.64px] top-[25.45px] text-[23.32px] font-medium leading-7 capitalize ${getDoorStatusColor(status.door.left)}`}>
                            {status.door.left}
                        </p>
                    </div>

                    {/* Second Divider */}
                    <div className="absolute left-[375.56px] top-[129.88px] w-[0.7px] h-[55.53px] bg-linear-to-b from-transparent via-[#ADB7D2] to-transparent"></div>

                    {/* Right Door */}
                    <div className="absolute left-[425.41px] top-[102px] w-[87px] h-[53.45px]">
                        <p className="text-[14.5px] font-normal leading-[111%] text-notification-text">
                            RIGHT DOOR
                        </p>
                        <div className="absolute left-1 top-[34px]">
                            <Image 
                                src={doorIcon} 
                                alt="door" 
                                width={15} 
                                height={15}
                                style={{ filter: getDoorIconFilter(status.door.right) }}
                            />
                        </div>
                        <p className={`absolute left-[24.16px] top-[25.45px] text-[23.32px] font-medium leading-7 capitalize ${getDoorStatusColor(status.door.right)}`}>
                            {status.door.right}
                        </p>
                    </div>
                </>
            ) : (
                <p className="absolute left-8 top-20 text-notification-text text-sm">No door status available</p>
            )}
        </div>
    );
}