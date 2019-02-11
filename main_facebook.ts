//Facebook Classes - Starts Here

class clsFamilyMember {
    private memberId :number;
    private firstName :string;
    private lastName :string;
    private relationship :string;
    private profileLink :string;

    constructor(memberId :number, firstName :string, lastName :string, relationship :string, profileLink :string) {
        this.memberId = memberId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.relationship = relationship;
        this.profileLink = profileLink;
    }

    public getFamilyMemberDetails = ():object => {
        let familyMemberDetails = {
            memberId : this.memberId,
            firstName : this.firstName,
            lastName : this.lastName,
            relationship : this.relationship,
            profileLink : this.profileLink
        };

        let memberDetails :string = "\nMember ID : " + this.memberId;
        memberDetails += "\nName : " + this.firstName + " " + this.lastName;
        memberDetails += "\nRelationship : " + this.relationship;
        memberDetails += "\nProfile Link : " + this.profileLink + "\n\n";

        console.log(memberDetails);        
        return familyMemberDetails;
    }

    public changeRelationship = (newRelation :string) => {
        this.relationship = newRelation;
    }
}

class clsLifeEvent {
    private dateOfTheEvent :[string, string, string]; //Day, Month, Year (Only Year is mandatory and that's the reason of choosing tuple data type)
    private eventTitle :string;
    private eventDescription :string;
    private relatedPhotos :string[]; //This will contain the array of URLs of the photos
    private eventLocation :string;

    constructor(day :string, month :string, year :string, eventTitle :string, eventDescription :string, relatedPhotos :string[], eventLocation :string) {
        this.dateOfTheEvent = [day, month, year];
        this.eventTitle = eventTitle;
        this.eventDescription = eventDescription;
        this.relatedPhotos = relatedPhotos;
        this.eventLocation = eventLocation;
    }

    public displayEventDetails = ():object => {
        let eventDetails = {
            yearOfEvent : this.dateOfTheEvent[2],
            dateOfEvent : this.dateOfTheEvent,
            eventTitle : this.eventTitle,
            eventDescription : this.eventDescription,
            eventLocation : this.eventLocation
        };

        let strEvent = "\nTitle of Event : " + eventDetails.eventTitle;
        strEvent += "\nDate of Event : " + eventDetails.dateOfEvent[0] + "/" + eventDetails.dateOfEvent[1] + "/" + eventDetails.dateOfEvent[2];
        strEvent += "\nDescription of Event : " + eventDetails.eventDescription;
        strEvent += "\nEvent location : " + eventDetails.eventLocation;
        console.log(strEvent);
        return eventDetails;    
    }

    public updateEventTitle = (newTitle :string):void => {
        this.eventTitle = newTitle;
    }

    public updateEventDescription = (newDescription :string):void => {
        this.eventDescription = newDescription;
    }

    public updateEventLocation = (newLocation :string):void => {
        this.eventLocation = newLocation;
    }

    public addRelatedPhoto = (photoURL :string) => {
        this.relatedPhotos.push(photoURL);
    }

    public deletePhoto = (index :number):boolean => {
        if((this.relatedPhotos.length-1) < index) {
            return false;
        } else {
            delete this.relatedPhotos[index];
            return true;
        }
    }

    public updateEventDate = (day :string, month :string, year :string) => {
        this.dateOfTheEvent = [day, month, year];
    }
}

class clsProfileAboutSection {
    
    //(Contact & Basic Info) related variables
    private profileID :string; //This is the unique identification code
    private firstName :string;
    private lastName :string;
    private dateOfBirth :Date;
    private gender :string;
    private knownLanguages :string[];
    private email :string;
    private contactNumbers :number[];
    private interestedIn :string[];

    //(Family & Relationships) related variables
    private familyMembers :clsFamilyMember[];
    private relationshipStatus :string;
    private relationshipWith :string;
    private inRelationSince :Date;

    //(Details about you) related variables
    private aboutYou :string;
    private otherNames :string[];
    private favouriteQuotes :string[];
    private bloodGroup :string;
    private haveDonatedBlood :boolean;

    //(Life Events) related variables
    private lifeEvents :clsLifeEvent[];

    //(Places Visited) Variables
    private visitedPlaces :[string, Date][]; //["Name of the Place", "Visited On"]

    //(Work & Education) related variables
    private workDetails :{companyName :string, position :string, city :string, description :string, workedFrom :Date, workedTill :Date, isCurrentlyWorking :boolean}[];
    private professionalSkills :string[];
    private schoolDetails :{schoolName :string, yearFrom :string, yearTo :string, description :string}[];
    private collegeDetails :{collegeName :string, yearFrom :string, yearTo :string, description :string}[];


    //Only initializing mandatory variables when creating the instance of the class
    constructor(profileID :string, firstName :string, lastName :string, dateOfBirth :Date, gender :string,
    email :string, contactNumbers :number[]) {
        this.profileID = profileID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.email = email;
        this.contactNumbers = contactNumbers;
    }

    ////Public Methods to manipulate profile data

    public updateName = (firstName :string, lastName :string):void => {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public updateDOB = (newDOB :Date):void => {
        this.dateOfBirth = newDOB;
    }
    
    public updateGender = (gender :string):void => {
        this.gender = gender;
    }

    public updateEmail = (newEmail :string):void => {
        this.email = newEmail;
    }

    public addContactNumber = (newContactNumber :number):void => {
        this.contactNumbers.push(newContactNumber);
    }

    public deleteContactNumber = (index :number):boolean => {
        if((this.contactNumbers.length -1) < index) {
            return false;
        } else {
            delete this.contactNumbers[index];
            return true;
        }
    }

    public addKnownLanguage = (language :string):void => {
        if(this.knownLanguages == undefined) {
            this.knownLanguages = [language];
        } else {
            this.knownLanguages.push(language);
        }
    }

    public deleteKnownLanguage = (index :number):boolean => {
        if((this.knownLanguages.length - 1) < index) {
            return false;
        } else {
            delete this.knownLanguages[index];
            return true;
        }
    }

    public displayKnownLanguages = () => {
        let languageDetails :string = "\n" + this.knownLanguages.toString();
        return languageDetails;
    }

    public addNewInterest = (interest :string):void => {
        if(this.interestedIn == undefined) {
            this.interestedIn = [interest];
        } else {
            this.interestedIn.push(interest);
        }
    }

    public deleteInterest = (index :number):boolean => {
        if((this.interestedIn.length - 1) < index) {
            return false;
        } else {
            delete this.interestedIn[index];
            return true;
        }
    }

    public displayInterests = () => {
        console.log(this.interestedIn.toString());
    }

    public addFamilyMember = (newFamilyMember :clsFamilyMember):void => {
        if(this.familyMembers == undefined) {
            this.familyMembers = [newFamilyMember];
        } else {
            this.familyMembers.push(newFamilyMember);
        }
    }

    public getAllFamilyMemberDetails = () => {
        for(let familyMember of this.familyMembers) {
            familyMember.getFamilyMemberDetails();
        }
    }

    public displayBasicDetails = () => {
        let profileBasicDetails :string = "\nProfile ID : " + this.profileID;
        profileBasicDetails += "\nName : " + this.firstName + " " + this.lastName;
        profileBasicDetails += "\nDOB : " + this.dateOfBirth;
        profileBasicDetails += "\nGender : " + this.gender;
        profileBasicDetails += "\nEmail ID : " + this.email;
        profileBasicDetails += "\nContact Number(s) : \n" + this.contactNumbers.toString();
        console.log(profileBasicDetails);
    }

    public addPersonalDetails = (aboutYou: string, otherNames: string[], favouriteQuotes: string[], bloodGroup: string, haveDonatedBlood: boolean) => {
        this.aboutYou = aboutYou;
        this.otherNames = otherNames;
        this.favouriteQuotes = favouriteQuotes;
        this.bloodGroup = bloodGroup;
        this.haveDonatedBlood = haveDonatedBlood;
    }

    public displayPersonalDetails = ():void => {
        let strPersonalDetails:string = "\nAbout You : " + this.aboutYou;
        strPersonalDetails += "\nOther Names : " + this.otherNames.toString();
        strPersonalDetails += "\nFavourite Quotes : " + this.favouriteQuotes.toString();
        strPersonalDetails += "\nBlood Group : " + this.bloodGroup;
        strPersonalDetails += "\nHave donated blood : ";
        strPersonalDetails += this.haveDonatedBlood?"Yes":"No";
        console.log(strPersonalDetails);
    }

    public updateRelationshipDetails = (status: string, relationShipWith: string, since: Date) => {
        this.relationshipStatus = status;
        this.relationshipWith = relationShipWith;
        this.inRelationSince = since;
    }

    public displayRelationshipDetails = ():void => {
        let strRelationshipDetails: string = "\nRelationship Status : " + this.relationshipStatus;
        strRelationshipDetails += "\nIn a relationship with : " + this.relationshipWith;
        strRelationshipDetails += "\nIn a relationship since : " + this.inRelationSince;
        console.log(strRelationshipDetails);
    }

    public addLifeEvent = (newLifeEvent :clsLifeEvent):void => {
        if(this.lifeEvents == undefined) {
            this.lifeEvents = [newLifeEvent];
        } else {
            this.lifeEvents.push(newLifeEvent);
        }
    }

    public getLifeEventDetails = (index: number) => {
        return this.lifeEvents[index];
    }

    public addWorkDetails = (companyName :string, position :string, city :string, description :string, workedFrom :Date, workedTill :Date, isCurrentlyWorking :boolean) => {
        if(this.workDetails == undefined) {
            this.workDetails = [{companyName, position, city, description, workedFrom, workedTill, isCurrentlyWorking}];
        } else {
            this.workDetails.push({companyName, position, city, description, workedFrom, workedTill, isCurrentlyWorking});
        }
    }

    public showWorkDetails = (index: number) => {
        let strWorkDetails: string = "";
        if(this.workDetails == undefined || this.workDetails.length == 0) {
            strWorkDetails = "No work details found !!!";
        } else {
            strWorkDetails = "\nCompany Name: " + this.workDetails[index].companyName;
            strWorkDetails += "\nDesignation: " + this.workDetails[index].position;
            strWorkDetails += "\nCity: " + this.workDetails[index].city;
            strWorkDetails += "\nDescription: " + this.workDetails[index].description;
            strWorkDetails += "\nWorked From: " + this.workDetails[index].workedFrom;
            strWorkDetails += "\nWorked Till: " + this.workDetails[index].workedTill;
            strWorkDetails += "\nIs current company: ";
            strWorkDetails += this.workDetails[index].isCurrentlyWorking ? "Yes" : "No";
        }
        console.log(strWorkDetails);
    }

    public showAllWorkDetails = () => {
        let strWorkDetails: string = "";
        if(this.workDetails == undefined || this.workDetails.length == 0) {
            strWorkDetails = "No work details found !!!";
        } else {
            for(let workDetail of this.workDetails) {
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
    }

    public deleteWorkDetails = (index: number) => {
        let strMsg: string = "";
        if(this.workDetails == undefined || this.workDetails.length == 0) {
            strMsg = "\nNo work details found to be deleted !!!";
            console.log(strMsg);
        } else {
            strMsg = "\nWork details of " + this.workDetails[index].companyName + " company has been removed successfully";
            this.workDetails.splice(index, 1);
            console.log(strMsg);
        }
    }

    public addProfessionalSkills = (skill: string[]) => {
        if(this.professionalSkills == undefined || this.professionalSkills.length == 0) {
            this.professionalSkills = skill;
        } else {
            this.professionalSkills.push(skill.toString());
        }        
    }

    public showProfessionalSkills = () => {
        let strSkills: string = "";
        if(this.professionalSkills == undefined) {
            strSkills = "\nNo skill has been added yet !!!";
        } else {
            strSkills = "\nProfessional Skills : " + this.professionalSkills.toString();
        }
        console.log(strSkills);
    }

    public addSchoolDetails = (schoolName: string, yearFrom: string, yearTo: string, description: string):boolean => {
        try{
            if(this.schoolDetails == undefined || this.schoolDetails.length == 0) {
                this.schoolDetails = [{schoolName, yearFrom, yearTo, description}];
            } else {
                this.schoolDetails.push({schoolName, yearFrom, yearTo, description});
            } 
            return true;
        } catch {
            return false;
        }
    }

    public deleteSchoolDetails = (index: number) => {
        let strMsg: string = "";
        if(this.schoolDetails == undefined || this.schoolDetails.length == 0) {
            strMsg = "\nNo school details found to be deleted !!!";
            console.log(strMsg);
        } else {
            strMsg = "\nSchool details of " + this.schoolDetails[index].schoolName + " has been removed successfully";
            this.schoolDetails.splice(index, 1);
            console.log(strMsg);
        }
    }

    public showSchoolDetails = () => {
        let strSchoolDetails: string = "";
        if(this.schoolDetails == undefined || this.schoolDetails.length == 0) {
            strSchoolDetails = "No school details found !!!";
        } else {
            for(let schoolDetail of this.schoolDetails) {
                strSchoolDetails += "\nSchool Name: " + schoolDetail.schoolName;
                strSchoolDetails += "\nFrom (Year): " + schoolDetail.yearFrom;
                strSchoolDetails += "\nTo (Year): " + schoolDetail.yearTo;
                strSchoolDetails += "\nDescription: " + schoolDetail.description + "\n\n\n";
            }
        }
        console.log(strSchoolDetails);
    }

    public addCollegeDetails = (collegeName: string, yearFrom: string, yearTo: string, description: string) => {
        try{
            if(this.collegeDetails == undefined || this.collegeDetails.length == 0) {
                this.collegeDetails = [{collegeName, yearFrom, yearTo, description}];
            } else {
                this.collegeDetails.push({collegeName, yearFrom, yearTo, description});
            } 
            return true;
        } catch {
            return false;
        }
    }

    public deleteCollegeDetails = (index: number) => {
        let strMsg: string = "";
        if(this.collegeDetails == undefined || this.collegeDetails.length == 0) {
            strMsg = "\nNo school details found to be deleted !!!";
            console.log(strMsg);
        } else {
            strMsg = "\nCollege details of " + this.collegeDetails[index].collegeName + " has been removed successfully";
            this.collegeDetails.splice(index, 1);
            console.log(strMsg);
        }
    }

    public showCollegeDetails = () => {
        let strCollegeDetails: string = "";
        if(this.collegeDetails == undefined || this.collegeDetails.length == 0) {
            strCollegeDetails = "No college details found !!!";
        } else {
            for(let collegeDetail of this.collegeDetails) {
                strCollegeDetails += "\nCollege Name: " + collegeDetail.collegeName;
                strCollegeDetails += "\nFrom (Year): " + collegeDetail.yearFrom;
                strCollegeDetails += "\nTo (Year): " + collegeDetail.yearTo;
                strCollegeDetails += "\nDescription: " + collegeDetail.description + "\n\n\n";
            }
        }
        console.log(strCollegeDetails);
    }
}

//Facebook Classes - Ends Here

//Creating two objects of family members
let objFamilyMember = new clsFamilyMember(1, "ABC", "Roy", "Mother", "https://www.facebook.com/abc-roy");
let objFamilyMember2 = new clsFamilyMember(2, "XYZ", "Roy", "Father", "https://www.facebook.com/xyz-roy");

//Creating profile of the person
let dob :string = "10/10/1991";
let dobDate :Date = new Date(dob);
let objProfileAbout = new clsProfileAboutSection("I-1001", "Souvik", "Roy", dobDate , "Male", "test@gmail.com", [8158044014]);
console.log("\n\n\n****************** Facebook Profile Details ******************\n\n")

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
objProfileAbout.updateRelationshipDetails("Engaged","Somebody", new Date("10/10/2015"));

//Displaying relationship Details
console.log("\n**** Displaying Relationship Details ****");
objProfileAbout.displayRelationshipDetails();

//Creating one object for life event
let objLifeEvenet = new clsLifeEvent("03","12","2018","Joined New Company", "Started new job in ABC Company",[],"Delhi");
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
objProfileAbout.addProfessionalSkills([".NET","Angular 4","Communication"]);

//Displaying work details
console.log("\n**** Displaying skills ****");
objProfileAbout.showProfessionalSkills();

//Adding schooling details
console.log("\n**** Adding first school details ****");
objProfileAbout.addSchoolDetails("North Point School","1996","1999","This is my first school");

console.log("\n**** Adding another schooling details ****");
objProfileAbout.addSchoolDetails("ABC Boys High School","2000","2008","This is my second school");

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
objProfileAbout.addCollegeDetails("Garden City College","2010","2013","This is my first college");

//Displaying details of all the colleges
console.log("\n**** Showing details of all the colleges ****");
objProfileAbout.showCollegeDetails();

//Removing details of college
console.log("\n**** Removing details of a college ****");
objProfileAbout.deleteCollegeDetails(0);

//Displaying details of all the colleges
console.log("\n**** Showing details of all the colleges after deleting one ****");
objProfileAbout.showCollegeDetails();