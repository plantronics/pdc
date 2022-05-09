# Plantronics Amazon Connect Sample Code
This folder contains the sample code to illustrate integrating Plantronics with Amazon Connect.

Note: to make this work with YOUR OWN Amazon Connect instance, you need to update the URL in the code where it says: https://myamazonconnect.awsapps.com/connect/ccp#
The Amazon Connect Instance Alias e.g. myamazonconnect, is needed for the Poly Amazon Connect CCP to connect to your Amazon Connect instance. You can check the name of your instance alias in your AWS Console > Amazon Connect in the list of instances.

This sample code has been tested with the current version of Amazon Connect, and Plantronics will be available to answer developer questions during integration.  In accordance to the developer policy available at http://developer.plantronics.com/node/551/, this code is made available on an as-is basis.

### Getting Started with Plantronics Amazon Connect integration sample code
This sample code illustrates how to integrate Plantronics Amazon Connect Contact Control Panel (CCP) with the Plantronics REST API in order to implement headset call control for Amazon Connect.
#### The 17 files that comprise it are:
1. style.css
2. callCenter.jpg
3. close_icon.svg
4. coachmarks.svg
5. coachtips_ccp.png
6. coachtips_footer.png
7. iframe.jpg
8. info.svg
9. poly.svg
10. poly_propeller_orange.svg
11. spawn.svg
12. amazon-connect-v1.2.0.js
13. jquery.js
14. scripts.js
15. spokes.js
16. util.js
17. index.html
#### Screenshots
Here is a screenshot of the sample code in action
![Here is a screenshot of the sample code in action](Plantronics%20Amazon%20Connect%20Sample%20Code.png "Here is a screenshot of the sample code in action")
Here is another screenshot showing the new compact version of the integration (when user shrinks size of browser window)
![Here is another screenshot showing the new compact version of the integration (when user shrinks size of browser window)](Plantronics%20Amazon%20Connect%20Sample%20Code%202.png "Here is another screenshot showing the new compact version of the integration (when user shrinks size of browser window)")
#### List of pre-requisites
* Install Plantronics Hub from: www.plantronics.com/software
* The solution supports Chrome or Firefox browsers
* Note Firefox users: If you get "Error connecting to Plantronics Hub." then visit this URL: https://127.0.0.1:32018/Spokes/DeviceServices/Info and click Advanced > Add Exception... to add a security exception to allow the connection.
#### List of features included with this sample code
* Call answer/end/reject via headset
* 2-way mute sync (i.e. via headset or CCP GUI)
* 2-way hold/resume sync (i.e. via headset or CCP GUI)
* The headset QD (Quick Disconnect) will update Agent Status (To Available or Offline) for the Poly DA Series headsets
* An updated GUI design that allows a compact view of CCP with Poly strip beneath, so as not to obscure other work the contact center agent has on their desktop (see screenshot below)
#### Steps needed to run this sample code:
1. You need to host your copy of these files on your own secure web server (https) on the Internet, e.g. https://your-domain/index.html, and have https://your-domain whitelisted in your Amazon Connect instance, in order to allow the page to embed your CCP (Contact Control Panel). For more info see the “Getting Started, Whitelisting” section of: https://github.com/aws/amazon-connect-streams/blob/master/Documentation.md 
2. In the file "index.html" you need to change the **ccpUrl** value to your own Amazon Connect instance (for example https://myamazonconnect.awsapps.com/connect/ccp# 
The Amazon Connect Instance Alias e.g. myamazonconnect, is needed for the Poly Amazon Connect CCP to connect to your Amazon Connect instance. You can check the name of your instance alias in your AWS Console > Amazon Connect in the list of instances.
3. Load the solution in your web browser, e.g. visit https://your-domain/index.html
#### Troubleshooting
* If your CCP (Contact Control Panel) fails to embed but opens in a seperate Tab, try closing the Tab and reloading the page "https://your-domain/index.html". 
* If it continues to fail to embed you need to login to the normal connect instance CCP first (known issue: https://github.com/aws/amazon-connect-streams/issues/13) i.e. in a seperate Tab, then close that Tab and reload the embedded version, i.e.: "https://your-domain/index.html".
* If it still continues to fail to open the browser developer tools / inspect element and open go to the Console, then reload the page "https://your-domain/index.html" and look for errors in the Console.
* If you see an error in the console like "Refused to display in a frame because it set 'X-Frame-Options' to 'sameorigin'", then ensure you have whitelisted your domain in step 1.
