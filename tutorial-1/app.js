new Vue({
  el: "#app",
  data: {
    counter: 0,
  },
  methods: {
    showAlert: function () {
      alert(`Ekranda ${this.counter} kutu var.`);
    },
    increasCounter: function () {
      this.counter++;
    },
    decreaseCounter: function () {
        if(this.counter == 0) return;
      this.counter--;
    },
  },
});
