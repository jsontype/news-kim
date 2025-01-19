interface Props {
  title: string
  comments_count: number
}

export default function NewsItemTop({ title, comments_count }: Props) {
  return (
    <div className="flex-col">
      <span className="pr-1 text-3xl font-bold">{title}</span>
      <span className="inline-flex align-bottom">💬 {comments_count}</span>
    </div>
  )
}
