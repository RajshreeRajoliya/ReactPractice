import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
static defaultProps = {
  country : 'in',
  pageSize : 8,
  category : 'general'
}

static  propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
}




capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


 articles=[]
  constructor(props){
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page:1,

    }
   document.title =  `${this.capitalizeFirstLetter(this.props.category)}||NewsMonkey`;
  }

 async componentDidMount() {
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1fece3659b11477eb1bb901d5ae5fa69&page=1&pageSize=${this.props.pageSize}`
//   this.setState({loading:true})
//   const data =await fetch(url)
//   const parsedData = await data.json()
//   this.setState({loading:false})
// this.setState({articles: parsedData.articles,
//   totalResults: parsedData.totalResults
// })
this.updateNow();
  }

  async updateNow() {
   const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=254e665b2a4c48198c45cb4fa33dc750&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    const data =await fetch(url)
    const parsedData = await data.json()
    this.setState({loading:false})
  this.setState({
    articles: parsedData.articles,
    page:this.state.page,
  })
  }


  handlePrevClick=async() =>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1fece3659b11477eb1bb901d5ae5fa69&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
  //   this.setState({loading:true})
  //   const data =await fetch(url)
  //   const parsedData = await data.json()
  //   this.setState({loading:false})
  // this.setState({
  //   articles: parsedData.articles,
  //   page:this.state.page-1,
  // })

  this.setState({page : this.state.page-1});
  this.updateNow();
  console.log("prev");
  }

  handleNextClick=async() =>{
//     if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){}
//     else{
//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1fece3659b11477eb1bb901d5ae5fa69&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
//     this.setState({loading:true})
//   const data =await fetch(url)
//   const parsedData = await data.json()
//   this.setState({loading:false})
// this.setState({
//   articles: parsedData.articles,
//   page:this.state.page+1,
// })
console.log("Next");
    // }
  this.setState({page:this.state.page+1});
  this.updateNow();
  }
  render() {
    return (
      <>
      <div className=' container my-3'>
      <div className='container d-flex justify-content-between'>
      <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Prev</button>
      <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

      </div>

      <h1 className='text-center'>News{this.capitalizeFirstLetter(this.props.category)}</h1>
      {this.state.loading && <Spinner/>}
      <div className='row gy-3'>
      {!this.state.loading && this.state.articles.map((element)=>{
      
     return ( <div className='col-md-4'key={element.url}>
        <NewsItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt}/>
        </div>
      )
      })}
      </div>
       
      </div>
      
      </>
    )
  }
}

export default News
