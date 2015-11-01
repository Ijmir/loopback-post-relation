# loopback-sandbox

A repository for reproducing [LoopBack community issues][wiki-issues].

[wiki-issues]: https://github.com/strongloop/loopback/wiki/Reporting-issues


1. run a local mongodb server
1. run it with node server/server.js
1. go to explorer
1. POST an empty feed (save the returning id)
1. POST a comment:
```json
{
  "feed": {"id":<id>}
}
```
1. POST a comment:
```json
{
  "feedRef": <id>
}
```

Go to local mongodb and check the comment that was saved. In the first case:
```json
{
  "feedRef": <id>
}
```

Go to local mongodb and check the comment that was saved. In the second case:
```json
{
  "feedRef": ObjectId(<id>)
}
```

Why the id is not converted to ObjectID in the first case but is converted in the second case?
