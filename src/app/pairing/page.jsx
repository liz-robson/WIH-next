import supabase from '../../../utils/supabase';

async function getData() {
    const {data} = await supabase.from('pairing').select('*');
    return {data}
    };

export default async function Pairing() {
    const {data} = await getData();

    return (
        <div>
            <h1 className="bg-white f-white">Pairing</h1>
            <pre className="bg-white f-white">{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}