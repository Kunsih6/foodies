module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffd600',
          hover: '#ffea79',
        },
        secondary: {
          DEFAULT: '#ff2c2c',
        },
        'location-card': {
          DEFAULT: '#FFF1BF',
        },
      },
      container: {
        padding: {
          DEFAULT: '1rem',
        },
      },
      fontFamily: {
        title: ['Druk_Text_Wide', 'Syne', 'Open Sans'],
        heading: ['Syne', 'Druk_Text_Wide', 'Open Sans'],
        text1: ['Open Sans', 'Roboto'],
        text2: ['Roboto', 'Open Sans'],
      },
      fontSize: {
        '6xl': '4rem',
        '5xl': '3rem',
        '4xl': '2.25rem',
        '3xl': '1.875rem',
        '2xl': '1.5rem',
        xl: '1.25rem',
        lg: '1.125rem',
        base: '1rem',
        sm: '0.875rem',
        xs: '0.75rem',
      },
      maxHeight: {
        'home-decorator': '90vh',
      },
      minHeight: {
        'menu-hero': '90vh',
        'home-decorator': '28rem',
      },
      strokeWidth: {
        6: '6',
      },
      height: {
        'about-decorator': '150%',
        'home-decorator': '125%',
        'title-decorator': '110%',
      },
      width: {
        '95/100': '98%',
        'title-decorator': '110%',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
}
