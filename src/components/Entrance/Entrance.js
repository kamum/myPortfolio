import React from 'react';

import {Section,SectionText, SectionTitle} from '../../styles/Globalcomponents'
import {LeftSection} from './EntranceStyles'

const Entrance = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle>
                Welcome to <br/> My Personal Portfolio
            </SectionTitle>
            <SectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque, sem nec aliquam laoreet, tellus tellus tincidunt metus, consequat tempus eros nulla id odio. In hac habitasse platea dictumst. Nullam tempor enim a vestibulum semper. Donec hendrerit cursus tellus vitae consectetur
            </SectionText>
        </LeftSection>
    </Section>
); 

export default Entrance;