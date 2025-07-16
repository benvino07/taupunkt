export default async function handler(req, res) {
  const city = req.query.city || 'Freiburg';
  const apiKey = process.env.OPENWEATHER_API_KEY;

  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},DE&units=metric&appid=${apiKey}&lang=de`);
  const data = await response.json();

  res.status(200).json(data);
}
