import DiagnoseCharger from "./DiagnoseCharger";
import DoorStatus from "./DoorStatus";
import EmergencyStop from "./EmergencyStop";
import GunStatus from "./GunStatus";
import LiveNotifications from "./LiveNotifications";
import MCB from "./MCB";
import Temperature from "./Temperature";

export default function CentrePanel() {
    return (
        <div className="flex gap-3 p-4 min-h-[805px] h-2 overflow-hidden">
            {/* Left Side - Grid Layout */}
            <div className="flex flex-col gap-3">
                {/* First Row */}
                <div className="flex gap-3">
                    <DiagnoseCharger/>
                    <DoorStatus/>
                </div>
                
                {/* Second Row */}
                <div className="flex gap-3">
                    <MCB/>
                    <EmergencyStop/>
                </div>
                
                {/* Third Row */}
                <div className="flex gap-3">
                    <Temperature/>
                    <GunStatus/>
                </div>
            </div>

            {/* Right Side - Notifications */}
            <div className="flex-1 h-full overflow-hidden">
                <LiveNotifications/>
            </div>
        </div>
    )}