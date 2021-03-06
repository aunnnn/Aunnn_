import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Page from '../components/Page';

const ProjectBasePage = ({ htmlTitle='Aunnnn', children }) => {
  return (
    <Page htmlTitle={htmlTitle} showHomeButton={false}>
        <Link prefetch href="/projects">
          <a className="back-button">
            Back to all projects
          </a>
        </Link>
      {children}
      <style jsx global>{`

        .back-button {
          text-decoration: none;
          font-size: 14px;
          color: silver;
          margin-bottom: 22px;
          display: block;
        }
        .back-button p {
          display: inline;
          margin-left: 4px;
          height: 100%;
        }

        h1, h2, h3, h4, h5, h6 {font-weight:normal;color:#111;}
        
        h1 {font-size:3em;line-height:1;margin-bottom:0.5em;margin-top:2em;}
        
        h2 {font-size:2em;margin-bottom:0.75em;margin-top:1.5em;}
        
        h3 {font-size:1.5em;line-height:1;margin-top:1.5em;}
        
        h4 {font-size:1.2em;line-height:1.25;margin-bottom:1.25em;}
        
        h5 {font-size:1em;font-weight:bold;margin-bottom:1.5em;}
        
        h6 {font-size:1em;font-weight:bold;}
        
        h1 img, h2 img, h3 img, h4 img, h5 img, h6 img {margin:0;}
        
        img {max-width: 100%;}
        
        p {margin:0 0 1.5em;}
        a:focus, a:hover {color:#09f;}
        a {color:#06c;text-decoration:underline;}
        blockquote {margin:1.5em;color:#666;}
        strong, dfn {font-weight:bold;}
        em, dfn {font-style:italic;}
        
        del {color:#666;}
        pre {margin:1.5em 0;white-space:pre;}
        pre, code, tt {font:1em 'andale mono', 'lucida console', monospace;line-height:1.5;}
        
        li ul, li ol {margin:0;}
        ul, ol {margin:0 3em 1.5em 1.5em;padding-left:1.5em;}
        ul {list-style-type:disc;}
        ol {list-style-type:decimal;}
        
        figure {margin: 1.5em 0; width: 100%; text-align: center; }
        figcaption {font-size: 0.75em;padding:0.5em 2em;margin-bottom: 2em;}
        figure img {margin-bottom: 0px;}
        
        code {font-family: Menlo, monospace; font-size:90%;}
        p > code {padding:0.2em 0.4em; background:#e1e9ed;}
        pre {text-align:left; overflow-x: scroll; color: #d3bd7e; background: #202020; padding: 10pt 15pt; border-radius: 3px;}
        
        hr {border: 0px; border-top: 1px solid #ddd; border-bottom: 1px solid #fff;margin-top: 4em;margin-bottom: 2em;}
        
        h1 + hr {margin-top: 2em;}
        
        ol#footnotes {font-size: 0.75em;padding-top: 1.5em;margin-top: 3em;margin-left: 0;}
        ol#footnotes:before {content: "———"; letter-spacing: -4px;margin-left: -1.5em;}
        
        ol p, ul p {margin-bottom: 0px;}
        li {margin-bottom: 0.75em;margin-top: 0.75em;}
        
        a:target, ol#footnotes li:target, sup a:target  {
            animation-name: highfade;
            animation-duration: 2s;
            animation-iteration-count: 1;
            animation-timing-function: ease-in-out;
            -webkit-animation-name: highfade;
            -webkit-animation-duration: 2s;
            -webkit-animation-iteration-count: 1;
            -webkit-animation-timing-function: ease-in-out;
        }
        
        a:target {border:0;outline: 0;}
        
        .images-column {
          display: flex;
          width: 100%;
          justify-content: flex-start;
          align-items: flex-center;
        }
        .images-column div {
          flex-grow: 0;
          margin: 0 4px;
          max-height: 100%;
          display: inline-block;
        }
        .images-column img {
          max-height: 400px;
        }
        .center-caption {
          text-align: center; 
          margin: 12px auto 22px auto;
        }
        .center-caption em {
          display: inline-block; 
          color: gray; 
          font-size: 0.8em;
        }
        .mobile-img {
          max-width: 320px !important; 
          margin: 8px auto;
        }
      `}</style>
    </Page>
  );
};

ProjectBasePage.propTypes = {
  htmlTitle: PropTypes.string,
}

export default ProjectBasePage;
