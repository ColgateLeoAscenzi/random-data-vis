import { useEffect } from "react";

function DataTables()
{

    // type OrderBook  = {
    // [security: string] :
    // {
    //     bids: Record<string, string>;
    //     asks: Record<string, string>;
    // };
    // }

    useEffect(() => {
        console.log("fetching all data");   
    }
    , []);
    return <div>HIII</div>
}

export default DataTables;