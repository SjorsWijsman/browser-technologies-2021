# T Shirts
Live version: https://floating-tundra-18210.herokuapp.com/?color=Blue&size=M&sex=Male

T Shirts is a progressively enhanced webapp that lets the user customise their own shirt and order it, without having to enable JavaScript or CSS.

![App Screenshot](https://github.com/SjorsWijsman/browser-technologies-2021/blob/master/docs/screenshot-1.png?raw=true)

## Table of Contents
<table>
    <tr>
        <td align="center"><a href="#-features">⭐ Features<a></td>
        <td align="center"><a href="#%EF%B8%8F-installation">⚙️ Installation<a></td>
        <td align="center"><a href="#-folder-structure">📕 Folder Structure<a></td>
        <td align="center"><a href="#-browsers">🌐 Browsers<a></td>
        <td align="center"><a href="#-license">📃 License<a></td>
    </tr>
</table>

## ⭐ Features
- Customisable shirt with color, size, text & sex without JavaScript,
- Saving shirts without cookies or localStorage,
- Order overview & ordering shirts

## ⚙️ Installation
Clone repo to local folder. With [NPM](https://www.npmjs.com/) installed, run to install dependencies:
```
npm install
```
Then run the following command to open up a local server that updates on change for dev purposes:
```
npm run dev
```
To reset the userData.json, replace the contents of the file with an empty bracket: `{}`.

## 📕 Folder Structure
![Folder Structure](https://github.com/SjorsWijsman/browser-technologies-2021/blob/master/docs/screenshot-2.png?raw=true)  

`/data` contains both static data for the app and user generated data.  
`/docs` contains files for the docs you're reading right now.  
`/modules` contains JavaScript modules used in the Node Backend.  
`/static` contains files served to the client side user.  
`/views` contains all the .ejs files created to render the HTML.  

## 🌐 Browsers
To make sure the app works for as many people as possible, I performed some browser tests in Chrome, Firefox, Safari and Brave for Mac iOS and Chrome, Firefox, Internet Explorer and Edge for Windows and Safari and Chrome for iOS. 

Because the app works without any JavaScript or CSS it works pretty much anywhere. For clients that support JavaScript and [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#browser_compatibility) I added functionality to prevent the browser from reloading after changing the shirt settings and an enhancement that shows the text in the shirt without having to click the text update button.

Internet Explorer and Safari for iOS had some styling issues, Internet Explorer most likely suffered from the use of CSS variables which it doesn't support. iOS always has some weird and different styling rules for inputs and buttons. But because the app works even without CSS both versions were still fully functional.

## 📃 License
MIT License
