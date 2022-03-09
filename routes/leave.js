const express = require('express');
const { createLeave, editLeave,deleteLeave, getLeave, getLeaves } = require('../controllers/leave');
const router = express.Router();

router.route('/leave')
.post(createLeave)
.get(getLeaves)

router.route('/leave/:id')
.patch(editLeave)
.delete(deleteLeave)
.get(getLeave)

module.exports = router;