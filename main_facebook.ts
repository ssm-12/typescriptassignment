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

    public getEventDetails = ():object => {
        let eventDetails = {
            yearOfEvent : this.dateOfTheEvent[2],
            dateOfEvent : this.dateOfTheEvent,
            eventTitle : this.eventTitle,
            eventDescription : this.eventDescription,
            eventLocation : this.eventLocation
        };
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
    private religiousViews :string;
    private politicalViews :string;

    //(Family & Relationships) related variables
    private familyMembers :clsFamilyMember[];
    private relationshipStatus :string;
    private relationshipWith :string;
    private inRelationSince :Date;

    //(Details about you) related variables
    private aboutYou :string;
    private otherNames :string;
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

    public updateReligiousViews = (view :string):void => {
        this.religiousViews = view;
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