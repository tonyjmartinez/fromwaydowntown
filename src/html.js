import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `


          `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.__onThemeChange = function() {


                };
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);
                }

                function changeStylesheet(preferredTheme) {

                  // Get HTML head element 
                  var head = document.getElementsByTagName('HEAD')[0];  
            
                  // Create new link Element 
                  var link = document.createElement('link'); 
            
                  // set the attributes for link element  
                  link.rel = 'stylesheet';  
                
                  link.type = 'text/css'; 
                
                  var newtheme = 'https://unpkg.com/bulmaswatch/cerulean/bulmaswatch.min.css';  

                  if (preferredTheme === 'dark') {
                    newtheme =  'https://unpkg.com/bulmaswatch/superhero/bulmaswatch.min.css';  
                  }

                  link.href = newtheme;
            
                  // Append link element to HTML head 
                  head.appendChild(link);  
                }

                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                  

                } catch (err) { }

                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}

                  changeStylesheet(newTheme);

                }

                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });

                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
                setTheme(preferredTheme);


              })();
            `
          }}
        />
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
