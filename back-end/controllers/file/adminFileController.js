const File = require('../../models/files-admin');
const mongoose = require('mongoose');


const uploadFile = async (req, res) => {
    try {
      const { title, chefId } = req.body; // Assuming the professor's ID is sent in the request body
      const fileName = req.file.filename;
  
      // Create a new PDF record with the provided professor's ID
      await File.create({ title, pdf: fileName, chef: chefId });
  
      res.send({ status: "ok" });
    } catch (error) {
      res.json({ status: error });
    }
  };
  

  const getFiles = async (req, res) => {
    try {
      const data = await File.find({});
      res.send({ status: "ok", data });
    } catch (error) {
      res.json({ status: 'error', error: error.message });
    }
  };
  

  // Define a route to get agent data by ID
const getFilesForChef = async (req, res) => {
    try {
      const chefId = req.params.chefId;
  
      // Use Mongoose to find all demandes with the matching professeur ID and sort them by createdAt in descending order (newest to oldest)
      const files = await File.find({ chef: chefId })
        .sort({ createdAt: -1 });
  
      res.json(files);
    } catch (error) {
      console.error('Error fetching demandes:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };

module.exports = {getFiles,uploadFile, getFilesForChef};
