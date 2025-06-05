import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@components';
import _ from 'lodash';

const ProjectTitle = ({ project }) => {
  const { name, image, githubLink } = project;

  return (
    <div className='flex items-center space-x-3'>
      {image && <div className='min-w-20 w-20 md:min-w-24 md:w-24'>
        <img className='rounded-2xl' src={image} alt={name}/>
      </div>}
      <div className={`flex-grow text-2xl font-semibold ${image ? 'text-left' : ''}`}>{name}</div>
      {githubLink && <Link className='w-4 self-start text-steel text-xl' href={`https://github.com/alexbmoreira/${githubLink}`} target='_blank'>
        <FontAwesomeIcon icon='fa-brands fa-github'/>
      </Link>}
    </div>
  );
};

const ProjectStack = ({ stack, deploy }) => {
  if (_.isEmpty(stack) && _.isEmpty(deploy)) return null;

  return (
    <div className='flex justify-between items-center'>
      {!_.isEmpty(stack) && <div className='flex space-x-2 items-center text-lg'>
        {stack.map(s => <a key={s.name} href={s.link} className={s.color} target='_blank'>
          <FontAwesomeIcon icon={`fa-kit ${s.class}`}/>
        </a>)}
      </div>}
      {!_.isEmpty(deploy) && <div className='flex space-x-2 items-center text-lg'>
        {deploy.map(d => <a key={d.name} href={d.link} className={d.color} target='_blank'>
          <FontAwesomeIcon icon={`fa-kit ${d.class}`}/>
        </a>)}
      </div>}
    </div>
  );
};

const Project = ({ project }) => {
  return (
    <div className='shadow rounded-xl'>
      <div className={`bg-snow p-4 rounded-t-xl ${project.website ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => project.website && window.open(project.website, '_blank').focus()}>
        <ProjectTitle project={project}/>
        <hr className='h-px my-2 bg-snow opacity-10 w-full'/>
        <div>
          {project.desc}
        </div>
      </div>
      <div className='bg-snow rounded-b-xl px-4 pb-2'>
        <ProjectStack stack={project.stack} deploy={project.deploy}/>
      </div>
    </div>
  );
};

export default Project;
