import Globe from "react-globe.gl"
import Button from "./Button"
import { useState } from "react"

const About = () => {

    const [hasCoped, setHasCoped] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText("nivindulakshitha@gmail.com")
        setHasCoped(true)

        setTimeout(() => {
            setHasCoped(false)
        }, 1000)
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-2">
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

                <div className="col-span-1 xl:row-span-2">
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

                <div className="col-span-1 xl:row-span-3">
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
                <div className="xl:col-span-2 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My passion for coding</p>
                            <p className="grid-subtext">I love solving complex problems and creating beautiful and intuitive user experiences. I am always looking for new and exciting ways to improve my skills. I am excited to continue learning and growing as a developer! </p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-1">
                    <div className="grid-container">
                        <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCoped ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />

                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">nivindulakshitha@gmial.com</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About