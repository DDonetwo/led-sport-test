tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                robotoCondensed: ['Roboto Condensed']
            },
            height: {
                'height100': '100dvh',
            },
            colors: {
                basic: '#0F58FB',
                basicText: '#152347',
                accent: '#AD00FF',
                medium: '00B2FF',
                lightText: '#00FFF0',
                white: '#FFFFFF',
            },
            boxShadow: {
                'custom': '0rem 0.5rem 1.35rem 0rem rgba(202, 195, 245, 0.17)',
            },
            backgroundImage: {
                'custom-gradient': 'linear-gradient(220.04deg, rgb(0, 179, 255) 29.377%, rgb(173, 0, 255) 172.827%)',
                'custom-gradient1': 'linear-gradient(220.04deg, rgba(0, 179, 255, 0.2),rgba(173, 0, 255, 0.2));',
                'custom-gradient2': 'linear-gradient(220.04deg, rgb(0, 179, 255) 10%, rgb(173, 0, 255) 100%)'
            },

            backgroundSize: {
                '200%': '200%',
              },
              keyframes: {
                gradient: {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                },
              },
              animation: {
                'gradient-move': 'gradient 3s ease infinite',
              },

        },
    },
}