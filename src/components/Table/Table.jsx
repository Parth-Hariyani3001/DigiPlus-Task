

function Table({data,onEdit,onDelete}) {
    return(
        <div>
            <table>
                <th>Roll </th>
                <th>Name</th>
                <th>Location</th>
                <th>CGPA</th>
                <th>Action</th>
                {data.map((e) => {
                    return (
                        <tr key={e.roll}>
                            <td>{e.roll}</td>
                            <td>{e.name}</td>
                            <td>{e.location}</td>
                            <td>{e.cgpa}</td>
                            <td>
                                <span><button onClick={() => onEdit(e.roll)}>✏️</button></span>
                                <span><button onClick={() => onDelete(e.roll)}>❌</button></span>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Table;