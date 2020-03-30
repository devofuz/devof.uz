window.addEventListener("load", function(event) {
  var app = new Vue({
    el: "#app",
    data: {
      isFormDisabled: true,
      isLevelDisabled: true,
      selectedPosition: "",
      selectedLevel: "",
      technologies: [],
      selectedTechnologies: [],
      numberOfParticipants: 0,
      min: 0,
      max: 0,
      firstQuartile: 0,
      median: 0,
      thirdQuartile: 0
    },
    watch: {
      selectedPosition: function(val) {
        this.selectedLevel = "";
        this.calculateAndUpdateResults();
      },
      selectedLevel: function(val) {
        this.calculateAndUpdateResults();
      },
      selectedTechnologies: function(val) {
        this.calculateAndUpdateResults();
      }
    },
    methods: {
      updateForm: function() {
        this.isFormDisabled = false;
        this.calculateAndUpdateResults();
      },
      calculateAndUpdateResults: function() {
        if (!this.selectedPosition) {
          this.isLevelDisabled = true;
        } else {
          this.isLevelDisabled = false;
        }

        const result = salaryCalculator.calculateResults(
          this.selectedPosition,
          this.selectedLevel,
          this.selectedTechnologies
        );

        this.technologies = salaryCalculator.technologiesForCurrentPosition;
        this.numberOfParticipants = result.numberOfParticipants;
        this.min = "$" + result.min;
        this.max = "$" + result.max;
        this.firstQuartile = "$" + result.firstQuartile;
        this.median = "$" + result.median;
        this.thirdQuartile = "$" + result.thirdQuartile;
      }
    }
  });

  axios
    .get("feb-2020.json")
    .then(function(response) {
      salaryCalculator.data = response.data;
      app.updateForm();
    })
    .catch(function(error) {
      console.log(error);
    });
});

var salaryCalculator = {
  data: [],
  participantsForCurrentPosition: [],
  technologiesForCurrentPosition: [],
  filterParticipantsForCurrentPosition: function(position) {
    this.participantsForCurrentPosition = this.data;
    this.technologiesForCurrentPosition = [];

    if (position) {
      this.participantsForCurrentPosition = [];

      this.data.forEach(value => {
        if (position == value.position) {
          this.participantsForCurrentPosition.push(value);

          value.languages_and_technologies.forEach(value => {
            if (this.technologiesForCurrentPosition.indexOf(value) === -1) {
              this.technologiesForCurrentPosition.push(value);
            }
          });
        }
      });
    }

    this.technologiesForCurrentPosition.sort();
  },
  calculateResults: function(position, level, technologies) {
    this.filterParticipantsForCurrentPosition(position);

    let participantsForCalculation = [];

    this.participantsForCurrentPosition.forEach(participant => {
      let isPickedForCalculation = false;

      const isLevelSelected = level !== "";
      const isLevelMatched = level ? level == participant.level : true;
      const areTechnologiesSelected = technologies.length > 0;
      const areTechnologiesMatched = areTechnologiesSelected
        ? technologies.filter(value =>
            participant.languages_and_technologies.includes(value)
          ).length > 0
        : false;

      if (!isLevelSelected && !areTechnologiesSelected) {
        isPickedForCalculation = true;
      } else if (isLevelSelected && !areTechnologiesSelected) {
        isPickedForCalculation = isLevelMatched;
      } else if (isLevelSelected && areTechnologiesSelected) {
        isPickedForCalculation = isLevelMatched && areTechnologiesMatched;
      } else if (!isLevelSelected && areTechnologiesSelected) {
        isPickedForCalculation = areTechnologiesMatched;
      }

      if (isPickedForCalculation) {
        participantsForCalculation.push(participant);
      }
    });

    let salaries = participantsForCalculation.map(function(value) {
      return value.salary_in_usd;
    });

    if (salaries.length == 0) {
      return {
        numberOfParticipants: participantsForCalculation.length,
        min: 0,
        max: 0,
        median: 0,
        firstQuartile: 0,
        thirdQuartile: 0
      };
    } else {
      return {
        numberOfParticipants: participantsForCalculation.length,
        min: math.min(salaries),
        max: math.max(salaries),
        median: math.round(math.median(salaries)),
        firstQuartile: math.round(math.quantileSeq(salaries, 1 / 3)),
        thirdQuartile: math.round(math.quantileSeq(salaries, 2 / 3))
      };
    }
  }
};
