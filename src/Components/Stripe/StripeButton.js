import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
  console.log(price)
  const priceForStripe = price *100;
  const stripeKey = 'pk_test_OR4Xz4juCdQ8l1EKox5uu7Ja00wQFf1deu';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }


  return(
    <StripeCheckout 
      label = 'Pay Now'
      name='CRWN Clothing LTD.'
      billingAddress
      shippingAddress
      image = 'https://svgshare.com/i/CUz.svg'
      description = {`Your Total is ${price}`}
      amount = {priceForStripe}
      panelLabel = ' Pay Now'
      token = {onToken}
      stripeKey ={stripeKey}
    />
  );
}

export default StripeButton;