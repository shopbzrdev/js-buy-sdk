import Resource from './resource';
import defaultResolver from './default-resolver';

// GraphQL
import paymentNodeQuery from './graphql/paymentNodeQuery.graphql';

/**
 * The JS Buy SDK payment resource
 * @class
 */
class PaymentResource extends Resource {

  /**
   * Fetches a payment by ID.
   *
   * @example
   * client.payment.fetch('FlZj9rZXlN5MDY4ZDFiZTUyZTUwNTE2MDNhZjg=').then((payment) => {
   *   // Do something with the payment
   * });
   *
   * @param {String} id The id of the payment to fetch.
   * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the payment.
   */
  fetch(id) {
    return this.graphQLClient
      .send(paymentNodeQuery, {id})
      .then(defaultResolver('node'))
      .then((payment) => {
        if (!payment) { return null; }

        return payment
      });
  }
}

export default PaymentResource
