export const px = defineUnit('px')
export const percent = defineUnit('%')

type Unit = (val: string | number) => string

export type UnitParam = string | number

function defineUnit(suffix: string): Unit
function defineUnit(suffix: string): any {
  return (val: string | number | undefined) => {
    if (typeof val === 'number') {
      return val + suffix
    }
    if (typeof val === 'undefined') {
      return undefined
    }

    return val
  }
}
