import { Email } from './StoryTypes'

let Emails: Email[] = [{
  id: 0,
  defaultAvailable: true,
  subject: "Todays's Assignment",
  from: "steve@awesomecorp.com",
  to: "sid@awesomecorp.com",
  body: "Hey Sid,\nHope you had a nice relaxing time w/ the fam in Costa Rica! We're stoked to have you back.\n\nI figured today you'd be catching up on email and whatnot so don't want to over-burden you, but if you have a second, I'm doing some analysis--could you take a look at the PTO data in X-Lerate and let me know how many TLOs were filled out last month.\n\n Best,\nSteve Cahill, CPA",
  replyTriggers: [{type: 'email', id: 2}],
}, {
  id: 1,
  defaultAvailable: true,
  subject: "Welcome Back!",
  from: "sarah@awesomecorp.com",
  to: "sid@awesomecorp.com",
  body: "Welcome back Sid!! Your trip sounded dope, hope you're not too bummed to be back on the grind.\n\nWe got a lot to catch up on.",
  replyTriggers: [] 
}, {
  id: 2,
  defaultAvailable: true,
  subject: "Take over PLX work?",
  from: "sandra@awesomecorp.com",
  to: "sid@awesomecorp.com",
  body: "Hey -- due to a lapse in resourcing, we need somebody to take on the PLX work, is that something you'd be able to help with?",
  replyTriggers: [] 
}
]

export default Emails