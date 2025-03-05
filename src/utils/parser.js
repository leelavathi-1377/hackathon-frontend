export function parseUserData(data) {
    return {
      username: data.security.username,
      password: data.security.password,
      email: data.contactInformation.email,
      phone: data.contactInformation.mobile,
      fullName: data.personalInformation.fullName,
      dateOfBirth: data.personalInformation.dob,
      initialBalance: Number(data.accountDetails?.initialBalance )?? 1000, // Assuming default initial balance
      address: {
        street: data.contactInformation.street,
        city: data.contactInformation.city,
        state: data.contactInformation.state,
        zipCode: data.contactInformation.zipcode,
        country: data.contactInformation.country,
      },
    };
  }


  export function parseTransferData(data){
    return {
        toAccountId:data.accountId,
        amount:data.amount,
        fromCurrency:data.fromCurrency,
        toCurrency:data.toCurrency
        
    }
  }