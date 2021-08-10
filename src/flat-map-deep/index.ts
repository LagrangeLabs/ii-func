/**
 * 平展数组
 * @param array 要平展的数组
 * @param field 要平展的字段
 * @returns array
 * @author sunyonghua
 */
const flatMapDeep = <T extends Record<string, any>>(
  array: T[],
  field: string = 'children',
): T[] => {
  return array.reduce((prev: T[], cur) => {
    const newPrev = [...prev]
    newPrev.push(cur)
    if (cur[field] && Array.isArray(cur[field])) {
      return [...prev, ...flatMapDeep<T>(cur[field], field)]
    }
    return newPrev
  }, [])
}

export default flatMapDeep
