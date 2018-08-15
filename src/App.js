import React from 'react';
import './App.css';
import * as Icon from 'react-feather';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <div className="home">
    <Link to="/"><Icon.Code className="home-icon" size={48}/></Link>
    <h1 className="header">
      Hey there, I'm Lilie. A big fan of drinking coffee and coding, 
      especially at the same time. <span role="img" aria-label="woman-technologist">👩🏻‍💻</span>
    </h1>
    <p className="content">
      More specifically, I'm a third year CS student over 
      at <Link to="gfu" className="content-link">George Fox University</Link> near 
      Portland, OR. I love to create beautiful code that works well. 
      I'm skilled in Java, Python, JavaScript, React, HTML, CSS, and Less.
    </p>
    <div className="navigation-bar">
      <Link className="navigation-bar-link" to="/resume">
        <button className="button">DOWNLOAD MY RÉSUMÉ HERE</button>
      </Link>
      <Link className="navigation-bar-link" to="/summer2018">
        <button className="button">SEE WHAT I WORKED ON DURING SUMMER 2018</button>
      </Link>
    </div>
  </div>
)

const summer2018 = () => (
  <div className="home">
    <Link to="/"><Icon.Code className="home-icon" size={48}/></Link>
    <div>
      <h1 className="content">
        During the summer of 2018, I was an intern at <Link to="/appnexus" className="content-link">Appnexus</Link> in 
        Portland, OR (aka my hometown). I had the priviledge of working on their open source UI component 
        library via GitHub. It was a ton of fun and I drank a lot of <Link to="/stumptown" className="hidden-content-link">Stumptown cold brew</Link>. 
        Check it out <Link to="/lucid" className="content-link">here</Link>.
      </h1>
    </div>
  </div>
)

const Resume = () => (
  <div className="lucid">
    <Link to="/"><Icon.Code className="home-icon" size={48}/></Link>
    <div>
      <h1 className="content">
        Go ahead and check out my résumé. And while you're at it, feel free to share it on Facebook, give it 
        to your <Link to="michaelScott" className="hidden-content-link">awesome employer</Link>, or, if you're really into it, print it out and frame it. I won't mind.
      </h1>  
      <Link className="navigation-bar-link" to="/resumeLink">
        <Icon.Download className="download-icon" size={40}/>
      </Link>
    </div>
  </div>
)

const blogPost = ({ match }) => (
  <div>
    <h3>{match.params.blogPostId}</h3>
  </div>
)

const Blog = ({ match }) => (
  <div>
    <Link to="/"><Icon.Code className="home-icon" size={48}/></Link>
    <div>
      <ul>
        <li>
          <Link
            to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link
            to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link
            to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
    </div>

    <Route path={`${match.path}/:blogPostId`} component={blogPost}/>
    <Route exact path={match.path} render={() => ('')}/>
  </div>
)

const Site = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/summer2018" component={summer2018}/>
      <Route path="/resumeLink" component={() => window.location =
        'https://docs.google.com/document/d/1lXCf19z7tdRiqdUCegLy_Qj7ZhZ57ICIHq2QEVrf6BY/edit?usp=sharing'}/>
      <Route path="/blog" component={Blog}/>
      <Route path='/instagram' component={() => window.location = 
        'https://www.instagram.com/liliedelamotte/?hl=en'}/>
      <Route path='/twitter' component={() => window.location = 
        'https://twitter.com/liliedelamotte'}/>
      <Route path='/linkedin' component={() => window.location = 
        'https://www.linkedin.com/in/liliedelamotte/'}/>
      <Route path='/github' component={() => window.location = 
        'https://github.com/liliedelamotte'}/>
      <Route path='/lucid' component={() => window.location = 
        'https://github.com/appnexus/lucid'}/>
      <Route path='/appnexus' component={() => window.location =
        'https://www.appnexus.com/'}/>
      <Route path='/stumptown' component={() => window.location = 
        'https://www.stumptowncoffee.com/'}/>
      <Route path='/michaelScott' component={() => window.location =
        'https://en.wikipedia.org/wiki/Michael_Scott_(The_Office)'}/>
      <Route path='/gfu' component={() => window.location =
        'http://cs.georgefox.edu/'}/>
      <div className="footer">
        <Link to="/twitter"><Icon.Twitter className="icon" size={30}/></Link>
        <Link to="/instagram"><Icon.Instagram className="icon" size={30}/></Link>
        <Link to="/github"><Icon.Github className="icon" size={30}/></Link>
        <Link to="/linkedin"><Icon.Linkedin className="icon" size={30}/></Link>
      </div>
    </div>
  </Router>
)
export default Site;
