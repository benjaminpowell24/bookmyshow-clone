import React, { useEffect, useState } from "react";

const User = (props) => {
    const [name, setName] = useState("User123456");


    useEffect(() => {
        console.log(`NAME SET TO ${name}`);
    }, [name]);


    return (
        <>
            <div>{name}</div>
            <button onClick={() => (name === "Jeff" ? setName("Ben") : setName("Jeff"))}>Change Name</button>
        </>
    )
}

export default User;