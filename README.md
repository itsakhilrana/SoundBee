# SoundBee

> eCommerce platform built with the MERN stack & Redux.

![screenshot](https://github.com/itsakhilrana/Portfolio/blob/master/client/src/img/SoundBeeF.png)

## About the Project

- Implemented auth middleware using express and bcrypt for password encryption.
- Created a global predictable state container for the frontend using ReduxJS.
- Created the UI wireframes in Figma and implemented the responsive design.
- Designed schema for no-SQL DB (mongodb) using the mongoose.
- Wrote the CSS from scratch for enriching the design and added CSS animation.


### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@gmail.com (Admin)
123456

user@gmail.com (Customer)
123456

```
