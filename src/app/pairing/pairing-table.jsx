'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

export default function PairingTable( props ) {

    const supabase = createClientComponentClient();
    const [person1, setPerson1] = useState(null);
    const [person2, setPerson2] = useState(null);
    const [data, setData] = useState(props.data);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setData(props.data);
        }, [props.data]);

    return ( 
        <>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Person 1</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Person 2</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((pairing) => (
                <tr key={pairing.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{pairing.person_1_id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{pairing.person_2_id}</td>
                 </tr>
                ))}
            </tbody>
        </table>
        </>
)
}




