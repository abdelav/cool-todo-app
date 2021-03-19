const API_BASE = 'http://localhost:4000/api';
const COMMON_HEADERS = { 'Content-Type': 'application/json' };

export const listTodos = async () => {
  try {
    const response = await fetch(`${API_BASE}/todo/list`);
    const { data } = await response.json();

    return data;
  } catch (e) {
    console.error(e.message);
  }
}

export const createTodo = async (todo) => {
  try {
    const response = await fetch(`${API_BASE}/todo/add`, {
      method: 'POST',
      headers: { ...COMMON_HEADERS },
      body: JSON.stringify({ todo })
    });
    const { data } = await response.json();

    return data;
  } catch (e) {
    console.error(e.message);
  }
}

export const updateTodo = async (id: string, name: string) => {
  try {
    const response = await fetch(`${API_BASE}/todo/${id}/update`, {
      method: 'PUT',
      headers: { ...COMMON_HEADERS },
      body: JSON.stringify({ todo : { name } })
    })

    return response.status === 200;
  } catch (e) {
    console.error(e.message)
  }
}

export const deleteTodo = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE}/todo/${id}`, { method: 'DELETE' })
    return response.status === 204;
  } catch (e) {
    console.error(e.message)
  }
}

export const completeTodo = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE}/todo/${id}/complete`, { method: 'PUT' })
    const { data } = await response.json();

    return data;
  } catch (e) {
    console.error(e.message);
  }
}
