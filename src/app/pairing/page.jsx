import supabase from '../../../utils/supabase';

export async function getServerSideProps() {
    const {data, error} = await supabase.from('pairing').select('*');
    return {
        props: {
            data,
            error
        }
    }
}


export default function Pairing( {data}) {

    return (
        <div>
            <h1 className="bg-white f-white">Pairing</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}