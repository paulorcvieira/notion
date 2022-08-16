export interface ILesson {
  id: string
  title: string
  slug: string
  lessonType: 'live' | 'class'
  availableAt: string
}
