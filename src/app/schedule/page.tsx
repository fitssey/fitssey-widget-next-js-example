'use client'
import {useEffect} from "react";

export default function Schedule() {
    // let the Fitssey widget know that page has been mounted
    useEffect(() => {
        window.lb('mounted');
    });

    return (
        <main>
            <lb-schedule-widget hide-header={true}></lb-schedule-widget>
        </main>
    )
}
