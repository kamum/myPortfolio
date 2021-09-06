import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ImgCover, PictureCover } from './ProjectsStyles';
import { Section,ContainerTitle, SectionTitle2 } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section  nopadding id="projects">
    <ContainerTitle>
        <SectionTitle2 main>Projects</SectionTitle2>
    </ContainerTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
            <PictureCover>
              <Img src={image} />
              <ImgCover>
                <a style={{color: '#2A3B47'}}>View Details</a>
              </ImgCover>
            </PictureCover>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit} target="_blank">Code</ExternalLinks>
            <ExternalLinks href={source} target="_blank">Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;