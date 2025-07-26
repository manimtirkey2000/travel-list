
# Travel List

A simple React application for creating and managing a travel packing list. Users can add, check, and remove items while also tracking packing statistics.

## Features
- **Add items** to your travel list.
- **Mark items as packed** with a single click.
- **View statistics** on packed vs. unpacked items.
- **Remove items** from the list.
- **Responsive UI** for desktop and mobile.

## Project Structure


travel-list-master/
│
├── public/                # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── App.js
│   │   ├── Form.js
│   │   ├── Item.js
│   │   ├── Logo.js
│   │   ├── PackingList.js
│   │   └── Stats.js
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── package.json           # Project dependencies
└── README.md


## Getting Started

### Prerequisites
- **Node.js** (>= 14)
- **npm** or **yarn**

### Installation
```bash
git clone <repository-url>
cd travel-list-master
npm install
````

### Run the App

```bash
npm start
```

The app will run on [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

## Scripts

* **`npm start`** – Starts the development server.
* **`npm run build`** – Builds the app for production.
* **`npm test`** – Runs test cases (if any are added).

## License

This project is licensed under the MIT License.

