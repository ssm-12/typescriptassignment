//YouTube Classes - Starts Here

//Comment Class
class clsComment {
    //Private Variables Declaration
    private commentID :number; 
    private commentedOn :Date;
    private commentDescription :string;
    private commentedBy :string;

    //Constructor of the class
    constructor(id :number, commentDate :Date, descr :string, creator :string) {
        this.commentID = id;
        this.commentedOn = commentDate;
        this.commentDescription = descr;
        this.commentedBy = creator;
    }

    //Public Methods
    public getComment = ():string => {
        let strComment :string;
        strComment = "Commented On: " + this.commentedOn.toDateString() + "\n";
        strComment += "Commented By: " + this.commentedBy + "\n";
        strComment += "Description: " + this.commentDescription;
        return strComment;
    }
}

//Reported Issue class
class clsReportedIssue {
    private issueID :number;
    private issueCategory :string;
    private issueDescription :string;

    constructor (issueID :number, issueCategory :string, issueDescription :string) {
        this.issueID = issueID;
        this.issueCategory = issueCategory;
        this.issueDescription = issueDescription;
    }

    //Method to get all reported issue
    public getIssueDetails = ():string => {
        let strIssueDetails :string = `Issue No - ${this.issueID}` + "\n";
        strIssueDetails += `Category - ${this.issueCategory}` + "\n";
        strIssueDetails += `Issue Description - ${this.issueDescription}` + "\n";
        return strIssueDetails;
    }
}

class clsChannel {
    //Channel details related private variables declaration
    private channelName :string;
    //Other channel related data would be here, for the time being I am skipping those

    //Constructor to initialize variables
    constructor(channelName :string) {
        this.channelName = channelName;
    }

    //Method to get channel name
    public getChannelName = ():string => {
        return this.channelName;
    }
}

class clsYoutube {
    //Private variables declaration
    private uniqueID :number; 
    private videoTitle :string; 
    private description :string; 
    private link :string; 
    private duration :string; 
    private likes :number; 
    private dislikes :number; 
    private publishedOn :Date;
    private totalViews :number;
    private category :string;
    private uploadedBy :string;
    private availableQuality :string[]; //Available Video Quality (240, 360, 720 px etc.)
    private relatedKeywords :string[]; //Keywords tagged with the video
    private comments :clsComment[];
    private channel :clsChannel;
    private relatedVideos :clsYoutube[];
    private reportedIssues :clsReportedIssue[];


    constructor (uniqueId :number, videoTitle :string, description :string, link :string,
        duration :string, likes :number, dislikes :number, publishedOn :Date, totalViews :number,
        category :string, uploadedBy :string, availableQty :string[], relatedKeywords :string[],
        comments :clsComment[], channel :clsChannel, reportedIssue :clsReportedIssue[]) {

        this.uniqueID = uniqueId;
        this.videoTitle = videoTitle;
        this.description = description;
        this.link = link;
        this.duration = duration;
        this.likes = likes;
        this.dislikes = dislikes;
        this.publishedOn = publishedOn;
        this.totalViews = totalViews;
        this.category = category;
        this.uploadedBy = uploadedBy;
        this.availableQuality = availableQty;
        this.relatedKeywords = relatedKeywords;    
        this.comments = comments;
        this.channel = channel;
        this.reportedIssues = reportedIssue;
        this.generateRelatedVideosList();
    }

    ////Public Methods

    //Method to get video information
    public getVideoInfo = ():any => {
        let objYoutubeVideo = {
            uniqueID : this.uniqueID,
            videoTitle : this.videoTitle,
            description : this.description,
            link : this.link,
            duration : this.duration,
            likes : this.likes,
            dislikes : this.dislikes,
            publishedOn : this.publishedOn,
            totalViews : this.totalViews,
            category : this.category,
            uploadedBy : this.uploadedBy,
            availableQuality : this.availableQuality,
            relatedKeywords : this.relatedKeywords,    
            comments : this.comments,
            channel : this.channel,
            reportedIssues : this.reportedIssues,
            relatedVideos : this.relatedVideos
        }

        return objYoutubeVideo;
    }

    //Below methods are just for demonstration that we can alter or get class properties separately
    //Method to add a comment to the video
    public addComment = (objComment :clsComment):void => {
        this.comments.push(objComment);
    }

    //Method to get specific comment
    public getSpecificComment = (index :number) => {
        return this.comments[index];
    }

    //Method to get all comments
    public getAllComment = () => {
        return this.comments;
    }

    //Method that will gather the info of related videos
    //This is private method as this method is not meant for others to access
    private generateRelatedVideosList = () => {
        console.log("\n**Related videos list will be created here, and will be assigned to this.relatedVideos\n\n\n");
    }
}

//YouTube Classes - Ends Here

//Preparing comments for this video
let objComment1 = new clsComment(1, new Date(), "This is the first comment", "Souvik Roy");
let objComment2 = new clsComment(2, new Date(), "This is the Second comment", "Anonymous");
let objComments :clsComment[] = [objComment1, objComment2];

//Preparing reported issues for the video
let objIssue1 = new clsReportedIssue(1, "Copyright Content", "This is a copyright content of a demo video");
let objIssue2 = new clsReportedIssue(2, "Copyright Content", "Copyright");
let objIssues :clsReportedIssue[] = [objIssue1, objIssue2];

//Channel related data for the video
let objChannel = new clsChannel("ODN");

//Published On
let dtPublishedOn = new Date(2014, 3, 12);

//Available video qualities
let arrVideoQuality = ["144p", "240p", "360p", "480p", "720p"];

//Related keywords to find users search for this video
let arrRelatedKeywords = ["Tim", "Berners", "Lee", "WWW", "World-wide-web"];

//Creating a new youtube video object with all the necessary details
let objYoutube = new clsYoutube(101, "Inteview with inventor Sir Tim Berners-Lee", "This is the description of the video", "https://www.youtube.com/watch?v=loi6PYaRqHA",
                        "2.08", 136, 4, dtPublishedOn, 25168, "News & Politics", "ODN News", arrVideoQuality,
                        arrRelatedKeywords, objComments, objChannel, objIssues);

//Now it's time to get details of the video and display it in the console
let videoInfo = objYoutube.getVideoInfo();
console.log("****** YouTube Video Details *******\n\n");
console.log("Title  :   " + videoInfo.videoTitle);
console.log("\nDescription  :   " + videoInfo.description);
console.log("\nLink  :   " + videoInfo.link);
console.log("\nVideo Duration  :   " + videoInfo.duration);
console.log("\nLikes  :   " + videoInfo.likes);
console.log("\nDisikes  :   " + videoInfo.dislikes);
console.log("\nPublished On  :   " + videoInfo.publishedOn);
console.log("\nTotal Views  :   " + videoInfo.totalViews);
console.log("\nCategory  :   " + videoInfo.category);
console.log("\nUploaded By  :   " + videoInfo.uploadedBy);
console.log("\nAvailable Video Qualities  :   " + String(videoInfo.availableQuality));
console.log("\nRelated Keywords  :   " + String(videoInfo.relatedKeywords));
console.log("\nChannel Name  :   " + videoInfo.channel.getChannelName());

if(videoInfo.reportedIssues != undefined) {
    console.log("\nReported Issues  :   \n");
    for (let issue of videoInfo.reportedIssues) {
        console.log(issue.getIssueDetails());
    }
}

console.log("\nComments  :   \n");
if(videoInfo.comments != undefined) {
    for(let comment of videoInfo.comments) {
        console.log(comment.getComment());
    }
}

console.log("\nLet's add one more comment to this video and try to get the list of updated comments");
let objComment3 = new clsComment(3, new Date(), "This is the newly added comment", "Anonymous101");
objYoutube.addComment(objComment3); //Added the new comment to the video

console.log("\nUpdated List of Comments  :   \n");
if(videoInfo.comments != undefined) {
    for(let comment of videoInfo.comments) {
        console.log(comment.getComment());
    }
}

//Getting the latest comment using index
console.log("\nFetching the latest comment by index  :   \n");
console.log(objYoutube.getSpecificComment(videoInfo.comments.length - 1).getComment());