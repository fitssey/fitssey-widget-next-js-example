'use client'
import {useEffect} from "react";

export default function Course() {
    // let the Fitssey widget know that page has been mounted
    useEffect(() => {
        window.lb('mounted');
    });

    return (
        <main>
            <lb-course-widget hide-header={true}></lb-course-widget>
        </main>
    )
}
