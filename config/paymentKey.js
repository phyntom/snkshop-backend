const getPayPalClientId = () => {
   return (
      process.env.PAYPAL_CLIENTID ||
      'AagpgVoYhpsijnMQnrL2z-eAgDiisMC5QmvOfc3AbhP-NzBCt8cPYo5ahIf4_DHCzuGGiKhKM3pbG8Pf'
   );
};

const getStripeClientId = () => {
   return process.env.STRIPE_CLIENTID;
};

module.exports = {
   getPayPalClientId,
   getStripeClientId,
};
