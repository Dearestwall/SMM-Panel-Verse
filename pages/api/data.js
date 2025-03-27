// pages/api/data.js
export default async function handler(req, res) {
    const apiKey = process.env.API_KEY; // Access environment variable
    try {
      const response = await fetch(`https://api.example.com/data?api_key=${apiKey}`);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }
  