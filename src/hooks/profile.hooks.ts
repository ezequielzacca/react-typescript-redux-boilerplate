import { Profile, ProfileState } from "../interfaces/profile.interface";
import { useState } from "react";

export const useProfile = (overrides?: Partial<Profile>): ProfileState => {
    const defaultProfile: Profile = {
        firstName: "Foo",
        lastName: "Bar",
        title: "Software developer"
    };

    const [profile, setProfile] = useState<Profile>({
        ...defaultProfile,
        ...overrides
    });

    return { profile, setProfile };
};
