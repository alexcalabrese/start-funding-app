<div align="center">
  <img align="center" src="demo/logo.png" height="100px"/>
</div>


# Start Funding - Algorand Crowdfunding DApp
# Team

- Tomàs Daniel Avila Visintin | [GitHub](https://github.com/iltommi1995) | [LinkedIn](https://www.linkedin.com/in/tom%C3%A0s-daniel-avila-visintin-2b5497170/)
- Alex Calabrese | [GitHub](https://github.com/alexcalabrese) | [LinkedIn](https://www.linkedin.com/in/alex-calabrese)

# **[Installation guide](/INSTALLATION.md)**

# Description

Start Funding app is the prototype for a decentralized crowdfunding platform, based on Algorand blockchain.
Only some basic functions are currently available, but future developments will come. 
This project could be very useful to devs trying to build DApps based on Algorand, especially the ones using [PyTeal](https://github.com/algorand/pyteal), [Beaker](https://github.com/algorand-devrel/beaker), [Beaker-ts](https://github.com/algorand-devrel/beaker-ts) and [AlgoSigner](https://github.com/PureStake/algosigner).

Our objective was to develop a decentralized application, not only because of the use of smart contracts, but also from other points of view, for example, the use of IPFS to avoid a centralized file system.

![contribution gif](demo/contribution.gif)

## Infrastructure
The application is made of 6 principal components
- Frontend -> made with React and using AlgoSigner browser wallet
- Backend -> made with Node.js and Express
- Smart Contract Service -> made with Node.js, Express and Beaker-ts
- Centralized database -> Firebase Firestore
- Decentralized file system -> [IPFS](https://ipfs.tech/) using [Pinata](https://www.pinata.cloud/)
- Smart contracts -> deployed on the Algorand Testnet


#### Frontend
For the frontend we decided to use React, due to a large number of already made components.
We used Google's Material UI library, creating our own components when the Material UI's ones weren't enough.

We opted for an atomic design approach to structure the project, dividing the components into categories (atoms, molecules, organisms and pages).

We have chosen to use AlgoSigner browser wallet, to interact with the smart contracts and let users make transactions. 
Unfortunately, AlgoSigner is only supported by Google Chrome, therefore, using other browsers, it's only possible to see the active campaigns, but it's impossible to create campaigns and make donations.
We also used the Algorand javascript sdk.

#### Backend
The backend, developed with NodeJS and Express, provides a basic API to make all the basic CRUD operations and other few things.
Here is where the campaigns data are handled. 
We decided to save the campaigns data into a centralized database (Firebase Firestore). because often is easier to request data to our database instead of the Algorand network. 
As for the campaign images, we opted for IPFS, using the free plan of Pinata. The images are pinned to IPFS, fully decentralized, as we said before.
We also used some scheduled jobs to update the site stats and to check that the campaigns do not stay open beyond the end date.

#### Smart contract service
We created a separated service, again using NodeJS and Express, to interact with the smart contracts.
This choice was mandatory because of the limits of the libraries that we used to interact with smart contracts, for which it was necessary to use TypeScript. 
Not wanting to convert the whole backend, we created a separate service.
This service is called by the backend of the application.
We used Beaker-ts library to interact with smart contracts, as for the frontend.

#### Centralized database and IPFS
These two choices may seem conflicting. 
We  wanted to make the application as decentralized as possible, but it would have been impossible to save all the campaigns data on the blockchain.
It was necessary to find another way to save all the data, so we opted for a free and simple solution: Firebase Firestore.
In the future it would be appropriate to find a more decentralized solution, likewise how we did for images with IPFS.

#### Smart contracts 
For the smart contracts, we decided to not use TEAL, but instead a Python library: PyTeal, with Beaker a specific framework for smart contracts development.

# Functions

## Home
![home](demo/home.gif)

## Create
![create](demo/create.gif)

## Edit
![edit](demo/edit.gif)

## Contribution
![contribution](demo/contribution.gif)

## Claim
![claim](demo/claim.gif)

## Filters
![filters](demo/filters.gif)
