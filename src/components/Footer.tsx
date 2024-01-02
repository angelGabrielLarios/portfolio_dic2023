import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { IconFooter } from "."

export const Footer = () => {
    const { t } = useTranslation()
    return (
        <>

            <footer className="footer footer-center p-10 bg-primary text-primary-content">
                <aside>

                    <motion.section
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <IconFooter
                            className="size-6"
                        />
                    </motion.section>


                    <motion.section
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="font-bold">
                            {t(`Portfolio`)}
                        </p>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <p>Copyright © {new Date().getFullYear()} - {t(`All rights reserved`)}</p>
                    </motion.section>


                </aside>
            </footer>

        </>
    )
}
