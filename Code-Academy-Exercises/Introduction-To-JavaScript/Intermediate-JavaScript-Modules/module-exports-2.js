const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

/* I'm not sure why it is having us define an empty Airplane object when we
aren't using it or exporting it. */