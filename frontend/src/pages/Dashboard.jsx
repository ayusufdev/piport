// frontend/src/pages/Dashboard.jsx

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user?.username}</p>
      <p>PPC: {user?.ppc_balance}</p>
      <p>PPT: {user?.ppt_balance}</p>
    </div>
  );
}