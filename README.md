# CookIn by Team MISS
Our application aims to target the following issue: 
___Busy Koreans in their 20s who work and want cookouts with friends need to have an AirB&B for kitchens showing nearby kitchens that can provide proper tools and ingredients because difficulty in finding an adequate location hinders their chances to hold a cookout.___

## Description
To tackle this issue we decided to use React.js for our website and used Google Firebase's Cloud Firestore feature for our kitchen and user database.

#### Features
##### Main Features
We focused on tackling 4 main features related to the issue:
1. Give users the closest location depending on different location inputs
2. Give users several kitchen choices with different prices, tools, and ingredients
3. Allow users to buy ingredients from the kitchen 
4. Allow users to reserve that kitchen 

##### Additional Features
To allow users to return to their choice, we added a simple login feature that only takes cellphone number and name. After a simple sign up, returning users can check their reservation by signing in through their phone numbers. 

#### Needs for Improvment
We have not implemented a more advanced search feature involving filtering because of lack of time and experience using React and Firebase.
Furthermore, the website uses a fixed database with realistic, but fake, data since for the actual application, we would need to get information from the actual kitchen.

## Credits
Application created by Team MISS (Make It Simple & Sensitive)
 - Sangkyung Kwak
 - Jinyeop Kim
 - Seunghyuck Park 
 - Kunwoo Song

## Library and Frameworks Used
- Firebase
- KakaoMap API
- React.js
- React-redux
- Swiper/react
- React-tabs
- React-modal

## Codes
- Routes.js contains links to each pages
- Divided by Components, Images, Pages, and Reducers folder.
- Components folder contains almost components in this project. Buttons, Items, or Views.
- images and img folders contain our image files used by web site. 
- Page folder contains implementation of pages.
- reducers and config folders contains about our reducers and persist store.
- Follow this flow 'Page -> Components -> reducers'. It will be easy to focus on our codes.
