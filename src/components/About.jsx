import Globe from "react-globe.gl"
import Button from "./Button"

const About = () => {
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-row-6 mg:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-sapn-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I&apos;m Nivindu</p>
                            <p className="grid-subtext">
                                I am a Full Stack Web Developer. I have 5 years of experience in this field. I have worked on many projects and have a good knowledge of web development.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full 2xl:w-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I have used the following technologies for my projects. React, Node.js, Express.js, MongoDB, Firebase, HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Git, GitHub, Heroku, Netlify, Vercel, etc.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 2xl:row-span-3">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full 2xl:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundimageOpacity={0.5}
                                showAtmosphere={true}
                                showGraticules={true}
                                globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}
                                bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.png"}
                            />

                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely</p>
                            <p className="grid-subtext">
                                I&apos;m based in Sri Lanka, I have worked with clients from all over the world and I&apos;m comfortable working remotely.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About