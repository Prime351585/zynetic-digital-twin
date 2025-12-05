'use client';

import { useStatusStore } from '@/app/Store/status';
import Image from 'next/image';
import gunIcon from '../../public/GunStatus/gun.svg';
import type { GunStatus as GunStatusType } from '@/app/Types/charger';

export default function GunStatus() {
    const { status } = useStatusStore();

    const getStatusColor = (gunStatus: GunStatusType) => {
        switch (gunStatus) {
            case 'charging': return 'text-success';
            case 'armed': return 'text-notification-heading';
            case 'idle': return 'text-neutral';
            case 'fault': return 'text-error';
            default: return 'text-notification-text';
        }
    };

    return (
        <div className="w-[227px] bg-foreground rounded-lg p-8">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-[24px] font-medium text-notification-heading">Gun Status</h2>
                <p className="text-[14px] text-notification-text mt-1">
                    Gun Armed/Charging Status
                </p>
            </div>

            {status?.gun_status ? (
                <div className="space-y-8">
                    {/* Gun 1 */}
                    <div className="flex items-center gap-6">
                        <div >
                            <Image src={gunIcon} alt="gun" width={40} height={40} />
                        </div>
                        <div>
                            <p className="text-[14px] text-notification-text uppercase tracking-wide mb-1">
                                GUN 1
                            </p>
                            <p className={`text-[22px] font-medium uppercase ${getStatusColor(status.gun_status.gun1)}`}>
                                {status.gun_status.gun1}
                            </p>
                        </div>
                    </div>

                    {/* Gun 2 */}
                    <div className="flex items-center gap-6">
                        <div >
                            <Image src={gunIcon} alt="gun" width={40} height={40} />
                        </div>
                        <div>
                            <p className="text-[14px] text-notification-text uppercase tracking-wide mb-1">
                                GUN 2
                            </p>
                            <p className={`text-[22px] font-medium uppercase ${getStatusColor(status.gun_status.gun2)}`}>
                                {status.gun_status.gun2}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-notification-text text-sm">No gun status data available</p>
            )}
        </div>
    );
}
