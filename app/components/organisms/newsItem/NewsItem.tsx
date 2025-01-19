import NewsItemBottom from 'app/components/molecules/news/NewsItemBottom'
import NewsItemTop from 'app/components/molecules/news/NewsItemTop'
import { useEffect, useState } from 'react'

interface Props {
  index: number
  title: string
  points?: number | null
  time: number
  time_ago: string
  comments_count: number
  url?: string
  domain?: string
}

export default function NewsItem({
  index,
  title,
  points,
  time,
  time_ago,
  comments_count,
  url,
  domain,
}: Props) {
  const [isHasLink, setIsHasLink] = useState(false)

  const onEnterLink = (url: string | undefined) => {
    if (url !== undefined) window.open(url, '_blank')
    else return ''
  }

  useEffect(() => {
    if (url !== undefined && domain !== undefined) setIsHasLink(true)
  }, [])

  return (
    <div
      className={`grid gap-y-2 pt-2 ${index !== 30 && 'border-b-2 border-red-400 pb-2'} ${isHasLink ? 'hover:cursor-pointer hover:bg-zinc-600' : ''}`}
      onClick={() => (isHasLink ? onEnterLink(url) : '')}
    >
      <NewsItemTop title={title} comments_count={comments_count} />
      <NewsItemBottom
        points={points}
        time={time}
        time_ago={time_ago}
        domain={domain}
      />
    </div>
  )
}
