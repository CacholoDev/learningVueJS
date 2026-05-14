const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `HTTP ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

export async function getUsuarios() {
  return request("/usuarios");
}

export async function addUsuario(usuario) {
  return request("/usuarios", {
    method: "POST",
    body: JSON.stringify(usuario),
  });
}
