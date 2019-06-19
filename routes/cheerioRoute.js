const axios = require('axios')
const { Link } = require('../models')

module.exports = app => {

  app.get('/seed', (req, res) => {

    Link.deleteMany({}, e => {
      if (e) throw e
      // res.sendStatus(200)
    })

    axios.get('https://www.bbc.com')
      .then(({ data }) => {
        const $ = require('cheerio').load(data)
        const bbcArray = []
        $('div.block-link').each((i, elem) => {
          const link = $(elem).children('div.media__content').children('h3.media__title').children('a.media__link').attr('href') ? $(elem).children('div.media__content').children('h3.media__title').children('a.media__link').attr('href') : $(elem).children('a.reel__link').attr('href')
          const title = $(elem).children('div.media__content').children('h3.media__title').children('a.media__link').text() ?  $(elem).children('div.media__content').children('h3.media__title').children('a.media__link').text().trim() : $(elem).children('a.reel__link').children('div.media__content').children('h3').text().trim()
          const summary = $(elem).children('div.media__content').children('p.media__summary').text() ? $(elem).children('div.media__content').children('p.media__summary').text().trim() : 'Click link to continue'
          // const image = $(elem).children('div.media__image').children('div.responsive-image').children('img.image-replace').attr('src')
          // console.log(title)
          const containsPrefixedDomain = link.includes('https://www.bbc.com') || link.includes('http://www.bbc.com') || link.includes('https://www.bbc.co.uk/')
          if (containsPrefixedDomain) {
            bbcArray.push({ title, link, summary })
          } else {
            bbcArray.push({ title, link: `https://www.bbc.com${link}`, summary })
          }
        })
        Link.insertMany(bbcArray, e => e ? console.log(e) : res.sendStatus(200))
        // console.log(bbcArray)
      })
      .catch(e => console.log(e))
  })
  

  
}

// app.get('/body', (req, res) => {
//   const introArr =  []
//   const introArraySend = []
//   Link.find({}, async (e, links) => {
//     if (e) throw e
//     for (let i = 0; i<links.length; i++){
//       introArr.push(links[i].link)
//     }
//     });
//     console.log(introArr)
//   })
//     // axios.all(introArr.map(link => axios.get(link)))
//     // .then(axios.spread((...response) => {
//     //   // all requests are now complete
//     //   const $ = require('cheerio').load(response)
//     //   const paragraph = $('p.story-body__introduction').text()
//     //   console.log(paragraph)
//     // }))
//     // console.log('hi')
//     // console.log(introArraySend)
//     // console.log(introArraySend)

//       //  axios.all(links)
//       //   .then(({data}) => {
//       //     const $ = require('cheerio').load(data)

//       //     introArr.push ({
//       //       intro: $('p.story-body__introduction').text()
//       //     })
//       //     // Promise.all(introArr)
//       //   })
//       //   .catch(e => console.log(e))
//       // Promise.all(introArr)
//       // console.log(introArr)
//   // })
//     // Body.insertMany(introArr, e => e ? console.log(e) : res.sendStatus(200))




//   // axios.get('https://www.bbc.com')
//   //   .then(({data}) => {
//   //     const $ = require('cheerio').load(data)
//   //     const bbcArray = []
//   //     $('a.media__link').each((i, elem) => {
//   //       bbcArray.push({
//   //         title: $(elem).text(),
//   //         link: $(elem).attr('href').includes('bbc.com') ? $(elem).attr('href') : `https://bbc.com${$(elem).attr('href')}`
//   //       })
//   //     })
//   //     Link.insertMany(bbcArray, e => e ? console.log(e) : res.sendStatus(200))
//   //     // console.log(bbcArray)
//   //   })
//   //   .catch(e => console.log(e))
//   }