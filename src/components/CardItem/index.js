// Write your code here.
import './index.css'
const CardItem = props => {
  const {technologydetails} = props
  const {title, description, imgUrl,className}=technologydetails;
  return (
    <li className=${className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={title}/>
    </li>
  )
}
export default CardItem;