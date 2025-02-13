export interface News {
  id: number
  title: string
  points?: number | null
  user?: string | null
  time: number
  time_ago: string
  comments_count: number
  type: string
  url?: string
  domain?: string
}
