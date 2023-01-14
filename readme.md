# Recruitment Portal for VJTI

---

## Problem Statement 
Your goal goes beyond simply bringing the conventional process to a website or app. By altering some components of the procedure, you must creatively speed up the current process. But keep in mind that any modifications to the conventional procedure will continue to be governed by TPO's Policy. There can be multiple access levels to the portal - Students, TPO Staff, Student CRs, Invited Company HRs, etc.

## Solution 

A one stop webapp considering of the following major features : 

- **Single Announcement Section** : Solves the problem of unorganized messaging done on Whatsapp/Mail. We provide a single announcement section where TPO Admins/CRs can make announcements for anyone. It follows a tag based announcement system to announce to specific set of people and also supports replies from students.

- **Automating application and results** : Currently, interested students have to fill out an excel sheet which is submitted to the company, the results are announced in a similar way where a company sends back an excel sheet. We Provide an automated soluiton where Students can see a list of eligible companies in their dashboard and apply with One-Click. All their details stored in TPO database will than be visible to the Company-HR dashboard. After each round the HR can select the qualifying students from their dashboard and submit. The results will be reflected to everyone.

- **JAF on portal** : Currently companies have to mail out JAF pdf to TPO, making it hard to keep track of all the data, We provide an HR interface where the HR provides the data required in JAF at the time of registration, and it is accessible to the TPO admin and the students in their dashboard.

- **Data Management** : Keeping a track of all the details of Students, their placement and company data manually is a complex task. We have automated this with scripts which automatically add a student's personal, academic, as well as professional details to database. All the placement related information such as each company's round1,round2 and selected students is also added to the database as they happen. This makes accessing data for any student and any company very trivial for the TPO admin.
- Misc : 
    - **A common calendar** between TPO admin and HR to schedule PPTs, OAs and interview rounds, which will also be visible to Students.
    - **A dedicated website for TPO** where brochure, placement stats are available to public and allowing any HR to directly reach out to TPO.

---

## To-Do
- Establish a communication system between TPO Admin and HR directly on the portal.
- Automating Announcements for events such as company arrival and company results.
- Handling OffCampus Placements and Further Studies Section on the Portal.

### Setup Locally

#### Clone the Repo : 
`git clone https://github.com/sameergupta4873/Hackathon.git`

#### Start the Server : 

`cd server`

`npm i`

`npm run server`

#### Start the Client : 

```cd .. && cd /client```

`npm i`

`npm start`

---
