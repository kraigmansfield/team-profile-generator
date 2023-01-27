const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./generateHtml');
const fs = require('fs');
const path = require('path');
const { DefaultSerializer } = require('v8');
const teamMembers = []

const promptMain = () => {
    return inquirer.prompt({
        type:'list',
        name:'menu',
        message:'Please select an option',
        choices:['add a manager', 'add an engineer', 'add an intern', 'finish building my team']
    }).then(ans=> {
        switch (ans.menu) {
            case "add a manager":
                promptManager();
                break;
            case "add an enginner":
                promptEngineer();
                break;
            case "add an intern":
                promptIntern();
                break;
            default:
                finishTeam();
        }
    });
}