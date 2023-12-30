import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getMyAge } from ".";


const resources = {
    en: {
        translation: {
            "Hello, I am": "Hello, I am",

            [`A ${getMyAge({ birthdayDate: '2003-12-01' })}-year-old student currently pursuing a degree in Software Development Engineering with a focus on web applications. I have knowledge in technologies related to`]: `A ${getMyAge({ birthdayDate: '2003-12-01' })}-year-old student currently pursuing a degree in Software Development Engineering with a focus on web applications. I have knowledge in technologies related to`,

            "web programming": "web programming",

            "as well as knowledge in tools": "as well as knowledge in tools",


            "I am seeking opportunities that allow me to apply my technical knowledge, leverage my problem-solving skills, and continue learning while contributing to the success of innovative web development projects.": "I am seeking opportunities that allow me to apply my technical knowledge, leverage my problem-solving skills, and continue learning while contributing to the success of innovative web development projects.",


            "Home": "Home",

            "Technologies": "Technologies",

            "Work experience": "Work experience",

            "Projects": "Projects",

            "May 8, 2023 - December 6, 2023": "May 8, 2023 - December 6, 2023",

            "Junior Web Designer and Developer": "Junior Web Designer and Developer",

            "During my university internships, I was part of a company specialized in web development and design. Throughout this experience, I actively contributed to the development of websites using various technologies, including WordPress, Elementor, Divi Builder, and Webflow. Additionally, I had the opportunity to work with widely used WordPress plugins such as WooCommerce, Eventin, and LearnDash.": "During my university internships, I was part of a company specialized in web development and design. Throughout this experience, I actively contributed to the development of websites using various technologies, including WordPress, Elementor, Divi Builder, and Webflow. Additionally, I had the opportunity to work with widely used WordPress plugins such as WooCommerce, Eventin, and LearnDash.",

            "title-project-1": "Ecommerce",

            "desc-project-1": "This is a web application that simulates an e-commerce platform. It includes functionalities such as registration and login, password recovery via email, product browsing, viewing products by categories, logs of sections visited by date and time, adding products to a shopping cart, editing the quantity of a product in the virtual cart, removing a product from the virtual cart, and simulating a purchase from the shopping cart using PayPal.",



            "title-project-2": "Anti-Hate Application",

            "desc-project-2": "This web application is a mini social network that includes the following functionalities: registration and login, password recovery, posting with text or images, commenting on posts, reacting to posts, updating personal information, and also, by consuming the ChatGPT3 API, it analyzes the posts and comments before publishing to verify that they don't contain offensive language.",

            "title-project-3": "Exdoo",

            "desc-project-3": "It was developed a website for Exdoo company using WordPress and the Divi Builder theme constructor. Initially, the site had been created in Webflow, but due to client preferences, a technology change was decided upon. The website showcases relevant information about Exdoo, and each page is designed to be responsive.",


            "Portfolio": "Portfolio",

            "All rights reserved": "All rights reserved",

            "View Resume (Spanish)": "View Resume (Spanish)",

            "View Resume (English)": "View Resume (English)",

            "Watch video": "Watch video",

            "View": "View",

            "Code": "Code",

            "Web design": "Web design",

            "Language": "Language",

            "Welcome to React": "Welcome to React and react-i18next"
        }
    },
    es: {
        translation: {
            "Hello, I am": "Hola, yo soy",

            [`A ${getMyAge({ birthdayDate: '2003-12-01' })}-year-old student currently pursuing a degree in Software Development Engineering with a focus on web applications. I have knowledge in technologies related to`]: `Estudiante de ${getMyAge({ birthdayDate: '2003-12-01' })} años, actualmente estudiando una carrera de Ingeniería en Desarrollo de Software con enfoque  en aplicaciones web. Poseo conocimientos en tecnologías acerca de`,

            "web programming": "programación web",


            "as well as knowledge in tools": "y también conocimiento en herramientas",


            "I am seeking opportunities that allow me to apply my technical knowledge, leverage my problem-solving skills, and continue learning while contributing to the success of innovative web development projects.": "Busco oportunidades que me permitan aplicar mi conocimiento técnico, aprovechar mi destreza en la resolución de problemas y seguir aprendiendo mientras contribuyó al éxito de proyectos innovadores en el desarrollo web.",


            "Home": "Inicio",

            "Technologies": "Tecnologías",

            "Work experience": "Experiencia Laboral",

            "Projects": "Proyectos",

            "May 8, 2023 - December 6, 2023": "8 de Mayo del 2023 - 6 de diciembre del 2023",

            "Junior Web Designer and Developer": "Diseñador y Desarrollador Web Junior",


            "During my university internships, I was part of a company specialized in web development and design. Throughout this experience, I actively contributed to the development of websites using various technologies, including WordPress, Elementor, Divi Builder, and Webflow. Additionally, I had the opportunity to work with widely used WordPress plugins such as WooCommerce, Eventin, and LearnDash.": "Durante mis prácticas universitarias, formé parte de una empresa especializada en desarrollo y diseño web. Durante esta experiencia, participé activamente en el desarrollo de sitios web utilizando diversas tecnologías, entre las que se incluyen WordPress, Elementor, Divi Builder y Webflow. Además, tuve la oportunidad de trabajar con plugins de WordPress ampliamente utilizados como WooCommerce, Eventin y LearnDash.",

            "title-project-1": "Ecommerce",

            "desc-project-1": "Esta es una aplicación web que simula un e-commerce, tiene las funcionalidades de registro e inicio sesión, recuperación de contraseña por correo electrónico, visualizar productos, visualizar productos por secciones, registros de secciones visitadas por fecha y hora, agregar productos a un carrito de compras, editar la cantidad de un producto del carrito virtual, eliminar un producto del carrito virtual y simular una compra del carrito de compras con PayPal",

            "title-project-2": "Aplicación Anti Hate",

            "desc-project-2": "Esta aplicación web es una mini red social,que tiene las siguiente funcionalidades registro e inicio de sesión, recuperación de contraseña, publicar con texto o con imagen, comentar post, reaccionar a post, actualizar información personal y además a través de consumir la API de Chatgpt3 se analizan las publicaciones y comentarios antes de publicarlos, para verificar que no sean comentarios con groserias.",

            "title-project-3": "Exdoo",

            "desc-project-3": "Se desarrolló un sitio web para la empresa Exdoo utilizando WordPress y el constructor de temas Divi Builder. Inicialmente, el sitio se había creado en Webflow, pero debido a las preferencias del cliente, se decidió cambiar de tecnología. El sitio web presenta información relevante sobre Exdoo y cada página está diseñada para ser responsiva",

            "Portfolio": "Portafolio",

            "All rights reserved": "Todos los derechos reservados",

            "View Resume (Spanish)": "Ver CV (Español)",

            "View Resume (English)": "Ver CV (Inglés)",

            "Watch video": "Ver video",

            "View": "Ver",

            "Code": "Código",

            "Web design": "Diseño Web",

            "Language": "Idioma",

            "Welcome to React": "Bienvenido a React",
        }
    },

};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export { i18n };