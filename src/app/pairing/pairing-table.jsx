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
        <h1>Pairing table</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        {/* <table>
            <thead>
                <tr>
                    <th>Person 1</th>
                    <th>Person 2</th>
                </tr>
            </thead>
            <tbody>
                {pairing.map((pairing) => (
                <tr key={pairing.id}>
                    <td>{pairing.person_1_id}</td>
                    <td>{pairing.person_2_id}</td>
                 </tr>
                ))}
            </tbody>
        </table> */}
        </>
)
}




