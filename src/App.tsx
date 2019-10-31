import React from "react";
import "./App.css";
import { ProfilePage } from "./Profile";
import { ProfileContextProvider } from "./ProfileContextProvider";
import { Profile } from "./interfaces/profile.interface";

export const App: React.FC = () => {
    const defaults: Partial<Profile> = {
        title: "Designer"
    };
    return (
        <ProfileContextProvider defaults={defaults}>
            <ProfilePage />
        </ProfileContextProvider>
    );
};
