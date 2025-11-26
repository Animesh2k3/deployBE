require('dotenv').config()
const express = require('express')
const app = express()
const port = 6000

const githubdata={
  
  "login": "Animesh2k3",
  "id": 122821140,
  "node_id": "U_kgDOB1IaFA",
  "avatar_url": "https://avatars.githubusercontent.com/u/122821140?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Animesh2k3",
  "html_url": "https://github.com/Animesh2k3",
  "followers_url": "https://api.github.com/users/Animesh2k3/followers",
  "following_url": "https://api.github.com/users/Animesh2k3/following{/other_user}",
  "gists_url": "https://api.github.com/users/Animesh2k3/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Animesh2k3/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Animesh2k3/subscriptions",
  "organizations_url": "https://api.github.com/users/Animesh2k3/orgs",
  "repos_url": "https://api.github.com/users/Animesh2k3/repos",
  "events_url": "https://api.github.com/users/Animesh2k3/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Animesh2k3/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Animesh Naithani",
  "company": null,
  "blog": "",
  "location": "Gurugram,Haryana",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 45,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2023-01-16T17:50:31Z",
  "updated_at": "2025-07-18T02:15:55Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
  res.send('Animeshdotcom')
})

app.get('/login',(req,res)=>{
  res.send('<h1>please login to fb.com</h1>')
})

app.get('/github',(req,res)=>{
  res.json(githubdata)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
