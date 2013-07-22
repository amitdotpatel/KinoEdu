/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/12/13
 * Time: 11:53 PM
 * To change this template use File | Settings | File Templates.
 */

var courseApi = require('../../dummyData/dataApi');

// C - Create
exports.createCourse = function(req,res){
  return res.send(404, {'msg': 'ToDo'});
};

//R - Retrieve
exports.findAllCourses = function(req, res){
  res.set({'Content-Type':'application/json'});
  return res.send(200, courseApi.allCourses());
};

exports.findCourseById = function(req, res){
  res.set({'Content-Type':'application/json'});
  var course = courseApi.courseById(req.params.id);
  if(!course) {
    return res.send(404, {msg: 'Course not found'});
  }
  return res.send(200, course);
};

//U - Update
exports.updateCourseById = function(req,res){
  return res.send(404, {'msg': 'ToDo'});
};

//D - Delete
exports.deleteCourseById = function(req,res){
  return res.send(404, {'msg': 'ToDo'});
};
