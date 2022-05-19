import { default as data } from "../db/db.js";

/*
	fetching latest blogs from medium.com
*/
function fetchBlogsFromMedium() {
	fetch(
		"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vinaysomawat"
	)
		.then((response) => response.json())
		.then((data) => {
			populateBlogs(data["items"], "blogs", "read-more-blogs");
		});
}

function populateSkills(items, id) {
	let skillsTag = document.getElementById(id);
	for (let i = 0; i < items.length; i++) {
		let h3 = getElement('h3',null);
		h3.innerHTML = items[i].skillName;

		let divProgress = getElement('div','progress');

		let divProgressBar = document.createElement("div");
		divProgressBar.className = "progress-bar color-" + items[i].color;
		divProgressBar.style = "width:" + items[i].percentage + "%";
		divProgress.append(divProgressBar);

		let divProgressWrap = document.createElement("div");
		divProgressWrap.className = "progress-wrap";
		divProgressWrap.append(h3);
		divProgressWrap.append(divProgress);

		let divAnimateBox = document.createElement("div");
		divAnimateBox.className = "col-md-6 animate-box";
		divAnimateBox.append(divProgressWrap);

		skillsTag.append(divAnimateBox);
	}
}

function populateProjects(items, id) {
	let projectdesign = document.getElementById(id);
	for (let i = 0; i < items.length; i++) {
		let h4 = document.createElement("h4");
		h4.className = "project-heading";
		h4.innerHTML = items[i].projectName;

		let a = document.createElement("a");
		a.href = items[i].preview;
		a.target = "_blank";
		a.append(h4);

		let img = document.createElement("img");
		img.src = items[i].image;
		img.className = "img-fluid";

		let divResumeContentLeft = document.createElement("div");
		divResumeContentLeft.className = "resume-content";
		divResumeContentLeft.id = "left-div";
		divResumeContentLeft.append(img);

		let divResumeContentRight = document.createElement("div");
		divResumeContentRight.className = "resume-content";
		divResumeContentRight.id = "right-div";

		let p = document.createElement("p");
		p.className = "project-description";
		p.innerHTML = items[i].summary;

		let divSpan = document.createElement("div");
		for (let k = 0; k < items[i].techStack.length; k++) {
			let span = document.createElement("span");
			span.className = "badge badge-secondary";
			span.innerHTML = items[i].techStack[k];
			divSpan.append(span);
		}

		let divSubHeading = document.createElement("div");
		divSubHeading.className = "sub-heading";
		divSubHeading.append(p);
		divSubHeading.append(divSpan);
		divResumeContentRight.append(divSubHeading);

		let divResumeItem = document.createElement("div");
		divResumeItem.className = "resume-item";
		divResumeItem.append(divResumeContentLeft);
		divResumeItem.append(divResumeContentRight);
		a.append(divResumeItem);

		let divProjectCard = document.createElement("div");
		divProjectCard.className = "project-card";
		divProjectCard.append(a);

		let li = document.createElement("li");
		li.append(divProjectCard);
		projectdesign.append(li);

		if(i != items.length-1) {
			let hr = document.createElement('hr');
			projectdesign.append(hr);
		}
	}
}

function populateBlogs(items, id, subid) {
	let projectdesign = document.getElementById(id);
	let count = 3;
	for (let i = 0; i < count; i++) {
		let h4 = document.createElement("h4");
		h4.className = "project-heading";
		h4.innerHTML = items[i].title;

		let a = document.createElement("a");
		a.href = items[i].link;
		a.target = "_blank";
		a.append(h4);

		let img = document.createElement("img");
		img.src = items[i].thumbnail;
		img.className = "img-fluid";

		let divResumeContentLeft = document.createElement("div");
		divResumeContentLeft.className = "resume-content";
		divResumeContentLeft.id = "left-div";
		divResumeContentLeft.append(img);

		let divResumeContentRight = document.createElement("div");
		divResumeContentRight.className = "resume-content";
		divResumeContentRight.id = "right-div";

		let p = document.createElement("p");
		p.className = "project-description";
		let html = items[i].content;
		let doc = /<p>(.*?)<\/p>/g.exec(html);
		p.innerHTML = doc[1];

		let divSpan = document.createElement("div");
		for (let k = 0; k < items[i].categories.length; k++) {
			let span = document.createElement("span");
			span.className = "badge badge-secondary";
			span.innerHTML = items[i].categories[k];
			divSpan.append(span);
		}

		let divSubHeading = document.createElement("div");
		divSubHeading.className = "sub-heading";
		divSubHeading.append(p);
		divSubHeading.append(divSpan);
		divResumeContentRight.append(divSubHeading);

		let divResumeItem = document.createElement("div");
		divResumeItem.className = "resume-item";
		divResumeItem.append(divResumeContentLeft);
		divResumeItem.append(divResumeContentRight);
		a.append(divResumeItem);

		let divProjectCard = document.createElement("div");
		divProjectCard.className = "project-card";
		divProjectCard.append(a);

		let li = document.createElement("li");
		li.append(divProjectCard);
		projectdesign.append(li);
		if(i!=count-1) {
			projectdesign.append(document.createElement("hr"));
		}
	}
}

function populateExp_Edu(items, id) {
	let mainContainer = document.getElementById(id);

	for (let i = 0; i < items.length; i++) {
		let spanTimelineSublabel = document.createElement("span");
		spanTimelineSublabel.className = "timeline-sublabel";
		spanTimelineSublabel.innerHTML = items[i].subtitle;

		let spanh2 = document.createElement("span");
		spanh2.innerHTML = items[i].duration;

		let h2TimelineLabel = document.createElement("h2");
		h2TimelineLabel.innerHTML = items[i].title;
		h2TimelineLabel.append(spanh2);

		let divTimelineLabel = document.createElement("div");
		divTimelineLabel.className = "timeline-label";
		divTimelineLabel.append(h2TimelineLabel);
		divTimelineLabel.append(spanTimelineSublabel);

		for (let j = 0; j < items[i].details.length; j++) {
			let pTimelineText = document.createElement("p");
			pTimelineText.className = "timeline-text";
			pTimelineText.innerHTML = "&blacksquare; " + items[i].details[j];
			divTimelineLabel.append(pTimelineText);
		}

		let divTags = document.createElement("div");
		for (let j = 0; j < items[i].tags.length; j++) {
			let spanTags = document.createElement("span");
			spanTags.className = "badge badge-secondary";
			spanTags.innerHTML = items[i].tags[j];
			divTags.append(spanTags);
		}
		divTimelineLabel.append(divTags);

		let iFa = document.createElement("i");
		iFa.className = "fa fa-" + items[i].icon;

		let divTimelineIcon = document.createElement("div");
		divTimelineIcon.className = "timeline-icon color-2";
		divTimelineIcon.append(iFa);

		let divTimelineEntryInner = document.createElement("div");
		divTimelineEntryInner.className = "timeline-entry-inner";
		divTimelineEntryInner.append(divTimelineIcon);
		divTimelineEntryInner.append(divTimelineLabel);

		let article = document.createElement("article");
		article.className = "timeline-entry animate-box";
		article.append(divTimelineEntryInner);

		mainContainer.append(article);
	}

	let divTimelineIcon = document.createElement("div");
	divTimelineIcon.className = "timeline-icon color-2";

	let divTimelineEntryInner = document.createElement("div");
	divTimelineEntryInner.className = "timeline-entry-inner";
	divTimelineEntryInner.append(divTimelineIcon);

	let article = document.createElement("article");
	article.className = "timeline-entry begin animate-box";
	article.append(divTimelineEntryInner);

	mainContainer.append(article);
}

function populateLinks(items, id) {
	let footer = document.getElementById(id);

	for (let i = 0; i < items.length; i++) {
		if (items[i].label != "copyright-text") {
			let span = document.createElement("span");
			span.className = "col";

			let p = document.createElement("p");
			p.className = "col-title";
			p.innerHTML = items[i].label;
			span.append(p);

			let nav = document.createElement("nav");
			nav.className = "col-list";

			let ul = document.createElement("ul");
			for (let j = 0; j < items[i].data.length; j++) {
				let li = document.createElement("li");
				let a = document.createElement("a");
				if (items[i].data[j].link) {
					a.href = items[i].data[j].link;
					a.target = "_blank";
				}
				if (items[i].data[j].func) {
					a.setAttribute("onclick", items[i].data[j].func);
				}
				a.innerHTML = items[i].data[j].text;

				li.append(a);
				ul.append(li);
			}
			nav.append(ul);
			span.append(nav);
			footer.append(span);
		}

		if (items[i].label == "copyright-text") {
			let div = document.createElement("div");
			div.className = "copyright-text no-print";
			for (let k = 0; k < items[i].data.length; k++) {
				let p = document.createElement("p");
				p.innerHTML = items[i].data[k];
				div.append(p);
			}
			footer.append(div);
		}
	}
}

function getElement(tagName,className) {
	let item = document.createElement(tagName);
	item.className = className;
	return item;
}


populateSkills(data.skills, "skills");

fetchBlogsFromMedium();

populateProjects(data.projects.web, "web-projects");
populateProjects(data.projects.software, "software-projects");
populateProjects(data.projects.android, "android-projects");
populateProjects(data.projects.freelance, "freelance-projects");

populateExp_Edu(data.experience, "experience");
populateExp_Edu(data.education, "education");

populateLinks(data.footer, "footer");
