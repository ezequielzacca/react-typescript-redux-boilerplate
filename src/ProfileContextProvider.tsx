import React, { useState, ReactElement } from "react";
import {
    defaultProfile,
    ProfileContextProviderProps,
    ProfileContext
} from "./context";
import { Profile } from "./interfaces/profile.interface";
export const ProfileContextProvider = (
    props: ProfileContextProviderProps
): ReactElement => {
    const [profile, setProfile] = useState<Profile>({
        ...defaultProfile,
        ...props.defaults
    });

    return (
        <ProfileContext.Provider
            value={{
                profile,
                setProfile
            }}
        >
            {props.children}
        </ProfileContext.Provider>
    );
};
