import { Link } from "react-router-dom"


const List = () => {
function handleClick() {
    window.open('/orders', 'Example',
    'width=1000,height=800,left=200,top=100');
    
    }

  return (
    <div>
       <Link  onClick={handleClick} >See our products</Link>
    </div>
    
  )
}
export default List