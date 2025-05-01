# DT208G Moment 4: Angular II

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8 and is my contribution for "Moment 4 - Angular II" in the course "Programmering i TypeScript" (DT208G) at Mittuniversitet.
<br><br>
Link to the live site: **[DT208G Moment 4](https://dt208gmoment4jg.netlify.app)**

## Description 
This project is a simple single page Angular application that displays courses in a dynamic table. The data for the courses is fetched from the JSON file ramschema.json located in the public folder using HttpClient.


## Features
* **Course listing:** Displays courses in a table from ramschema.json with course code, name and progression. 
* **Filtering:** Uses data binding via [(ngModel)] to filter courses on name or code as the user types. The table is dynamically updated accordingly to reflect the results. 
* **Sorting:** Column-based sorting (ascending/descending) by clickable headings (th elements) implemented using Angular Material's mat-sort-header for course, name and progression. 
* **Responsive styling:** Basic responsive styling. 

### Component
The app is made up using one single component named "course-list". This component takes care of everything related to the applications functionality (excluding collecting data which is handled by the service mentioned below and then imported into the component).
<br>
The functionality for sorting the courses has been implemented by installing and using Angular Material. The Sort and MatSortModule have been imported and used according to instructions and examples available at: [Angular Material Sort](https://material.angular.dev/components/sort/overview). This way I could use the mat-sort-header attribute on each th-element for column based sorting in both ascending and descending order. The code related to the sorting functionality in course-list.component.ts has been created and modified using previously mentioned example from Angular Material governed by an MIT-style license. This has been implemented with a copyright notice.

### Services
A single service named "courses" has been created for the application. The main purpose of this service is to provide functionality to fetch data from the JSON file (ramschema.json) using HttpClient. This service has been created based on the guidance provided in the course materials. 


## Technologies Used
* **Angular version 19.2.8:** Framework to build the application
* **TypeScript:** Language used throghout the project.
* **Angular CLI:** Tooling for generating code, building the application and running a local dev server. 
* **Angular Materials (Sort Module):** Used to implement column-based sorting in the table via mat-sort-header.
* **HTML:** Used for basic structure and to create the course table. 
* **CSS:** For responsive styling.
* **Netlify:** For deployment. 
* **JSON:** The course information data format.

## Deployment
This site has been deployed using Netlify using the steps presented below and a link to the live site can be found here: [DT208G Moment 4](https://dt208gmoment4jg.netlify.app).

1. Navigate to [Netlify](https://www.netlify.com) and log in or sign up.
2. Click "Add new site" > "Import an existing project" > select GitHub and the projects repository.
3. Set the following:
Site name (optional)
Branch to deploy = master
Build command = ng build
Publish directory = dist/moment4dt208g/browser
4. Click on the deploy button. 