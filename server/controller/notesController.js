const Notes = require('../model/notesModel');

const getNotes = async (req, res, next) => {
  try {
    if (!req.user || !req.user._id) throw new Error('TOKEN_CORRUPTED');
    const { _id } = req.user;

    const notes = await Notes.find({ userId: _id });
    return res.json({
      success: true,
      notes,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};
const addNote = async (req, res, next) => {
  try {
    if (!req.user || !req.user._id) throw new Error('TOKEN_CORRUPTED');
    const { title, body } = req.body;

    if (!title || !body) throw new Error('MISSING_REQUIRED_FIELDS');
    const notes = new Notes({
      title,
      body,
      userId: req.user._id,
    });
    const addedNotes = await notes.save();
    if (!addedNotes) throw new Error('ADD_NOTES_ERROR');

    if (!title || !body) throw new Error('MISSING_REQUIRED_FIELDS');
    return res.json({
      success: true,
      messge: 'Added notes successfully',
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};
const editNote = async (req, res, next) => {
  try {
    if (!req.user || !req.user._id) throw new Error('TOKEN_CORRUPTED');
    const { id } = req.params;
    const { title, body } = req.body;

    if (!id || !(title || body)) throw new Error('MISSING_REQUIRED_FIELDS');

    let notes = await Notes.findOne({ _id: id, userId: req.user._id });
    notes = notes ? JSON.parse(JSON.stringify(notes)) : notes;

    if (!notes) throw new Error('NO_NOTES');

    const toUpdate = {
      ...notes,
      ...(title ? { title } : {}),
      ...(body ? { body } : {}),
    };
    const updatedNotes = await Notes.update({ _id: id }, toUpdate);
    if (!updatedNotes.nModified) throw new Error('UPDATE_ERROR');

    return res.json({
      success: true,
      message: 'Note Updated successfully',
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};
const deleteNote = async (req, res, next) => {
  try {
    if (!req.user || !req.user._id) throw new Error('TOKEN_CORRUPTED');
    const { id } = req.params;
    const userId = req.user._id;
    const deletedNotes = await Notes.findOneAndDelete({ _id: id, userId });
    if (!deletedNotes) throw new Error('NOTE_ALREADY_DELETED');

    return res.json({
      success: true,
      mesage: 'Note Deleted successfully',
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = {
  getNotes,
  addNote,
  editNote,
  deleteNote,
};
