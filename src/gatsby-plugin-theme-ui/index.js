import baseTheme from 'gatsby-theme-wordpress-mdx/src/gatsby-plugin-theme-ui'
export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    modes: {
      ...baseTheme.colors.modes,
      purple: {
        ...baseTheme.colors.modes.purple,
        backgroundHeader: '#06050c',
        backgroundFeatures: 'linear-gradient(#06050c, #131127)',
        backgroundAbout: 'linear-gradient(#131127, #2e295e)',
        backgroundGeneral: 'linear-gradient(#2e295e, #423b87)',
        backgroundPost: 'linear-gradient(#423b87, #2e295e)',
        backgroundFooter: 'linear-gradient(#2e295e, #06050c)'
      },
      bulma: {
        textSecondary: 'hsl(0, 0%, 29%)',
        black: 'hsl(0, 0%, 4%)',
        text: 'hsl(0, 0%, 29%)',
        background: 'hsl(0, 0%, 100%)',
        primary: 'hsl(217, 71%,  53%)',
        muted: 'hsl(0, 0%, 96%)',
        backgroundNavBar: 'hsl(217, 71%,  53%)',
        backgroundSideBar: 'hsl(217, 71%,  53%)',
        activeTextBar: 'hsl(0, 0%, 29%)',
        textBar: 'hsl(0, 0%, 29%)',
        backgroundCard: 'hsl(0, 0%, 96%)',
        shadowCard: '9px 8px 50px rgba(32,32,35,.1)',
        imgShadow: '6px 7px 20px 0px rgb(43, 43, 47)'
      }
    }
  },
  logo: {
    width: '4em'
  }
}
