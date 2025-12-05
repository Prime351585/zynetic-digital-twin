'use client';

import { useStatusStore } from '@/app/Store/status';
import Image from 'next/image';
import fuseRed from '../../public/Fuse/fuse-red.svg';
import fuseBlue from '../../public/Fuse/fuse-blue.svg';
import fuseBlown from '../../public/Fuse/fuse-blown.svg';

export default function MCB() {
    const { status } = useStatusStore();

    const getFuseIcon = (fuseStatus: 'ok' | 'blown' | 'warning') => {
        switch (fuseStatus) {
            case 'blown': return fuseBlown;
            case 'warning': return fuseRed;
            case 'ok': return fuseBlue;
            default: return fuseBlue;
        }
    };

    const getFuseStatusColor = (fuseStatus: 'ok' | 'blown' | 'warning') => {
        switch (fuseStatus) {
            case 'blown': return 'text-error';
            case 'warning': return 'text-warning';
            case 'ok': return 'text-success';
            default: return 'text-notification-text';
        }
    };

    return (
        <div className="w-[385px] h-[241px] bg-foreground rounded-lg relative overflow-hidden">
            {/* Header */}
            <div className="absolute left-8 top-6 flex items-center gap-2">
                <h2 className="text-[16px] font-medium text-notification-heading">MCB</h2>
                <div className="w-[11px] h-[11px] bg-success rounded-full"></div>
            </div>

            {status?.mcb ? (
                <div className="absolute left-8 top-[72px] flex gap-8">
                    {/* Left Column - Labels and Values */}
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-4">
                            <span className="text-[14px] text-notification-text w-20">kWh</span>
                            <span className="text-[14px] font-medium text-notification-heading">
                                {status.mcb.power.value} kWh
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[14px] text-notification-text w-20">Hz</span>
                            <span className="text-[14px] font-medium text-notification-heading">
                                {status.mcb.frequency.value} Hz
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[14px] text-notification-text w-20">PF</span>
                            <span className="text-[14px] font-medium text-notification-heading">
                                {status.mcb.power_factor.value} PF
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[14px] text-notification-text w-20">Earthing</span>
                            <span className={`text-[14px] font-medium ${status.mcb.earthing ? 'text-notification-heading' : 'text-error'}`}>
                                {status.mcb.earthing ? 'Earthing' : 'Not Connected'}
                            </span>
                        </div>
                    </div>

                    {/* Right Column - Phase Fuses */}
                    <div className="flex gap-6 items-start -mt-6">
                        {/* L1 */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[12px] text-notification-text">L1</span>
                            <div className="relative">
                                <Image 
                                    src={fuseRed} 
                                    alt="L1" 
                                    width={10} 
                                    height={30}
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-[11px] text-notification-heading">
                                    {status.mcb.phases.l1.voltage} V
                                </p>
                                <p className="text-[11px] text-notification-heading">
                                    {status.mcb.phases.l1.current} A
                                </p>
                            </div>
                        </div>

                        {/* L2 */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[12px] text-notification-text">L2</span>
                            <div className="relative">
                                <Image 
                                    src={fuseBlown} 
                                    alt="L2" 
                                    width={16} 
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-[11px] text-notification-heading">
                                    {status.mcb.phases.l2.voltage} V
                                </p>
                                <p className="text-[11px] text-notification-heading">
                                    {status.mcb.phases.l2.current} A
                                </p>
                            </div>
                        </div>

                        {/* L3 */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[12px] text-notification-text">L3</span>
                            <div className="relative">
                                <Image 
                                    src={fuseBlue} 
                                    alt="L3" 
                                    width={10} 
                                    height={30}
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-[11px] text-notification-heading">
                                    {status.mcb.phases.l3.voltage} V
                                </p>
                                <p className="text-[11px] text-notification-heading">
                                    {status.mcb.phases.l3.current} A
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="absolute left-8 top-20 text-notification-text text-sm">No MCB data available</p>
            )}
        </div>
    );
}
