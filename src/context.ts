import { createContext, useContext, ReactNode } from "react";
import { Profile, ProfileState } from "./interfaces/profile.interface";

export const defaultProfile: Profile = {
    firstName: "Foo",
    lastName: "Bar",
    title: "Software developer"
};

export const defaultProfileState: ProfileState = {
    profile: defaultProfile,
    setProfile: (): void => {}
};

export const ProfileContext = createContext<ProfileState>(defaultProfileState);

export const useProfileContext = (): ProfileState => {
    return useContext(ProfileContext);
};

export interface ProfileContextProviderProps {
    defaults?: Partial<Profile>;
    children?: ReactNode;
}
