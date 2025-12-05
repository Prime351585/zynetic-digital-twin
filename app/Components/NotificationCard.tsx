import type { Notification } from "../../env.d.ts";
import Image from "next/image";
import warning from "../../public/Notifications/warning.svg"
import error from "../../public/Notifications/error.svg"
// import success from "../../public/Notifications/success.svg"

export default function NotificationCard(props: {notification: Notification, key: number})
{
    const getIcon = () => {
        switch(props.notification.type) {
            case 'warning': return warning;
            case 'error': return error;
            // case 'success': return success;
            default: return null;
        }
    };


return(
    <div key={props.key} className=" w-[200px] h-[75px] bg-notification-card p-2 m-2 rounded-lg">
        <div className="flex justify-between items-start text-[9px] px-2 text-notification-text">
            
        <div>{props.notification.time} | {props.notification.date} </div>
         {props.notification.type=="warning" && (
            <div className="text-warning bg-warning/30 p-0.5 flex items-center gap-1 rounded-xs">
                {getIcon() && <Image src={getIcon()} alt={props.notification.type} width={12} height={12} />}
                {props.notification.id}
            </div>
         )}
            {props.notification.type=="error" && (
            <div className="text-error bg-error/30 p-0.5 flex items-center justify-center gap-1 rounded-xs">
                {getIcon() && <Image src={getIcon()} alt={props.notification.type} width={12} height={12}/>}
                {props.notification.id}
            </div>
            )}
        </div>
        {/* {props.notification.type} */}
        <div className="px-2 pt-2 text-[13px] text-notification-heading">

        {props.notification.message}
        </div>
    </div>
)
}