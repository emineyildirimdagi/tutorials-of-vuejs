new Vue({
  el: "#app",
  data: {
    counter: 0,
    x: 0,
    y: 0,
    bubles : []
  },
  computed:{
    proggress: function(){
        return this.counter % 100;
    }
  },
  methods: {
    updateCoords: function (event) {
      this.counter+= 0.1;
      this.x = event.clientX;
      this.y = event.clientY;
      if(event.ctrlKey)
      {
        this.addBuble(event.clientX, event.clientY); 
      }
    },
    clickApp:function(event)
    {
      this.addBuble(event.clientX, event.clientY); 
    },
    addBuble(x,y){
      this.counter++;
        let buble = {
            id:new Date().getTime(),
            x:x,
            y:y

        };
        this.bubles.push(buble);

        setTimeout(() => {
            let index = this.bubles.findIndex(x=> x.id == buble.id);
            this.bubles.splice(index,1);
        }, 5000);
    }
  },
  async created(){
      while(true)
      {
        await new Promise((resolve) => setTimeout(resolve, 500));
        this.counter += 0.05;
      }
  }
});
