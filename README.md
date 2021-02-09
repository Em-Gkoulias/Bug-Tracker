# Bug-Tracker

This project is a bug-tracker. It is still under construction though, and till now it has some basic functionality. 
For now it allows the user to register and log in with his account, creating a default profile at the same time. It is not possible to access any page without authentication. Entering the app, the user can create a new project as a note with a title and a description and inside this project he can create bugs as notes with a title and a description as well. He can add as many projects and bugs as he wants. Every project and bug can be edited and deleted.

The UI is built with the React framework and all the data are fetched from a Laravel API. I use axios for my HTTP calls and Laravel Sanctum for the authentication. In order to avoid page reloading, I used React Router DOM. I have also added Chart.js to display the bugs per project as well as the solved bugs per day of the week on the UI with dougnut chart and a bar chart (the bar chart is using dummy data, there is no log created yet in order to fetch the solved bugs).

Things that need to be added are email confirmation after registration, a status on every bug marked as solved in order to keep a log of them, ability to create a team with other users and share specific notes as well as sending email between the users.
