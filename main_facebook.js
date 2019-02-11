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
        this.displayEventDetails = function () {
            var eventDetails = {
                yearOfEvent: _this.dateOfTheEvent[2],
                dateOfEvent: _this.dateOfTheEvent,
                eventTitle: _this.eventTitle,
                eventDescription: _this.eventDescription,
                eventLocation: _this.eventLocation
            };
            var strEvent = "\nTitle of Event : " + eventDetails.eventTitle;
            strEvent += "\nDate of Event : " + eventDetails.dateOfEvent[0] + "/" + eventDetails.dateOfEvent[1] + "/" + eventDetails.dateOfEvent[2];
            strEvent += "\nDescription of Event : " + eventDetails.eventDescription;
            strEvent += "\nEvent location : " + eventDetails.eventLocation;
            console.log(strEvent);
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
        this.addPersonalDetails = function (aboutYou, otherNames, favouriteQuotes, bloodGroup, haveDonatedBlood) {
            _this.aboutYou = aboutYou;
            _this.otherNames = otherNames;
            _this.favouriteQuotes = favouriteQuotes;
            _this.bloodGroup = bloodGroup;
            _this.haveDonatedBlood = haveDonatedBlood;
        };
        this.displayPersonalDetails = function () {
            var strPersonalDetails = "\nAbout You : " + _this.aboutYou;
            strPersonalDetails += "\nOther Names : " + _this.otherNames.toString();
            strPersonalDetails += "\nFavourite Quotes : " + _this.favouriteQuotes.toString();
            strPersonalDetails += "\nBlood Group : " + _this.bloodGroup;
            strPersonalDetails += "\nHave donated blood : ";
            strPersonalDetails += _this.haveDonatedBlood ? "Yes" : "No";
            console.log(strPersonalDetails);
        };
        this.updateRelationshipDetails = function (status, relationShipWith, since) {
            _this.relationshipStatus = status;
            _this.relationshipWith = relationShipWith;
            _this.inRelationSince = since;
        };
        this.displayRelationshipDetails = function () {
            var strRelationshipDetails = "\nRelationship Status : " + _this.relationshipStatus;
            strRelationshipDetails += "\nIn a relationship with : " + _this.relationshipWith;
            strRelationshipDetails += "\nIn a relationship since : " + _this.inRelationSince;
            console.log(strRelationshipDetails);
        };
        this.addLifeEvent = function (newLifeEvent) {
            if (_this.lifeEvents == undefined) {
                _this.lifeEvents = [newLifeEvent];
            }
            else {
                _this.lifeEvents.push(newLifeEvent);
            }
        };
        this.getLifeEventDetails = function (index) {
            return _this.lifeEvents[index];
        };
        this.addWorkDetails = function (companyName, position, city, description, workedFrom, workedTill, isCurrentlyWorking) {
            if (_this.workDetails == undefined) {
                _this.workDetails = [{ companyName: companyName, position: position, city: city, description: description, workedFrom: workedFrom, workedTill: workedTill, isCurrentlyWorking: isCurrentlyWorking }];
            }
            else {
                _this.workDetails.push({ companyName: companyName, position: position, city: city, description: description, workedFrom: workedFrom, workedTill: workedTill, isCurrentlyWorking: isCurrentlyWorking });
            }
        };
        this.showWorkDetails = function (index) {
            var strWorkDetails = "";
            if (_this.workDetails == undefined || _this.workDetails.length == 0) {
                strWorkDetails = "No work details found !!!";
            }
            else {
                strWorkDetails = "\nCompany Name: " + _this.workDetails[index].companyName;
                strWorkDetails += "\nDesignation: " + _this.workDetails[index].position;
                strWorkDetails += "\nCity: " + _this.workDetails[index].city;
                strWorkDetails += "\nDescription: " + _this.workDetails[index].description;
                strWorkDetails += "\nWorked From: " + _this.workDetails[index].workedFrom;
                strWorkDetails += "\nWorked Till: " + _this.workDetails[index].workedTill;
                strWorkDetails += "\nIs current company: ";
                strWorkDetails += _this.workDetails[index].isCurrentlyWorking ? "Yes" : "No";
            }
            console.log(strWorkDetails);
        };
        this.showAllWorkDetails = function () {
            var strWorkDetails = "";
            if (_this.workDetails == undefined || _this.workDetails.length == 0) {
                strWorkDetails = "No work details found !!!";
            }
            else {
                for (var _i = 0, _a = _this.workDetails; _i < _a.length; _i++) {
                    var workDetail = _a[_i];
                    strWorkDetails += "\nCompany Name: " + workDetail.companyName;
                    strWorkDetails += "\nDesignation: " + workDetail.position;
                    strWorkDetails += "\nCity: " + workDetail.city;
                    strWorkDetails += "\nDescription: " + workDetail.description;
                    strWorkDetails += "\nWorked From: " + workDetail.workedFrom;
                    strWorkDetails += "\nWorked Till: " + workDetail.workedTill;
                    strWorkDetails += "\nIs current company: ";
                    strWorkDetails += workDetail.isCurrentlyWorking ? "Yes" : "No\n\n\n";
                }
            }
            console.log(strWorkDetails);
        };
        this.deleteWorkDetails = function (index) {
            var strMsg = "";
            if (_this.workDetails == undefined || _this.workDetails.length == 0) {
                strMsg = "\nNo work details found to be deleted !!!";
                console.log(strMsg);
            }
            else {
                strMsg = "\nWork details of " + _this.workDetails[index].companyName + " company has been removed successfully";
                _this.workDetails.splice(index, 1);
                console.log(strMsg);
            }
        };
        this.addProfessionalSkills = function (skill) {
            if (_this.professionalSkills == undefined || _this.professionalSkills.length == 0) {
                _this.professionalSkills = skill;
            }
            else {
                _this.professionalSkills.push(skill.toString());
            }
        };
        this.showProfessionalSkills = function () {
            var strSkills = "";
            if (_this.professionalSkills == undefined) {
                strSkills = "\nNo skill has been added yet !!!";
            }
            else {
                strSkills = "\nProfessional Skills : " + _this.professionalSkills.toString();
            }
            console.log(strSkills);
        };
        this.addSchoolDetails = function (schoolName, yearFrom, yearTo, description) {
            try {
                if (_this.schoolDetails == undefined || _this.schoolDetails.length == 0) {
                    _this.schoolDetails = [{ schoolName: schoolName, yearFrom: yearFrom, yearTo: yearTo, description: description }];
                }
                else {
                    _this.schoolDetails.push({ schoolName: schoolName, yearFrom: yearFrom, yearTo: yearTo, description: description });
                }
                return true;
            }
            catch (_a) {
                return false;
            }
        };
        this.deleteSchoolDetails = function (index) {
            var strMsg = "";
            if (_this.schoolDetails == undefined || _this.schoolDetails.length == 0) {
                strMsg = "\nNo school details found to be deleted !!!";
                console.log(strMsg);
            }
            else {
                strMsg = "\nSchool details of " + _this.schoolDetails[index].schoolName + " has been removed successfully";
                _this.schoolDetails.splice(index, 1);
                console.log(strMsg);
            }
        };
        this.showSchoolDetails = function () {
            var strSchoolDetails = "";
            if (_this.schoolDetails == undefined || _this.schoolDetails.length == 0) {
                strSchoolDetails = "No school details found !!!";
            }
            else {
                for (var _i = 0, _a = _this.schoolDetails; _i < _a.length; _i++) {
                    var schoolDetail = _a[_i];
                    strSchoolDetails += "\nSchool Name: " + schoolDetail.schoolName;
                    strSchoolDetails += "\nFrom (Year): " + schoolDetail.yearFrom;
                    strSchoolDetails += "\nTo (Year): " + schoolDetail.yearTo;
                    strSchoolDetails += "\nDescription: " + schoolDetail.description + "\n\n\n";
                }
            }
            console.log(strSchoolDetails);
        };
        this.addCollegeDetails = function (collegeName, yearFrom, yearTo, description) {
            try {
                if (_this.collegeDetails == undefined || _this.collegeDetails.length == 0) {
                    _this.collegeDetails = [{ collegeName: collegeName, yearFrom: yearFrom, yearTo: yearTo, description: description }];
                }
                else {
                    _this.collegeDetails.push({ collegeName: collegeName, yearFrom: yearFrom, yearTo: yearTo, description: description });
                }
                return true;
            }
            catch (_a) {
                return false;
            }
        };
        this.deleteCollegeDetails = function (index) {
            var strMsg = "";
            if (_this.collegeDetails == undefined || _this.collegeDetails.length == 0) {
                strMsg = "\nNo school details found to be deleted !!!";
                console.log(strMsg);
            }
            else {
                strMsg = "\nCollege details of " + _this.collegeDetails[index].collegeName + " has been removed successfully";
                _this.collegeDetails.splice(index, 1);
                console.log(strMsg);
            }
        };
        this.showCollegeDetails = function () {
            var strCollegeDetails = "";
            if (_this.collegeDetails == undefined || _this.collegeDetails.length == 0) {
                strCollegeDetails = "No college details found !!!";
            }
            else {
                for (var _i = 0, _a = _this.collegeDetails; _i < _a.length; _i++) {
                    var collegeDetail = _a[_i];
                    strCollegeDetails += "\nCollege Name: " + collegeDetail.collegeName;
                    strCollegeDetails += "\nFrom (Year): " + collegeDetail.yearFrom;
                    strCollegeDetails += "\nTo (Year): " + collegeDetail.yearTo;
                    strCollegeDetails += "\nDescription: " + collegeDetail.description + "\n\n\n";
                }
            }
            console.log(strCollegeDetails);
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
//Adding personal details
console.log("\nAdding personal details...");
objProfileAbout.addPersonalDetails("A very simple person", [], ["Work until no longer you have to introduce yourself"], "AB+", true);
//Displaying personal details
console.log("\n**** Displaying Personal Details ****");
objProfileAbout.displayPersonalDetails();
//Adding relationship details
console.log("\nAdding relationship details...");
objProfileAbout.updateRelationshipDetails("Engaged", "Somebody", new Date("10/10/2015"));
//Displaying relationship Details
console.log("\n**** Displaying Relationship Details ****");
objProfileAbout.displayRelationshipDetails();
//Creating one object for life event
var objLifeEvenet = new clsLifeEvent("03", "12", "2018", "Joined New Company", "Started new job in ABC Company", [], "Delhi");
objProfileAbout.addLifeEvent(objLifeEvenet);
//Getting details of the event
console.log("\n**** Displaying Event Details ****");
objProfileAbout.getLifeEventDetails(0).displayEventDetails();
//Adding first work details
objProfileAbout.addWorkDetails("iGate Global Solutions Ltd.", "Software Engineer", "Mumbai", "First job", new Date("12/12/2013"), new Date("12/12/2015"), false);
//Adding second work details
objProfileAbout.addWorkDetails("Tata Consultancy Services", "Software Engineer", "Bhubaneswar", "New Job", new Date("13/12/2015"), new Date("12/03/2019"), true);
//Displaying work details
console.log("\n**** Displaying Work Details of all the companies ****");
objProfileAbout.showAllWorkDetails();
//Displaying work details 
console.log("\n**** Displaying Work Details of a particular company ****");
objProfileAbout.showWorkDetails(1);
//Deleting work details
console.log("\n**** Deleting Work Details of one company ****");
objProfileAbout.deleteWorkDetails(0);
//Displaying work details 
console.log("\n**** Displaying Work Details after deleting one ****");
objProfileAbout.showAllWorkDetails();
//Adding professional skills
objProfileAbout.addProfessionalSkills([".NET", "Angular 4", "Communication"]);
//Displaying work details
console.log("\n**** Displaying skills ****");
objProfileAbout.showProfessionalSkills();
//Adding schooling details
console.log("\n**** Adding first school details ****");
objProfileAbout.addSchoolDetails("North Point School", "1996", "1999", "This is my first school");
console.log("\n**** Adding another schooling details ****");
objProfileAbout.addSchoolDetails("ABC Boys High School", "2000", "2008", "This is my second school");
//Displaying details of all the schools
console.log("\n**** Showing details of all the schools ****");
objProfileAbout.showSchoolDetails();
//Removing details of a school
console.log("\n**** Removing details of a school ****");
objProfileAbout.deleteSchoolDetails(0);
//Displaying details of all the schools
console.log("\n**** Showing details of all the schools after deleting one ****");
objProfileAbout.showSchoolDetails();
//Adding college details
console.log("\n**** Adding college details ****");
objProfileAbout.addCollegeDetails("Garden City College", "2010", "2013", "This is my first college");
//Displaying details of all the colleges
console.log("\n**** Showing details of all the colleges ****");
objProfileAbout.showCollegeDetails();
//Removing details of college
console.log("\n**** Removing details of a college ****");
objProfileAbout.deleteCollegeDetails(0);
//Displaying details of all the colleges
console.log("\n**** Showing details of all the colleges after deleting one ****");
objProfileAbout.showCollegeDetails();
