let quote = document.querySelector('.quote')
let text = document.querySelector('.quote_text')
let author = document.querySelector('.quote_author')
let btn = document.querySelector('button')
let tweet = document.querySelector('.twitter-share-button')

function getQuote() {
  fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => {
      let index = Math.round(Math.random() * 1643)
      const textFinal = '"' + data[index].text + '"'
      const authorFinal = '- ' + data[index].author
      const tweetText = textFinal + authorFinal
      text.innerHTML = textFinal
      author.innerHTML = authorFinal
      tweet.href = 'https://twitter.com/intent/tweet?text=' + tweetText
    })
  setTimeout(() => {
    btn.classList.add('active')
  }, 0500)
}

function newQuote(e) {
  if (!e.target.matches('button.active')) return
  getQuote()
  btn.classList.remove('active')
}

window.addEventListener('load', getQuote)
quote.addEventListener('click', newQuote)
