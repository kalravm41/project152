AFRAME.registerComponent('car',{
    schema:{
        id: {type: 'number', default: 1},
        moveY: {type: 'number', default: 0}
    },

    init: function() {
        // var carEl = document.createElement('a-entity');
        // this.el.setAttribute('id', this.data.id);
        this.el.setAttribute('position', {x: 2, y: 2, z: 8});
        this.el.setAttribute("scale", { x: 5.5, y: 5.5, z: 5.5 });
        this.el.setAttribute('rotation', {x: 0, y: 0, z: 0})
        this.el.setAttribute("gltf-model", './car/scene.gltf');
    },

    update: function(){
        window.addEventListener('click', e =>{
            this.data.moveY = this.data.moveY + 10;
            this.el.setAttribute('rotation', {x: 0, y: this.data.moveY, z: 0})
        })
    }
})