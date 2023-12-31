import { ViewportMap } from './types'

export const viewports: ViewportMap = {
  phoneSm: {
    name: 'Small phone',
    styles: {
      height: '812px',
      width: '375px',
    },
    type: 'mobile',
  },
  phoneMd: {
    name: 'Medium phone',
    styles: {
      height: '844px',
      width: '390px',
    },
    type: 'mobile',
  },
  phoneLg: {
    name: 'Large phone',
    styles: {
      height: '926px',
      width: '428px',
    },
    type: 'mobile',
  },
  tabletSm: {
    name: 'Small tablet',
    styles: {
      height: '768px',
      width: '1024px',
    },
    type: 'tablet',
  },
  tabletMd: {
    name: 'Medium tablet',
    styles: {
      height: '800px',
      width: '1280px',
    },
    type: 'tablet',
  },
  tabletLg: {
    name: 'Large tablet',
    styles: {
      height: '1024px',
      width: '1366px',
    },
    type: 'tablet',
  },
  desktopSm: {
    name: 'Small desktop',
    styles: {
      height: '900px',
      width: '1440px',
    },
    type: 'desktop',
  },
  desktopMd: {
    name: 'Medium desktop',
    styles: {
      height: '1080px',
      width: '1920px',
    },
    type: 'desktop',
  },
  desktopLg: {
    name: 'Large desktop',
    styles: {
      height: '1440px',
      width: '2560px',
    },
    type: 'desktop',
  },
}
