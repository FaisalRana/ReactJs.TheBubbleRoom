<p align="center"> 
  <img src="./src/img/pepsiSpaceReadme.jpg" alt="pic of bitcoins.jpeg" width="240px" height="px">
</p>
<h1 align="center"> International Pepsi Station </h1>
<h3 align="center"> Epicodus - January PT Cohort </h3>
<h5 align="center"> ReactJS First Assignment  </h5>

<p align="center"> 
<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.87-studio.com%2Fpepsi&psig=AOvVaw001ScTaHXSLTkpqQ95_4aa&ust=1630118975069000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiOy8WY0PICFQAAAAAdAAAAABAD" alt="Animated rocket ship" height="382px">
</p>

<p>This C# MVC API application will scrape the subreddit <a href="https://www.reddit.com/r/CryptoCurrency/"> r/crytocurrency</a> for mentions of ADA, ETH, BTC, LINK and DOGE in order to inform users what are the most talked about coins in the past 24 hours. </p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## Technologies Used

* Git
* C#
* .NET 5.0
* ASP.NET Core
* Entity Framework Core
* MySQL & MySQL Workbench
* Postman
* ApiMvc

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


## Known Bugs

* The max results returned for any crypto in a 24 hour period is 600.  If there are multiple crypto currencies that return 600, our sortedlist will not work

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## Improvement Opportunities 

* Routinely clear our database to ensure data cleanliness
* Decrease loading times by limiting API calls or DRY our code to run more efficiently
* Broaden scope of application to get subreddit comments for all existing cryptocurrencies

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## Setup/Installation Requirements
Go to `SatoshiCrypto` Folder and create a file called `appsettings.json` file and input the following script (note the name of the database below needs to match the name of the database you created) Also change `[USERNAME]` and `[ENTERPASSWORDHERE]` to the password you set prior.

```{
  "ConnectionStrings": {
      "DefaultConnection": "Server=localhost;Port=3306;database=satoshicrypto;uid=[USERNAME];pwd=[ENTERPASSWORDHERE];"
  }
}
```
##### Software Requirements

1. Internet browser
2. A code editor such as VSCode to view and edit the code
3. .NET or follow along with the Installing .NET instructions to install .NET

##### Open Locally

- Click on the link to my repository: [My Repository](https://github.com/kdrendel99/Satoshis-Crypto.git)
- Click on the green "Code" button and copy the repository URL
- Open your terminal and use the command `git clone https://github.com/kdrendel99/Satoshis-Crypto.git` into the directory you would like to clone the repository
- Open in text editor to view code and make changes

##### Installing .NET

In order to run the application, please install .NET for your computer to recognize the `dotnet` command.

1. Download [.NET Core SDK (Software Development Kit)](https://dotnet.microsoft.com/download/dotnet). Clicking this link will prompt a file download for your particular OS from Microsoft.
2. Open the file. Follow the installation steps.
3. Confirm the installation is successful by opening your terminal and running the command `dotnet --version`. The response should be something similar to this:`5.0.100`. This means it was successfully installed.

##### Installing MySQL

MySQL is a type of database software used to create, edit, query, and manage SQL data.

- For Mac Users please [Click Here](https://dev.mysql.com/downloads/file/?id=484914) to download MySQL Installer
- For Windows Users please [Click Here](https://dev.mysql.com/downloads/file/?id=484919)

- Verify MySQL installation by opening the terminal and entering the command `mysql -u[USERNAME] -p[THEPASSWORDYOUSELECTED]`
- If you gain access you will see see the MYSQL command line!

##### Installing MySQL Workbench

- Please [Click Here](https://dev.mysql.com/downloads/workbench/) to install the correct version for your machine
- Open MySQL Workbench and select `Local instance 3306 server`. You will need to enter the password you selected

##### Compiling

- Navigate to the `SatoshisCrypto` folder in the command line
- Use the command `dotnet build` to compile
- Use the command `dotnet run` to run the application

##### Installing Packages

- Navigate to the SatoshisCrypto folder in the command line
- Use the command `dotnet restore`

<details>

### Update Database Using MySQL Workbench

1. Open MySQL Workbench
2. Click on Server > Data Import in the top navigation bar
3. Select `Import from Self-Contained File`
4. Select the `Default Target Schema` or create new schema
5. Select all Schema Objects you would like to import
6. Select `Dump Structure and Data`
7. Click `Start Import`

  <summary>Expand for Database Installation Essentials!</summary>

### Import Database Using Entity Framework Core

1. Navigate to SatoshisCrypto directory in terminal
2. Use the command `dotnet ef database update` to generate the database through Entity Framework Core

### Update Database Using Entity Framework Core

1. Write any new code you wish to add to the database. Use the command `dotnet build` to check for any compiling errors. If no errors, proceed to step 2.
2. To update the database with any changes made to the code, use the command `dotnet ef migrations add [MigrationsName]`
3. Use the command `dotnet ef database update` to update the database


</details>


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/saoud/csharp-TDD-template/blob/main/LICENSE)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)



## Contact Information:

<h5>Collin Chapman</h5>

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/colchapm)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/colchapm/)

<h5>Saoud Rana</h5>

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/saoud)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saoud)

<h5>Faisal Rana</h5>

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/faisalrana)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/faisalsrana)

<h5>Karlson Drendel</h5>

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kdrendel99)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/karlson-drendel/)
