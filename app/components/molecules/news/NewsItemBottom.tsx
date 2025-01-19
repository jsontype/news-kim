import { Temporal } from 'temporal-polyfill'

interface Props {
  points?: number | null
  time: number
  time_ago: string
  domain?: string
}

export default function NewsItemBottom({
  time,
  time_ago,
  domain,
  points,
}: Props) {
  // time이 "day"단위인지 확인
  const checkTimeIsDays = (timeString: string) => {
    const isDay = timeString.includes('day')

    return isDay
  }

  // 초단위의 시간값을 연/월/일 - 시:분으로 변경
  const convertSecTimeToDay = (sec: number) => {
    const epoch = Temporal.Instant.fromEpochSeconds(sec)
    const dateTime = epoch.toZonedDateTimeISO('UTC')

    return `${dateTime.year}/${dateTime.month}/${dateTime.day} - ${dateTime.hour}:${dateTime.minute}`
  }

  return (
    <div className="bottom">
      {/* 24시간 이후. day단위 표시일 경우 날짜로 표시 */}
      {checkTimeIsDays(time_ago) ? (
        <span>{convertSecTimeToDay(time)}</span>
      ) : (
        <span>{time_ago}</span>
      )}
      {domain && (
        <>
          <span> from </span>
          <span className="font-medium text-orange-300"> {domain}</span>
        </>
      )}
      {points && <span> / {points} points </span>}
    </div>
  )
}
