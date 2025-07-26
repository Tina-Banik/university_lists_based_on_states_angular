# Angular University List Application

This Angular application provides a dynamic list of universities in India, fetching data from the Hipolabs Universities API. It leverages Angular's `HttpClientModule` for efficient data retrieval and implements pagination for a user-friendly Browse experience.

## Features

* **Comprehensive University Data:** Displays a list of universities in India, including their names, domains, and websites.
* **API Integration:** Seamlessly fetches data from `http://universities.hipolabs.com/search?country=India` using Angular's `HttpClientModule`.
* **Pagination:** Implements client-side pagination to efficiently display large datasets, allowing users to navigate through pages of universities.
* **Modular Service Structure:** Utilizes an `api` service (generated with `ng g s api/service`) to encapsulate API calls, promoting code organization and reusability.
* **Responsive Design:** (Optional, add if you've implemented it) Designed to be responsive and work well across various devices.

## Technologies Used

* Angular CLI
* Angular `HttpClientModule`
* Angular Pagination Module (e.g., `ngx-pagination` or custom implementation)
* HTML5
* CSS3
* TypeScript

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.
### Prerequisites
Ensure you have Node.js and Angular CLI installed.
* **Angular CLI:**
    ```bash
    npm install -g @angular/cli
    ```
### Running the Application

1.  **Start the development server:**
    ```bash
    ng serve
    ```
2.  Open your browser and navigate to `http://localhost:4200/`.

## Project Structure

The key files and folders in this project are:

* `src/app/`: Contains the core application logic.
    * `src/app/api/service/`: This folder contains the Angular service responsible for making API calls.
        * `api.service.ts`: The service file generated using `ng g s api/service`. It will contain methods to fetch university data from the Hipolabs API.
    * `src/app/app.component.ts`: The main application component.
    * `src/app/app.module.ts`: The main application module, where `HttpClientModule` and your pagination module are imported.
    * `src/app/university-list/`: (Likely a component you've created for displaying the list).

## API Usage
This application consumes the following API endpoint:
* **Base URL:** `http://universities.hipolabs.com/search`
* **Endpoint for India:** `http://universities.hipolabs.com/search?country=India`

The `ApiService` handles all interactions with this API.

## Pagination

The application utilizes a pagination module (e.g., `ngx-pagination` if used, or your custom implementation) to manage the display of university data. You can typically configure the number of items per page within the component displaying the list.
1) First, we run the npm i ngx-pagination command in VS-code
2) Second, we import the NgxPaginationModule from "ngx-pagination" , and the syntax is : import { NgxPaginationModule } from 'ngx-pagination';
3) Thrid, we initialize the NgxPaginationModule within the import array.
4) Above all the tasks has to be doen within the "app.module.ts" file, this is our parent module
### Example (if using `ngx-pagination`)
```typescript
// In your component.ts
public p: number = 1; // Current page number // initialize it within a app.component.ts
public itemsPerPage: number = 10; // Number of items to display per page // this is also nitialize it within a app.component.ts
and in HTML filr i.e. app.component.html :
<div *ngFor="let university of universities | paginate: { itemsPerPage: itemsPerPage, currentPage: p }">
    </div>
<pagination-controls (pageChange)="p = $event"></pagination-controls>
