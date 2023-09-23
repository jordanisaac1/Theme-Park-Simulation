import Person from './Person';

class Customer extends Person {
    constructor(name, age) {
      super(name, age); // Call the constructor of the superclass (Person)
      this.hasTicketValue = false;
      this.isReturningCustomerValue = false;
    }
  
    hasTicket() {
      return this.hasTicketValue;
    }
  
    purchaseTicket() {
      this.hasTicketValue = true;
    }
  
    isReturningCustomer() {
      return this.isReturningCustomerValue;
    }
  
    fetchAge() {
      return this.age;
    }
  }
  
  export default Customer;
  