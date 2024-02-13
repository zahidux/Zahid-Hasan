import { useEffect, useState } from "react";
import useProjectData from "../hooks/useProjectData";
import { Link, useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const ProjectDetails = () => {
  const [project, setProject] = useState({});
  const [projectData] = useProjectData();
  const { id } = useParams();

  useEffect(() => {
    if (projectData.length) {
      const findProject = projectData.find((project) => project.name == id);
      setProject(findProject);
    }
  }, [id, projectData.length]);

  const {
    name,
    title,
    liveLink,
    client,
    date,
    clientCode,
    serverCodeLink,
    description,
    screenshots,
    technology,
  } = project;

  return (
    <section className=" mb-12 p-6 md:p-12 duration-300 mx-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <ImageSlider screenshots={screenshots} />
        <div className="">
          <h1 className=" text-3xl line-clamp-1">
            {name} - <span className="text-xl">{title}</span>
          </h1>

          <div className="flex items-center gap-2 -mt-1">
            <Link target="_blake" className="text-blue" to={liveLink}>
              Live preview
            </Link>
            -
            <Link target="_blake" className="text-blue" to={clientCode}>
              Client code
            </Link>
            -
            <Link target="_blake" className="text-blue" to={serverCodeLink}>
              Server code
            </Link>
          </div>

          <p className="line-clamp-2 mt-3">{description}</p>

          <div className="grid grid-cols-2 mt-4">
            <p className="">
              <span className="">Client: </span>
              {client}
            </p>
            <p className="">
              <span className="">Date: </span>
              {date}
            </p>
          </div>

          <p className=" mt-2 underline">Technology Used:</p>

          <div className="mt-2 flex flex-wrap gap-2">
            {technology?.map((item, index) => (
              <span
                key={index}
                className=" bg-blue py-1 px-3 rounded-md shadow-lg shadow-blue/40"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <hr className="mt-16" />

      <div className="mt-14">
        <h1 className=" text-4xl mb-8">Project Screenshots</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {screenshots?.map((image, index) => (
            <div key={index}>
              <img className="shadow-iconShadow rounded-xl" src={image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
