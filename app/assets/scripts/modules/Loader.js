class Loader {
    constructor() {
      let preloadTime;
      this.loader = document.querySelector('#preloader')
      if(this.loader) {
        preloadTime = setTimeout(this.showPage, 4000);
      }      
    }  
  
    showPage() {
      document.getElementById("preloader").style.display = "none";
    }
  
  }
  
  export default Loader;