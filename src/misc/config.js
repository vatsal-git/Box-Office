const API_BASE_URL = 'YOUR_API_URL';

export async function apiGet(queryString) {
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );
  return response;
}
