/**
 * The pseudo class ":xxx-xxxxx" is potentially unsafe when doing server-side rendering. Try changing it to ":xxx-xxxxx"
 * 
 * @link https://docs.frontity.org/guides/troubleshooting#solution-2
 */
export const nthChildToNthChildType = css => css.replace(/\:nth\-child/g, `:nth-type`)
export const firstChildToFirstOfType = css => css.replace(/\:first\-child/g, `:first-of-type`)

export const fixCss = css => firstChildToFirstOfType(nthChildToNthChildType(css))