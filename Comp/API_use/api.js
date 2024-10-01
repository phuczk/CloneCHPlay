const layDanhSachTheoId = () => {
    const [comments, setComments] = useState([]);
  const idApp = 'YOUR_APP_ID'; // Thay đổi giá trị idApp tại đây

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://your-api-endpoint/comments?idApp=${idApp}`);
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [idApp]);
}

const fetchDataByIdApp = async (idApp) => {
    try {
      const response = await fetch(`https://your-api-endpoint/comments?idApp=${idApp}`);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching comments:', error);
      return null;
    }
  }
  

const fetchDataAndSetComments = async () => {
  const comments = await fetchDataByIdApp(idApp);
  if (comments) {
    setComments(comments);
  }
};
