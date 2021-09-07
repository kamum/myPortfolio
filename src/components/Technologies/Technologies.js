import React from 'react';
import {DiFirebase, DiReact, DiZend} from 'react-icons/di'
import { Section, ContainerTitle, SectionText2, SectionTitle2 } from '../../styles/Globalcomponents';
import { List, ListContainer,ListContainer2, ListImg, ListItem, ListSpan, ListTitle } from './TechnologiesStyles'

const Technologies = () => (
    <Section id="tech">
        <ContainerTitle>
            <SectionTitle2 main>Technologies</SectionTitle2>
        </ContainerTitle>
        <SectionText2>
            I've worked with a range a technologies in the web developement world.
            From Back-end to Design
        </SectionText2>
        <List>
            <div>
                <ListItem>
                    <DiReact size="3rem"/>
                    <ListContainer>
                        <ListTitle>
                            Front-End
                        </ListTitle>
                    </ListContainer>
                    <ListContainer2>
                        <ListSpan>HTML</ListSpan>
                        <ListSpan>CSS</ListSpan>
                        <ListSpan>Javascript</ListSpan>
                        <ListSpan>React</ListSpan>
                    </ListContainer2>
                </ListItem>
                <ListItem>
                    <DiFirebase size="3rem"/>
                    <ListContainer>
                        <ListTitle>
                            Back-End
                        </ListTitle>
                    </ListContainer>
                    <ListContainer2>
                        <ListSpan>Nodejs</ListSpan>
                        <ListSpan>MongoDB</ListSpan>
                        <ListSpan>SQL</ListSpan>
                        <ListSpan>Databases</ListSpan>
                    </ListContainer2>
                </ListItem>
                <ListItem>
                    <DiZend size="3rem"/>
                    <ListContainer>
                        <ListTitle>
                            UI/UX
                        </ListTitle>
                    </ListContainer>
                    <ListContainer2>
                        <ListSpan>Figma</ListSpan>
                        <ListSpan>Ilustrator</ListSpan>
                        <ListSpan>Photoshop</ListSpan>
                    </ListContainer2>
                </ListItem>
            </div>
            <div>
                <ListImg src="/images/skill.jpg"/>
            </div>
        </List>
    </Section>
)

export default Technologies;