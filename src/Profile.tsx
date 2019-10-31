import React, { useState, useEffect } from "react";
import { ReactElement } from "react";
import { useProfileContext } from "./context";

export const ProfilePage = (): ReactElement => {
    const [input, setInput] = useState("");
    const { profile, setProfile } = useProfileContext();
    useEffect(() => {
        setInput(profile.lastName);
    }, [profile]);
    const changeLastName = (e: any) => {
        setProfile({ ...profile, lastName: e });
    };
    return (
        <div>
            {profile.firstName} | {profile.lastName} | {profile.title}
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onBlur={e => changeLastName(e.target.value)}
            />
        </div>
    );
};
