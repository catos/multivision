var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required!'},
    featured: {type: Boolean, required: '{PATH} is required!'},
    published: {type: Date, required: '{PATH} is required!'},
    tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Course.create({
                title: "C# for Sociopaths",
                featured: true,
                published: new Date('2015.01.01'),
                tags: ['C#']
            });
            Course.create({
                title: "C# for Non-Sociopaths",
                featured: true,
                published: new Date('2015.02.11'),
                tags: ['C#']
            });
            Course.create({
                title: "Super Duper Expert C#",
                featured: true,
                published: new Date('2015.01.23'),
                tags: ['C#']
            });
            Course.create({
                title: "Visual Basic for Visual Basic Developers",
                featured: true,
                published: new Date('2015.02.03'),
                tags: ['VB']
            });
            Course.create({
                title: "Javascript for C# Developers",
                featured: true,
                published: new Date('2015.04.21'),
                tags: ['JS']
            });
            Course.create({
                name: "Android Beginner Series: Just Enough Java",
                featured: true,
                published: new Date('2/1/2014'),
                tags: ['Java, Android']
            });
            Course.create({
                name: "Learning To Program - Being A Better Programmer",
                featured: false,
                published: new Date('2/3/2014'),
                tags: ['Dev']
            });
            Course.create({
                name: "BizTalk Server 2013 from Ground Up: An End to End Scenario",
                featured: true,
                published: new Date('2/1/2012'),
                tags: ['BizTalk']
            });
        }
    })
};

exports.createDefaultCourses = createDefaultCourses;