import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:8,
    category:'general',
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
//  articles= [
//     {
//       "source": {
//         "id": null,
//         "name": "YouTube"
//       },
//       "author": null,
//       "title": "Desperate Screams Of People Trapped Under The Rubble In Hatay | Turkey Earthquake Rescue Live - CNN-News18",
//       "description": "Desperate Screams Of People Trapped Under The Rubble In Hatay | Turkey Earthquake Live UpdatesAs night fell in Turkey's border province of Hatay on Monday (F...",
//       "url": "https://www.youtube.com/watch?v=8z-kTUs5pNw",
//       "urlToImage": "https://i.ytimg.com/vi/8z-kTUs5pNw/maxresdefault_live.jpg",
//       "publishedAt": "2023-02-11T08:14:09Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Fox Business"
//       },
//       "author": "Ken Martin",
//       "title": "West coast pipeline leak near Los Angeles has halted gasoline deliveries in several states - Fox Business",
//       "description": "A pipeline leak near Los Angeles has shutdown deliveries of gasoline to some California cities and states including Nevada and Arizona",
//       "url": "https://www.foxbusiness.com/markets/west-coast-pipeline-leak-near-los-angeles-halted-gasoline-deliveries-several-states",
//       "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/01/0/0/iStock-1294015692.jpg?ve=1&tl=1",
//       "publishedAt": "2023-02-11T07:28:27Z",
//       "content": "Gasoline deliveries on the West coast have been shutdown by a leak at a pipeline facility in California.\r\nThe shutdown is affecting deliveries of gasoline and diesel from the Los Angeles area east to… [+2054 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "The Athletic"
//       },
//       "author": "Marcus Thompson II",
//       "title": "Thompson: In a season of plot twists, the Warriors face another with Gary Payton II - The Athletic",
//       "description": "The Warriors' latest bold move, the trade that sent out ex-No. 2 pick James Wiseman and brought back Gary Payton II, hangs in the balance.",
//       "url": "https://theathletic.com/4181357/2023/02/10/warriors-gary-payton-james-wiseman/",
//       "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/02/10235108/GettyImages-1460996196-1024x683.jpg",
//       "publishedAt": "2023-02-11T07:14:43Z",
//       "content": "Golden States title defense is turning out to be a Shonda Rhimes production. The plot twists are absurd and engrossing.\r\nThe season began with a punch exacerbated by an unprecedented video leak. Our … [+5733 chars]"
//     },
//     {
//       "source": {
//         "id": "fox-news",
//         "name": "Fox News"
//       },
//       "author": "Lawrence Richard",
//       "title": "China accuses the US of lying to the world about spy surveillance aircraft - Fox News",
//       "description": "Beijing has ramped up its rhetoric toward the United States in the wake of the U.S. Air Force shooting down a Chinese aircraft capable of surveillance.",
//       "url": "https://www.foxnews.com/world/china-accuses-us-lying-world-about-spy-surveillance-aircraft",
//       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/02/AP23041188410707.jpg",
//       "publishedAt": "2023-02-11T05:25:00Z",
//       "content": "China has accused the United States of lying to the world after the House of Representatives unanimously passed a resolution condemning Beijing's statements about a surveillance spy balloon hovering … [+4257 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "MMA Fighting"
//       },
//       "author": "MMA Fighting Newswire",
//       "title": "UFC 284 Results: Makhachev vs. Volkanovski - MMA Fighting",
//       "description": "Get UFC 284 results for the Makhachev vs. Volkanovski event Saturday night.",
//       "url": "https://www.mmafighting.com/2023/2/11/23593848/ufc-284-results-makhachev-vs-volkanovski",
//       "urlToImage": "https://cdn.vox-cdn.com/thumbor/dpP03zjicSqnH7sZAv7PQx-j2nw=/0x0:6942x3635/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24425099/1464901068.jpg",
//       "publishedAt": "2023-02-11T05:00:00Z",
//       "content": "MMA Fighting has UFC 284 results for the Makhachev vs. Volkanovski fight card, live blogs for all the main card fights, and more from RAC Arena in Perth, Australia on Saturday night.\r\nIn the main eve… [+924 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "BBC News"
//       },
//       "author": "https://www.facebook.com/bbcnews",
//       "title": "John Tory: Toronto mayor quits after affair with ex-staffer during pandemic - BBC",
//       "description": "John Tory said the relationship was \"a serious error in judgement\" after it was revealed by a newspaper.",
//       "url": "https://www.bbc.com/news/world-us-canada-64606152",
//       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E541/production/_128598685_gettyimages-1241440005.jpg",
//       "publishedAt": "2023-02-11T04:43:45Z",
//       "content": "The mayor of Canadian city Toronto has resigned unexpectedly after admitting to a relationship with a former staff member.\r\nJohn Tory's announcement came shortly after the Toronto Star newspaper repo… [+1171 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "YouTube"
//       },
//       "author": null,
//       "title": "Body cam video shows deadly arrest of North Carolina man - NBC News",
//       "description": "Video released by the Raleigh Police Department shows the arrest of Darryl Williams, who was shocked three times with a Taser and later died. WRAL’s Chelsea ...",
//       "url": "https://www.youtube.com/watch?v=wpQz-gAW3mo",
//       "urlToImage": "https://i.ytimg.com/vi/wpQz-gAW3mo/maxresdefault.jpg",
//       "publishedAt": "2023-02-11T04:30:14Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Post Magazine"
//       },
//       "author": null,
//       "title": "Japan believes green lasers seen over Hawaii likely from China satellite - South China Morning Post",
//       "description": "The National Astronomical Observatory of Japan said that the light show spotted over Hawaii’s tallest mountain in January was likely from a Chinese satellite launched last year.",
//       "url": "https://www.scmp.com/news/asia/east-asia/article/3209862/japan-astronomers-believe-green-lights-seen-over-hawaii-are-lasers-chinese-satellite",
//       "urlToImage": "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/canvas/2023/02/11/8ad472f5-342a-4736-acd4-33ed48ef0fea_d250e021.jpg?itok=wn3Stt5o&v=1676100220",
//       "publishedAt": "2023-02-11T04:27:39Z",
//       "content": "Astronomers in Japan believe green laser-lights spotted over Hawaii last month were beamed down by a Chinese weather satellite.\r\nThe National Astronomical Observatory of Japan posted video online of … [+688 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Thenationaldesk.com"
//       },
//       "author": "KONNER MCINTIRE and JANAE BOWENS | The National Desk",
//       "title": "Fact Check Team: Do Republicans want to cut Medicare and Social Security? - WTVC",
//       "description": "President Biden doubled down on his claims that Republicans want to cut Social Security and Medicare.",
//       "url": "https://thenationaldesk.com/news/fact-check-team/fact-check-team-do-republicans-want-to-cut-medicare-and-social-security-president-joe-bide-mike-lee-budget-deficit-immigration-education-jobs-climate-change-environment-republicans-democrats-congress-president-gop-inflation-money-budget-national-debt",
//       "urlToImage": "https://newschannel9.com/resources/media/ad032329-c3be-4f85-972a-a5bf0830dac9-large16x9_Untitleddesign54.png?1675900036555",
//       "publishedAt": "2023-02-11T04:16:58Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "YouTube"
//       },
//       "author": null,
//       "title": "Live : Sun Baffles Scientists As Part Of Sun Breaks Off Forming Strange Crown-like Vortex - TIMES NOW",
//       "description": "Live : A 'material' from a northern prominence broke away from the main filament and was circulating in a massive polar vortex around the north pole of the S...",
//       "url": "https://www.youtube.com/watch?v=qi7NBWibETE",
//       "urlToImage": "https://i.ytimg.com/vi/qi7NBWibETE/maxresdefault_live.jpg",
//       "publishedAt": "2023-02-11T04:14:43Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "The A.V. Club"
//       },
//       "author": "William Hughes",
//       "title": "It's wild that Rihanna won't get paid for her Super Bowl halftime show - The A.V. Club",
//       "description": "As per Big Game tradition, one of the planet's biggest musical stars will be working \"for exposure\" at this Sunday's Super Bowl halftime show",
//       "url": "https://www.avclub.com/its-wild-that-rihanna-wont-get-paid-for-her-super-bowl-1850102654",
//       "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b070e741e83b02cc8df92bca4368d7b9.jpg",
//       "publishedAt": "2023-02-11T04:11:00Z",
//       "content": "Were just two days away from Super Bowl Sunday at this point, as anticipation continues to build nationwide for every aspect of The Big Game that does not, of course, involve the actual playing or vi… [+2516 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "KXAN.com"
//       },
//       "author": "Erica Pauda",
//       "title": "‘Days of Our Lives’ actor Cody Longo found dead at 34 in Austin - KXAN.com",
//       "description": "Cody Longo, an actor who appeared on ‘Days of Our Lives,’ has died, according to TMZ. He was 34.",
//       "url": "https://www.kxan.com/entertainment-news/days-of-our-lives-actor-cody-longo-found-dead-at-34-in-austin/",
//       "urlToImage": "https://www.kxan.com/wp-content/uploads/sites/40/2023/02/Cody-Longo_web.jpg?w=1280",
//       "publishedAt": "2023-02-11T04:06:15Z",
//       "content": "AUSTIN (KXAN) Cody Longo, an actor who appeared on ‘Days of Our Lives,’ has died, according to TMZ. He was 34.\r\nA family member of Longo told TMZ his body was found Wednesday in bed at a residence in… [+823 chars]"
//     },
//     {
//       "source": {
//         "id": "cbs-news",
//         "name": "CBS News"
//       },
//       "author": "Andres Triay, Robert Costa, Kathryn Watson, Robert Legare",
//       "title": "FBI search of Pence's home uncovers more documents - CBS News",
//       "description": "Federal authorities found another document with classification markings at the former vice president's home Friday.",
//       "url": "https://www.cbsnews.com/news/pences-home-being-searched-fbi/",
//       "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/02/10/6c0b0d11-e247-410b-ac61-8e87ee9d078e/thumbnail/1200x630/ff091c6b585c4ae726abb5e2a8a7228c/ap23041633326718.jpg",
//       "publishedAt": "2023-02-11T03:43:00Z",
//       "content": "The FBI has discovered more relevant documents in a consensual search Friday of the Carmel, Ind., home of former Vice President Mike Pence. Federal authorities removed one document with classificatio… [+3276 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "PINKVILLA"
//       },
//       "author": "Prerna Verma",
//       "title": "Nayi bahu Kiara Advani looks gorgeous as she poses with hubby Sidharth Malhotra in viral pictures from Delhi - PINKVILLA",
//       "description": "Sidharth Malhotra And Kiara Advani Are The Newlyweds Of Bollywood. These Lovebirds Make One Of The Most Gorgeous Couples And Their Wedding Pictures Are Proof Of It.",
//       "url": "https://www.pinkvilla.com/entertainment/news/nayi-bahu-kiara-advani-looks-gorgeous-as-she-poses-with-hubby-sidharth-malhotra-in-viral-pictures-from-delhi-1208877",
//       "urlToImage": "https://www.pinkvilla.com/english/images/2023/02/1100710604_sid-1_1280*720.jpg",
//       "publishedAt": "2023-02-11T02:50:19Z",
//       "content": "Sidharth Malhotra and Kiara Advani are the newlyweds of Bollywood. These lovebirds make one of the most gorgeous couples and their wedding pictures are proof of it. After dating for a long time they … [+1780 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Yahoo Entertainment"
//       },
//       "author": "Greg Brainos",
//       "title": "Super Bowl betting, odds: Another $1 million wager comes in on the Philadelphia Eagles - Yahoo Sports",
//       "description": "Bettors continue flocking to the Eagles.",
//       "url": "https://sports.yahoo.com/super-bowl-betting-odds-another-1-million-wager-comes-in-on-the-philadelphia-eagles-020831380.html",
//       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/6lsEQjAXtvejw1omv6UZYw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-02/1da193a0-a9b0-11ed-a6bf-eb96befa9408",
//       "publishedAt": "2023-02-11T02:08:00Z",
//       "content": "Theres a lot to like about the Philadelphia Eagles. They rank third in offensive and defensive DVOA, their ground game leads the NFL in rushing EPA and success rate, their defense tops the league in … [+2163 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "13abc Action News"
//       },
//       "author": "Sophie Bates",
//       "title": "Toledo-born teen bullied, dies by suicide - WTVG",
//       "description": "Washington Middle School Counselor Molly Toney says the best thing parents can do is check in with their child daily.",
//       "url": "https://www.13abc.com/2023/02/11/toledo-born-teen-bullied-dies-by-suicide/",
//       "urlToImage": "https://gray-wtvg-prod.cdn.arcpublishing.com/resizer/Bn3UJbMwzaRhYggj11NSJ7GTSgQ=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/2GPEA47QQFH6BFCFX54IT2VZVY.png",
//       "publishedAt": "2023-02-11T01:34:00Z",
//       "content": "TOLEDO, Ohio (WTVG) - Toledo-born 14-year-old Adriana Kuch died by suicide after a video was posted online of her being kicked and punched by several fellow students at Central Regional High School i… [+1962 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "YouTube"
//       },
//       "author": null,
//       "title": "Sen. Fetterman discharged from hospital and will return to Senate Monday - NBC News",
//       "description": "A spokesperson for Senator John Fetterman tweeted that he has been discharged from the hospital and will return to the Senate on Monday. Fetterman was hospit...",
//       "url": "https://www.youtube.com/watch?v=L6VZtjrxscw",
//       "urlToImage": "https://i.ytimg.com/vi/L6VZtjrxscw/maxresdefault.jpg",
//       "publishedAt": "2023-02-11T01:30:16Z",
//       "content": null
//     },
//     {
//       "source": {
//         "id": "cnn",
//         "name": "CNN"
//       },
//       "author": "Tara John",
//       "title": "Lula says Brazil is no more divided than the US as he meets Biden - CNN",
//       "description": "Brazilian President Luiz Inacio Lula da Silva said the divisions in his country were no worse than the political split in the United States, in an exclusive CNN interview Friday ahead of his meeting with President Joe Biden at the White House.",
//       "url": "https://www.cnn.com/2023/02/10/americas/brazil-president-lula-interview-intl-latam/index.html",
//       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230210104142-01-lula-amanpour.jpg?c=16x9&q=w_800,c_fill",
//       "publishedAt": "2023-02-11T00:57:00Z",
//       "content": "Brazilian President Luiz Inacio Lula da Silva said the divisions in his country were no worse than the political split in the United States, in an exclusive CNN interview Friday ahead of his meeting … [+5619 chars]"
//     },
//     {
//       "source": {
//         "id": "reuters",
//         "name": "Reuters"
//       },
//       "author": null,
//       "title": "Google cautions against 'hallucinating' chatbots - report - Reuters",
//       "description": "The boss of Google's search engine warned against the pitfalls of artificial intelligence in chatbots in a newspaper interview published on Saturday, as Google parent company Alphabet <a href=\"https://www.reuters.com/companies/GOOGL.O\" target=\"_blank\">(GOOGL.…",
//       "url": "https://www.reuters.com/technology/google-cautions-against-hallucinating-chatbots-report-2023-02-11/",
//       "urlToImage": "https://www.reuters.com/resizer/f8kUqx-JyEKCBhk-tAoSuvoeM54=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AZ3C2MC6TFISFPLH23LDWY2B74.jpg",
//       "publishedAt": "2023-02-11T00:17:00Z",
//       "content": "BERLIN, Feb 11 (Reuters) - The boss of Google's search engine warned against the pitfalls of artificial intelligence in chatbots in a newspaper interview published on Saturday, as Google parent compa… [+1384 chars]"
//     },
//     {
//       "source": {
//         "id": "reuters",
//         "name": "Reuters"
//       },
//       "author": null,
//       "title": "Children rescued from ruins days after earthquake, but death toll tops 23700 - Reuters",
//       "description": "Rescue crews saved a <a href=\"/world/middle-east/newborn-toddlers-survive-days-rubble-bringing-joy-amid-earthquake-tragedy-2023-02-10/\">10-day-old baby</a> and his mother trapped in the ruins of a building in Turkey on Friday and dug several people out from o…",
//       "url": "https://www.reuters.com/world/middle-east/rescues-provide-glimmer-hope-among-turkey-quake-ruins-toll-tops-20000-2023-02-10/",
//       "urlToImage": "https://www.reuters.com/resizer/-jAXJEcjzTIHQq2JkW452_sAVDc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NUOFGJ3MVNOA3CFEFGIQ5VQNTM.jpg",
//       "publishedAt": "2023-02-11T00:12:00Z",
//       "content": "ANTAKYA, Turkey/JANDARIS, Syria, Feb 10, (Reuters) - Rescue crews saved a 10-day-old baby and his mother trapped in the ruins of a building in Turkey on Friday and dug several people out from other s… [+6195 chars]"
//     }
//   ]
articles=[]

capitalizeFirstLetter(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}
constructor(props){
  super(props);
  this.state = {
    articles: this.articles,
    loading: false,
    page:1,
    totalResults:0

  }
  document.title= `${this.capitalizeFirstLetter(this.props.category)}`
}
async componentDidMount() {
this.updateNow();
}

async updateNow(){
let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
  // this.setState({loading:true})
  this.props.setProgress(10)
  const data =await fetch(url)
  this.props.setProgress(45)
  const parsedData = await data.json()
  this.props.setProgress(100)
  // this.setState({loading:false})
this.setState({
  articles: parsedData.articles,
  page:this.state.page,
  totalResults: parsedData.totalResults
})
}
  // line no 312 to 344 commented for InfiniteScroll
// handlePrevClick=async() =>{
// //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1fece3659b11477eb1bb901d5ae5fa69&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
// //   this.setState({loading:true})
// //   const data =await fetch(url)
// //   const parsedData = await data.json()
// //   this.setState({loading:false})
// // this.setState({
// //   articles: parsedData.articles,
// //   page:this.state.page-1,
// // })
// // console.log("prev");

// this.setState({page:this.state.page-1});
// this.updateNow();
// }
// handleNextClick=async() =>{
// //     if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){}
// //     else{
// //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1fece3659b11477eb1bb901d5ae5fa69&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
// //     this.setState({loading:true})
// //   const data =await fetch(url)
// //   const parsedData = await data.json()
// //   this.setState({loading:false})
// // this.setState({
// //   articles: parsedData.articles,
// //   page:this.state.page+1,
// // })
// console.log("Next");
//   // }
//   this.setState({page:this.state.page+1});
// this.updateNow();
// }

//for inifinity scrolling
fetchMoreData = async() => {
  this.setState({page:this.state.page+1});
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
  
  const data =await fetch(url)
  const parsedData = await data.json()

this.setState({
  articles:this.state.articles.concat(parsedData.articles),
  page:this.state.page,
  totalResults: parsedData.totalResults
})


};

render() {
  return (
    <>
    
    {/* we have  commented this for infinity scroll */}
    {/* <div className='container d-flex justify-content-between'>
    <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Prev</button>
    <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

    </div> */}

    <h1 className='text-center'>Headlines on { this.capitalizeFirstLetter(this.props.category)}</h1>
    {this.state.loading && <Spinner/>}

    <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !==this.totalResults}
        loader={<Spinner/>}
      >
        <div className='row gy-3'>
    {/* line no355 is for prev and next button */}
    {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
      {/* line no357 is for prev and next button */}
      {this.state.articles.map((element)=>{
    return ( <div className='col-md-4'key={element.url}>
      <NewsItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
      </div>
    )
    })}
    </div>
      </InfiniteScroll>
  
      

    
    </>
  )
}
}

export default News
