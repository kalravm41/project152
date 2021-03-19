AFRAME.registerComponent("base", {
    schema: {
        moveX: { type: "number", default: 1 },
        radius: {type: 'number', default: 15},
        height: {type: 'number', default: 1},
    },

    init: function() {
        this.el.setAttribute('geometry',{
            primitive: 'cylinder',
            radius: this.data.radius,
            height: this.data.height,
        });

        this.el.setAttribute('material',{color: '#317ABB'});
    },
  });