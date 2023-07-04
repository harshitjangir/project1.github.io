import React, { Component } from 'react'
import NewsItem from './NewsItem'
//import axios from 'axios'
export class News extends Component {
    articles = [
        {
            "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
            },
            "author": "Martin Wall",
            "title": "Sarah Palin loses comeback bid as Democrat wins Alaska",
            "description": "Trump argues discovery of classified documents among presidential records should not have been cause for alarm",
            "url": "https://www.irishtimes.com/world/us/2022/09/01/sarah-palin-loses-comeback-bid-as-democrat-wins-alaska/",
            "urlToImage": "https://www.irishtimes.com/resizer/VTEripsczMHDJiaP5jMZVNk4zos=/1200x630/filters:format(jpg):quality(70):focal(1996x596:2006x606)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/2IWKINAVHIQGU5J5CQQ3U3FSXA.jpg",
            "publishedAt": "2022-09-01T05:46:38Z",
            "content": "Former US republican vice presidential candidate Sarah Palin has been defeated in her attempt to return to national politics.\r\nIn a significant upset, Ms Palin lost to Democrat Mary Peltola in a spec… [+3562 chars]"
        },
        {
            "source": {
                "id": "der-tagesspiegel",
                "name": "Der Tagesspiegel"
            },
            "author": null,
            "title": "Ex-Präsident beharrt auf neutralem Prüfer",
            "description": "Aus Gründen der Fairness und Transparenz müsse ein Sonderbeauftragter berufen werden, argumentieren Trumps Anwälte. Der könnte die Ermittlungen verzögern.",
            "url": "https://www.tagesspiegel.de/politik/ermittlungen-gegen-trump-ex-praesident-beharrt-auf-neutralem-pruefer/28648408.html",
            "urlToImage": "https://www.tagesspiegel.de/images/ehemaliger-us-praesident-trump/28648412/2-format530.jpg",
            "publishedAt": "2022-09-01T04:58:38+00:00",
            "content": "In den Ermittlungen zu seinem Umgang mit geheimen Regierungsunterlagen beharrt der frühere US-Präsident Donald Trump auf die Einsetzung eines neutralen Prüfers. In einem am Mittwochabend (Ortszeit) v… [+1948 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Fox News",
            "title": "Harold Ford Jr. on Trump taking classified documents: 'You've got to turn these things back in'",
            "description": "'Gutfeld!' panelists discuss what could be found in the classified materials taken by the FBI from Donald Trump's Mar-a-Lago estate.",
            "url": "https://video.foxnews.com/v/6311670768112/",
            "urlToImage": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/bea44bed-c9dd-402b-906c-2a871d91764b/e65ac8cc-c047-44b6-8ed5-c28e119004df/1280x720/match/image.jpg",
            "publishedAt": "2022-09-01T04:37:27.2856617Z",
            "content": null
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Fox News",
            "title": "Brennan: ‘Clearly’ Trump had ‘nefarious intentions,’ ‘nothing short of our national security at stake’",
            "description": "Former CIA Director John Brennan claimed President Trump \"clearly\" had \"nefarious intentions\" with the documents he was holding in Mar-a-Lago.",
            "url": "https://www.foxnews.com/media/brennan-clearly-trump-nefarious-intentions-nothing-short-national-security-stake",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2020/11/John-Brennan-REUTERS.jpg",
            "publishedAt": "2022-09-01T04:37:26.0664067Z",
            "content": "John Brennan, former CIA Director, appeared on MSNBCS \"The ReidOut\" Wednesday to discuss how he considers former President Donald Trump to be a \"national security\" risk with \"nefarious intentions\" af… [+5089 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Cheryl Teh",
            "title": "Michael Cohen: Trump has copies of top-secret files at his other homes",
            "description": "Cohen's comments came a day after the Justice Department released a photo showing an array of top-secret documents that were found at Mar-a-Lago.",
            "url": "http://www.businessinsider.com/michael-cohen-trump-copies-top-secret-files-at-other-homes-2022-9",
            "urlToImage": "https://i.insider.com/63102b3f3fe7c40019e4cc40?width=1200&format=jpeg",
            "publishedAt": "2022-09-01T04:36:13Z",
            "content": "Michael Cohen, who was once former President Donald Trump's lawyer, believes Trump likely has copies of the classified documents the FBI seized from Mar-a-Lago stashed in other locations. \r\nCohen was… [+2652 chars]"
        },
        {
            "source": {
                "id": "breitbart-news",
                "name": "Breitbart News"
            },
            "author": "Jordan Dixon-Hamilton",
            "title": "Trump Legal Team Blasts DOJ for ‘Leak,’ ‘Unprecedented Behavior’",
            "description": "Trump’s legal team blasted the DOJ and FBI for scattering documents seized from Mar-a-Lago across the floor “for dramatic effect.\"",
            "url": "https://www.breitbart.com/politics/2022/08/31/trump-legal-team-blasts-doj-for-leak-unprecedented-behavior/",
            "urlToImage": "https://media.breitbart.com/media/2022/08/GettyImages-1242440448-1-640x335.jpg",
            "publishedAt": "2022-09-01T04:16:08Z",
            "content": "Former President Donald Trumps legal team blasted the U.S. Department of Justice (DOJ) and the FBI for scattering documents seized from Mar-a-Lago across the floor for dramatic effect in its latest c… [+4227 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Analysis by Stephen Collinson, CNN",
            "title": "Analysis: Trump's legal gambits offer fresh revelations and deepen his political risk",
            "description": "Donald Trump's scatter-shot defense in the weeks since FBI agents descended on his Mar-a-Lago resort has only exposed the depth of the mess he faces over his refusal to return classified documents that led to an unprecedented search of an ex-president's home.",
            "url": "http://us.cnn.com/2022/09/01/politics/trump-legal-gambits-political-risk-analysis/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220831235930-03-trumps-legal-gambits-super-tease.jpg",
            "publishedAt": "2022-09-01T04:09:03Z",
            "content": null
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Trump team downplays sensitive files at Mar-a-Lago",
            "description": "His lawyers argue the FBI search this month was \"unprecedented, unnecessary, and legally unsupported\".",
            "url": "http://www.bbc.co.uk/news/world-us-canada-62747381",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/131CC/production/_126548287_gettyimages-1411091548.jpg",
            "publishedAt": "2022-09-01T03:22:21.6100853Z",
            "content": "Lawyers for Donald Trump have argued that the storage of sensitive files at his Florida home \"should have never been cause for alarm\".\r\nHis legal team said the FBI search this month was \"unprecedente… [+3088 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "CBS News",
            "title": "Justice Department alleges \"obstructive conduct\" took place at Mar-a-Lago",
            "description": "A court filing from the Justice Department suggests former President Donald Trump's legal team likely \"concealed and removed\" some government documents prior to the FBI search of Mar-a-Lago. The DOJ asked a federal judge in Florida to reject Trump's request f…",
            "url": "https://www.cbsnews.com/video/justice-dept-suggests-government-records-likely-concealed-and-removed-from-mar-a-lago/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2022/09/01/3c56cdc5-dbc9-4b48-8bee-9b621a8acc81/thumbnail/1200x630/9caed9ecf995c3061a0552078d2e9f82/cbsn-fusion-justice-dept-suggests-government-records-likely-concealed-and-removed-from-mar-a-lago-thumbnail-1248745-640x360.jpg",
            "publishedAt": "2022-09-01T03:17:02+00:00",
            "content": "Watch CBS News\r\nCopyright ©2022 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "CBS News",
            "title": "8/31: Red and Blue",
            "description": "DOJ's late-night filing levels allegations at Trump team; Women fighting to break political glass ceiling",
            "url": "https://www.cbsnews.com/video/083122-red-and-blue/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2022/09/01/38e84c76-4e18-4a84-a543-1a7269498d5d/thumbnail/1200x630/b4a03efe9724ec12f7c77b770b8cba26/0831-rb-full-1248906-640x360.jpg",
            "publishedAt": "2022-09-01T03:00:40+00:00",
            "content": "Watch CBS News\r\nCopyright ©2022 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Robert Legare",
            "title": "Trump legal team responds to Justice Department filing in another request for special master",
            "description": "In a court filing on Wednesday, Trump's lawyers again urged for the appointment of a Special Master.",
            "url": "https://www.cbsnews.com/news/donald-trump-special-master-request-responds-to-justice-department/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2022/08/31/202183b9-42ac-40b5-85d4-07503b9598ee/thumbnail/1200x630/d6de720ae531467d097d899cd10e495a/gettyimages-97212030.jpg",
            "publishedAt": "2022-09-01T03:00:08+00:00",
            "content": "Washington – Former President Donald Trump's legal team on Wednesday again urged a federal judge to appoint a third party – known as a Special Master – to review the documents seized from his Mar-a-L… [+5417 chars]"
        },
        {
            "source": {
                "id": "cnn-es",
                "name": "CNN Spanish"
            },
            "author": "CNN",
            "title": "Trump le dice a la corte que era previsible encontrar documentos clasificados dentro de los registrados presidenciales hallados en Mar-a-Lago",
            "description": "Trump argumentó en un expediente judicial que los Archivos Nacionales deberían haber esperado encontrar material clasificado.",
            "url": "https://cnnespanol.cnn.com/2022/08/31/trump-corte-material-clasificado-registros-presidenciales-mar-a-lago-trax/",
            "urlToImage": "https://cnnespanol.cnn.com/wp-content/uploads/2022/08/trump-mar-a-lago.jpg?quality=100&strip=info",
            "publishedAt": "2022-09-01T02:55:32Z",
            "content": "Podrían revelar documentos que justifican el registro de Mar-a-Lago 2:25\r\n(CNN) -- El expresidente Donald Trump argumentó en un presentación judicial este miércoles que los Archivos Nacionales deberí… [+6341 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": null,
            "title": "Video: Ex-FBI deputy director says Trump's response is 'all over the map' - CNN Video",
            "description": "Ex-FBI Deputy Director Andrew McCabe reacts to former President Donald Trump's formal response in court to the Justice Department's blockbuster filing, which revealed new details about the Mar-a-Lago investigation.",
            "url": "http://us.cnn.com/videos/politics/2022/09/01/trump-mar-a-lago-fbi-search-doj-filing-response-mccabe-sot-ac360-vpx.cnn",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220831203817-trump-mar-a-lago-fbi-search-doj-filing-response-mccabe-sot-ac360-vpx-00001425-super-tease.jpg",
            "publishedAt": "2022-09-01T01:52:25.4655957Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news-ca",
                "name": "Google News (Canada)"
            },
            "author": null,
            "title": "'Bombshell': D.C. national security attorney says U.S. DOJ filings on Mar-a-Lago raid expose Trump",
            "description": "A late-night filing of legal briefs outlining previously unknown allegations about the FBI raid on former U.S. president Donald Trump’s Mar-a-Lago resort exposed gaping holes in his version of events, according to an expert.",
            "url": "https://www.ctvnews.ca/world/bombshell-d-c-national-security-attorney-says-u-s-doj-filings-on-mar-a-lago-raid-expose-trump-1.6051095",
            "urlToImage": "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2021/7/9/trump-1-5503200-1627397755402.jpg",
            "publishedAt": "2022-09-01T01:49:00+00:00",
            "content": "A late-night filing of legal briefs outlining previously unknown allegations about the FBI raid on former U.S. president Donald Trumps Mar-a-Lago resort exposed gaping holes in his version of events,… [+5380 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "Aila Slisco",
            "title": "Donald Trump Aims to End 'Confusion' Over FBI Photo of Top Secret Documents",
            "description": "In a move that legal experts suggested could be incriminating, Trump did not deny possessing the documents and instead criticized the photo itself.",
            "url": "https://www.newsweek.com/donald-trump-aims-end-confusion-over-fbi-photo-top-secret-documents-1738772",
            "urlToImage": "https://d.newsweek.com/en/full/2107787/donald-trump-fbi-raid-doj-documents-photo.jpg",
            "publishedAt": "2022-09-01T01:47:59Z",
            "content": "Former President Donald Trump is pictured during a rally in Sarasota, Florida, on July 3, 2021. Trump on Wednesday lashed out at the FBI for taking a photo of classified documents that were \"sloppily… [+3479 chars]"
        },
        {
            "source": {
                "id": "the-huffington-post",
                "name": "The Huffington Post"
            },
            "author": "Josephine Harvey",
            "title": "Ex-Trump Aides Say He Probably Has More Sensitive Documents At Other Properties",
            "description": "Michael Cohen and John Bolton said they suspect Trump could have more classified documents stored in Bedminster, New Jersey, and elsewhere.",
            "url": "https://www.huffpost.com/entry/trump-more-sensitive-documents_n_630fe63ae4b063d5e6215c83",
            "urlToImage": "https://img.huffingtonpost.com/asset/630ff81a2600003300b57c0f.jpeg?cache=CzSAhWzf2L&ops=1200_630",
            "publishedAt": "2022-09-01T01:20:36Z",
            "content": "Two of Donald Trumps former top advisers said Monday they suspect the former president could have more classified documents stored at his estate in Bedminster, New Jersey, and other properties.\r\nI ha… [+1655 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": null,
            "title": "Trump legal team continues push for special master in wake of Mar-a-Lago obstruction claim",
            "description": "Trump's lawyers did not address the DOJ's 'obstruction allegations or why the ex-president possessed the documents at an unsecure beach resort.",
            "url": "https://www.usatoday.com/story/news/politics/2022/08/31/trump-team-continues-push-document-master-search-unsupported/7953267001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/08/10/USAT/09de982d-77ac-4fbb-9862-13aa81755548-AP_Trump_Investigations_FBI.JPG?auto=webp&crop=5330,2998,x931,y537&format=pjpg&width=1200",
            "publishedAt": "2022-09-01T01:12:23+00:00",
            "content": "Donald Trump's legal team continued to press for the appointment of special master to review documents seized in the government's search of the former president's Mar-a-Lago estate, asserting that th… [+5478 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Sonam Sheth, C. Ryan Barber",
            "title": "Mar-a-Lago: New Trump legal doc reads like a 'PR filing,' experts say",
            "description": "The former president's team recycled claims of political bias and again alluded to his possible 2024 run in their latest Mar-a-Lago filing.",
            "url": "http://www.businessinsider.com/mar-a-lago-trump-responds-doj-filing-special-master-2022-8",
            "urlToImage": "https://i.insider.com/62f2c720cc15bf00182fa930?width=1200&format=jpeg",
            "publishedAt": "2022-09-01T00:54:44Z",
            "content": "Former President Donald Trump's legal team in a new court filing Wednesday recycled claims of political bias against the Justice Department; alluded to his possible 2024 presidential run; and argued … [+3629 chars]"
        },
        {
            "source": {
                "id": "business-insider-uk",
                "name": "Business Insider (UK)"
            },
            "author": "Sonam Sheth, C. Ryan Barber",
            "title": "Mar-a-Lago: New Trump legal doc reads like a 'PR filing,' experts say",
            "description": "The former president's team recycled claims of political bias and again alluded to his possible 2024 run in their latest Mar-a-Lago filing.",
            "url": "http://uk.businessinsider.com/mar-a-lago-trump-responds-doj-filing-special-master-2022-8",
            "urlToImage": "https://i.insider.com/62f2c720cc15bf00182fa930?width=1200&format=jpeg",
            "publishedAt": "2022-09-01T00:54:44Z",
            "content": "Former President Donald Trump's legal team in a new court filing Wednesday recycled claims of political bias against the Justice Department; alluded to his possible 2024 presidential run; and argued … [+3839 chars]"
        },
        {
            "source": {
                "id": "msnbc",
                "name": "MSNBC"
            },
            "author": null,
            "title": "Fmr. federal prosecutor: Trump response to DOJ filing is ‘word salad’",
            "description": "Former federal prosecutor Cynthia Alksne on the Team Trump response to the DOJ filing regarding the Mar-a-Lago probe: “It’s a word salad because it doesn’t really address the issues. My favorite part is on Page 2—they say we’re not going to address allegation…",
            "url": "https://www.msnbc.com/all-in/watch/fmr-federal-prosecutor-trump-response-to-doj-filing-is-word-salad-147462725752",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/mpx/2704722219/2022_09/1661993282902_n_hayes_trumpfiling_220831_1920x1080-nn3gku.jpg",
            "publishedAt": "2022-09-01T00:49:15Z",
            "content": null
        }
    ]



    constructor() {
        super()
        this.state = {
            articles: [],
            page: 1,
            totalResults:38,
            //pageSize: this.state.pageSize=10 
        }

    }
    async componentDidMount() {
        console.log("cdm")
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=80f498e222794d55b6918b6dcefb1386&page=1pageSize=10";
       let data = await fetch(url)
        // axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=80f498e222794d55b6918b6dcefb1386`)
        // .then(res => {
        //     console.log(res.data)
        //     this.setState({articles: res.data.articles });
        // })
        let passdata = await data.json();
        console.log(passdata)
        this.setState({ articles: passdata.articles, totalResults: passdata.totalResults
            //pageSize: this.state.pageSize=10  
        })
    }
    handlePreClick=async()=>{
   console.log("PreviousPage")
   
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=80f498e222794d55b6918b6dcefb1386&page=${this.state.page -1}&pageSize=10`;
    let data = await fetch(url)
    let passdata = await data.json();
    console.log(passdata)
    this.setState({ 
        page:this.state.page -1 ,
        articles: passdata.articles,
        pageSize: this.state.pageSize=10 
    })
}
handleNextClick =async()=>{
    console.log("NextPage")
    if(  this.state.page +1 > Math.ceil(this.state.totalResults/10)){

    }
   else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=80f498e222794d55b6918b6dcefb1386&page=${this.state.page +1}&pageSize=10 `;
        let data = await fetch(url)
        let passdata = await data.json();
        console.log(passdata)
        this.setState({
            page: this.state.page +1,
            articles: passdata.articles,
            pageSize: this.state.pageSize=10 
        })
    }
   
}
render() {
    return (
        <div className='container'>
            <h2> S News- Top Headlines</h2>
            <div className='row' >

                {this.state.articles.map((element) => {
                    return (<div className='col-md-4 my-2' key={element.url}>
                        <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 85) : ""} imgurl={element.urlToImage} url={element.url} />
                    </div>)
                })}
            </div>
            <div className='container  d-flex justify-content-between'>
                <button type="button" className="btn btn-success" onClick={this.handlePreClick}>Previous</button>
                <button type="button" className="btn btn-success" onClick={this.handleNextClick}>Next</button>

            </div>
        </div>
    )
}
}

export default News