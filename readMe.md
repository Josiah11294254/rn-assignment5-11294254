--ID 11294254--

# React Native App

This is a react native app  that designed to demonstrate some react native concepts like keeping state with context, enabling theme swithces and finally building the UI itself(Involved the usage of several react native components)

## How I went about it

1. To first get the theme working for the application, I create a Theme provider component and wrapped my app component in it to handle thte theme of the whole application
2. I also set up the bottom tab navigator inside the app.js file to enable navigation of screens.
3.  I then created the home page which contained several react native components(Views,flatList,Text,Touchableopacity etc.) I contructively put these components together to make the homepage
4.  I then created the settings page which holds a just a few links and contains the switch for toggling the theme mode

<p>
  <img src="./assets/h1.png" alt="App Screenshot 1" height='450vh' width="25%"/>
  <img src="./assets/h1w.png" alt="App Screenshot 2" height='450vh' width="25%"/>
  <img src="./assets/ds.png" alt="App Screenshot 2" height='450vh' width="25%"/>
</p>




## How to Run

1. **Install Dependencies**:
    ```bash
    npm install
    ```

2. **Start the App**:
    ```bash
    expo start
    ```

3. **Run on Emulator or Device**:
    - Press `a` to open on an Android emulator.
    - Press `i` to open on an iOS simulator.