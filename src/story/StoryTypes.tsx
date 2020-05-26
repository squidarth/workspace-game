export type Trigger = {
  type: "email" | "shack",
  id: number 
}

export type Email = {
  id: number,
  defaultAvailable: boolean,
  subject: string,
  from: string,
  to: string,
  body: string,
  replyTriggers: Trigger[]
}