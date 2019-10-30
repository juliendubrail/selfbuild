module.exports = class Buyer {
  constructor(
    firstname,
    lastname,
    password,
    email,
    registration_date,
    last_seen,
    location,
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.email = email;
    this.last_seen = last_seen;
    this.registration_date = registration_date;
    this.location = location;
  }
  printLocation(){
    console.log(this.location)
  }
  addToWishlist(pcbuild) {
      this.pcbuild = pcbuild.name
      pcbuild.interested_buyers.push(this)
  }

};
