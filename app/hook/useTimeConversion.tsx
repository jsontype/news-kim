// 분으로 되어있는 시간값을 시, 분으로 변경해주는 hook
export const useTimeConversion = () => {
  const timeConvert = (time: number) => {
    const hour = Math.floor(time / 60)
    const min = time % 60

    return { hour, min }
  }

  const conversionRuntime = (time: number) => {
    const { hour, min } = timeConvert(time)

    return `${hour} hr ${min} min`
  }

  return { conversionRuntime }
}
