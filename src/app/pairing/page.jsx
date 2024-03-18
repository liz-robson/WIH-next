
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import PairingTable from "./pairing-table";

export default async function Pairing() {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const { data } = await supabase.from('pairing').select();


    return (
        <div>
            <h1 className="bg-white f-white">Pairing</h1>
            <PairingTable data={data}/>
        </div>
    )
}