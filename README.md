# BrIW

## What is BrIW?
BrIW is a flask web app designed to use a MySQL DB for creating and managing brew rounds within your team at work. If you have trouble keeping track of who wants what drink; BrIW is for you!

## Prerequisites

* [Python 3](https://www.python.org/download/releases/3.0/)
* [Pytest](https://docs.pytest.org/en/latest/)
* [Flask](https://www.fullstackpython.com/flask.html)

## Set Up
A custom virtual environment for the project is recommended

All dependencies can be installed with:
`pip3 install -r requirement.txt`

Next you will need to create a SQL instance. BrIW was written to use MySQL 8+ but use whatever RDBMS you prefer, just be aware you will need to update the code to support your RDBMS (it is recommended that you fork the repo if going down this path)

Once the SQL instance and database is created run SQL setup script to create the database structure and insert some dummy data (as mentioned above if you have used anything other than MySQL you will need to review the SQL file to fit your RDBMS' syntax)

Once you have your SQL instance setup and your database configured you will need to create the following file `core/data_config.py` 
the contents of the file should be as follows

    import pymysql as db
    
    def get_sql_connection():
        return db.connect(
                host="HOSTNAME", #host
                port=3306, #defauly MySQL port
                user="USERNAME", #username
                passwd="PASSWORD", #password
                db="DATABASE", #db
                charset="utf8mb4",
                cursorclass=db.cursors.DictCursor,
                autocommit=True
                )

BrIW also contains a Dockerfile for building and deploying the application across all your servers using Docker

### Contributing
To contribute to BrIW, fork the repo make your changes and make a pull request that will be reviewed. Changes or fixes for existing issues are greatly appreciated

