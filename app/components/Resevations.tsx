"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Calendar1 } from "lucide-react";

const PRICE_PER_NIGHT = 130;

export default function Resevations() {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [isSubmitted, setIsSubbmitted] = useState(false);

  const handStartDateSelect = (date : Date | undefined)=> {
    setStartDate(date)
    if(endDate && date && date> endDate){
        setEndDate(undefined)
    }
  }

  const handleEndDateSelected = (date : Date | undefined)=> {
    if(startDate && date && date >= startDate){
        setEndDate(date)
    }
  }

  const calculateNights = ()=> {
    if(startDate && endDate){
        const timeDiff = endDate.getTime()-startDate.getTime();
        return Math.ceil(timeDiff / (1000 * 3600 * 24))
        return 0;
    }
    const totalNights = calculateNights()
    const totalPrice = totalNights * PRICE_PER_NIGHT

    const handleReservation = ()=> {
        setIsSubbmitted(true)
    }

  }

  return (

    <div className="max-w-[1200px] mx-auto p-6 bg-white rounded-xl spac-y-8">
        <h2 className="text-3xl font-bold text-gray-800">
            Réserver vote séjour
        </h2>
        <div className="spacey-4">
            <div className="flex item-center space-x-3">
                <Calendar1 className="text-gray-500 h-5 w-5" />
                <p className="font-medium text-lg text-gray-700">
                    Sélectionner vos dates
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-XL mx-auto">
                <div>
                    <p className="text-sm font-medium text-gray-600">
                        Date d'arrvivée
                    </p>
                    <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={handStartDateSelect}
                    className="rounded-md border shadow-sm mt-2"
                    />
                </div>
            </div>
        </div>
    </div>

  );
}
