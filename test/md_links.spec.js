const mdLinks = require("../");


describe("mdLinks", () => {

  
  it("should return true for a valid .md file", () => {
   expect(mdLinks.filePath("../README.md")).toBe(true);
  });

  it("should return false for a invalid .md file", () => {
    expect(mdLinks.filePath("../index.js")).toBe(false);
  });

  it("Should read the md file and show all the links that there are in the file", () => {
    mdLinks.readFile("userFile", (mdFile) =>{
      expect(mdFile).toBe(found)
    });
  });

  it("Is an error if there are not any kind of links", () => {
    mdLinks.readFile("userFile", (err) =>{
      expect(err).toBe(err)
    });
  });

  it("If the user want to validate the links", () => {
    prompt((yes) =>{
      expect(yes).toBe(true)
    });
  });

  it("If the user do not want to validate the links", () => {
    prompt((no) =>{
      expect(no).toBe(false)
    });
  });

});