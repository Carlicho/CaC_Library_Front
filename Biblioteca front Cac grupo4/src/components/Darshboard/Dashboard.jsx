const Dashboard = () => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const accessToken = await getAccessTokenSilently();
          const response = await fetch('http://localhost:5000/api/data', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      if (isAuthenticated) {
        fetchData();
      }
    }, [getAccessTokenSilently, isAuthenticated]);
  
    if (!isAuthenticated) {
      return <div>Debes iniciar sesión para ver el dashboard.</div>;
    }
  
    return (
      <div>
        <h2>Dashboard</h2>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Cargando datos...</p>}
      </div>
    );
  };
  
  export default Dashboard;