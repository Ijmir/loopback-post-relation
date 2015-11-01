# loopback-sandbox

A repository for reproducing [LoopBack community issues][wiki-issues].

[wiki-issues]: https://github.com/strongloop/loopback/wiki/Reporting-issues


1. run a local mongodb server
1. run it with node server/server.js
2. go to explorer
3. POST an empty feed (save the returning id)
4. POST a comment:
```json
{
  "feed": {"id":<id>}
}
```

Go to local mongodb and check the comment that was saved. Is is saved as:
```json
{
  "feedRef": <id>
}
```

Why the id is not converted to ObjectID?
