autoGeneratePassword() {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < 8; x++) {
      var i = Math.random() * chars.length;
      pass += chars.charAt(i);
    }

    return pass;
  }
