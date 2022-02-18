import { default as data } from '../db/db.js';

function populateSkills(items, id) {
    var skillsTag = document.getElementById(id);
    for (var i = 0; i < items.length; i++) {
        var h3 = document.createElement("h3");
        h3.innerHTML = items[i].skillName;

        var divProgress = document.createElement("div");
        divProgress.className = "progress";

        var divProgressBar = document.createElement("div");
        divProgressBar.className = "progress-bar color-" + items[i].color;
        divProgressBar.style = "width:" + items[i].percentage + "%";
        divProgress.append(divProgressBar);

        var divProgressWrap = document.createElement("div");
        divProgressWrap.className = "progress-wrap";
        divProgressWrap.append(h3);
        divProgressWrap.append(divProgress);

        var divAnimateBox = document.createElement("div");
        divAnimateBox.className = "col-md-6 animate-box";
        divAnimateBox.append(divProgressWrap);

        skillsTag.append(divAnimateBox);
    }
}

function populateProjects(items, id) {
    var projectdesign = document.getElementById(id);
    for (var i = 0; i < items.length; i++) {
        var h4 = document.createElement("h4");
        h4.className = "project-heading";
        h4.innerHTML = items[i].projectName;
    
        var a = document.createElement("a");
        a.href = items[i].preview;
        a.append(h4);
        
        var img = document.createElement("img");
        img.src = items[i].image;
        img.className = 'img-fluid';
        
        var divResumeContentLeft = document.createElement("div");
        divResumeContentLeft.className = 'resume-content';
        divResumeContentLeft.id = 'left-div';
        divResumeContentLeft.append(img);
    
        var divResumeContentRight = document.createElement("div");
        divResumeContentRight.className = 'resume-content';
        divResumeContentRight.id = 'right-div';
    
        var p = document.createElement("p");
        p.className = "project-description";
        p.innerHTML = items[i].summary;
    
        var divSpan = document.createElement("div");
        for (var k = 0; k < items[i].techStack.length; k++) {
            var span = document.createElement("span");
            span.className = "badge badge-secondary";
            span.innerHTML = items[i].techStack[k];
            divSpan.append(span);
        }
    
        var divSubHeading = document.createElement("div");
        divSubHeading.className = 'sub-heading';
        divSubHeading.append(p);
        divSubHeading.append(divSpan);
        divResumeContentRight.append(divSubHeading);
        
        var divResumeItem = document.createElement("div");
        divResumeItem.className = 'resume-item';
        divResumeItem.append(divResumeContentLeft);
        divResumeItem.append(divResumeContentRight);
        a.append(divResumeItem);
    
        var divProjectCard = document.createElement("div");
        divProjectCard.className = "project-card";
        divProjectCard.append(a);
        
        var li = document.createElement("li");
        li.append(divProjectCard);
        projectdesign.append(li);
    }
}

function populateExp_Edu(items, id) {
    let mainContainer = document.getElementById(id);

    for (let i = 0; i < items.length; i++) {
        
        let spanTimelineSublabel = document.createElement('span');
        spanTimelineSublabel.className = 'timeline-sublabel';
        spanTimelineSublabel.innerHTML = items[i].subtitle;

        let spanh2 = document.createElement('span');
        spanh2.innerHTML = items[i].duration;

        let h2TimelineLabel = document.createElement('h2');
        h2TimelineLabel.innerHTML = items[i].title;
        h2TimelineLabel.append(spanh2);

        let divTimelineLabel = document.createElement('div');
        divTimelineLabel.className = 'timeline-label';
        divTimelineLabel.append(h2TimelineLabel);
        divTimelineLabel.append(spanTimelineSublabel);

        for (let j = 0; j < items[i].details.length; j++) {
            let pTimelineText = document.createElement('p');
            pTimelineText.className = 'timeline-text';
            pTimelineText.innerHTML = '&blacksquare; ' + items[i].details[j];
            divTimelineLabel.append(pTimelineText);
        }

        let divTags = document.createElement('div');
        for (let j = 0; j < items[i].tags.length; j++) {
            let spanTags = document.createElement('span');
            spanTags.className = 'badge badge-secondary';
            spanTags.innerHTML = items[i].tags[j];
            divTags.append(spanTags);
        }
        divTimelineLabel.append(divTags);

        let iFa = document.createElement('i');
        iFa.className = 'fa fa-' + items[i].icon;

        let divTimelineIcon = document.createElement('div');
        divTimelineIcon.className = 'timeline-icon color-2';
        divTimelineIcon.append(iFa);

        let divTimelineEntryInner = document.createElement('div');
        divTimelineEntryInner.className = 'timeline-entry-inner';
        divTimelineEntryInner.append(divTimelineIcon);
        divTimelineEntryInner.append(divTimelineLabel);

        let article = document.createElement('article');
        article.className = 'timeline-entry animate-box';
        article.append(divTimelineEntryInner);

        mainContainer.append(article);
    }

    let divTimelineIcon = document.createElement('div');
    divTimelineIcon.className = 'timeline-icon color-2';

    let divTimelineEntryInner = document.createElement('div');
    divTimelineEntryInner.className = 'timeline-entry-inner';
    divTimelineEntryInner.append(divTimelineIcon);

    let article = document.createElement('article');
    article.className = 'timeline-entry begin animate-box';
    article.append(divTimelineEntryInner);

    mainContainer.append(article);
}

function populateLinks(items, id) {
    var externalLink = document.getElementById(id);

    for (var i = 0; i < items.length; i++) {
        var img = document.createElement("img");
        img.src = items[i].imgLink;
        img.style = 'width:60%';
        img.alt = items[i].alt;

        var a = document.createElement("a");
        a.href = items[i].link;
        a.append(img);

        var divAnimate = document.createElement("div");
        divAnimate.className = "col-image";
        divAnimate.append(a);

        externalLink.append(divAnimate);
    }
}

populateSkills(data.skills, 'skills');

populateProjects(data.projects.web, 'web-projects');
populateProjects(data.projects.software, 'software-projects');
populateProjects(data.projects.android, 'android-projects');
populateProjects(data.projects.freelance, 'freelance-projects');

populateExp_Edu(data.experience, 'experience');
populateExp_Edu(data.education, 'education');

populateLinks(data.links, 'externalLinks');