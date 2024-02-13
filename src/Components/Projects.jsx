import { useEffect, useState } from "react";
import useProjectData from "../hooks/useProjectData";

// react tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState("all");
  const [projectData] = useProjectData();

  useEffect(() => {
    if (category === "all" && projectData.length) {
      return setProjects(projectData);
    }
    if (projectData.length) {
      const filterProject = projectData.filter(
        (project) => project.category === category
      );
      return setProjects(filterProject);
    }
  }, [category, projectData.length]);

  let content;

  if (projects.length > 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.slice(0, 6).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    );
  }
  return (
    <section
      id="projects"
      className="mb-12 p-6 md:p-12 duration-300 md:mx-32 rounded-2xl shadow-xl"
    >
      <SectionTitle heading={"My Projects"} />
      <Tabs>
        <TabList className="text-xl text-center text-sky-500 font-medium space-x-2 space-y-2">
          <Tab onClick={() => setCategory("all")}>All Work</Tab>
          <Tab onClick={() => setCategory("react")}>React Template</Tab>
          <Tab onClick={() => setCategory("eCommerce")}>eCommerce Work</Tab>
        </TabList>

        <TabPanel>{content}</TabPanel>
        <TabPanel>{content}</TabPanel>
        <TabPanel>{content}</TabPanel>
      </Tabs>
    </section>
  );
};

export default Projects;
