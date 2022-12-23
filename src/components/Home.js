import React from 'react';
import Page from "./Page";

function Home() {
    return (
        <Page title="Home">
            <h2 className="text-center">
                Hello <strong>{localStorage.getItem('username')}</strong>, welcome in Car Diary!
            </h2>
            <p className="lead text-muted text-center">Now you can manage your data: add/change/delete your machines, manage your profile and much more. Let's start!</p>
        </Page>
    );
}

export default Home;