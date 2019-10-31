export interface Profile {
    firstName: string;
    lastName: string;
    title: string;
}

export interface ProfileState {
    profile: Profile;
    setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

