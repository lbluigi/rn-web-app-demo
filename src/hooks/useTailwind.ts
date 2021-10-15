import tailwind, { getColor } from 'tailwind-rn'
import { useMediaQuery } from 'react-responsive'

// import { create } from 'tailwind-rn';
// import styles from '../../styles.json';

// const { tailwind: tw, getColor } = create(styles);
// export { tw, getColor };

interface breakpointsClassNamesInterface {
  sm?: string
  md?: string
  lg?: string
  xl?: string
}

interface applyBreakpointsClassNamesInterface {
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
}

const useTailwind = () => {
  const useIsAtLeastSm = () =>
    useMediaQuery({
      minWidth: 640,
    })

  const useIsAtLeastMd = () =>
    useMediaQuery({
      minWidth: 768,
    })

  const useIsAtLeastLg = () =>
    useMediaQuery({
      minWidth: 1024,
    })

  const useIsAtLeastXl = () =>
    useMediaQuery({
      minWidth: 1280,
    })

  const sm = useIsAtLeastSm()
  const md = useIsAtLeastMd()
  const lg = useIsAtLeastLg()
  const xl = useIsAtLeastXl()

  const tw = (
    baseClassNames: string,
    breakpointsClassNames?: breakpointsClassNamesInterface,
    applyBreakpointsClassNames?: applyBreakpointsClassNamesInterface
  ) => {
    return tailwind(
      [
        baseClassNames,
        applyBreakpointsClassNames?.sm && breakpointsClassNames?.sm,
        applyBreakpointsClassNames?.md && breakpointsClassNames?.md,
        applyBreakpointsClassNames?.lg && breakpointsClassNames?.lg,
        applyBreakpointsClassNames?.xl && breakpointsClassNames?.xl,
      ]
        .filter(Boolean)
        .join(' ')
    )
  }

  return {
    tw,
    getColor,
    sm,
    md,
    lg,
    xl,
  }
}

export default useTailwind
