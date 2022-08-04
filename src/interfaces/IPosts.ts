export type IAuthor = {
  name: string
  role: string
  avatar_url: string
}

export type IComment = {
  id: string
  author: IAuthor
  comment: string
  claps: number
  created_at: Date
}

export type IPost = {
  id: string
  author: IAuthor
  content: string
  draft: boolean
  created_at: Date
  comments: IComment[]
}
