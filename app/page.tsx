'use client';

import Image from "next/image";
import CentrePanel from "./Components/CentrePanel";
import { useEffect } from "react";
import { useStatusStore } from "./Store/status";
import LiveNotifications from "./Components/LiveNotifications";
import LeftPanel from "./Components/LeftPanel";

export default function Home() {
  const { fetchStatus } = useStatusStore();

  useEffect(() => {
    fetchStatus('id');

    const interval = setInterval(() => {
      fetchStatus('your-charger-id');
    }, 30000); 

    return () => clearInterval(interval);
  }, [fetchStatus]);

  return (  
    <div>

    <div className="flex flex-row scale-[0.88] origin-top-left w-[113%] h-[113%] ">
    <LeftPanel/>
    <CentrePanel/>
    {/* <LiveNotifications/> */}
    </div>
    </div>
  )
}
