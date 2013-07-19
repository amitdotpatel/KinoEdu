KinoEdu
=======

Education Platform for Individuals. This Platform allows Users to both
create and enroll to courses offered by people on this platform.
The platform is a Social Platform, showcasing a Leadership board which
tells which user is topping the list of successfully taking courses
or creating courses.

The platform would support following in Phase 1
* Create Public and Free Courses and List them
* Allow Users to take Public and Free Courses and gain certification once they complete the courses
* Allow Users to show the Certificates on Social networking sites
* List Top Certification Holders and Course Creators in a Leadership Board

Setup
======
Following Steps needs to be taken before you can run this platform locally

Step 1.
------
$>git clone https://github.com/rohitghatol/KinoEdu.git

Step 2.
------
(Required for Only Local Development Mode)

Install Mongo DB and run it on default port

$>mongod

Step 3.
------
Push Environment Variables

export admin_name=admin

export admin_email=admin@synerzip.com

export admin_password=admin123

export main_client_name=clientname

export main_client_description=clientdesc

export main_client_redirect_uris='1,2,3'


Step 4.
------

To Run the Application Locally

$>npm install

$>npm start
