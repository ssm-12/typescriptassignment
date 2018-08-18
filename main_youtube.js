//YouTube Classes - Starts Here
//Comment Class
var clsComment = /** @class */ (function () {
    //Constructor of the class
    function clsComment(id, commentDate, descr, creator) {
        var _this = this;
        //Public Methods
        this.getComment = function () {
            var strComment;
            strComment = "Commented On: " + _this.commentedOn.toDateString() + "\n";
            strComment += "Commented By: " + _this.commentedBy + "\n";
            strComment += "Description: " + _this.commentDescription;
            return strComment;
        };
        this.commentID = id;
        this.commentedOn = commentDate;
        this.commentDescription = descr;
        this.commentedBy = creator;
    }
    return clsComment;
}());
//Reported Issue class
var clsReportedIssue = /** @class */ (function () {
    function clsReportedIssue(issueID, issueCategory, issueDescription) {
        var _this = this;
        //Method to get all reported issue
        this.getIssueDetails = function () {
            var strIssueDetails = "Issue No - " + _this.issueID + "\n";
            strIssueDetails += "Category - " + _this.issueCategory + "\n";
            strIssueDetails += "Issue Description - " + _this.issueDescription + "\n";
            return strIssueDetails;
        };
        this.issueID = issueID;
        this.issueCategory = issueCategory;
        this.issueDescription = issueDescription;
    }
    return clsReportedIssue;
}());
var clsChannel = /** @class */ (function () {
    //Other channel related data would be here, for the time being I am skipping those
    //Constructor to initialize variables
    function clsChannel(channelName) {
        var _this = this;
        //Method to get channel name
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.channelName = channelName;
    }
    return clsChannel;
}());
var clsYoutube = /** @class */ (function () {
    function clsYoutube(uniqueId, videoTitle, description, link, duration, likes, dislikes, publishedOn, totalViews, category, uploadedBy, availableQty, relatedKeywords, comments, channel, reportedIssue) {
        var _this = this;
        ////Public Methods
        //Method to get video information
        this.getVideoInfo = function () {
            var objYoutubeVideo = {
                uniqueID: _this.uniqueID,
                videoTitle: _this.videoTitle,
                description: _this.description,
                link: _this.link,
                duration: _this.duration,
                likes: _this.likes,
                dislikes: _this.dislikes,
                publishedOn: _this.publishedOn,
                totalViews: _this.totalViews,
                category: _this.category,
                uploadedBy: _this.uploadedBy,
                availableQuality: _this.availableQuality,
                relatedKeywords: _this.relatedKeywords,
                comments: _this.comments,
                channel: _this.channel,
                reportedIssues: _this.reportedIssues,
                relatedVideos: _this.relatedVideos
            };
            return objYoutubeVideo;
        };
        //Below methods are just for demonstration that we can alter or get class properties separately
        //Method to add a comment to the video
        this.addComment = function (objComment) {
            _this.comments.push(objComment);
        };
        //Method to get specific comment
        this.getSpecificComment = function (index) {
            return _this.comments[index];
        };
        //Method to get all comments
        this.getAllComment = function () {
            return _this.comments;
        };
        //Method that will gather the info of related videos
        //This is private method as this method is not meant for others to access
        this.generateRelatedVideosList = function () {
            console.log("\n**Related videos list will be created here, and will be assigned to this.relatedVideos\n\n\n");
        };
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
    return clsYoutube;
}());
//YouTube Classes - Ends Here
//Preparing comments for this video
var objComment1 = new clsComment(1, new Date(), "This is the first comment", "Souvik Roy");
var objComment2 = new clsComment(2, new Date(), "This is the Second comment", "Anonymous");
var objComments = [objComment1, objComment2];
//Preparing reported issues for the video
var objIssue1 = new clsReportedIssue(1, "Copyright Content", "This is a copyright content of a demo video");
var objIssue2 = new clsReportedIssue(2, "Copyright Content", "Copyright");
var objIssues = [objIssue1, objIssue2];
//Channel related data for the video
var objChannel = new clsChannel("ODN");
//Published On
var dtPublishedOn = new Date(2014, 3, 12);
//Available video qualities
var arrVideoQuality = ["144p", "240p", "360p", "480p", "720p"];
//Related keywords to find users search for this video
var arrRelatedKeywords = ["Tim", "Berners", "Lee", "WWW", "World-wide-web"];
//Creating a new youtube video object with all the necessary details
var objYoutube = new clsYoutube(101, "Inteview with inventor Sir Tim Berners-Lee", "This is the description of the video", "https://www.youtube.com/watch?v=loi6PYaRqHA", "2.08", 136, 4, dtPublishedOn, 25168, "News & Politics", "ODN News", arrVideoQuality, arrRelatedKeywords, objComments, objChannel, objIssues);
//Now it's time to get details of the video and display it in the console
var videoInfo = objYoutube.getVideoInfo();
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
if (videoInfo.reportedIssues != undefined) {
    console.log("\nReported Issues  :   \n");
    for (var _i = 0, _a = videoInfo.reportedIssues; _i < _a.length; _i++) {
        var issue = _a[_i];
        console.log(issue.getIssueDetails());
    }
}
console.log("\nComments  :   \n");
if (videoInfo.comments != undefined) {
    for (var _b = 0, _c = videoInfo.comments; _b < _c.length; _b++) {
        var comment = _c[_b];
        console.log(comment.getComment());
    }
}
console.log("\nLet's add one more comment to this video and try to get the list of updated comments");
var objComment3 = new clsComment(3, new Date(), "This is the newly added comment", "Anonymous101");
objYoutube.addComment(objComment3); //Added the new comment to the video
console.log("\nUpdated List of Comments  :   \n");
if (videoInfo.comments != undefined) {
    for (var _d = 0, _e = videoInfo.comments; _d < _e.length; _d++) {
        var comment = _e[_d];
        console.log(comment.getComment());
    }
}
//Getting the latest comment using index
console.log("\nFetching the latest comment by index  :   \n");
console.log(objYoutube.getSpecificComment(videoInfo.comments.length - 1).getComment());
