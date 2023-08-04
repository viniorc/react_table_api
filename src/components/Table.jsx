


export const Table = (props) => {
    console.log(props.colunas);

  return (
    <div>
        <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">Website</th>
      <th scope="col">Adress</th>
    </tr>
    {props.colunas.map((colunas, index) => (
        <th key={index} scope="col">
        </th>
    ))}
  </thead>
  <tbody>
    {props.data.map( user =>
    <tr>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.username}</td>
      <td>{user.website}</td>
      <td>{`${user.address.street},${user.address.suite},${user.address.zipcode}`}</td>
    </tr>
    )}
  </tbody>
</table>;

    </div>
  )
}

export default Table