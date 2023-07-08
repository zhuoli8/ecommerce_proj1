# ecommerce_proj1

template for ecommerce webstore

## how to startup project:

    *scripts are in package.json
    1. startup client
    2. startup backend
    3. startup DB

## TODO:

-   display products from database

## PAST PROGRESS:

-   frontend, api, and database are connected
-   going to connect database with backend
-   using https://www.youtube.com/watch?v=w3vs4a03y3I&ab_channel=ArpanNeupane
-   going to have seperate dir for backend and frontend
-   remove backend components from frontend
-   using: https://www.youtube.com/watch?v=qy8PxD3alWw&ab_channel=ColtSteele for setting up backend

## PLAN:

-   use typescript
-   node/express backend
-   using node v20.1.0
-   what to use for database?
-   react front end

## Features:

-   pages:
    -   home
    -   product
        -   product card:
            -   image
            -   product name
            -   brand name
    -   about us
    -   login
    -   account
    -   cart
-   footer
-   database:
    -   user account table
    -   product table
    -   order table
-   admin.js admin page

# TECH:

## NODE:

-using node v20.1.0
ref: https://www.youtube.com/watch?v=H91aqUHn8sE&ab_channel=BeyondFireship
to compile ts files: npm run build
to run node project: node .

## REACT:

ref: https://www.youtube.com/watch?v=SqcY0GlETPk&ab_channel=ProgrammingwithMosh

### notes:

    react hooks:
        - useState() when the state changes, the ui is updated. the value in the perameter is the initial value. hook functions return a list containing two items, so its best practise to destructure them as [<reactive value>, <setter>]

        - useEffect() takes in a function as a perameter and runs said function when the state changes

## MUI:

## MYSQL:

https://www.youtube.com/watch?v=i5OKeIgRPEE&ab_channel=thedevlife
Notes:

## GITHUB:

### useful commands:

git add -u :/ # Stage all modified and deleted files
git add . # Stage all untracked files
git reset .gitignore # Unstage the .gitignore file
