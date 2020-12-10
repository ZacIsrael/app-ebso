// import React from 'react';
// import './Subtotal.css';
// import CurrencyFormat from 'react-currency-format';
// import { useStateValue } from "../components/StateProvider";
// import {getBasketTotal} from '../components/reducer';
// import { PayPalButton } from 'react-paypal-button'
//
// function Subtotal() {
//     const [{basket}, dispatch] = useStateValue();
//     const paypalOptions = {
//         clientId: 'AbLuC3xXVuo_9-l5cN6WAny45_nU38WMGnOiuRalqr3AAuH-UlSthH6hTjLqZrgh9MVBO2xsUZQf5fDP',
//         intent: 'capture'
//     }
//
//     const buttonStyles = {
//         layout: 'vertical',
//         shape: 'rect',
//     }
//     return <div className="subtotal">
//
//         <CurrencyFormat
//
//             renderText={(value) => (
//                 <>
//                     <p>
//                         Subtotal ({basket.length} items): <strong>{value}</strong>
//                     </p>
//                 </>
//             )}
//             decimalScale = {2}
//             fixedDecimalScale={true}
//             value={getBasketTotal(basket)}
//             displayType={"text"}
//             thousandSeparator={true}
//             prefix={"$"}
//         />
//
//
//         <PayPalButton
//             paypalOptions={paypalOptions}
//             buttonStyles={buttonStyles}
//             amount={getBasketTotal(basket)}
//         />
//
//     </div>;
//
// }
//
// export default Subtotal;
