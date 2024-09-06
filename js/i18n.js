document.addEventListener('DOMContentLoaded', function() {
    i18next.use(i18nextBrowserLanguageDetector).init({
        resources: {
            en: {
                translation: {
                    "nav": {
                        "home": "Home",
                        "overview": "Overview",
                        "howitworks": "How it works",
                        "features": "Features",
                        "pricing": "Pricing",
                        "faq": "FAQ",
                        "contact": "Contact Us"
                    },
                    "hero": {
                        "title": "HOTEL REVOLUTION"
                    },
                    "header": {
                        "weare": "We are",
                        "kinggroup": "KingGroup",
                        "description": "The development team responsible for managing the new versions of our new product. Discover KingReserve, our main platform that allows hotels to manage their operations with unprecedented efficiency, improving the experience of each guest. KingReserve is not just a tool for managing reservations and staff; it is a comprehensive solution that offers services in an accessible and intuitive way, raising the standard of modern hospitality.",
                        "register": "Register",
                        "learnmore": "Learn More"
                    },
                    "overview": {
                        "title": "King Reserve Overview",
                        "description": "KingReserve is an innovative startup offering a platform designed for hotels to efficiently manage their operations and improve guest experiences. The tool allows managing reservations, staff, and services in an accessible and intuitive way, establishing strategic alliances with hotel chains and resorts to adapt their solutions to the operational needs of their partners, thus optimizing daily management and customer satisfaction."
                    },
                    "vision": {
                        "title": "Vision",
                        "description": "We envision a world where technology and hotel management merge to create exceptional experiences for both employees and guests. Our goal is for KingReserve to be synonymous with innovation in the hotel sector, a place where businesses can optimize their operations and elevate the quality of their services. We aspire to build a more connected, efficient, and customer-oriented hotel industry."
                    },
                    "mission": {
                        "title": "Mission",
                        "description": "We strive to provide a platform that connects hotels with advanced management tools, improving operational efficiency and customer satisfaction. We are determined to use technology to generate a positive impact on guest experiences and hotel staff efficiency. KingReserve will be a symbol of excellence in hotel management, innovation in service administration, and commitment to continuous improvement, while fostering an active and collaborative community around hospitality and service."
                    },
                    "howitworks": {
                        "title": "How It Works",
                        "createaccount": "Create a free account",
                        "createaccountdesc": "Sign up quickly and easily to start managing your hotel reservations. Just a few clicks and you're ready!",
                        "learnmore": "Learn More",
                        "staffmanagement": "Staff Management",
                        "staffmanagementdesc": "Optimize the management of your hotel staff, assigning tasks, managing schedules, and improving operational efficiency.",
                        "reservations": "Reservations and Custom Statistics Management",
                        "reservationsdesc": "Manage all your reservations centrally and access custom statistics for decision making."
                    },
                    "features": {
                        "title": "Key Features",
                        "description": "Discover how KingReserve, our innovative platform, optimizes hotel management for efficient operation and superior guest experience. KingReserve is your comprehensive solution for managing reservations, staff, and services with ease.",
                        "feature1": "Comprehensive Reservation Management",
                        "feature1desc": "Manage all your reservations centrally with real-time updates and instant confirmations, improving operational efficiency.",
                        "feature2": "Staff Optimization",
                        "feature2desc": "Assign tasks, manage schedules, and improve staff efficiency through intuitive tools and personalized analysis.",
                        "feature3": "Access to Intuitive Services",
                        "feature3desc": "Offer services in an accessible way to your guests, allowing them to book activities, request assistance, and access amenities easily.",
                        "feature4": "Secure Payment Integration",
                        "feature4desc": "Process payments securely with support for multiple payment methods, ensuring smooth and reliable transactions."
                    },
                    "pricing": {
                        "title": "Subscription Plans",
                        "plan1": "Zebra Plan",
                        "plan1desc": "Start with basic features for small-scale hotel management. Perfect for beginners or small hotels.",
                        "plan1feature1": "Basic Reservation Management",
                        "plan1feature2": "Limited Customer Support",
                        "plan1feature3": "Up to 5 User Accounts",
                        "plan1button": "Start Free",
                        "plan2": "Lion Plan",
                        "plan2desc": "Unlock all features with our Lion Plan for only $32.90/month. Ideal for growing or large-scale hotels looking for comprehensive management tools.",
                        "plan2feature1": "Unlimited Reservations",
                        "plan2feature2": "24/7 Priority Customer Support",
                        "plan2feature3": "Advanced Analytics and Reports",
                        "plan2feature4": "Unlimited User Accounts",
                        "plan2feature5": "Access to All Third-Party Integrations",
                        "plan2button": "Subscribe Now for $32.90/month"
                    },
                    "screenshots": {
                        "title": "KingReserve",
                        "description": "Your opportunity to grow",
                        "slide1": "Improve the quality of your customers",
                        "slide2": "Improve the management of your finances",
                        "slide3": "Control the details of your hotel",
                        "slide4": "Win in the competitive market"
                    },
                    "faq": {
                        "title": "Do you have questions?",
                        "question1": "How can I create an account on KingReserve?",
                        "answer1": "Creating an account on KingReserve is simple and free. Just click the 'Register' button on the main page, fill in your details, and follow the instructions to complete the registration process. Once registered, you can start managing your hotel reservations immediately.",
                        "question2": "Can I cancel or modify my reservation?",
                        "answer2": "Yes, you can cancel or modify your reservation through the KingReserve app. Simply log in to your account, go to your reservation history, and select the reservation you want to change. Follow the instructions to make the necessary adjustments or cancellations.",
                        "question3": "What payment methods are accepted on KingReserve?",
                        "answer3": "We accept a variety of payment methods, including cards (credit and debit), online bank transfers, and popular digital wallets. All payments are processed securely to protect your financial information. You will receive a confirmation email once your payment is complete."
                    },
                    "social": {
                        "title": "Connect with KingGroup",
                        "description": "Connect with us on social media to stay updated on the latest developments of KingReserve, the app developed by KingGroup. Let's share knowledge and ideas to improve experiences and solve global problems, one at a time. Join our community and be part of the innovation in hotel management.",
                        "github": "Follow us on GitHub",
                        "youtube": "Subscribe on YouTube",
                        "linkedin": "Connect on LinkedIn",
                        "whatsapp": "Chat on WhatsApp"
                    },
                    "downloadApp": {
                            "title": "Try KingReserve",
                            "description1": "Explore the latest hotel management software - KingReserve",
                            "description2": "You can try KingReserve in different browsers for an optimal experience."
                        },
                    "contact": {  
                            "title": "Contact the Developer",  
                            "description": "Do you have a question, a comment, or a collaboration request? Send us a message.",  
                            "firstname": "First Name",  
                            "lastname": "Last Name",  
                            "email": "Email",  
                            "message": "How can we help you?",  
                            "button": "Send Message"  
                        } ,
                    "footer": {
                        "developedby": "&copy; 2024 Developed by KingGroup"
                    },
                    "alerts": {
                        "interestTitle": "Thank you for your interest!",
                        "interestText": "Write to us to let us know that you are interested in our future app and the plan you want to acquire: {{plan}}",
                        "buildingTitle": "Building",
                        "buildingText": "An app worthy of a king. Application under development.",
                        "successTitle": "Message sent",
                        "successText": "Your message has been sent successfully.",
                        "errorTitle": "Error",
                        "errorText": "There was an error sending the message."
                    }
                }
            },
            es: {
                translation: {
                    "nav": {
                        "home": "Inicio",
                        "overview": "Resumen",
                        "howitworks": "Cómo funciona",
                        "features": "Características",
                        "pricing": "Precios",
                        "faq": "Preguntas Frecuentes",
                        "contact": "Contáctanos"
                    },
                    "hero": {
                        "title": "REVOLUCIÓN HOTELERA"
                    },
                    "header": {
                        "weare": "Somos",
                        "kinggroup": "KingGroup",
                        "description": "El equipo de desarrollo quien se encarga de poder gestionar las nuevas versiones de nuestro nuevo producto. Descubre KingReserve, nuestra plataforma principal que permite a los hoteles gestionar sus operaciones con una eficiencia sin precedentes, mejorando la experiencia de cada huésped. KingReserve no es solo una herramienta para administrar reservas y personal; es una solución integral que ofrece servicios de manera accesible e intuitiva, elevando el estándar de la hospitalidad moderna.",
                        "register": "Registrar",
                        "learnmore": "Saber Más"
                    },
                    "overview": {
                        "title": "Resumen de King Reserve",
                        "description": "KingReserve es una startup innovadora que ofrece una plataforma diseñada para que los hoteles gestionen sus operaciones de manera eficiente y mejoren la experiencia de sus huéspedes. La herramienta permite administrar reservas, personal y servicios de forma accesible e intuitiva, estableciendo alianzas estratégicas con cadenas hoteleras y resorts para adaptar sus soluciones a las necesidades operativas de sus socios, optimizando así la gestión diaria y la satisfacción del cliente."
                    },
                    "vision": {
                        "title": "Visión",
                        "description": "Visualizamos un mundo donde la tecnología y la gestión hotelera se fusionan para crear experiencias excepcionales tanto para los empleados como para los huéspedes. Nuestro objetivo es que KingReserve sea sinónimo de innovación en el sector hotelero, un lugar donde las empresas puedan optimizar sus operaciones y elevar la calidad de sus servicios. Aspiramos a construir una industria hotelera más conectada, eficiente y orientada al cliente."
                    },
                    "mission": {
                        "title": "Misión",
                        "description": "Nos esforzamos por proporcionar una plataforma que conecte a los hoteles con herramientas avanzadas de gestión, mejorando la eficiencia operativa y la satisfacción del cliente. Estamos decididos a utilizar la tecnología para generar un impacto positivo en la experiencia de los huéspedes y la eficiencia del personal hotelero. KingReserve será símbolo de excelencia en la gestión hotelera, innovación en la administración de servicios, y compromiso con la mejora continua, mientras fomentamos una comunidad activa y colaborativa en torno a la hospitalidad y el servicio."
                    },
                    "howitworks": {
                        "title": "Cómo Funciona",
                        "createaccount": "Crea una cuenta gratuita",
                        "createaccountdesc": "Regístrate rápida y fácilmente para comenzar a gestionar tus reservas de hotel. ¡Solo unos pocos clics y estarás listo!",
                        "learnmore": "Saber Más",
                        "staffmanagement": "Gestión de Personal",
                        "staffmanagementdesc": "Optimiza la administración del personal de tu hotel, asignando tareas, gestionando horarios y mejorando la eficiencia operativa.",
                        "reservations": "Administración de Reservas y Estadísticas Personalizadas",
                        "reservationsdesc": "Administra todas tus reservas de manera centralizada y accede a estadísticas personalizadas para la toma de decisiones."
                    },
                    "features": {
                        "title": "Características Clave",
                        "description": "Descubre cómo KingReserve, nuestra innovadora plataforma, optimiza la gestión hotelera para una operación eficiente y una experiencia superior para los huéspedes. KingReserve es tu solución integral para administrar reservas, personal y servicios con facilidad.",
                        "feature1": "Gestión Integral de Reservas",
                        "feature1desc": "Administra todas tus reservas de manera centralizada con actualizaciones en tiempo real y confirmaciones instantáneas, mejorando la eficiencia operativa.",
                        "feature2": "Optimización del Personal",
                        "feature2desc": "Asigna tareas, gestiona horarios y mejora la eficiencia del personal a través de herramientas intuitivas y análisis personalizado.",
                        "feature3": "Acceso a Servicios Intuitivos",
                        "feature3desc": "Ofrece servicios de manera accesible a tus huéspedes, permitiéndoles reservar actividades, solicitar asistencia y acceder a comodidades fácilmente.",
                        "feature4": "Integración de Pagos Segura",
                        "feature4desc": "Procesa pagos de manera segura con soporte para múltiples métodos de pago, garantizando transacciones fluidas y confiables."
                    },
                    "pricing": {
                        "title": "Planes de Suscripción",
                        "plan1": "Plan Zebra",
                        "plan1desc": "Comienza con características básicas para la gestión hotelera a pequeña escala. Perfecto para principiantes o pequeños hoteles.",
                        "plan1feature1": "Gestión Básica de Reservas",
                        "plan1feature2": "Soporte al Cliente Limitado",
                        "plan1feature3": "Hasta 5 Cuentas de Usuario",
                        "plan1button": "Comienza Gratis",
                        "plan2": "Plan Leon",
                        "plan2desc": "Desbloquea todas las características con nuestro Plan King por solo $32.90/mes. Ideal para hoteles en crecimiento o de gran escala que buscan herramientas de gestión completas.",
                        "plan2feature1": "Reservas Ilimitadas",
                        "plan2feature2": "Soporte al Cliente Prioritario 24/7",
                        "plan2feature3": "Analíticas y Reportes Avanzados",
                        "plan2feature4": "Cuentas de Usuario Ilimitadas",
                        "plan2feature5": "Acceso a Todas las Integraciones de Terceros",
                        "plan2button": "Suscríbete Ahora por S/32.90/mes"
                    },
                    "screenshots": {
                        "title": "KingReserve",
                        "description": "Tu oportunidad de crecer",
                        "slide1": "Mejora la calidad de tus clientes",
                        "slide2": "Mejora la gestión de tus finanzas",
                        "slide3": "Controla los detalles de tu hotel",
                        "slide4": "Gana en el mercado de competidores"
                    },
                    "faq": {
                        "title": "¿Tienes preguntas?",
                        "question1": "¿Cómo puedo crear una cuenta en KingReserve?",
                        "answer1": "Crear una cuenta en KingReserve es simple y gratuito. Solo haz clic en el botón 'Regístrate' en la página principal, completa tus datos y sigue las instrucciones para finalizar el proceso de registro. Una vez registrado, puedes comenzar a gestionar las reservas de tu hotel de inmediato.",
                        "question2": "¿Puedo cancelar o modificar mi reserva?",
                        "answer2": "Sí, puedes cancelar o modificar tu reserva a través de la aplicación de KingReserve. Simplemente inicia sesión en tu cuenta, ve a tu historial de reservas y selecciona la reserva que deseas cambiar. Sigue las indicaciones para realizar los ajustes o cancelaciones necesarias.",
                        "question3": "¿Qué métodos de pago se aceptan en KingReserve?",
                        "answer3": "Aceptamos una variedad de métodos de pago, incluyendo tarjetas (crédito y débito), transferencias bancarias en línea, y billeteras digitales populares. Todos los pagos se procesan de forma segura para proteger tu información financiera. Recibirás un correo de confirmación una vez que se complete tu pago."
                    },
                    "social": {
                        "title": "Conéctate con KingGroup",
                        "description": "Conéctese con nosotros en las redes sociales para mantenerse actualizado sobre los últimos desarrollos de KingReserve, la aplicación desarrollada por KingGroup. Compartamos conocimientos e ideas para mejorar las experiencias y resolver problemas globales, uno a la vez. Únase a nuestra comunidad y sea parte de la innovación en la gestión hotelera.",
                        "github": "Síguenos en GitHub",
                        "youtube": "Suscríbete en YouTube",
                        "linkedin": "Conéctate en LinkedIn",
                        "whatsapp": "Chat en WhatsApp"
                    },
                    "downloadApp": {
                            "title": "Prueba KingReserve",
                            "description1": "Explora el último software de gestión hotelera - KingReserve",
                            "description2": "Puedes probar KingReserve en diferentes navegadores para una experiencia óptima."
                        },
                    "contact": {  
                        "title": "Contacta al Desarrollador",  
                        "description": "¿Tienes una pregunta, una observación o una solicitud de colaboración? Envíanos un mensaje.",  
                        "firstname": "Nombres",  
                        "lastname": "Apellidos",  
                        "email": "Correo Electrónico",  
                        "message": "¿Cómo podemos ayudarte?",  
                        "button": "Enviar Mensaje"  
                    } ,
                    "footer": {
                        "developedby": "&copy; 2024 Desarrollado por KingGroup"
                    },
                    "alerts": {
                        "interestTitle": "¡Gracias por tu interés!",
                        "interestText": "Escríbenos para saber que estás interesado en nuestra futura app y el plan que quieres adquirir: {{plan}}",
                        "buildingTitle": "Construyendo",
                        "buildingText": "Una aplicación digna de un rey. Aplicación en desarrollo.",
                        "successTitle": "Mensaje enviado",
                        "successText": "Tu mensaje ha sido enviado con éxito.",
                        "errorTitle": "Error",
                        "errorText": "Hubo un error al enviar el mensaje."
                    }
                }
            }
        },
        fallbackLng: 'es',
        debug: true
    }, function(err, t) {
        // Initialize the translation
        updateContent();
    });

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(function(element) {
            element.innerHTML = i18next.t(element.getAttribute('data-i18n'));
        });
    }

    // Change language on button click
    document.getElementById('languageSwitcher').addEventListener('change', function() {
        i18next.changeLanguage(this.value, function() {
            updateContent();
        });
    });
});