
import { useState } from "react"
import { useTranslation } from "react-i18next"


type ConstLanguages = 'español' | 'english'



export const Navbar = () => {

    const { t, i18n } = useTranslation()

    const [language, setLanguage] = useState<ConstLanguages>(`english`)
    return (
        <>
            <nav className="navbar bg-base-200 fixed top-0 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="font-header text-primary">
                                <a href="#home">{t(`Home`)}</a>
                            </li>

                            <li className="font-header text-primary">
                                <a href="#technologies">{t(`Technologies`)}</a>
                            </li>

                            <li className="font-header text-primary">
                                <a href="#work-experience">{t(`Work experience`)}</a>
                            </li>

                            <li className="font-header text-primary">
                                <a href="#projects">{t(`Proyectos`)}</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li className="font-header text-primary">
                            <a href="#home">{t(`Home`)}</a>
                        </li>

                        <li className="font-header text-primary">
                            <a href="#technologies">{t(`Technologies`)}</a>
                        </li>

                        <li className="font-header text-primary">
                            <a href="#work-experience">{t(`Work experience`)}</a>
                        </li>

                        <li className="font-header text-primary">
                            <a href="#projects">{t(`Projects`)}</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" className="btn text-xs sm:text-sm ">
                            {t(`Language`)}: <span className="capitalize">{language}</span>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li onClick={() => {
                                i18n.changeLanguage('es')
                                setLanguage('español')
                            }}><a className="text-xs sm:text-sm">Español</a></li>

                            <li onClick={() => {
                                i18n.changeLanguage('en')
                                setLanguage('english')
                            }}><a className="text-xs sm:text-sm">English</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
