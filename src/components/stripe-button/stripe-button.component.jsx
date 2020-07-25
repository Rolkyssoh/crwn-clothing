import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51H8npRAZ8KZnCASRgWifGYzvI1UL2GA3C8xwtrXU3Cvt4Itstf3rglkFo4kT6lstcMJezpsgYCS8bLmmi05DvLNt00IHrWww74'

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://swgshare.com/i/Cuz.sv'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )

};

export default StripeCheckout;