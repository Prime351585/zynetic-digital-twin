'use client';
export default function DiagnoseCharger() {

    const handleDiagnose = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/charger/:id/diagnose`, {
                method: 'POST'
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="w-56 h-[184px] bg-foreground p-6 rounded-lg">
           <div className="flex flex-col justify-between h-full">
            <div>
           <p className="text-[16px] text-notification-heading">Diagnose Charger</p> 
           <p className="text-[12px] text-notification-text">Scan to Start Diagnosis</p> 
            </div>
            <button 
                onClick={handleDiagnose}
                className="w-[169px] h-[48px]  top-[113px] bg-success hover:bg-success/80 rounded-sm"
            >
                Scan
            </button>
           </div>
        </div>
    )
}