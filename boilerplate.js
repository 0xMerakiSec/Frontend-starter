const fs = require("fs");
const colors = require("colors");
const { exit } = require("process");

const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css" />
      <title>Document</title>

  </head>
  <body>
      <script src="app.js"></script>
  </body>
  </html>`;

const css = `/* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
 margin: 0;
 padding: 0;
 border: 0;
 font-size: 100%;
 font: inherit;
 vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
 display: block;
}
body {
 line-height: 1;
}
ol, ul {
 list-style: none;
}
blockquote, q {
 quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
 content: '';
 content: none;
}
table {
 border-collapse: collapse;
 border-spacing: 0;
}`;

const folderName = process.argv[2];

function def() {
  try {
    if (folderName) {
      fs.mkdirSync(`${folderName}`);
      fs.writeFileSync(`${folderName}\\index.html`, html);
      fs.writeFileSync(`${folderName}\\style.css`, css);
      fs.writeFileSync(`${folderName}\\app.js`, "");
      console.log(
        `Default files successfully created!\n${folderName}\n\tindex.html\n\tstyles.css\n\tapp.js`
          .blue
      );
    } else {
      console.log(
        `Please enter the folder name after the executable in following way,\n\tnode boilerplate.js fileName`
          .green
      );
    }
  } catch (e) {
    console.log(`Error: ${e}`.red);
  }
}

if (folderName) {
  def();
} else {
  console.log("Please enter folder name ");
}
