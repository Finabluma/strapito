import AuthLogo from './extensions/MenuLogo.svg';
import MenuLogo from './extensions/MenuLogo.svg';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    locales: [
      'es'
    ],
    translations: {
      es: {
        "Auth.form.welcome.subtitle": "Inicie sesión en La Volta",
        "Auth.form.password.label": "Contraseña",
        "app.components.LeftMenu.navbrand.title": "La Volta",
        "app.components.LeftMenu.navbrand.workplace": "administración"
      }
    },
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Disable video tutorials
    tutorials: false,
  },
  bootstrap(app) {
    console.log(app);
  },
};
