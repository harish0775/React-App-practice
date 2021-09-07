const object = {
    Fname :'Harish',
    Lname : 'Nishad',
    Fullname : function(){
      return this.Fname + this.Lname;
    }
  }
  object.Fullname()