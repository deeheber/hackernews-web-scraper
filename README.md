# hackernews-web-scraper

A lightweight [node.js](https://nodejs.org/en/) webscraper to retrieve the homepage of [hackernews](https://news.ycombinator.com/).

## System Requirements

This repo utilizes the experimental `fetch` in node and top level `await`. To run this script, you will need to use node 18 or higher (see `.nvmrc` for the exact version this was designed for).

## Instructions To Run

1. Clone the repo
2. `npm i`
3. `npm start`

It'll `console.log` the results of the scrape.

To get pages beyond the first page, you can set `process.env.page` to the page number you want to get. For example, to get the second page, you can run `page=2 npm start`.

## Response Body

It'll be an array of objects, each object being a post on the homepage of hackernews. If a property does not exist on that object, it'll return `null`. The object will have the following properties:

```
{
  rank,
  title,
  link,
  author,
  age,
  points,
  comments
}
```

## Contributions

Have an idea that makes this even better? Contributions are welcome! Please open an issue or PR.
