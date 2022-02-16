const router = require('express').Router();
const {
  getAllBootCamps,
  getBootCampById,
  createBootCamp,
  updateBootCampById,
  deleteAllBootCamps,
  deleteOneBootCampById,
} = require('../controller/bootcamps.js');

router.route('/api/v1/bootcamps').get(getAllBootCamps);
router.route('/api/v1/bootcamps/:id').get(getBootCampById);
router.route('/api/v1/bootcamps/').post(createBootCamp);
router.route('/api/v1/bootcamps/:id').put(updateBootCampById);
router.route('/api/v1/bootcamps/').delete(deleteAllBootCamps);
router.route('/api/v1/bootcamps/:id').delete(deleteOneBootCampById);

module.exports = router;
