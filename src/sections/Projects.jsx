import { myProjects } from '../constants'

const Projects = () => {
    const currentProject = myProjects[0];

    return (
        <section clasName="c-space my-20">
            <p className="head-text">My Work</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className='absolute top-0 right-0'>
                        <img src={currentProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />
                    </div>

                    <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm' />
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className='text-white font-semibold text-2xl animatedText'>{currentProject.title}</p>
                        <p className="animatedText">
                            {currentProject.desc}
                        </p>
                        <p className="animatedText">
                            {currentProject.subdesc}
                        </p>
                    </div>

                    <div className="flex items-center jsutify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => {
                                return (
                                    <div className="tech-logo" key={index}>
                                        <img src={tag.path} alt={tag.name} />
                                    </div>
                                )
                            })}
                        </div>

                        <a href={currentProject.href} target='_blank' rel='noreferrer' className='flex items-center cursor-pointer text-white-600 gap-2'>
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="visit" className='w-3 h-3' />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects