# Recipe Ideas 🍳

A beautiful, responsive recipe finder application designed for busy professionals who want to cook delicious meals based on available ingredients.

## 🎯 Overview

Recipe Ideas helps users discover recipes based on ingredients they have at home. Perfect for Taylor and other busy professionals who want to make cooking decisions quickly and efficiently after a long day at work.

## ✨ Features

### Core Functionality
- **Ingredient-Based Search**: Find recipes by searching for ingredients you already have
- **Quick Search Tags**: One-click access to popular ingredients (chicken, beef, salmon, pasta, etc.)
- **Detailed Recipe View**: Full cooking instructions, ingredient lists with measurements, and category/cuisine information
- **Video Tutorials**: Direct links to YouTube cooking videos when available

### User Experience
- **Responsive Design**: Seamlessly adapts to mobile, tablet, and desktop screens
- **Modern UI**: Eye-catching gradient backgrounds and smooth animations
- **Interactive Cards**: Hover effects and smooth transitions for better engagement
- **Loading States**: Clear feedback during API calls
- **Error Handling**: User-friendly error messages when recipes aren't found

### Design Highlights
- Gradient color scheme (orange to red to pink)
- Card-based layout with image zoom effects
- Sticky header for easy navigation
- Modal popup for detailed recipe information
- Professional typography and spacing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/2Rahul2/recipe
cd recipe-ideas
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Technologies Used

- **React**: Frontend framework for building the user interface
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful icon library
- **TheMealDB API**: Free recipe database API

## 📡 API Integration

This app uses [TheMealDB API](https://www.themealdb.com/api.php) to fetch recipe data.

### Endpoints Used:
- **Filter by Ingredient**: `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}`
- **Recipe Details**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}`

No API key required - the free tier is sufficient for this application.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: 1024px - 1280px (3 columns)
- **Large Desktop**: > 1280px (4 columns)

## 🎨 Color Palette

- **Primary Gradient**: Orange (#f97316) to Red (#ef4444)
- **Background**: Orange-50 to Pink-50 gradient
- **Text**: Gray-800 for headings, Gray-600 for body
- **Accents**: Orange-500 for interactive elements

## 📂 Project Structure

```
recipe-ideas/
├── src/
│   ├── App.jsx              # Main application component
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
├── public/
│   └── index.html           # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
└── README.md                # This file
```

## 🧑‍💻 User Persona

**Name**: Taylor  
**Occupation**: Busy Professional  
**Needs**:
- Quick meal ideas based on available ingredients
- Easy-to-follow recipes with clear instructions
- Time-efficient cooking solutions
- Visual recipe browsing

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

### `npm run eject`
**Note**: This is a one-way operation. Use with caution.

## 🌟 Key Components

### Header
- Sticky navigation bar with branding
- Chef hat icon with gradient background
- Personalized greeting for the user

### Search Section
- Text input for ingredient search
- Search button with loading state
- Quick-search tags for popular ingredients
- Pro tips section with usage guidance

### Recipe Grid
- Responsive card layout
- Recipe images with hover zoom effect
- Recipe titles and "View Recipe" CTA
- Dynamic grid columns based on screen size

### Recipe Detail Modal
- Full-screen overlay with recipe details
- Complete ingredients list with measurements
- Step-by-step cooking instructions
- Category and cuisine badges
- YouTube video link (when available)

## 🎯 Future Enhancements

- [ ] Save favorite recipes
- [ ] Filter by cooking time
- [ ] Dietary restrictions filter (vegetarian, vegan, gluten-free)
- [ ] Multiple ingredient search
- [ ] Recipe ratings and reviews
- [ ] Shopping list generator
- [ ] Meal planning calendar
- [ ] Recipe sharing functionality

## 🐛 Known Issues

- API occasionally returns limited results for uncommon ingredients
- Some recipes may not have video tutorials available
- Large ingredient lists may need scrolling in modal view

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing the free recipe API
- [Lucide Icons](https://lucide.dev/) for the beautiful icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Support

For support, questions, or feedback, please open an issue in the GitHub repository.

---

**Built with ❤️ for busy professionals who love cooking**