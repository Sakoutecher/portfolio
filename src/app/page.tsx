import type { ReactElement } from "react";
import { Divider } from "@/lib/components/ui/divider";
import AboutSection from "@/lib/sections/about.section";
import SkillsSection from "@/lib/sections/skills.section";
import GithubGraphSection from "@/lib/sections/githubgraph.section";
import ExperiencesSection from "@/lib/sections/experiences.section";
import SocialsSection from "@/lib/sections/socials.section";

//TODO: add github contributions graph and repair it cause the current component do not work

export default function Home(): ReactElement {
  return (
    <>
      <AboutSection />
      <Divider className="my-7" />

      <SkillsSection />
      <Divider className="my-7" />

      <GithubGraphSection />
      <Divider className="my-7" />

      <ExperiencesSection />
      <Divider className="my-7" />

      <SocialsSection />
    </>
  );
}