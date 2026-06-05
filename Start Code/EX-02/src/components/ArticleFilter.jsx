import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ArticleFilter() {
  const [articles, setArticles] = useState([]);
  // Fetch all articles when component mounts
  const [journalists, setJournalists] = useState([]);
  const [categories, setCategories] = useState([]); 
  const [selectedJournalist, setSelectedJournalist] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
    fetchArticles();
    fetchJournalists();
    fetchCategories();
  }, []);

  const fetchArticles = async () => {
    // Fetch articles from the API
    try { const response = await axios.get ('http://localhost:3000/api/articles');
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }

  };

  const fetchJournalists = async () => {
    // Fetch journalists from the API
    try { const response = await axios.get ('http://localhost:3000/api/journalists');
      setJournalists(response.data);
    } catch (error) {
      console.error('Error fetching journalists:', error);
    }
  };

  const fetchCategories = async () => {
    // Fetch categories from the API
    try { const response = await axios.get ('http://localhost:3000/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }   
  }

  return (
    <div>
      <h2>Articles</h2>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <label htmlFor="journalistFilter">Filter by Journalist:</label>
        <select id="journalistFilter">
          <option value="">All Journalists</option>
          {/* Options for journalists */}
        </select>

        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select id="categoryFilter">
          <option value="">All Categories</option>
          {/* Options for categories */}
        </select>

        <button
          onClick={() => {
            // Logic to apply filters
          }}
        >Apply Filters</button>
        <button
          onClick={() => {
            // Logic to reset filters
          }}
        >Reset Filters</button>
      </div>

      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <strong>{article.title}</strong> <br />
            <small>By Journalist #{article.journalistId} | Category #{article.categoryId}</small><br />
            <button disabled>Delete</button>
            <button disabled>Update</button>
            <button disabled>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}