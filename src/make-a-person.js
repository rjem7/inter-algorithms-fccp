var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let fullname = firstAndLast.split(' ');
  this.getFullName = function() {
    return fullname.join(' ');
  };
  this.getFirstName = function() {
    return fullname[0];
  };
  this.getLastName = function() {
    return fullname[1];
  };
  this.setFirstName = function(first) {
    fullname[0] = first;
  }
  this.setLastName = function(last) {
    fullname[1] = last;
  }
  this.setFullName = function(fullName) {
    fullname = fullName.split(' ');
  }
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
