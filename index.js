import { load } from 'cheerio'
const page = process.env.page || 1

// Fetch everything from the Hacker News homepage
const hnpage = await fetch(`https://news.ycombinator.com/?p=${page}`)
const data = await hnpage.text()

const $ = load(data)
const pageContent = []

$('.athing').each((_index, el) => {
  const item = $(el)
  const rank = item.find('.title > .rank').text()
  const title = item.find('.title').find('a').first().text()
  const link = item.find('.titleline a').attr('href')
  const subline = item.next()
  const author = subline.find('.hnuser').text().trim()
  const points = subline.find('.score').text()
  const age = subline.find('.age').text()
  const comments = subline.find('a').last().text()

  pageContent.push({
    rank: rank ? Number(rank.replace('.', '')) : null,
    title,
    link,
    author: author.trim().length ? author : null,
    age,
    points: points ? Number(points.replace(' points', '')) : null,
    comments: comments.includes('comments')
      ? Number(comments.replace('comments', '').trim())
      : null,
  })
})

console.log(pageContent)
