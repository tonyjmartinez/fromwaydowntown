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

                function setStylesheet(preferredTheme) {

                  // Get HTML head element 
                  var head = document.getElementsByTagName('HEAD')[0];  
            
                  // Create new link Element 
                  var link = document.createElement('link'); 
                  var link2 = document.createElement('link');

                  link.id = 'dark';
                  link2.id = 'light';
            
                  // set the attributes for link element  
                  link.rel = 'stylesheet';  
                  link2.rel = 'stylesheet'
                
                  link.type = 'text/css'; 
                  link2.type = 'text/css';
                
                  console.log('preferredtheme?', preferredTheme)
                  var lightTheme = 'https://unpkg.com/bulmaswatch/superhero/bulmaswatch.min.css';  
                  var darkTheme = 'https://unpkg.com/bulmaswatch/cerulean/bulmaswatch.min.css';  
                  link.href = darkTheme;
                  link2.href = lightTheme;



                  if (preferredTheme === 'dark') {
                    link.disabled = false;
                    link2.disabled = true;
                  } else {
                    link.disabled = true;
                    link2.disabled = false;
                  }

            
                  // Append link element to HTML head 
                  head.appendChild(link);  
                  head.appendChild(link2);
                }

                function changeStyleSheet(newTheme) {
                  var link = document.getElementById("dark");
                  var link2 = document.getElementById('light');
                  
                  if (newTheme === 'dark') {
                    link.disabled = false;
                    link2.disabled = true;
                  } else {
                    link.disabled = true;
                    link2.disabled = false;
                  }

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
                  changeStyleSheet(newTheme);
                }

                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });

                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
                setTheme(preferredTheme);
                setStylesheet(preferredTheme);


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
