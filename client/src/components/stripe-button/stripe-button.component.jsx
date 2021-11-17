import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;     // in cents
    const publishableKey = 'pk_test_51Jvh6nDryGsCOLcT6DKPugi3RYzsj3A9xr42IZFRCLAsdqb34d2TTTYyusTAU5fDSczhCoyjh0ZZ3gIiksj9VTbI00dkX0Quzf';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token       // <==> token: token
            }
        }).then(response => {
            alert('Successful payment!');
        }).catch(error => {
            console.log('Payment error: ', error);
            alert('There was an issue with your payment. Please make sure that you use the provided credit card!');
        });
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;