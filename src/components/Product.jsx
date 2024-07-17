// src/Product.jsx

// const Product = () => {
//       return (
//         <div>
//           <h2>Tacos</h2>
//                 <p>Price: 999 credits</p>
//         </div>
//       );
//     };
    
//     export default Product;
   
// src/components/Product.jsx

// export const Product = () => {
// 	const price = 999;
// 	const imgUrl = "<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>";

//   return (
//     <>
//       <h2>Tacos</h2>
// 			<img src={imgUrl} alt="Tacos With Lime" width="640" />
//       <p>Price: {price} credits</p>
//     </>
//   );
// };

//     export default Product;

// src/components/Product.jsx

// export const Product = props => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <img src={props.imgUrl} alt={props.name} width="480" />
//       <p>Price: {props.price} credits</p>
//     </div>
//   );
// };

// export const Product = ({ name, imgUrl, price }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
// 			<img src={imgUrl} alt={name} width="480" />
// 			<p>Price: {price} credits</p>
//     </div>
//   );
// };
export const Product = ({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price,
}) => (
  <div>
		<h2>{name}</h2>
    <img src={imgUrl} alt={name} width="480" />
    <p>Price: {price} credits</p>
  </div>
)
Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default Product;