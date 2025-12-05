'use client';

import Image from 'next/image';
import { useNotifications } from "@/app/Hooks/useNotifications";
import NotificationCard from "./NotificationCard";
import header from '../../public/Notifications/header.svg';
export default function LiveNotifications()
{
    const { notifications, isLoading, error, removeNotification, clearAllNotifications } = useNotifications();


    return(
        <div className="bg-foreground rounded-lg p-6 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 shrink-0">
                <div className="flex items-center gap-2">
                    <Image src={header} alt="live notifications" width={20} height={20} />
                    <h2 className="text-[16px] font-medium text-notification-heading">Live Notifications</h2>
                </div>
                <button className="text-[14px] text-blue-500 hover:text-blue-400 flex items-center gap-1">
                    More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

            {/* Notifications List */}
            <div className="space-y-3 overflow-y-auto flex-1 scrollbar-hide">
                {isLoading && <p className="text-notification-text">Loading notifications...</p>}
                {error && <p className="text-error">Error: {error}</p>}
                {!isLoading && !error && notifications.length === 0 && (
                    <p className="text-notification-text">No notifications available.</p>
                )}
                {notifications.map((notification, index) => (
                    <NotificationCard
                        key={index}
                        notification={notification}
                    />
                ))}
            </div>
        </div>
    )
}