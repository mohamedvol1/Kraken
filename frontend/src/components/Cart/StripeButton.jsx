import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import logo from "../../Logo/Logo.png";
import axios from 'axios';


const StripeCheckoutButton = ({ price, paymentData, config }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JqvuBC9Y0Bin0h2WIKJGv4ugdmKDukiVjUeZrPhVN5qrbriGRw3MzsRoyLQZ5ApiduUzekbHSdn3DU7SdBHdUbA000SBfqj9q';

  const OnToken = token => {
    axios({
      url: '/api/v1/payment/process',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: JSON.stringify({
        amount: priceForStripe,
        token
      })
    })
      .then(response => {
        console.log('res from fron >>>>>>>>>', response)
        alert('Payment successfully done')
      })
      .then(res => {
        console.log('orderrr >>>', paymentData)
        axios.post(
          '/api/v1/order/new',
          paymentData,
          config,
      );
      })
      .catch(error => {
        console.log('Payment Error', error)
        // alert('Sorry, there was an issue in your payment')
      })

    //   const { data } = await axios.post(
    //     '/api/v1/payment/process',
    //     paymentData,
    //     config,
    // );

  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CLOTHING-CLUB'
      billingAddress
      shippingAddress
      // image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={OnToken}
      locale={null}
      stripeKey={publishableKey}
    >
    </StripeCheckout>
  )
}

export default StripeCheckoutButton;