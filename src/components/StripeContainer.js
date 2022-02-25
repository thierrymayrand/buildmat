import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './Paymentform';


function StripeContainer() {
    const PUBLIC_KEY = 'pk_test_51KV5tcLALX60SYEoYxybNazimbVL6HgWLPml2F724u0ISH2YnF5ifI91EC8IaycfUhDTNZGOUhjo3QLQJVzYytGj00QOb6qj7R'
    const stripe = loadStripe(PUBLIC_KEY)
    return (
        <Elements stripe={stripe}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer;