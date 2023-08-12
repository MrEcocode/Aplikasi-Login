/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script */
/**
* Comment : Menangkap inputan login dari halaman login.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');
/**
* Comment : Menangkap inputan email dari halaman login.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');
/**
* Comment : Menangkap inputan password dari halaman login.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Comment : Membuat variabel yang berisi data email.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';
/**
* Comment : Membuat variabel yang berisi data password.
* @constant {string}
*/
const expectedPassword = 'superpassword';

/*Comment : Membuat aksi ketika form di submit*/
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
  
  /**
  * Comment : Memasukkan value/isi dari form ke dalam variabel email.
  * @constant {string}
  */
  const email = inputEmailElement.value;
  
  /**
  * Comment : Memasukkan value/isi dari form ke dalam variabel email.
  * @constant {string}
  */
  const password = inputPasswordElement.value;
  
  /*Comment : Memastikan email & password sama dengan data yang tersimpan*/
  if (email == expectedEmail && password == expectedPassword) {
    
    /*Comment : Apabila data benar maka akan menuju hal home*/
    goToHome();
  } else {
    /*Comment : Apabila salah maka akan muncul notifikasi masukan/inputan salah*/
    showPopUp();
  }
});
