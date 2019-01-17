var cars = [
  { make: 'Honda', image: 'problem5_images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000},
  { make: 'Honda', image: 'problem5_images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'problem5_images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'problem5_images/toyota-corrolla-2016.jpg', model: 'Corrolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'problem5_images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'problem5_images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'problem5_images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];



var App = {
  compileHandlebars: function() {
    this.carsList = Handlebars.compile($('#carsList').html());
    this.carTemplate = Handlebars.compile($('#carTemplate').html());
  },

  registerPartial: function() {
    Handlebars.registerPartial('carTemplate', $('#carTemplate').html());
  },

  renderPage: function() {
    $('main').html(this.carsList({ individualCar: this.currentList }));
  },

  chooseSelection: function(e) {
    var selectCategory = $(e.currentTarget).attr('id');
    var selection = $(e.target).val();

    var filteredCarList = cars.filter(function(car) {
      if (selection === 'all') {
        return true;
      } else {
        return car[selectCategory] === selection;
      }
    });

    this.currentList = filteredCarList;

    if (selectCategory === 'make') {
      this.renderUpdatedSelections(selection);
    }
  },

  filterUnique: function(arr) {
    return arr.filter(function(item, idx) {
      return arr.indexOf(item) === idx;
    });
  },

  createModelList: function(selection) {
    var arr = [];

    this.currentList.forEach(function(car) {
      if (car.make === selection) {
        arr.push(car.model);
      }
    });

    return arr;
  },

  renderUpdatedSelections: function(selection) {
    var modelList = this.createModelList(selection);
    var uniqueModelList = this.filterUnique(modelList);

    $('#model option').each(function() {
      $(this).show();
    });

    if (!uniqueModelList) {
      return;
    }

    $('#model option').each(function() {
      if (!uniqueModelList.includes($(this).attr('value'))) {
        $(this).hide();
      }
    });

    $('#model option:first').show();
  },

  resetOptions: function() {
    var $all = $('option[value="all"]');
    $all.each(function() {
      $(this).attr('selected', true);
    });
  },

  bindEvents: function() {
    $('header').on('click', 'select', this.chooseSelection.bind(this));
    $('button').on('click', this.renderPage.bind(this));
  },

  init: function() {
    this.currentList = cars;

    this.compileHandlebars();
    this.registerPartial();
    this.resetOptions();
    this.renderPage(this.currentList);
    this.bindEvents();
  },
}

$(function() {
  App.init();
});
