# 🛠️ Project Generator
  The Project Generator is a powerful and user-friendly application designed to empower developers by providing them with a competitive edge when starting new projects. With this application, developers can leverage predefined backend architecture templates and a wide range of frontend options that can be easily accessed through simple commands.

## 📷 Preview  
Welcome to the preview section of the application! Here, you'll find a sneak peek into the various pages and features of the project. Take a quick tour through the application to get a glimpse of what's in store:
* Authentication Pages: Explore the seamless and secure login and registration processes that ensure your data remains protected.
<p align="center">
  <img src="https://github.com/Piciorus-Ovidiu-Mihai/Photos/blob/master/pg-auth-module.png">
</p>

* Dive into the interactive dashboard, where users can manage tasks, view statistics, and stay in control of their workflow.
<p align="center">
  <img src="https://github.com/Piciorus-Ovidiu-Mihai/Photos/blob/master/pg-ionic-dashboard.png">
</p>

* About Us: Learn more about me and the vision behind this project. Get to know the individuals working on this innovative solution.
<p align="center">
  <img src="https://github.com/Piciorus-Ovidiu-Mihai/Photos/blob/master/pg-angular-aboutus.png">
</p>
I've included some screenshots to give you a visual overview. Feel free to explore further by cloning and running the application locally. For more details, please refer to the documentation.

## 💻 Architecture
### ⌨️ Clean Architecture
In Clean Architecture, the application is divided into distinct layers, each with a specific responsibility and level of abstraction. These layers typically include the Domain layer, Application layer, Infrastructure layer, and Presentation layer. The Domain layer contains the core business logic and entities, while the Application layer defines use cases and orchestrates interactions between different components. The Infrastructure layer deals with external dependencies such as databases, APIs, or frameworks, while the Presentation layer handles the user interface and interactions.
The primary advantage of Clean Architecture is its flexibility and maintainability. By applying clear separation of concerns and dependencies, it becomes easier to modify or replace certain components without affecting the entire system. Additionally, the emphasis on business rules and domain logic makes the codebase more testable, as tests can be conducted more effectively.\
<p align="center">
  <img src="https://github.com/Piciorus-Ovidiu-Mihai/Photos/blob/master/pg-clean-architecture.png">
</p>

### ⌨️ Three Tier Architecture
The Three-Tier Architecture, also known as the Multi-Tier Architecture, is a widely used architectural model that divides the application into three distinct layers: the Presentation Layer, the Business Logic Layer, and the Data Persistence Layer. Each layer has its own set of responsibilities and interacts with the other layers through well-defined interfaces.
The Presentation Layer is responsible for managing the user interface and user interactions. It includes components such as web pages, mobile interfaces, or APIs that allow users to interact with the system. The Business Logic Layer contains the business rules, workflows, and use cases of the application. It processes user input, performs necessary calculations, and coordinates interactions between different components. The Data Persistence Layer handles data storage and retrieval, interacting with databases or other data storage systems.
<p align="center">
  <img src="https://github.com/Piciorus-Ovidiu-Mihai/Photos/blob/master/pg-three-tier-architecture.png">
</p>

### ⌨️ Modules Architecture
For both frontend applications, the same concepts of modular architecture were employed. Some of the advantages include:
* Code Reusability: Modular architecture promotes code reusability by dividing the application into smaller, self-contained modules. These modules can be developed independently and then reused in different parts of the application. This approach eliminates the need for duplicating code and enhances development efficiency.
* Scalability and Maintainability: With modular architecture, the application is divided into logical modules, each responsible for a specific functionality or feature. This division makes it easier to manage and maintain the codebase as the application grows. Developers can focus on individual modules without affecting other parts of the application, allowing for better scalability and easier maintenance.
* Testing and Debugging: Modularity simplifies the testing and debugging process. Each module can be tested individually, enabling more focused and targeted testing. This makes it easier to identify and address issues since changes in one module are less likely to affect others. Additionally, modular architecture promotes unit testing, where individual modules can be tested in isolation, improving overall code quality and reducing the risk of errors and regressions.
* Flexibility and Extensibility: Following a modular architecture makes the application more flexible and extensible. New features can be added by developing new modules or extending existing ones without impacting the entire codebase. This flexibility allows for easier customization and adaptability to changing business requirements or user needs.
* Code Organization and Readability: Modular architecture enforces a structured organization of the codebase. Each module focuses on a specific aspect of the application, making it easier to locate and understand the relevant code. This improves code readability, reduces complexity, and enhances overall maintainability.
<p align="center">
  <img src="https://github.com/Piciorus-Ovidiu-Mihai/Photos/blob/master/pages-architecture.png">
</p>

## 🛡️ Key Features
This innovative web application development solution streamlines the development process, ensuring high-quality code and project efficiency. It equips developers with the tools needed to respond to the dynamic web application development landscape.
* Efficiency: Save time and valuable resources by eliminating the need to build everything from scratch, allowing developers to focus on the unique aspects of their application.
* Customization: Easily customize projects based on specific requirements, such as selecting desired navigation menus, integrating reusable components, and implementing authentication modules.
* Flexibility: Adapt to the ever-evolving industry requirements with the flexibility and ease of use offered by this solution.
* High-Quality Code: The project promotes robust coding standards and design patterns, fostering scalability and maintainability while adhering to industry best practices.
* Collaboration: Standardized coding styles, naming conventions, and architectural models enhance code readability and facilitate collaboration within development teams.
* Future-Ready: Create web applications that are not only visually appealing but also robust and adaptable to future needs.

## 💽 Prerequisites
* ⚙️ Install [Node.js](https://nodejs.org/en/download/)
* ⚙️ Install Angular using `npm install -g @angular/cli`
* ⚙️ Install Angular Schematics using `npm install -g @angular-devkit/schematics-cli`
* ⚙️ Instal .NET Core & Visual Studio

## 🚀 Getting Started
* ⭐ Clone the repository
* ⭐ Open a terminal in the project path
* ⭐ Run `npm run build`
* ⭐ Open PowerShell with Admin's Rights and write `Set-ExecutionPolicy RemoteSigned`
* ⭐ For any project you want to run for generating the code use `schematics .:{name} --debug=false`
* ⭐ After that you have to install angular material using `ng add @angular/material`

## 🖥️ What I used ?
* 💽 `Angular`
* 💽 `Angular Schematics`
* 🧮 `Typescript`
* ⌨️ `HTML & CSS`
* 💽 `.NET Core`
