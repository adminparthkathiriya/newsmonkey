import React, { Component } from "react";
import Newsitem from "./Newsitem";

  const articles = [
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Aria Alamalhodaei",
      "title": "SpaceX's defense-focused Starshield satellite internet business lands first contract | TechCrunch",
      "description": "SpaceX won its first contract for Starshield, the defense-focused version of Starlink, from the U.S. Space Force.",
      "url": "https://techcrunch.com/2023/09/28/spacexs-defense-focused-starshield-satellite-internet-business-lands-first-contract/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/51924933910_9627ae096e_o.jpg?resize=1200,800",
      "publishedAt": "2023-09-29T01:02:43Z",
      "content": "SpaceX won its first contract for Starshield, the defense-focused version of its Starlink satellite internet service, from the U.S. Space Force.\r\nThe one-year contract has a maximum value of $70 mill… [+2275 chars]"
    },

    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Taylor Hatmaker",
      "title": "On TikTok, videos promoting steroids are exploding — and at times targeting teens | TechCrunch",
      "description": "In a new report, a social media watchdog group details how steroid content is exploding in some TikTok communities, promoting potentially dangerous and",
      "url": "https://techcrunch.com/2023/09/28/tiktok-steroids-bodybuilding-ccdh-report/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1248389793.jpg?resize=1200,675",
      "publishedAt": "2023-09-28T22:54:41Z",
      "content": "In a new report, a social media watchdog group details how steroid content is exploding in some TikTok communities, promoting potentially dangerous and often illegal substances while propagating unat… [+4525 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Rebecca Bellan",
      "title": "Judge upholds $18 minimum pay for NYC delivery workers | TechCrunch",
      "description": "In a blow to Uber, DoorDash and Grubhub, a New York judge on Thursday ruled to allow the implementation of the minimum pay rate of $18 per hour for New",
      "url": "https://techcrunch.com/2023/09/28/judge-upholds-18-minimum-pay-for-nyc-delivery-workers/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-1522770414.jpg?resize=1200,800",
      "publishedAt": "2023-09-28T22:07:30Z",
      "content": "In a blow to Uber, DoorDash and Grubhub, a New York judge on Thursday ruled to allow the implementation of the minimum pay rate of $18 per hour for New York City’s food delivery workers.\r\nThe deliver… [+3102 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Sarah Perez",
      "title": "It's not clear X CEO Linda Yaccarino knew about Elon Musk's plan to charge for X | TechCrunch",
      "description": "In a live chat earlier this month, Elon Musk said X would charge users \"a small monthly payment\" to use its service -- a necessity, he explained, in order",
      "url": "https://techcrunch.com/2023/09/28/its-not-clear-x-ceo-linda-yaccarino-knew-about-elon-musks-plan-to-charge-for-x/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/09/1705119879.jpg?resize=1200,800",
      "publishedAt": "2023-09-28T21:16:57Z",
      "content": "In a live chat earlier this month, Elon Musk said X would charge users “a small monthly payment” to use its service — a necessity, he explained, in order to combat the “vast armies of bots” on the pl… [+4764 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Rebecca Bellan",
      "title": "Federal agency sues Tesla for racial discrimination of Black workers | TechCrunch",
      "description": "The EEOC filed suit against Tesla, accusing the automaker of violating federal law by tolerating widespread and ongoing racial harassment of its Black employees.",
      "url": "https://techcrunch.com/2023/09/28/eeoc-sues-tesla-for-racial-discrimination-of-black-workers/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/03/GettyImages-534236128.jpg?resize=1200,802",
      "publishedAt": "2023-09-28T21:14:14Z",
      "content": "The U.S. Equal Employment Opportunity Commission (EEOC) filed suit against Tesla on Thursday, accusing the automaker of violating federal law by tolerating widespread and ongoing racial harassment of… [+3744 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Aria Alamalhodaei",
      "title": "ispace unveils new lunar lander that will fly to the moon in 2026 | TechCrunch",
      "description": "ispace unveiled a new lunar lander design, called Apex 1.0, that will send scientific payloads to the lunar surface in 2026.",
      "url": "https://techcrunch.com/2023/09/28/ispace-unveils-new-lunar-lander-that-will-fly-to-the-moon-in-2026/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/09/ispace.jpeg?w=1024",
      "publishedAt": "2023-09-28T21:05:22Z",
      "content": "Japanese space company ispace has invested over $40 million in its new U.S. subsidiary to-date, as it looks to take advantage of growing investment from NASA and the Pentagon in technologies for the … [+2130 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Matt Burns",
      "title": "Honda forms largest EV partner network in the US despite not yet selling an EV in the country | TechCrunch",
      "description": "Honda is touting today that drivers of its EVs will soon have access to the most amount of charging locations in America. This is thanks to just-announced",
      "url": "https://techcrunch.com/2023/09/28/honda-forms-largest-ev-partner-network-in-the-us-despite-not-yet-selling-an-ev-in-the-country/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/09/113869_honda_urban_ev_concept_unveiled_at_the_frankfurt_motor_show.jpg?resize=1200,900",
      "publishedAt": "2023-09-28T20:34:14Z",
      "content": "Honda is touting today that drivers of its EVs will soon have access to the most amount of charging locations in America. This is thanks to just-announced agreements with EVgo and Electrify America, … [+1808 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Devin Coldewey",
      "title": "Your website can now opt out of training Google's Bard and future AIs | TechCrunch",
      "description": "Now you can choose whether to allow your web content to be used by Google to feed its Bard AI and any future models it decides to make.",
      "url": "https://techcrunch.com/2023/09/28/your-website-can-now-opt-out-of-training-googles-bard-and-future-ais/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1452119905.jpg?resize=1200,807",
      "publishedAt": "2023-09-28T20:16:13Z",
      "content": "Large language models are trained on all kinds of data, most of which it seems was collected without anyone’s knowledge or consent. Now you have a choice whether to allow your web content to be used … [+2007 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Alex Wilhelm and Dominic-Madori Davis",
      "title": "Should VCs back the FTC suit against Amazon? | TechCrunch",
      "description": "Which do you prefer: Regulators working to contain market power or a potential ceiling being set on exit values for the companies that you back?",
      "url": "https://techcrunch.com/2023/09/28/ftc-amazon-lawsuit-venture-capital/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-1196087625.jpg?resize=1200,840",
      "publishedAt": "2023-09-28T20:01:44Z",
      "content": "The FTC is not incredibly popular in the tech world today, taking aim at several high-dollar deals and executing vigorous antitrust efforts that could make it harder for the richest companies in tech… [+1010 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Lauren Forristal",
      "title": "Review: Tablo DVR gives users a major upgrade with its free ad-supported TV offering | TechCrunch",
      "description": "Tablo has always been a niche product, Grant Hall, founder and CEO of parent company Nuvyyo, admitted to TechCrunch. However, as more cord-cutters become For $100, the new Tablo DVR features 50+ hours of onboard recording storage, two ATSC 1.0 tuners and a ne…",
      "url": "https://techcrunch.com/2023/09/28/review-tablo-dvr-ota-free-ad-supported-tv-fast-channels/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/09/TabloOnly_Product_Images_R2-9-copy.jpg?w=800",
      "publishedAt": "2023-09-28T19:35:52Z",
      "content": "Tablo has always been a niche product, Grant Hall, founder and CEO of parent company Nuvyyo, admitted to TechCrunch. However, as more cord-cutters become frustrated with streaming services raising th… [+5193 chars]"
    }
  ]
  export class News extends Component {
  constructor(){
    super();
    this.state={
      articles:articles,
      loading:false
    }
  }
async componentDidMount(){
  let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=e455a28c9f0747a2a282bd60c6015fc4"
  let data= await fatch(url);
  let parseddata= await data.json();
  console.log(parseddata);
}
  render() {
    return (
    <div className="container my-3">
      <h2>News Monkey Top-Headlines</h2>
      
      <div className="row">
      {this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url} >
        <Newsitem title={element.title.slice(0,50)} description={element.description.slice(0,80)} imageurl={element.urlToImage} newsUrl={element.url}/>
      </div>
      })}
        
      </div>
    </div>
    )
  }
}

export default News;
