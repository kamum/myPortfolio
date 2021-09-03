import React, { useState, useEffect } from 'react';

import { Section, SectionTitle2 } from '../../styles/Globalcomponents';
import { Box, Boxes, BoxNum, BoxText } from './GithubInfoStyle';

const GithubInfo = () => {

    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [public_repos, setRepos] = useState('');
    const [public_gists, setGists] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/kamum')
            .then(res => res.json())
            .then(data => {
                setData(data);

            })
    }, []);

    const setData = ({
        followers,
        following,
        public_repos,
        public_gists
    }) => {
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setGists(public_gists);
    };

    return (
        <Section>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <SectionTitle2 main style={{ alignItems: 'center' }}>Github Info</SectionTitle2>
            </div>
            <Boxes>
                <Box>
                    <BoxNum>{`${followers}+`}</BoxNum>
                    <BoxText>Followers</BoxText>
                </Box>
                <Box>
                    <BoxNum>{`${following}+`}</BoxNum>
                    <BoxText>Following</BoxText>
                </Box>
                <Box>
                    <BoxNum>{`${public_repos}+`}</BoxNum>
                    <BoxText>Repositories</BoxText>
                </Box>
                <Box>
                    <BoxNum>{`${public_gists}+`}</BoxNum>
                    <BoxText>Gists</BoxText>
                </Box>
            </Boxes>
        </Section>
    )


}

export default GithubInfo;