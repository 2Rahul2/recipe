import React, { useState, useEffect } from 'react';
import { Search, Clock, ChefHat, Sparkles, X, ExternalLink } from 'lucide-react';

export default function RecipeApp() {
  const [searchType, setSearchType] = useState('ingredient');
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState('');

  const quickIngredients = ['chicken', 'salmon', 'pasta', 'rice', 'potato', 'mushroom', 'cheese'];
  const moodOptions = ['comfort', 'healthy', 'quick', 'fancy'];
  const timeOptions = ['15', '30', '45', '60+'];

  const searchRecipes = async (query) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError('');
    setRecipes([]);

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(query)}`);
      const data = await response.json();
      
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setError('No recipes found. Try a different ingredient!');
      }
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipeDetails = async (id) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      if (data.meals) {
        setSelectedRecipe(data.meals[0]);
      }
    } catch (err) {
      console.error('Failed to fetch recipe details');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchRecipes(searchQuery);
  };

  const handleQuickSearch = (ingredient) => {
    setSearchQuery(ingredient);
    searchRecipes(ingredient);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-xl">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Recipe Ideas
                </h1>
                <p className="text-sm text-gray-600 hidden sm:block">Find your perfect meal, Taylor!</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 border border-orange-100">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-gray-800">What would you like to cook?</h2>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter an ingredient (e.g., chicken, tomato, pasta)..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>

          {/* Quick Search Tags */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Quick ingredient search:</p>
            <div className="flex flex-wrap gap-2">
              {quickIngredients.map((ingredient) => (
                <button
                  key={ingredient}
                  onClick={() => handleQuickSearch(ingredient)}
                  className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-medium hover:from-orange-200 hover:to-red-200 transition-all transform hover:scale-105"
                >
                  {ingredient}
                </button>
              ))}
            </div>
          </div>

          {/* Helper Text */}
          <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-200">
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700">
                <p className="font-semibold text-orange-800 mb-1">💡 Pro Tips for Taylor:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Search by what's in your fridge right now</li>
                  <li>• Try common ingredients like chicken, pasta, or rice</li>
                  <li>• Results show meals you can make with that ingredient</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
            <p className="text-red-700 text-center">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-200 border-t-orange-600"></div>
          </div>
        )}

        {/* Recipe Grid */}
        {!loading && recipes.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Found {recipes.length} delicious recipes for you! 🍳
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recipes.map((recipe) => (
                <div
                  key={recipe.idMeal}
                  onClick={() => fetchRecipeDetails(recipe.idMeal)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 text-lg line-clamp-2 mb-2">
                      {recipe.strMeal}
                    </h4>
                    <button className="text-orange-600 text-sm font-semibold hover:text-orange-700 flex items-center space-x-1">
                      <span>View Recipe</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && recipes.length === 0 && !error && (
          <div className="text-center py-20">
            <ChefHat className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Ready to cook, Taylor?</h3>
            <p className="text-gray-500">Search for an ingredient to discover amazing recipes!</p>
          </div>
        )}
      </main>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">{selectedRecipe.strMeal}</h3>
              <button
                onClick={() => setSelectedRecipe(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <img
                src={selectedRecipe.strMealThumb}
                alt={selectedRecipe.strMeal}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                  {selectedRecipe.strCategory} • {selectedRecipe.strArea}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Ingredients:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                    const ingredient = selectedRecipe[`strIngredient${i}`];
                    const measure = selectedRecipe[`strMeasure${i}`];
                    return ingredient && ingredient.trim() ? (
                      <li key={i} className="flex items-center space-x-2 text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>{measure} {ingredient}</span>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Instructions:</h4>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {selectedRecipe.strInstructions}
                </p>
              </div>

              {selectedRecipe.strYoutube && (
                <div className="mt-6">
                  <a
                    href={selectedRecipe.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
                  >
                    <span>Watch Video Tutorial</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}