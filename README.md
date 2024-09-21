# VisualiReal - Homepage Project

## Project Overview

This project involves creating a homepage inspired by the design of the [Printify](https://printify.com/) homepage using **ReactJS**. The goal of this project is to evaluate the implementation of **ReactJS**, **responsiveness**, and **attention to detail** while maintaining good coding practices. 

The project requirements focus on:
- Homepage layout and design.
- Responsiveness on various devices.
- Code quality, organization, and maintainability.

## Features

1. **Homepage Layout:**
   - The homepage is designed to be **inspired** by the Printify homepage but with differentiations in UI elements.
   - Layout includes sections for the banner, products, footer, and a **responsive sidebar** for navigation.

2. **Responsiveness:**
   - The layout is optimized for **desktop**, **tablet**, and **mobile** views.
   - A **hamburger menu** for mobile and tablet screens allows the user to toggle the sidebar.

3. **Clean & Maintainable Code:**
   - The project follows **React best practices** using **functional components** and proper state management.
   - The code is structured for **scalability** and **modularization** with components like `Navbar`, `Banner`, `ProductSection`, `Footer`, and `Sidebar`.
   - The **CSS** is organized and responsive using media queries.

## Project Structure

```
├── node_modules/
├── public/
│   ├── images/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Banner.css
│   │   ├── Banner.js
│   │   ├── Navbar.css
│   │   ├── Navbar.js
│   │   ├── ProductSection.css
│   │   ├── ProductSection.js
│   │   ├── ResourceGrid.css
│   │   ├── ResourceGrid.js
│   │   ├── Sidebar.css
│   │   ├── Sidebar.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   └── index.js
```

## Getting Started

### Prerequisites
- **Node.js** and **npm** installed on your machine.
- A modern web browser.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/visualireal-homepage.git
   ```

2. Navigate to the project directory:
   ```bash
   cd visualireal-homepage
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the React development server by running:
```bash
npm start
```
This will run the project locally at `http://localhost:3000`.

### Building the Project

To create a production build of the project:
```bash
npm run build
```
This will generate the production-ready files in the `build/` directory.

## Technical Details

### Tools & Libraries Used

- **ReactJS**: Core library for building user interfaces.
- **React Hot Toast**: For toast notifications in the app.
- **CSS**: For styling and responsiveness with media queries.
- **Flexbox**: For layout structuring and alignment.

### Key Components

1. **Navbar**: Displays the top navigation links and is responsive for smaller screens.
2. **Sidebar**: Contains navigation options (My Store, Dashboard, Orders, etc.). It becomes a hamburger toggle on mobile screens.
3. **Banner**: A hero banner showcasing key features or promotions.
4. **ProductSection**: Displays product categories or featured items.
5. **Footer**: Contains the footer links and information.

### Responsiveness

- The project uses **CSS media queries** to handle different screen sizes.
- On mobile and tablet devices, the sidebar becomes hidden and accessible through a **hamburger menu**.
- All major UI elements adjust seamlessly between screen sizes.

