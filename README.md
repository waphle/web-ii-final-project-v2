# Web II Final Project V2
 
### Group Members
Jeff Zhang and Joseph Chromicz

### Project Goal and Problem Addressed
The goal for this project is to see radiation trends in Washington, DC’s environment by routinely analyzing air, precipitation and drinking water samples. According to the United States Environmental Protection Agency (EPA), the RadNet air monitor system allows scientists to help estimate the potential radiation dose to humans, and help public officials use RadNet data to help make science-based decisions about protecting the public.

### MongoDB Local Setup
For MongoDB to run locally on your machine, download the [MongoDB Community Server](https://www.mongodb.com/try/download/community). Then, download the [MongoDB Developer Database Tools](https://www.mongodb.com/try/download/database-tools). Once you have them installed, follow these instructions:

1. Go to Control Panel.
2. Click on "System and Security."
3. Click on "System." You will be redirected to the "About" page in settings.
4. Click on "Advanced System Settings."
5. Click on "Environmental Variables..."
6. Under the "System variables" section, click on the "Path" directory to highlight it. Then click the "Edit" button below. 
7. Click on "New" in the top right corner. A new environmental variable should be highlighted.
8. Click on "Browse."
9. Locate where you installed the MongoDB Community Server, and select its "bin" folder. 
10. When you're done, click "OK" on all open tabs to save the new Path location. 
11. Locate where you installed the MongoDB Community Server, and copy/paste the CSV dataset (DC_WASHINGTON_2021.csv) and the mongoimport.exe program from your MongoDB Developer Database Tools installation folder into the MongoDB Community Server bin folder. 
12. Open command prompt, type in: cd C:\Program Files\MongoDB\Server\5.0\bin (or copy in the address to where you installed MongoDB Community Server). Enter.
13. After the above directory has been set, type in: mongoimport -d Cluster0 -c radiation --type csv --file DC_WASHINGTON_2021.csv --headerline. Enter. The data from the cvs file should be imported into your local MongoDB server database.
14. In the MongoDB Community Server bin folder, click on mongo.exe to open the MongoDB command prompt.
15. Enter the following lines separately:
    1. show dbs
    2. use Cluster0
    3. show collections
    4. db.radiation.find().pretty()
Step 15 checks if the data is stored properly on your local MongoDB server database. See the image below to see how it should compile.

### Issues with using MongoDB
We had issue with importing .csv files into MongoDB Atlas, so we opted to run it locally. However, since we did not cover how to use MongoDB locally, we were unable to connect the local database to our codebase. 
