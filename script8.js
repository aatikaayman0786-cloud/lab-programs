async function fetchUsers() {
  const loading = document.getElementById("loading");
  const error = document.getElementById("error");
  const tbody = document.getElementById("userBody");

  loading.style.display = "block";
  error.style.display = "none";
  tbody.innerHTML = "";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) throw new Error("Failed to fetch data");

    const users = await res.json();

    users.forEach(user => {
      tbody.innerHTML += `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
        </tr>`;
    });
  } catch (err) {
    error.textContent = err.message;
    error.style.display = "block";
  } finally {
    loading.style.display = "none";
  }
}
