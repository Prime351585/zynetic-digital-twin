'use client';

import { useStatusStore } from '@/app/Store/status';
import Image from 'next/image';
import temperatureIcon from '../../public/Temperature/temperature.svg';
import chargerIcon from '../../public/Temperature/charger.svg';
import gunIcon from '../../public/Temperature/gun.svg';
import humidityIcon from '../../public/Temperature/humidity.svg';

export default function Temperature() {
    const { status } = useStatusStore();

    return (
        <div className="w-[541px] bg-foreground rounded-lg p-8">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-[24px] font-medium text-notification-heading">Temperature</h2>
                <p className="text-[14px] text-notification-text mt-1">
                    Temperature and Humidity in and around Charger
                </p>
            </div>

            {status?.temperature ? (
                <div className="grid grid-cols-3 gap-8">
                    {/* External Temperature */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Image src={temperatureIcon} alt="temperature" width={12} height={12} />
                            <div>
                                <p className="text-[12px] text-notification-text uppercase tracking-wide">EXTERNAL</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[32px] font-medium text-notification-heading">
                                        {status.temperature.external.value}°
                                    </span>
                                    <span className="text-[16px] text-notification-text">C</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <Image src={humidityIcon} alt="humidity" width={12} height={12} />
                            <div>
                                <p className="text-[12px] text-notification-text uppercase tracking-wide">HUMIDITY</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[32px] font-medium text-notification-heading">
                                        {status.temperature.external.humidity}
                                    </span>
                                    <span className="text-[16px] text-notification-text">%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Charger Temperature */}
                    <div className="space-y-6 border-l border-r border-notification-text/20 px-8">
                        <div className="flex items-center gap-3">
                            <Image src={chargerIcon} alt="charger" width={24} height={24} />
                            <div>
                                <p className="text-[12px] text-notification-text uppercase tracking-wide">CHARGER</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[32px] font-medium text-notification-heading">
                                        {status.temperature.charger.value}°
                                    </span>
                                    <span className="text-[16px] text-notification-text">C</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <Image src={humidityIcon} alt="humidity" width={24} height={24} />
                            <div>
                                <p className="text-[12px] text-notification-text uppercase tracking-wide">HUMIDITY</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[32px] font-medium text-notification-heading">
                                        {status.temperature.charger.humidity}
                                    </span>
                                    <span className="text-[16px] text-notification-text">%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gun Temperatures */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Image src={gunIcon} alt="gun" width={24} height={24} />
                            <div>
                                <p className="text-[12px] text-notification-text uppercase tracking-wide">GUN 1</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[32px] font-medium text-notification-heading">
                                        {status.temperature.guns.gun1}°
                                    </span>
                                    <span className="text-[16px] text-notification-text">C</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <Image src={gunIcon} alt="gun" width={24} height={24} />
                            <div>
                                <p className="text-[12px] text-notification-text uppercase tracking-wide">GUN 2</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[32px] font-medium text-notification-heading">
                                        {status.temperature.guns.gun2}°
                                    </span>
                                    <span className="text-[16px] text-notification-text">C</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-notification-text text-sm">No temperature data available</p>
            )}
        </div>
    );
}
