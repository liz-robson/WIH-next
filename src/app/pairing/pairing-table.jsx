'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';

export default function PairingTable() {

    const supabase = createClientComponentClient();
    const [person1, setPerson1] = useState(null);
    const [person2, setPerson2] = useState(null);

    const { data: pairing, error } = supabase.from('pairing').select('person_1_id, person_2_id');

    if (pairing) {
        setPerson1(data.person_1_id);
        setPerson2(data.person_2_id);
    }

    return (
        <table>
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
        </table>
        )
}

