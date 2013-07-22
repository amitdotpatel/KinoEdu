var courses = require('./courses');
module.exports = {
  allCourses: function() {
    return courses.data;
  },
  courseById: function(id){
    for(var i = 0; i < courses.data.length; i++) {
      if(courses.data[i].code == id) {
        return courses.data[i];
      }
    }
    return false;
  }
};