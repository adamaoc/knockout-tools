// $("#owl-demo").owlCarousel({

//   autoPlay: 3000,

//   items : 4,
//   itemsDesktop : [1199,3],
//   itemsDesktopSmall : [979,3]

// });

function Client(name, site, product) {
    var self = this;
    self.clientName = name;
    self.clientSite = site;
    self.currentProduct = ko.observable(product);

    self.formattedPrice = ko.computed(function() {
        var price = self.currentProduct().price;
        return price ? "$" + price.toFixed(2) : "None";
    });
}

function AppViewModel() {
    // this.clientName = ko.observable("Client One");
    // this.clientSite = ko.observable("clientone.com");
    var self = this;
    var toggle = 0;

    self.availableProducts = [
        { productName: "Bronze Package", price: 99.99 },
        { productName: "Silver Package", price: 399.99 },
        { productName: "Gold Package", price: 699.99 }
    ];

    self.clients = ko.observableArray([
        new Client("Client One", "clientone.com", self.availableProducts[0]),
        new Client("Client Two", "clienttwo.com", self.availableProducts[0])
    ]);

    self.editClient = function() {
        toggle = 5;
        self.editMode();
    };
    // ???? //

    self.editMode = ko.computed(function() {
        var total = toggle;
        return total;
    });


    self.addClient = function() {
        self.clients.push(new Client("Edit Me!", "newdomain.com", self.availableProducts[0]));
    };

    self.removeClient = function(client) { self.clients.remove(client); };

}



ko.applyBindings(new AppViewModel());

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
// function AppViewModel() {
//     this.firstName = ko.observable("Bert");
//     this.lastName = ko.observable("Bertington");
    
//     this.fullName = ko.computed(function() {
//         return this.firstName() + " " + this.lastName();    
//     }, this);
    
//     this.capitalizeLastName = function() {
//         var currentVal = this.lastName();        // Read the current value
//         this.lastName(currentVal.toUpperCase()); // Write back a modified value
//     };
// }

// Activates knockout.js
// ko.applyBindings(new AppViewModel());

// Class to represent a row in the seat reservations grid
// function SeatReservation(name, initialMeal) {
//     var self = this;
//     self.name = name;
//     self.meal = ko.observable(initialMeal);
// }

// // Overall viewmodel for this screen, along with initial state
// function ReservationsViewModel() {
//     var self = this;

//     // Non-editable catalog data - would come from the server
//     self.availableMeals = [
//         { mealName: "Standard (sandwich)", price: 0 },
//         { mealName: "Premium (lobster)", price: 34.95 },
//         { mealName: "Ultimate (whole zebra)", price: 290 }
//     ];    

//     // Editable data
//     self.seats = ko.observableArray([
//         new SeatReservation("Steve", self.availableMeals[0]),
//         new SeatReservation("Bert", self.availableMeals[0])
//     ]);

//     // Operations
//     self.addSeat = function() {
//         self.seats.push(new SeatReservation("", self.availableMeals[0]));
//     };
//     self.removeSeat = function(seat) { self.seats.remove(seat); };

//     self.totalSurcharge = ko.computed(function() {
//        var total = 0;
//        for (var i = 0; i < self.seats().length; i++)
//            total += self.seats()[i].meal().price;
//        return total;
//     });
// }

// function SeatReservation(name, initialMeal) {
//     var self = this;
//     self.name = name;
//     self.meal = ko.observable(initialMeal);

//     self.formattedPrice = ko.computed(function() {
//         var price = self.meal().price;
//         return price ? "$" + price.toFixed(2) : "None";        
//     });
// }

// ko.applyBindings(new ReservationsViewModel());

// function WebmailViewModel() {
//     // Data
//     var self = this;
//     self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
//     self.chosenFolderId = ko.observable();
//     self.chosenFolderData = ko.observable();
//     self.chosenMailData = ko.observable();

//     // Behaviours    
//     self.goToFolder = function(folder) { location.hash = folder; };
//     self.goToMail = function(mail) { location.hash = mail.folder + '/' + mail.id; };
    
//      // Client-side routes    
//     Sammy(function() {
//         this.get('#:folder', function() {
//             self.chosenFolderId(this.params.folder);
//             self.chosenMailData(null);
//             $.get("/mail", { folder: this.params.folder }, self.chosenFolderData);
//         });

//         this.get('#:folder/:mailId', function() {
//             self.chosenFolderId(this.params.folder);
//             self.chosenFolderData(null);
//             $.get("/mail", { mailId: this.params.mailId }, self.chosenMailData);
//         });
        
//         this.get('', function() { this.app.runRoute('get', '#Inbox'); });
//     }).run();
// }

// ko.applyBindings(new WebmailViewModel());