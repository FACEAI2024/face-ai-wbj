# FaceAI UI

This faceAI UI rendering page was developed by Ionic framework with Angular, coded by Typescript to access web-cam and send the video stream to the backend for analysis, then display the results.

## Pre-installation
---
1. Install and setup Node 16 enviroments
- [Node.js](https://nodejs.org/en/)

    After installed sucessfully, check the node version:
    ``` 
    node -v 
    ```  
    current version: v16.20.0
2. Install Angular
- [Angular](https://angular.io/)
    ```
    npm install -g @angular/cli
    ng version
    ```
    current version: 15.1.5
3. Install Ionic
- [Ionic framework](https://ionicframework.com/)
    ```
    npm i -g @ionic/cli
    ionic -v
    ```
    current version: 6.10.1
## Usage
---

### Install
- Clone this repo:
    ```
    git clone https://gitlab.ihpc.a-star.edu.sg/LIUY2/face-ai-ui.git
    cd face-ai-ui
    ```
- Install dependencies

    ```
    npm install
    ```

### Start Server
- Start a local dev server for app dev/testing

    ```
    ionic serve --external --ssl
    ```

### build production
- ionic build will perform an Ionic build, which compiles web assets and prepares them for deployment.

    ```
    ionic build --prod
    ```
- Note: https is required for JS to access device camera