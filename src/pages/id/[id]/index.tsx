function Index() {
  const { id } = useParams();

  return (
    <div>
      <p>ID: {id}</p>
    </div>
  );
}

export default Index;
