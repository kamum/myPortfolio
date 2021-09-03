import Entrance from "../components/Entrance/Entrance";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/Globalcomponents";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import TimeLine from "../components/TimeLine/TimeLine";

export default function Home() {
  return (
    <Layout>
      <div style={{background: '#5361FF', height: '100vh'}}>
      <Section grid>
        <Entrance />
        <BgAnimation />
      </Section>
      </div>
      <Projects/>
      <Technologies />
      <TimeLine />
    </Layout>
  )
}
