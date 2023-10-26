export interface Messages {
  _id?: number
  name?: string
  avatar?: string
  content?: {
    messages?: Array<string>
    images?: Array<string>
  }
  createAt?: string
  seenBy?: Array<{ name?: string; avatar?: string }>
}
