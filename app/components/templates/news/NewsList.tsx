import { newsApi } from 'app/api/NewsApi'
import NewsHeader from 'app/components/atom/news/NewsHeader'
import NewsItem from 'app/components/organisms/newsItem/NewsItem'
import type { News } from 'app/types/NewsList'
import { useEffect, useState } from 'react'

export default function NewsList() {
  const [news, setNews] = useState<News[]>([])

  useEffect(() => {
    newsApi(1)
      .then((data) => setNews(data))
      .catch((error) => console.log('get api error', error))
  }, [])

  return (
    <>
      <NewsHeader />
      <div className="grid">
        {news.map((item, index) => (
          <NewsItem key={item.id} index={index} {...item} />
        ))}
      </div>
    </>
  )
}
