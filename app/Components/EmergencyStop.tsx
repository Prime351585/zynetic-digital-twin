'use client';

import { useStatusStore } from '@/app/Store/status';

export default function EmergencyStop() {
    const { status } = useStatusStore();

    const isEngaged = status?.emergencyStop === 'engaged';

    return (
        <div className="w-[383px] h-[241px] bg-foreground rounded-lg relative">
            {/* Header */}
            <div className="absolute left-[29px] top-[31px] flex flex-col gap-2.5">
                <h2 className="text-[16px] font-medium leading-[28%] text-notification-heading">
                    Emergency stop
                </h2>
                <p className="text-[12px] font-normal leading-[111%] text-notification-text">
                    Emergency Stop Status
                </p>
            </div>

            {/* Emergency Stop Indicator */}
            {status?.emergencyStop && (
                <div className="absolute left-[219px] top-1/2 translate-y-[69.5px] flex items-start gap-1.5">
                    {/* Circle Indicator */}
                    <div className="relative w-[22.12px] h-[22.12px] flex-shrink-0">
                        <div 
                            className={`absolute inset-0 rounded-full ${
                                isEngaged ? 'bg-error/20' : 'bg-notification-heading/20'
                            }`}
                        />
                        <div 
                            className={`absolute left-[3.91px] top-[3.9px] w-[14.31px] h-[14.31px] rounded-full ${
                                isEngaged ? 'bg-error' : 'bg-notification-heading'
                            }`}
                        />
                    </div>

                    {/* Status Text */}
                    <div>
                        <p className="text-[14px] leading-[17px] text-notification-text">
                            STOP BUTTON
                        </p>
                        <p className={`text-[16px] leading-[19px] font-medium mt-1 ${
                            isEngaged ? 'text-error' : 'text-notification-heading'
                        }`}>
                            {isEngaged ? 'ENGAGED' : 'Not Engaged'}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
