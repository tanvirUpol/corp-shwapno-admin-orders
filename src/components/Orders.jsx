import { useEffect, useState } from 'react';
import React, { useRef } from 'react';

const Orders = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`https://corporate-orders-server.onrender.com/orders`)
            .then(response => response.json())
            .then(data => {
                setList(data.result)
            })
            
    }, [])

 
    const userData = list.find(item => item._id === "640484b3c924d0056bb0b898")
   
        // get reff and open the table in new tab
      const printTableRef = useRef(null);
    
      function handlePrintClick() {
        const printTable = printTableRef.current;
        printTable.style.display = 'block';
        const newWin = window.open('Data');
        newWin.document.write(printTable.outerHTML);
        newWin.document.close();
        newWin.print();
        printTable.style.display = 'none';
        newWin.close();
      }
    


  return (
    
    
    <div>
        <p>Hello darkness my old friend</p>
         <button onClick={handlePrintClick}>Print</button>   
        { (list.length > 0 ?
            <div id="printTable" ref={printTableRef} style={{display:'none'}} >
                <div  className="company-details" >
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
                                <tr key={item.code} >
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
    </div>
  )
}
export default Orders