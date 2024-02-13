import { Link } from 'react-router-dom';

// react icons
import { HiOutlineExternalLink } from 'react-icons/hi';

const ProjectCard = ({ project }) => {
    const { name, title, picture, liveLink } = project;

    return (
        <div className="h-72 shadow-iconShadow relative overflow-hidden hover:before:bg-blue hover:before:top-0 before:absolute before:w-[1px] before:h-full before:-top-full before:right-0 before:bottom-0 before:duration-500 before:z-30 hover:after:bg-blue hover:after:left-0 after:absolute after:w-full after:h-[1px] after:top-0 after:-left-full after:bottom-0 after:duration-500 group">
            <span className="absolute block group-hover:bg-blue group-hover:right-0 w-full h-[1px] z-50 -right-full bottom-0 duration-500"></span>

            <span className="absolute block group-hover:bg-blue group-hover:top-0 w-[1px] h-full z-30 top-full left-0 duration-500"></span>

            <div className="absolute w-full top-0 left-0 group-hover:-top-48 duration-700">
                <img className='w-full' src={picture} alt="" />
            </div>

            <div className="absolute left-0 top-52 group-hover:top-36 w-full h-full backdrop-blur-sm bg-black/80 pt-3 duration-300 delay-300">
                <Link target="_blank" rel="noreferrer" to={liveLink} className='text-red font-bold text-2xl flex items-center gap-2 mx-3'>
                    {name} - <HiOutlineExternalLink className='text-white hover:text-red duration-300' />
                </Link>
                <p className='text-gray mx-3 -mt-1'>{title}</p>
            </div>

            <div className="absolute bottom-5 -right-52 group-hover:right-0 duration-300 delay-300">
                <Link to={`project/${name}`} className="btn_primary">View Project</Link>
            </div>
        </div>
    );
};

export default ProjectCard;