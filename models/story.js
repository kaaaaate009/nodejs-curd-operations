const { DateTime } = require("luxon");
const { v4: uuidv4 } = require('uuid');

const stories = [
    {
        id: '1',
        title: 'A sample story',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna est, aliquam quis maximus in, lobortis ac tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin elit ex, lobortis gravida quam et, molestie condimentum enim. Nulla non lorem sed nibh tristique tincidunt quis nec purus.',
        author: 'Swaraj',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)

    },

    {
        id: '2',
        title: 'It is a nice day',
        content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris rhoncus rhoncus leo, vitae ultrices dui. Nullam tempus mauris sed arcu bibendum vulputate.',
        author: 'Kate',
        createdAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(DateTime.DATETIME_SHORT)
    }
];

exports.find = () => stories;

exports.findById = id => stories.find(story => story.id === id);


exports.save = function (story) {
    story.id = uuidv4();
    story.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    stories.push(story);
};

exports.updateById = function (id, newStory) {
    let story = stories.find(story => story.id === id);
    if (story) {
        story.title = newStory.title;
        story.content = newStory.content;
        return true;
    } else {
        false;
    }
};

exports.deleteById = function (id) {
    let index = stories.findIndex(story => story.id === id);
    if (index !== 1) {
        stories.splice(index, 1);
        return true;
    } else {
        return false;
    }
};