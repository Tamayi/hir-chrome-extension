This Chrome Extension demonstrates client side functionality that enriches the EIOS UI with additional, custom, functionality.

The extension adds an image button with the DHIS2 logo against each article, and when you click the button, it just extract some details about the row you clicked and shows a little popup with this data. Instructions for installing this into Google Chrome are provided below.

The extension only works on EIOS pages. Typically, the extension tries to wait 15 seconds for the EIOS dashboard to  load then it will automatically add the buttons. However, since this isn’t meant to be industrial quality code; this automatic addition of the buttons might not happen, you can also click on the DHIS2 icon on the address bar to manually add the buttons.

Your EIOS will look like this. Click on the DHIS2 button to get a popup with a bit of JSON data extracted from the EIOS page and clicked row.
![image](https://user-images.githubusercontent.com/6397813/237048915-6badb39c-34cf-4981-9c53-6f91f2f9ef6d.png)

## Key features of this PoC
At this time, this is a just a quick proof-of-concept that shows:
*	How we can insert our own functionality onto EIOS.
*	How we can extract data from existing EIOS UI elements. This data can be passed onto other services that perform additional analysis/classification/etc and the feedback shared back onto the EIOS UI.
*	There are numerous possibilities for developing this functionality. For example:
    *	We can send data on clicked articles to a Google Spreadsheet or to DHIS2 or an API endpoint where we have an intelligent script that does more crunching (this PoC will be extended to demonstrate this).
    * We can automatically pass the articles on the current dashboard page to a script which interacts with some intelligent functionality such as ChatGPT to do some text analysis
    * We can actually update the EIOS UI and even colour rows in a certain colour or add little icons that convey additional information to us
*	Being client side, we have a good amount of control over the enrichments we make to EIOS, of course within certain technical limits.
  *	EIOS uses Angular for updating the UI. This means there is a Javascript object somewhere which has the raw data. In this sample,we are pulling data directly from DOM elements, which is limited (but still very useful and powerful).

## Installing into Google Chrome: 
1.	First, extract the files from the zip archive to a folder on your computer.
1.	Open Google Chrome and click on the three dots icon in the top right corner of the browser window.
1.	Select "More tools" from the dropdown menu, then click on "Extensions".
1.	On the Extensions page, toggle the "Developer mode" switch in the top right corner of the screen to the "On" position.
1.	Click on the "Load unpacked" button in the top left corner of the screen.
1.	In the file explorer window that appears, navigate to the folder where you extracted the files from the zip archive, and select the folder.
1.	Click "Select folder" to install the extension.
1.	You should now see the extension appear in the list of installed extensions on the Extensions page, and a little DHIS2 icon on the exensions pane as shown in the image above.

