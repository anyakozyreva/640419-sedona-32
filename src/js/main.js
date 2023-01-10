import { handleSubscriptionSubmit } from './subscription.js';
export const subscriptionForm = document.querySelector('.subscription-form');

subscriptionForm.addEventListener('submit', handleSubscriptionSubmit);
