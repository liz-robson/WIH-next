import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import PairingTable from "./pairing-table";

export default async function Pairing() {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const { data: pairing } = await supabase.from('pairing').select('*');
    console.log(pairing);

    return (
        <div>
            <h1 className="bg-white f-white">Pairing</h1>
            <PairingTable />
        </div>
    )
}