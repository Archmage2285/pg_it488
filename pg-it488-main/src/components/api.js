import { Amplify, API } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';
import { useEffect, useState } from 'react';




function APIFile() {
    const [res, setRes] = useState("");

    useEffect(() => {
        const getData = async () => {
            const apiName = 'testApi';
            const path = '/testdb';
            const myInit = {
                headers: {} // OPTIONAL
            };

            const apiRes = await API.get(apiName, path, myInit);
            setRes(apiRes)
        }

        getData().catch(console.error);



    }, [])
    return (
        <> {res ? (<p>{res.Item.timestamp.S}</p>) : (<></>)
        } </>

    );
}

export default APIFile