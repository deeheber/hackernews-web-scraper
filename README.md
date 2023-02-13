# hackernews-web-scraper

A lightweight node.js webscraper to retrieve the homepage of hackernews

## System Requirements

This repo utilizes the experimental `fetch` in node and top level `await`. To run this repo, you will need to use node 18 or higher (see `.nvmrc` for the exact version this was designed for).

## Instructions To Run

1. Clone the repo
2. `npm i`
3. `npm start`

It'll `console.log` the results of the scripe.

## Response Body

It'll be an array of objects, each object being a post on the homepage of hackernews. The object will have the following properties:

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
