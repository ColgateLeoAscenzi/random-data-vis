import React, {useEffect, useState} from 'react';

type StreamCellProps = {
    data: string;
    isTitle?: boolean;

}
const StreamCell = React.memo(({data, isTitle} : StreamCellProps) => 
{

    const [isBlinking, setIsBlinking] = useState<boolean>(false);


    useEffect(() => {
        if (!isTitle) { 
            setIsBlinking(true);
            const timeout = setTimeout(() => setIsBlinking(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [data, isTitle]);

    return <div className=
                {
                    `min-h-16 text-center content-center border-1 bg-gray-600 
                    ${isTitle && "border-none bg-gray-900"}
                    ${isBlinking && "bg-green-500 transition-colors duration-300 ease-out"}
                    `
                }
        >{data}</div>
});

export default StreamCell;