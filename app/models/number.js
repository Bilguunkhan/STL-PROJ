import DS from 'ember-data';

export default DS.Model.extend({
    title      : DS.attr('string'),
}).reopenClass({
    FIXTURES: [
        {
            id   : 1,
            title: "91919191"
        },
        {
            id    : 2,
            title : "91919192"
        },
        {
            id    : 3,
            title : "91919193"
        },
        {
            id    : 4,
            title : "91929394"
        },
        {
            id   : 5,
            title: "91929395"
        },
        {
            id    : 6,
            title : "91929396"
        },
        {
            id    : 7,
            title : "91929397"
        },
        {   
            id    : 8,
            title : "91919194"
        },
        {   
            id    : 9,
            title : "91919195"
        },
        {   
            id    : 10,
            title : "91919196"
        },
        {
            id    : 11, 
            title : "91111111"
        },
        {
            id    : 12, 
            title : "91111112"
        },
        {
            id    : 13, 
            title : "91111113"
        },
        {
            id    : 14, 
            title : "91111114"
        },
        {
            id    : 15, 
            title : "91111115"
        }
    ]
});
