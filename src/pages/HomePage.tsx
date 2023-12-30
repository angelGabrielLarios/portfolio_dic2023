import { useTranslation } from "react-i18next"
import { CardProject, Footer, IconCSS, IconEmail, IconGithub, IconHTML, IconJavaScript, IconLink, IconLinkeLn, IconMySQL, IconNestjs, IconNode, IconReact, IconTailwind, IconTypeScript, IconWebflow, IconWordpress, IconYoutube, Navbar } from "../components"
import { getMyAge } from "../helpers"
import { useMobileResolution } from "../hooks";




export const HomePage = () => {

    const { t } = useTranslation();

    const { isMobile } = useMobileResolution()

    return (
        <>

            <Navbar />


            <main id="home" className="pt-16 px-4 md:px-6 lg:px-12 min-h-screen flex flex-col justify-center items-start">
                <section className="lg:grid lg:grid-cols-2 lg:gap-5">

                    <article className="space-y-4">
                        <header className="space-y-2 ">
                            <h3 className="text-secondary font-bold font-header text-lg sm:text-xl">
                                {t(`Hello, I am`)}
                            </h3>
                            <h1 className="text-primary font-bold font-header text-2xl sm:text-3xl">
                                Angel Gabriel Larios Acosta
                            </h1>
                            <h3 className="text-secondary font-bold font-header text-lg sm:text-xl">
                                FullStack Developer
                            </h3>
                        </header>

                        <div className="space-y-2">
                            <p className="text-xs sm:text-sm md:text-base leading-normal ">
                                {t(`A ${getMyAge({ birthdayDate: '2003-12-01' })}-year-old student currently pursuing a degree in Software Development Engineering with a focus on web applications. I have knowledge in technologies related to`)} <span className="text-primary font-bold">{t(`web programming`)}</span> {t(`as well as knowledge in tools`)} <span className="text-primary font-bold">no code</span>.
                            </p>

                            <p className="text-xs sm:text-sm md:text-base leading-normal ">
                                {t(`I am seeking opportunities that allow me to apply my technical knowledge, leverage my problem-solving skills, and continue learning while contributing to the success of innovative web development projects.`)}
                            </p>
                        </div>

                        <article className="flex flex-wrap justify-center md:justify-start items-center gap-2">

                            <a href="https://www.linkedin.com/in/%C3%A1ngel-gabriel-larios-acosta-84a61021b/" className="flex items-center gap-1" target="_blank">
                                <IconLinkeLn
                                    className="size-5 sm:size-6 fill-primary"
                                />
                                <span className="text-xs sm:text-sm md:text-base hover:text-primary">Linkedin</span>
                            </a>

                            <a href="https://github.com/angelGabrielLarios" className="flex items-center gap-1" target="_blank">
                                <IconGithub
                                    className="size 5 sm:size-6 fill-primary"
                                />
                                <span className="text-xs sm:text-sm md:text-base hover:text-primary">Github</span>

                            </a>

                            <a href="mailto:lariosacostaa@gmail.com" className="flex items-center gap-1" target="_blank">
                                <IconEmail
                                    className="size-5 sm:size-6 stroke-primary fill-base-100"
                                />
                                <span className="text-xs sm:text-sm md:text-base hover:text-primary">lariosacostaa@gmail.com</span>
                            </a>


                        </article>

                        <div className="flex flex-col sm:flex-row items-center gap-2 justify-center md:justify-start">
                            <button className={`btn ${isMobile ? 'btn-sm' : ''} btn-primary`}>
                                <a href="https://docs.google.com/document/d/1MoS5w99JpNcKxYwDZE6mlYMjCiep6YlDAcQO8Ag-JTc/edit?usp=sharing" target="_blank">
                                    {t(`View Resume (Spanish)`)}
                                </a>
                            </button>
                            <button className={`btn ${isMobile ? 'btn-sm' : ''} btn-outline btn-primary`}>
                                <a href="https://docs.google.com/document/d/1egx63PqSIO8wWB5nEUsILQPEY1UVzbu6HNnNCZd-HIQ/edit?usp=sharing" target="_blank">
                                    {t(`View Resume (English)`)}
                                </a>
                            </button>

                        </div>
                    </article>


                    <img
                        src="/images/svgs/hero_image.svg"
                        alt=""
                        className="hidden lg:block lg:basis-auto animate-bounce animate-infinite animate-duration-[3000ms] animate-ease-in-out" />
                </section>
            </main>


            <section id="technologies" className="px-4 md:px-6 lg:px-12 bg-base-200 py-10 sm:py-12 md:py-14">
                <article className="space-y-4">
                    <h1 className="text-primary font-bold font-header text-2xl sm:text-3xl">
                        {t(`Technologies`)}
                    </h1>

                    <article className="flex flex-wrap gap-x-2 gap-y-4 justify-center">
                        <div className="tooltip" data-tip="HTML">
                            <IconHTML
                                className="size-8 sm:size-10 md:size-12 lg:size-14 stroke-base-content hover:stroke-primary"
                            />
                        </div>

                        <div className="tooltip" data-tip="CSS">
                            <IconCSS
                                className="size-8 sm:size-10 md:size-12 lg:size-14 stroke-base-content hover:stroke-primary"
                            />
                        </div>

                        <div className="tooltip" data-tip="JavaScript">
                            <IconJavaScript
                                className="size-8 sm:size-10 md:size-12 lg:size-14 stroke-base-content hover:stroke-primary"
                            />
                        </div>

                        <div className="tooltip" data-tip="TypeScript">
                            <IconTypeScript
                                className="size-8 sm:size-10 md:size-12 lg:size-14 stroke-base-content hover:stroke-primary"
                            />
                        </div>

                        <div className="tooltip" data-tip="React.js">
                            <IconReact
                                className="size-8 sm:size-10 md:size-12 lg:size-14 stroke-base-content hover:stroke-primary"
                            />
                        </div>

                        <div className="tooltip" data-tip="Tailwind CSS">
                            <IconTailwind
                                className="size-8 sm:size-10 md:size-12 lg:size-14 stroke-base-content hover:stroke-primary"
                            />
                        </div>

                        <div className="tooltip" data-tip="Nest.js">
                            <IconNestjs
                                className="size-8 sm:size-10 md:size-12 lg:size-14 stroke-base-content fill-base-content hover:stroke-primary hover:fill-primary"
                            />
                        </div>


                        <div className="tooltip" data-tip="Node.js">
                            <IconNode
                                className="size-8 sm:size-10 md:size-12 lg:size-14 stroke-base-content hover:stroke-primary"
                            />
                        </div>

                        <div className="tooltip" data-tip="MySQL">
                            <IconMySQL
                                className="size-8 sm:size-10 md:size-12 lg:size-14 stroke-base-content hover:stroke-primary"
                            />
                        </div>

                        <div className="tooltip" data-tip="Wordpress">
                            <IconWordpress
                                className="size-8 sm:size-10 md:size-12 lg:size-14 stroke-base-content hover:stroke-primary"
                            />
                        </div>


                        <div className="tooltip" data-tip="Webflow">
                            <IconWebflow
                                className="size-8 sm:size-10 md:size-12 lg:size-14 stroke-base-content hover:stroke-primary"
                            />
                        </div>

                    </article>
                </article>

            </section>


            <section id="work-experience" className="px-4 md:px-6 lg:px-12 py-10 sm:py-12 md:py-14">
                <article
                    className="space-y-4"
                >
                    <h1 className="text-primary font-bold font-header text-2xl sm:text-3xl">
                        {t(`Work experience`)}
                    </h1>

                    <article className="w-full md:w-[44rem] md:mx-auto">

                        <ol className="relative border-s border-secondary">
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5  bg-secondary" />
                                <article className="space-y-2">
                                    <time className="mb-1 text-xs leading-none text-base-content font-bold italic ">
                                        {t(`May 8, 2023 - December 6, 2023`)}
                                    </time>
                                    <h3 className="text-lg font-semibold text-white font-header">
                                        {t(`Junior Web Designer and Developer`)}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <div className="badge badge-outline">Creative Workers</div>

                                        <a href="https://www.creativeworkers.mx/" target="_blank">
                                            <IconLink
                                                className="size-4 stroke-info"
                                            />
                                        </a>

                                    </div>
                                    <p className="text-xs sm:text-sm md:text-base font-normal text-base-content leading-normal">
                                        {t("During my university internships, I was part of a company specialized in web development and design. Throughout this experience, I actively contributed to the development of websites using various technologies, including WordPress, Elementor, Divi Builder, and Webflow. Additionally, I had the opportunity to work with widely used WordPress plugins such as WooCommerce, Eventin, and LearnDash.")}
                                    </p>
                                </article>

                            </li>

                        </ol>



                    </article>
                </article>
            </section>

            <section id="projects" className="px-4 md:px-6 lg:px-12 py-10 sm:py-12 md:py-14 bg-base-200">
                <article className="space-y-4">
                    <h1 className="text-primary font-bold font-header text-2xl sm:text-3xl">
                        {t(`Projects`)}
                    </h1>

                    <section className="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 ">

                        <CardProject
                            title="title-project-1"
                            description="desc-project-1"
                            imgSrc="/images/images_projects/project_1.webp"
                            technologies={['Tailwind CSS', 'daisy UI', 'React.js', 'TypeScript', 'react-router-dom', 'react-hook-form', 'react-hot-toast', 'Node.js', 'Nest.js', 'TypeORM', 'MySQL', 'API PayPal']}
                            buttons={(
                                <div className="join flex-wrap lg:flex-nowrap">
                                    <a
                                        href="https://www.youtube.com/watch?v=lu0eB_r_nYs"
                                        target="_blank"
                                        className={`btn join-item text-xs sm:text-sm `}>
                                        {t(`Watch video`)}
                                        <IconYoutube
                                            className="size-5"
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/angelGabrielLarios/frontend_eoommerce_dic2023"
                                        target="_blank"
                                        className={`btn join-item text-xs sm:text-sm `}
                                    >
                                        Frontend
                                        <IconGithub
                                            className="size-5 fill-base-content"
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/angelGabrielLarios/backend_ecommerce_dic2023"
                                        target="_blank"
                                        className={`btn join-item text-xs sm:text-sm  `}>
                                        Backend
                                        <IconGithub
                                            className="size-5 fill-base-content"
                                        />

                                    </a>
                                </div>
                            )}
                        />


                        <CardProject
                            title="title-project-2"
                            description="desc-project-2"
                            imgSrc="/images/images_projects/project_2.webp"
                            technologies={
                                ['Tailwind CSS', 'daisy UI', 'React.js', 'JavaScript', 'react-router-dom', 'react-hook-form', 'Firebase', 'API ChatGTP3']
                            }
                            buttons={<div className="join">
                                <a
                                    href="https://exdoo.mx/"
                                    target="_blank"
                                    className="btn join-item text-xs sm:text-sm ">
                                    {t(`View`)}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-link" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 15l6 -6" />
                                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                                    </svg>
                                </a>

                                <a
                                    href="https://github.com/angelGabrielLarios/new_app_test_comments"
                                    target="_blank"
                                    className="btn join-item text-xs sm:text-sm ">
                                    {t(`Code`)}
                                    <IconGithub
                                        className="fill-base-content size-5"
                                    />
                                </a>


                            </div>}
                        />

                        <CardProject
                            title="title-project-3"
                            description="desc-project-3"
                            imgSrc="/images/images_projects/project_3.webp"
                            technologies={['WordPress', 'Divi Builder', 'Web Designed', 'Responsive Design']}
                            buttons={<div className="join">
                                <a
                                    href="https://exdoo.mx/"
                                    target="_blank"
                                    className="btn join-item text-xs sm:text-sm ">
                                    {t(`View`)}
                                    <IconLink
                                        className="size-5"
                                    />
                                </a>


                            </div>}
                        />

                    </section>
                </article>
            </section>

            <Footer />
        </>
    )
}
