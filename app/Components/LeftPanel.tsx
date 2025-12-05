'use client';

import { useStatusStore } from '@/app/Store/status';
import Image from 'next/image';
import temperatureIcon from '../../public/MainPanel/temperature.svg';
import humidityIcon from '../../public/Temperature/humidity.svg';
import simIcon from '../../public/MainPanel/sim.svg';
import lanIcon from '../../public/MainPanel/lan.svg';
import wifiIcon from '../../public/MainPanel/wifi.svg';
import greenFuseIcon from '../../public/MainPanel/greenFuse.svg';
import brokenFuseIcon from '../../public/MainPanel/brokenFuse.svg';
import blueGunIcon from '../../public/MainPanel/BlueGun.svg';
import greenGunIcon from '../../public/MainPanel/GreenGun.svg';
import upIcon from "../../public/MainPanel/Up1.svg"
import middle from "../../public/MainPanel/middlepanel.svg"
import fuseBox from "../../public/MainPanel/FuseBox.svg"
export default function LeftPanel() {
    const { status } = useStatusStore();

    return (
        <div className='flex flex-row items-center '>
            <Image src={blueGunIcon} alt="blueGun" width={90} height={90} className="-mr-7"/>

        <div className="w-60 bg-notification-card rounded-lg border-4 border-gray-300 relative p-2">
            {/* {Guns} */}
            {/* Connectivity Icons - Top */}
            <div className='bg-[#141824] flex flex-row items-center justify-center rounded-lg mb-6 py-2 gap-2'>
                <div className={`w-[51px] h-[51px] flex items-center justify-center rounded-lg border-2 ${
                    status?.connectivity.sim ? 'bg-foreground border-gray-600' : 'bg-foreground/30 border-gray-700'
                }`}>
                    <Image src={simIcon} alt="sim" width={25} height={25} className={status?.connectivity.sim ? 'opacity-100' : 'opacity-30'} />
                </div>
                <div className={`w-[51px] h-[51px] flex items-center justify-center rounded-lg border-2 ${
                    status?.connectivity.lan ? 'bg-foreground border-gray-600' : 'bg-foreground/30 border-gray-700'
                }`}>
                    <Image src={lanIcon} alt="lan" width={25} height={25} className={status?.connectivity.lan ? 'opacity-100' : 'opacity-30'} />
                </div>
                <div className={`w-[51px] h-[51px] flex items-center justify-center rounded-lg border-2 ${
                    status?.connectivity.wifi ? 'bg-linear-to-b from-black to-[#1eaf27] border-success' : 'bg-foreground/30 border-gray-700'
                }`}>
                    <Image src={wifiIcon} alt="wifi" width={25} height={25} className={status?.connectivity.wifi ? 'opacity-100' : 'opacity-30'} />
                </div>
            </div>
            {/*CCU TCU UP1*/}
                <div className='bg-[#141824] flex flex-col items-center justify-center rounded-lg mb-6 py-2 px-2'>
                <div className='flex flex-row mt-2 justify-between w-full gap-2'>
                <div className={`w-[63px] h-[35px] flex items-center justify-center rounded-lg text-[10px] font-medium ${
                    status?.modules.ccui.status === 'online' ? 'bg-gray-700 text-gray-400' : 'bg-foreground text-gray-600'
                }`}>
                    CCUI
                </div>
                <div className={`w-[63px] h-[35px] flex items-center justify-center rounded-lg text-[10px] font-medium ${
                    status?.modules.tcu.status === 'online' ? 'bg-linear-to-b from-black to-[#1eaf27] text-white' : 'bg-foreground text-gray-600'
                }`}>
                    TCU
                </div>
                <div className={`w-[63px] h-[35px] flex items-center justify-center rounded-lg text-[10px] font-medium ${
                    status?.modules.ccu2.status === 'online' ? 'bg-linear-to-b from-black to bg-warning text-white' : 'bg-foreground text-gray-600'
                }`}>
                    CCU2
                </div>
                </div>
                <div className='flex flex-row mt-2 justify-between w-full gap-2'>
                    <div className={`w-[51px] h-[51px] flex items-center justify-center rounded-lg text-[10px] font-medium ${
                        status?.modules.plc2.status === 'online' ? 'bg-gray-700 text-gray-400' : 'bg-foreground text-gray-600'
                    }`}>
                        PLC 1
                    </div>
                    <div className="flex gap-1">
                        <div className={`w-[34px] h-[51px] flex flex-col items-center justify-center rounded-sm text-[10px] font-medium ${
                            status?.modules.up1.status === 'online' ? 'bg-linear-to-b from-black to-[#1eaf27] text-white' : 'bg-foreground text-gray-600'
                        }`}>
                            <Image src={upIcon} alt="up1" width={20} height={20} />
                          
                        </div>
                        <div className={`w-[34px] h-[51px] flex flex-col items-center justify-center rounded-sm text-[10px] font-medium ${
                            status?.modules.up1.status === 'online' ? 'bg-linear-to-b from-black to-[#1eaf27] text-white' : 'bg-foreground text-gray-600'
                        }`}>
                            <Image src={upIcon} alt="up1" width={20} height={20} />
                           
                        </div>
                    </div>
                    <div className={`w-[51px] h-[51px] flex items-center justify-center rounded-lg text-[10px] font-medium ${
                        status?.modules.plc2.status === 'online' ? 'bg-linear-to-b from-black to bg-error text-notification-heading' : 'bg-foreground text-gray-600'
                    }`}>
                        PLC 2
                    </div>
                </div>
                {/* middle svg */}

            </div>
            <div className='my-2'>
                <Image src={middle} alt="middle" width={210} height={10} className="mt-2"/>
            </div>
            {/* Fuses Bottom */}
            <div className='bg-[#141824] p-3'>
                <Image src={fuseBox} alt="fusebox" width={210} height={80} className="mb-2"/>
                {/* {Fuses} */}
                <Image src={greenFuseIcon} alt="greenFuse" width={15} height={15} className="absolute top-[326px] left-[105px] rotate-90 "/>
                <Image src={greenFuseIcon} alt="greenFuse" width={15} height={15} className="absolute top-[355px] left-[51px]  "/>
                <Image src={greenFuseIcon} alt="greenFuse" width={15} height={15} className="absolute top-[355px] right-[56px]  "/>
                <Image src={greenFuseIcon} alt="greenFuse" width={15} height={15} className="absolute top-[399px] right-[50px] rotate-90  "/>
                <Image src={greenFuseIcon} alt="greenFuse" width={15} height={15} className="absolute top-[398px] left-[48px] rotate-90  "/>
                <Image src={brokenFuseIcon} alt="greenFuse" width={37} height={37} className="absolute top-[376px] left-[92px]  "/>
                {/* {texts} */}
                <p className="absolute top-[326px] left-[69px] text-[8px] text-white">FU1</p>
                <p className="absolute top-[326px] right-[76px] text-[8px] text-white">FU1</p>
                <p className="absolute top-[326px] right-[110px] text-[8px] text-white">KM31</p>
                <p className="absolute top-[360px] left-[70px] text-[8px] text-white">KM11</p>
                <p className="absolute top-[360px] right-[32px] text-[8px] text-white">KM22</p>
                <p className="absolute top-[394px] right-[110px] text-[8px] text-white">KM32</p>
                <p className="absolute top-[422px] right-[47px] text-[8px] text-white">KM22</p>
                <p className="absolute top-[422px] left-[47px] text-[8px] text-white">KM12</p>
            </div>

                {/* AC/MCB panel */}
                <div className='bg-[#141824] rounded-xl relative h-[109px] mt-2'>
                    {/* Emergency Stop - Center */}
                    <div className='absolute left-1/2 -translate-x-1/2 top-[11px] flex flex-col items-center gap-[5px]'>
                        {/* Emergency Stop Button */}
                        <div className='relative w-[22.12px] h-[22.12px]'>
                            <div className='absolute inset-0 rounded-full bg-[rgba(255,210,206,0.2)]'></div>
                            <div className='absolute left-[3.91px] top-[3.9px] w-[14.31px] h-[14.31px] rounded-full bg-[#FF5546]'></div>
                        </div>
                        <span className='text-[8px] text-notification-heading font-medium text-center'>Emergency<br/>stop</span>
                    </div>

                    {/* AC Unit - Left */}
                    <div className='absolute left-1.5 top-[45.5px] w-[42px] h-10'>
                        <div className='absolute inset-0 bg-linear-to-b from-[#FFC932] to-[#FFC933] border border-[#FFC933] rounded-[5.56px] z-1'></div>
                        <div className='absolute left-[0.61%] right-[0.61%] top-[0.65%] bottom-[0.65%] bg-linear-to-b from-[rgba(255,201,50,0.5)] to-[#FFC933] border border-[#FFC933] rounded-[5.56px]'></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <span className='text-[12px] font-medium text-[#141824] z-2'>AC</span>
                        </div>
                        {/* AC Lines */}
                        <div className='absolute left-[9px] -top-[10px] w-10 h-[62px] flex gap-[9px] '>
                            <div className='w-0.5 h-[62px] border-l-2 border-[#FF5546]'></div>
                            <div className='w-0.5 h-[62px] border-l-2 border-[#99A7CF]'></div>
                            <div className='w-0.5 h-[62px] border-l-2 border-[#3377FF]'></div>
                        </div>
                    </div>

                    {/* SPD Unit - Center Bottom */}
                    <div className='absolute left-[86.5px] top-[75px] w-[34px] h-[23px]'>
                        <div className='absolute inset-0 bg-[#212637] rounded-[5.56px]'></div>
                        <div className='absolute left-[6.86px] top-[4.33px] flex flex-col items-center gap-px'>
                            <span className='text-[12px] font-medium text-[#3E4D6A]'>SPD</span>
                        </div>
                    </div>

                    {/* MCB Unit - Right */}
                    <div className='absolute right-[9px] top-[45.5px] w-[42px] h-10 '>
                        <div className='absolute inset-0 bg-[#3E4D6A] border-[0.5px] border-[#434D6E] rounded-[5.56px] z-1'></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <span className='text-[12px] font-medium text-[#141824] z-2'>MCB</span>
                        </div>
                        {/* MCB Lines */}
                        <div className='absolute left-[10px] -top-[10px] w-10 h-[62px] flex gap-[9px]'>
                            <div className='w-0.5 h-[62px] border-l-2 border-[#FF5546]'></div>
                            <div className='w-0.5 h-[62px] border-l-2 border-[#FFC933]'></div>
                            <div className='w-0.5 h-[62px] border-l-2 border-[#3377FF]'></div>
                        </div>
                    </div>
                </div>

                {/* Temperature and Humidity Panel */}
                <div className='bg-[#141824] rounded-xl relative p-2 mt-2 flex items-center justify-between h-[60px]'>
                    <div className='flex flex-row justify-between w-full px-4'>
                        <div className='flex flex-row items-center '>
                            <Image src={temperatureIcon} alt="temperature" width={6} height={6} className='mt-1'/>
                            <span className='text-[12px] text-notification-heading font-medium mt-1 pl-1'>
                                {status?.temperature ? `${status.temperature.external.value}°C` : 'N/A'}
                            </span>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Image src={humidityIcon} alt="humidity" width={10} height={10} className='mt-1' />
                            <span className='text-[12px] text-notification-heading font-medium mt-1 pl-1'>
                                {status?.temperature ? `${status.temperature.external.humidity}%` : 'N/A'}
                            </span>
                        </div>
                            <div className='flex flex-row items-center'>
                            <Image src={temperatureIcon} alt="temperature" width={6} height={6} className='mt-1' />
                            <span className='text-[12px] text-notification-heading font-medium mt-1 pl-1'>
                                {status?.temperature ? `${status.temperature.external.value}°C` : 'N/A'}
                            </span>
                        </div>
                    </div>
                </div>

            
        </div>
            <Image src={greenGunIcon} alt="greenGun" width={90} height={90} className=" -ml-7 "/>

        </div>
    );
}
