import { useEffect, useState } from 'react';

const Orders = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`https://corporate-orders-server.onrender.com/orders`)
            .then(response => response.json())
            .then(data => {
                setList(data.result)
            })
            
    }, [])

    // print after page has loaded
    useEffect(() => {
       if(list.length>0){
        window.print()
       }
    }, [list]);

    // close after downloading
    window.addEventListener('afterprint', (event) => {
        window.close()
      });
    
    const userData = list[0]
    // console.log(userData.user);
    window.addEventListener('afterprint', (event) => {
        console.log('After print');
    });
  return (
    
    
    
    <div>
        { (list.length > 0 ?
            <div>
                <div className="company-details">
                    <ul>
                        <li>Company ID: {userData.user.client_id}</li>
                        <li>Company name: {userData.user.company_name}</li>
                        <li>Company address: {userData.user.address}</li>
                        <li>Order date: {userData.date}</li>
                    </ul>
                </div>
                <div className="order-details">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Category</th>
                                <th scope="col">Division</th>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.products.map(item=>
                                <tr>
                                    <td>{item.code}</td>
                                    <td>{item.category}</td>
                                    <td>{item.division}</td>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
            :
            <p>Data koi</p>)
            
        }
        {/* <button onlo={()=>window.print()}>Print this page</button> */}

    </div>
  )
}
export default Orders