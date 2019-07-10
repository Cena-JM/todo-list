import _ from "lodash";
import "./styles/reset.css";
import "./styles/style.css";
import {  } from "./renderProject";
import { addProject, removeProject, getProject } from './projectFactory';


const project = (e) => document.getElementsById(`${e}`);

project(getProject.id).addEventListener("click", () => {
    // 
})