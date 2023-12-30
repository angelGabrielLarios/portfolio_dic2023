import { ReactElement } from "react"
import { useTranslation } from "react-i18next"


interface Props {
    imgSrc: string
    title: string
    description: string
    technologies: string[]
    buttons: ReactElement
}
export const CardProject = ({ imgSrc, title, description, technologies, buttons }: Props) => {

    const { t } = useTranslation()
    return (
        <>
            <article className="card bg-base-100 shadow-xl">
                <figure><img src={imgSrc} alt="Shoes" /></figure>
                <div className="card-body space-y-4">
                    <h2 className="card-title font-header">
                        {t(title)}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base leading-normal">
                        {t(description)}
                    </p>


                    {buttons}

                    <article className="card-actions justify-end">

                        {
                            technologies.map((tech, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="badge badge-outline"
                                    >{tech}</div>
                                )
                            })
                        }


                    </article>
                </div>
            </article>
        </>
    )
}
