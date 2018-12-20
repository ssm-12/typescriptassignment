//Facebook Classes - Starts Here
var clsFamilyMember = /** @class */ (function () {
    function clsFamilyMember(memberId, firstName, lastName, relationship, profileLink) {
        var _this = this;
        this.getFamilyMemberDetails = function () {
            var familyMemberDetails = {
                memberId: _this.memberId,
                firstName: _this.firstName,
                lastName: _this.lastName,
                relationship: _this.relationship,
                profileLink: _this.profileLink
            };
            var memberDetails = "\nMember ID : " + _this.memberId;
            memberDetails += "\nName : " + _this.firstName + " " + _this.lastName;
            memberDetails += "\nRelationship : " + _this.relationship;
            memberDetails += "\nProfile Link : " + _this.profileLink + "\n\n";
            console.log(memberDetails);
            return familyMemberDetails;
        };
        this.changeRelationship = function (newRelation) {
            _this.relationship = newRelation;
        };
        this.memberId = memberId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.relationship = relationship;
        this.profileLink = profileLink;
    }
    return clsFamilyMember;
}());
var clsLifeEvent = /** @class */ (function () {
    function clsLifeEvent(day, month, year, eventTitle, eventDescription, relatedPhotos, eventLocation) {
        var _this = this;
        this.getEventDetails = function () {
            var eventDetails = {
                yearOfEvent: _this.dateOfTheEvent[2],
                dateOfEvent: _this.dateOfTheEvent,
                eventTitle: _this.eventTitle,
                eventDescription: _this.eventDescription,
                eventLocation: _this.eventLocation
            };
            return eventDetails;
        };
        this.updateEventTitle = function (newTitle) {
            _this.eventTitle = newTitle;
        };
        this.updateEventDescription = function (newDescription) {
            _this.eventDescription = newDescription;
        };
        this.updateEventLocation = function (newLocation) {
            _this.eventLocation = newLocation;
        };
        this.addRelatedPhoto = function (photoURL) {
            _this.relatedPhotos.push(photoURL);
        };
        this.deletePhoto = function (index) {
            if ((_this.relatedPhotos.length - 1) < index) {
                return false;
            }
            else {
                delete _this.relatedPhotos[index];
                return true;
            }
        };
        this.updateEventDate = function (day, month, year) {
            _this.dateOfTheEvent = [day, month, year];
        };
        this.dateOfTheEvent = [day, month, year];
        this.eventTitle = eventTitle;
        this.eventDescription = eventDescription;
        this.relatedPhotos = relatedPhotos;
        this.eventLocation = eventLocation;
    }
    return clsLifeEvent;
}());
var clsProfileAboutSection = /** @class */ (function () {
    //Only initializing mandatory variables when creating the instance of the class
    function clsProfileAboutSection(profileID, firstName, lastName, dateOfBirth, gender, email, contactNumbers) {
        var _this = this;
        ////Public Methods to manipulate profile data
        this.updateName = function (firstName, lastName) {
            _this.firstName = firstName;
            _this.lastName = lastName;
        };
        this.updateDOB = function (newDOB) {
            _this.dateOfBirth = newDOB;
        };
        this.updateGender = function (gender) {
            _this.gender = gender;
        };
        this.updateEmail = function (newEmail) {
            _this.email = newEmail;
        };
        this.addContactNumber = function (newContactNumber) {
            _this.contactNumbers.push(newContactNumber);
        };
        this.deleteContactNumber = function (index) {
            if ((_this.contactNumbers.length - 1) < index) {
                return false;
            }
            else {
                delete _this.contactNumbers[index];
                return true;
            }
        };
        this.addKnownLanguage = function (language) {
            if (_this.knownLanguages == undefined) {
                _this.knownLanguages = [language];
            }
            else {
                _this.knownLanguages.push(language);
            }
        };
        this.deleteKnownLanguage = function (index) {
            if ((_this.knownLanguages.length - 1) < index) {
                return false;
            }
            else {
                delete _this.knownLanguages[index];
                return true;
            }
        };
        this.displayKnownLanguages = function () {
            var languageDetails = "\n" + _this.knownLanguages.toString();
            return languageDetails;
        };
        this.addNewInterest = function (interest) {
            if (_this.interestedIn == undefined) {
                _this.interestedIn = [interest];
            }
            else {
                _this.interestedIn.push(interest);
            }
        };
        this.deleteInterest = function (index) {
            if ((_this.interestedIn.length - 1) < index) {
                return false;
            }
            else {
                delete _this.interestedIn[index];
                return true;
            }
        };
        this.displayInterests = function () {
            console.log(_this.interestedIn.toString());
        };
        this.updateReligiousViews = function (view) {
            _this.religiousViews = view;
        };
        this.addFamilyMember = function (newFamilyMember) {
            if (_this.familyMembers == undefined) {
                _this.familyMembers = [newFamilyMember];
            }
            else {
                _this.familyMembers.push(newFamilyMember);
            }
        };
        this.getAllFamilyMemberDetails = function () {
            for (var _i = 0, _a = _this.familyMembers; _i < _a.length; _i++) {
                var familyMember = _a[_i];
                familyMember.getFamilyMemberDetails();
            }
        };
        this.displayBasicDetails = function () {
            var profileBasicDetails = "\nProfile ID : " + _this.profileID;
            profileBasicDetails += "\nName : " + _this.firstName + " " + _this.lastName;
            profileBasicDetails += "\nDOB : " + _this.dateOfBirth;
            profileBasicDetails += "\nGender : " + _this.gender;
            profileBasicDetails += "\nEmail ID : " + _this.email;
            profileBasicDetails += "\nContact Number(s) : \n" + _this.contactNumbers.toString();
            console.log(profileBasicDetails);
        };
        this.profileID = profileID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.email = email;
        this.contactNumbers = contactNumbers;
    }
    return clsProfileAboutSection;
}());
//Facebook Classes - Ends Here
//Creating two objects of family members
var objFamilyMember = new clsFamilyMember(1, "ABC", "Roy", "Mother", "https://www.facebook.com/abc-roy");
var objFamilyMember2 = new clsFamilyMember(2, "XYZ", "Roy", "Father", "https://www.facebook.com/xyz-roy");
//Creating profile of the person
var dob = "10/10/1991";
var dobDate = new Date(dob);
var objProfileAbout = new clsProfileAboutSection("I-1001", "Souvik", "Roy", dobDate, "Male", "test@gmail.com", [8158044014]);
console.log("\n\n\n****************** Facebook Profile Details ******************\n\n");
console.log("\n**** Basic Details ****\n");
objProfileAbout.displayBasicDetails();
//Adding two family members
console.log("\n**** Displaying details of all family members ****\n");
objProfileAbout.addFamilyMember(objFamilyMember);
objProfileAbout.addFamilyMember(objFamilyMember2);
objProfileAbout.getAllFamilyMemberDetails(); //Displaying details of family members of the person
//Adding know languages
objProfileAbout.addKnownLanguage("English");
objProfileAbout.addKnownLanguage("Hindi");
//Displaying know languages
console.log("\n**** Known Languages ****");
console.log(objProfileAbout.displayKnownLanguages());
//Adding one more contact number
objProfileAbout.addContactNumber(9590995053);
//Updating existing DOB
objProfileAbout.updateDOB(new Date("01/05/1995"));
//Displaying update profile data
console.log("\n**** Updated Basic Details ****\n");
objProfileAbout.displayBasicDetails();
//Adding new interests
objProfileAbout.addNewInterest("Football");
objProfileAbout.addNewInterest("Table Tennis");
//Displaying interests
console.log("\n**** Displaying all interests ****");
objProfileAbout.displayInterests();
//Deleting one interest
console.log("\nDeleting one interest...");
objProfileAbout.deleteInterest(1);
//Displaying all the interests again
console.log("\n**** Displaying all interests (After deleting one) ****");
objProfileAbout.displayInterests();
