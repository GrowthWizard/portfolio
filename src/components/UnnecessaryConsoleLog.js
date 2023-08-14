"use client"

import { useEffect } from "react";

export default function UnnecessaryConsoleLogStatement() {
    useEffect(() => {
        console.log('%cWillkommen auf meinem Portfolio. Für Projektanfragen bin ich unter: hello@steindominik.de erreichbar.', 'color: red');
      }, []);

    return (
      <>

      </>
    )
}