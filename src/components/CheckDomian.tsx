"use client";

import { useState } from "react";

type CheckDomainPops = {
    domainId: number
}

type CheckResult = {
    domainId: number;
    date: string;
    status: number;
}

export function CheckDomain({ domainId }: CheckDomainPops) {
    const [result, setResult] = useState<CheckResult | null>(null)
    const [increaseId, setIncreaseId] = useState<number>(0);

    async function handleCheck() {
        const response = await fetch(`api/domain-checks/${domainId}`);
        const data = await response.json();

        setResult({
            domainId: data.id,
            date: new Date().toISOString(),
            status: data.status,
        });

        setIncreaseId(prevId => prevId + 1);
    }

    return (
        <>
            <button onClick={handleCheck}>Check domian</button>
            {result && (
                < div >
                    <p>id:{increaseId}</p>
                    <p>domain_Id:{result.domainId}</p>
                    <p>date:{result.date}</p>
                    <p>status:{result.status}</p>
                </div >
            )}
        </>
    );
}
